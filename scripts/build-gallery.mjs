// Turns full-size originals in photos/ into web-sized images for the Gallery page.
//
//   npm run gallery
//
// For every image in photos/ (not committed, see .gitignore) this writes
//   public/gallery/thumb/<name>.webp   grid thumbnail, 600px tall
//   public/gallery/full/<name>.webp    lightbox image, 2400px on the long edge
// and updates src/data/gallery.json, which the page reads.
//
// Already-processed photos are skipped unless the original is newer (or --force).
// Titles you write in gallery.json are kept between runs. To remove a photo,
// delete its entry from gallery.json and its two .webp files.

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const inputDir = path.join(root, 'photos');
const thumbDir = path.join(root, 'public/gallery/thumb');
const fullDir = path.join(root, 'public/gallery/full');
const manifestPath = path.join(root, 'src/data/gallery.json');

const THUMB_HEIGHT = 600;
const THUMB_MAX_WIDTH = 1600; // keeps panoramas from becoming huge thumbnails
const FULL_LONG_EDGE = 2400;
const THUMB_QUALITY = 75;
const FULL_QUALITY = 82;

const INPUT_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp', '.tif', '.tiff', '.heic', '.heif', '.avif']);
const force = process.argv.includes('--force');

// "IMG 2041 (1).JPG" -> "img-2041-1"
const slugify = name =>
    name
        .normalize('NFKD')
        .toLowerCase()
        .replace(/[^a-z0-9一-鿿]+/g, '-')
        .replace(/^-+|-+$/g, '') || 'photo';

const mtime = async file => (await fs.stat(file).catch(() => null))?.mtimeMs ?? 0;

async function readManifest() {
    try {
        return JSON.parse(await fs.readFile(manifestPath, 'utf8'));
    } catch {
        return [];
    }
}

async function main() {
    await fs.mkdir(inputDir, { recursive: true });
    await fs.mkdir(thumbDir, { recursive: true });
    await fs.mkdir(fullDir, { recursive: true });

    const previous = new Map((await readManifest()).map(p => [p.id, p]));
    const files = (await fs.readdir(inputDir))
        .filter(f => INPUT_EXT.has(path.extname(f).toLowerCase()))
        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

    if (files.length === 0) {
        console.log(`No photos found. Put your originals in ${path.relative(root, inputDir)}/ and run again.`);
    }

    const entries = new Map();
    let processed = 0;

    for (const file of files) {
        const id = slugify(path.parse(file).name);
        if (entries.has(id)) {
            console.warn(`! Skipping ${file}: another photo already maps to "${id}". Rename one of them.`);
            continue;
        }

        const src = path.join(inputDir, file);
        const thumbOut = path.join(thumbDir, `${id}.webp`);
        const fullOut = path.join(fullDir, `${id}.webp`);
        const old = previous.get(id);
        const upToDate =
            !force && old && (await mtime(thumbOut)) >= (await mtime(src)) && (await mtime(fullOut)) >= (await mtime(src));

        if (upToDate) {
            entries.set(id, old);
            continue;
        }

        // .rotate() applies the EXIF orientation; metadata (GPS, camera info) is not copied to the output.
        const full = await sharp(src)
            .rotate()
            .resize({ width: FULL_LONG_EDGE, height: FULL_LONG_EDGE, fit: 'inside', withoutEnlargement: true })
            .webp({ quality: FULL_QUALITY })
            .toFile(fullOut);

        const thumb = await sharp(src)
            .rotate()
            .resize({ width: THUMB_MAX_WIDTH, height: THUMB_HEIGHT, fit: 'inside', withoutEnlargement: true })
            .webp({ quality: THUMB_QUALITY })
            .toFile(thumbOut);

        entries.set(id, {
            id,
            title: old?.title ?? '',
            thumb: `gallery/thumb/${id}.webp`,
            src: `gallery/full/${id}.webp`,
            width: full.width,
            height: full.height,
        });
        processed += 1;
        console.log(`✓ ${file} → ${id}.webp  (${kb(full.size)} full, ${kb(thumb.size)} thumb)`);
    }

    // Keep photos that were processed earlier (maybe on another machine) and are still on disk.
    for (const [id, old] of previous) {
        if (!entries.has(id) && (await mtime(path.join(root, 'public', old.src)))) {
            entries.set(id, old);
        }
    }

    const manifest = [...entries.values()].sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));
    await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
    console.log(`\n${processed} processed, ${manifest.length} photos in ${path.relative(root, manifestPath)}`);
}

const kb = bytes => `${Math.round(bytes / 1024)} KB`;

main().catch(err => {
    console.error(err);
    process.exit(1);
});
