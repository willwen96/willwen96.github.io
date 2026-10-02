import React from 'react';
import { projects } from '../data/projects';
import './Portfolio.css';

const asset = name => `${process.env.PUBLIC_URL}/${name}`;

function ProjectMedia({ project }) {
    if (project.feature) {
        const f = project.feature;
        return (
            <a className="feature" href={f.href} target="_blank" rel="noreferrer">
                <img src={asset(f.image)} alt={f.alt} loading="lazy" />
                <div>
                    <span className="feature-label">{f.label}</span>
                    <span className="feature-title">{f.title} ↗</span>
                </div>
            </a>
        );
    }
    if (project.gallery) {
        return (
            <figure>
                <div className="gallery">
                    {project.gallery.images.map((img, i) => (
                        <img key={img} src={asset(img)} alt={`${project.title} screen ${i + 1}`} loading="lazy" />
                    ))}
                </div>
                <figcaption>{project.gallery.caption}</figcaption>
            </figure>
        );
    }
    if (project.image) {
        const img = <img className="shot" src={asset(project.image.src)} alt={project.image.alt} loading="lazy" />;
        return (
            <figure>
                {project.link ? <a href={project.link} target="_blank" rel="noreferrer">{img}</a> : img}
                {project.image.caption && <figcaption>{project.image.caption}</figcaption>}
            </figure>
        );
    }
    return null;
}

function Portfolio() {
    return (
        <div className="container">
            <header className="page-head">
                <p className="eyebrow">Selected work</p>
                <h1>Portfolio</h1>
            </header>

            <div className="projects">
                {projects.map((p, i) => (
                    <article key={p.title} className="card project">
                        <div className="project-head">
                            <span className="project-index">{String(i + 1).padStart(2, '0')}</span>
                            <div>
                                <h2>
                                    {p.title}
                                    {p.subtitle && <span className="project-sub"> · {p.subtitle}</span>}
                                </h2>
                                <p className="project-desc">{p.description}</p>
                            </div>
                            {p.link && (
                                <a className="btn btn-ghost" href={p.link} target="_blank" rel="noreferrer">
                                    Visit ↗
                                </a>
                            )}
                        </div>

                        <dl className="project-meta">
                            <div>
                                <dt>Role</dt>
                                <dd>{p.role}</dd>
                            </div>
                            <div>
                                <dt>Tools</dt>
                                <dd className="tags">
                                    {p.tools.map(t => <span key={t} className="tag">{t}</span>)}
                                </dd>
                            </div>
                        </dl>

                        <ProjectMedia project={p} />
                    </article>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
