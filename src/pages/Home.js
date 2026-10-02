import React from 'react';
import './Home.css';

const asset = name => `${process.env.PUBLIC_URL}/${name}`;

const socials = [
    { href: 'https://www.linkedin.com/in/junhui-wen-73141421a/', icon: 'linkedin.svg', label: 'LinkedIn' },
    { href: 'https://github.com/willwen96', icon: 'github.svg', label: 'GitHub' },
    { href: 'https://www.facebook.com/will.wen.313', icon: 'facebook.svg', label: 'Facebook' },
];

function Home() {
    return (
        <section className="container hero">
            <div className="hero-media">
                <div className="hero-blob" aria-hidden="true" />
                <img
                    src={asset('art_profile.png')}
                    alt="Collage portrait of Junhui Wen"
                    width="400"
                    height="360"
                />
            </div>

            <div className="hero-text">
                <p className="eyebrow">Hi there 👋</p>
                <h1>
                    I'm Junhui <span className="soft">(Will)</span> Wen
                </h1>
                <p className="lead">
                    As a recent graduate from UC San Diego with B.S. degrees in Computer Science and Applied
                    Mathematics, I am passionate about Software Development and have a keen interest in AI/ML.
                    During my time at the university, I served as a Tech Lead for the Chinese Computer Community,
                    honing my leadership and technical skills.
                </p>
                <p className="lead">
                    Having four-year experience in Computer Science, I am eager to leverage my academic background
                    and practical experience to contribute meaningfully to the field of software development and
                    artificial intelligence.
                </p>

                <div className="hero-actions">
                    <a className="btn btn-primary" href={asset('Junhui_WEN_Resume.pdf')} target="_blank" rel="noreferrer">
                        View Resume
                    </a>
                    <div className="socials">
                        {socials.map(s => (
                            <a key={s.label} className="icon-btn" href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} title={s.label}>
                                <img src={asset(s.icon)} alt="" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
