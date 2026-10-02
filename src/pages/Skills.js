import React from 'react';
import { skillGroups, cubeRecords } from '../data/skills';
import './Skills.css';

const asset = name => `${process.env.PUBLIC_URL}/${name}`;

function SkillCard({ item }) {
    return (
        <li className="card skill-card">
            <img src={asset(item.icon)} alt="" loading="lazy" />
            <div>
                <h3>{item.name}</h3>
                <p className="meta">{item.years}</p>
                <p className="meta">
                    {item.href ? (
                        <a href={item.href} target="_blank" rel="noreferrer">{item.detail}</a>
                    ) : (
                        item.detail
                    )}
                </p>
            </div>
        </li>
    );
}

function Skills() {
    return (
        <div className="container">
            <header className="page-head">
                <p className="eyebrow">What I work with</p>
                <h1>Skills</h1>
            </header>

            {skillGroups.map(group => (
                <section key={group.title} className="block">
                    <h2 className="block-title">{group.title}</h2>
                    <ul className="skill-grid">
                        {group.items.map(item => (
                            <SkillCard key={item.name} item={item} />
                        ))}
                    </ul>
                </section>
            ))}

            <section className="block">
                <h2 className="block-title">Rubik's Cubes</h2>
                <p className="block-sub">My competition records and best solve.</p>

                <div className="cube-layout">
                    <div className="card table-card">
                        <table className="records">
                            <thead>
                                <tr>
                                    <th rowSpan="2">Event</th>
                                    <th colSpan="4">Single</th>
                                    <th colSpan="4">Average</th>
                                </tr>
                                <tr>
                                    <th>Time</th>
                                    <th><abbr title="National Rank">NR</abbr></th>
                                    <th><abbr title="Continental Rank">CR</abbr></th>
                                    <th><abbr title="World Rank">WR</abbr></th>
                                    <th>Time</th>
                                    <th><abbr title="National Rank">NR</abbr></th>
                                    <th><abbr title="Continental Rank">CR</abbr></th>
                                    <th><abbr title="World Rank">WR</abbr></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cubeRecords.map(r => (
                                    <tr key={r.event}>
                                        <td className="event">{r.event}</td>
                                        <td className="time">{r.single}</td>
                                        <td>{r.singleRank.nr.toLocaleString()}</td>
                                        <td>{r.singleRank.cr.toLocaleString()}</td>
                                        <td>{r.singleRank.wr.toLocaleString()}</td>
                                        <td className="time">{r.average}</td>
                                        <td>{r.averageRank.nr.toLocaleString()}</td>
                                        <td>{r.averageRank.cr.toLocaleString()}</td>
                                        <td>{r.averageRank.wr.toLocaleString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <figure className="card video-card">
                        <video src={asset('cube.mp4')} muted controls preload="metadata" />
                        <figcaption>My best 3×3×3 solve</figcaption>
                    </figure>
                </div>
            </section>
        </div>
    );
}

export default Skills;
