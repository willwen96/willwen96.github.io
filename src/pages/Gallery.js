import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import photos from '../data/gallery.json';
import './Gallery.css';

const asset = name => `${process.env.PUBLIC_URL}/${name}`;
const GAP = 10;

// Packs photos into rows that fill the container width, each row close to targetHeight.
// The last row keeps targetHeight instead of being stretched.
function justify(items, containerWidth, targetHeight) {
    const sizes = [];
    let row = [];
    let ratioSum = 0;
    const flush = height => {
        row.forEach(p => sizes.push({ width: (p.width / p.height) * height, height }));
        row = [];
        ratioSum = 0;
    };
    items.forEach(p => {
        row.push(p);
        ratioSum += p.width / p.height;
        const height = (containerWidth - GAP * (row.length - 1)) / ratioSum;
        if (height <= targetHeight) flush(height);
    });
    if (row.length) flush(Math.min(targetHeight, (containerWidth - GAP * (row.length - 1)) / ratioSum));
    return sizes;
}

function Gallery() {
    const galleryRef = useRef(null);
    const [width, setWidth] = useState(0);

    useLayoutEffect(() => {
        const el = galleryRef.current;
        if (!el) return undefined;
        const observer = new ResizeObserver(([entry]) => setWidth(Math.floor(entry.contentRect.width)));
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!photos.length) return undefined;
        const lightbox = new PhotoSwipeLightbox({
            gallery: galleryRef.current,
            children: 'a',
            pswpModule: () => import('photoswipe'),
            bgOpacity: 0.94,
            showHideAnimationType: 'zoom',
        });
        lightbox.init();
        return () => lightbox.destroy();
    }, []);

    return (
        <div className="container">
            <header className="page-head">
                <p className="eyebrow">Through the lens</p>
                <h1>Gallery</h1>
            </header>

            {photos.length === 0 ? (
                <p className="card photo-empty">Photos coming soon.</p>
            ) : (
                <div className="photo-grid" ref={galleryRef}>
                    {width > 0 && justify(photos, width, width < 600 ? 160 : 260).map((size, i) => {
                        const p = photos[i];
                        return (
                            <a
                                key={p.id}
                                className="photo"
                                href={asset(p.src)}
                                data-pswp-width={p.width}
                                data-pswp-height={p.height}
                                target="_blank"
                                rel="noreferrer"
                                style={{ width: Math.floor(size.width * 100) / 100, height: size.height }}
                            >
                                <img
                                    src={asset(p.thumb)}
                                    alt={p.title || 'Photo'}
                                    width={p.width}
                                    height={p.height}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </a>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default Gallery;
