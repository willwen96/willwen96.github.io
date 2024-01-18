import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

import './skills.css';

function Skills() {
    const location = useLocation();

    useEffect(() => {
        // Track the page view when the component is mounted
        ReactGA.pageview(location.pathname);
    }, [location.pathname]);

    return (
        <main id="Skills">
            <nav id="mobile_menu">
                <a href="/" className="nav">Home</a>
                <a href="/skills" className="cur_nav">Skills</a>
                <a href="/portfolio" className="nav">Portfolio</a>
                <a href="/contact" className="nav">Contact</a>
            </nav>
            <div id="main_page" className="wrapper">
                <h1>My Skills</h1>
                <h2>Front-End</h2>
                <div className="grid">
                    <section>
                        <img src={process.env.PUBLIC_URL + "/vue.svg"} alt="vue icon" />
                        <p> Vue </p> <br /> <p> 2 Years <br /> 1 Project </p>
                    </section>
                    <section>
                        <img src={process.env.PUBLIC_URL + "/react.svg"} alt="React icon" />
                        <p> React </p> <br /> <p> 1 Year <br /> 2 Projects </p>
                    </section>
                    <section>
                        <img src={process.env.PUBLIC_URL + "/node.svg"} alt="Node.js icon" />
                        <p> Node.js </p> <br /> <p> 2 Years <br /> 2 Projects </p>
                    </section>
                    <section>
                        <img src={process.env.PUBLIC_URL + "/javascript.svg"} alt="Javascript icon" />
                        <p> JavaScript </p> <br /> <p> 2 Years <br /> 3 Projects </p>
                    </section>
                    <section className="last_row">
                        <img src={process.env.PUBLIC_URL + "/html.svg"} alt="HTML icon" />
                        <p> HTML </p> <br /> <p> 3 Years <br /> 3 Projects </p>
                    </section>
                </div>
                <hr />
                <h2>Back-End</h2>
                <div className="grid">
                    <section>
                        <img src={process.env.PUBLIC_URL + "/java.svg"} alt="Java icon" />
                        <p> Java </p> <br /> <p> 5 Years <br /> Projects: JDBC, Web, Android, GUI</p>
                    </section>
                    <section>
                        <img src={process.env.PUBLIC_URL + "/python.svg"} alt="Python icon" />
                        <p> Python </p> <br /> <p> 5 Years <br /> Projects: ML, TensorFlow, AI</p>
                    </section>
                    <section>
                        <img src={process.env.PUBLIC_URL + "/cpp_logo.svg"} alt="C/C++ icon" />
                        <p> C/C++ </p> <br /> <p> 3 Years <br /> Projects: Algorithms, File Compression</p>
                    </section>
                    <section>
                        <img src={process.env.PUBLIC_URL + "/spring.svg"} alt="Spring icon" />
                        <p> Spring Boot </p> <br /> <p> 2 Years <br /> 2 Projects</p>
                    </section>
                    <section className="last_row">
                        <img src={process.env.PUBLIC_URL + "/mysql.svg"} alt="MySQL icon" />
                        <p> MySQL </p> <br /> <p> 2 Years <br /> 3 Projects </p>
                    </section>
                </div>
                <hr />
                <h2>Technologies</h2>
                <div className="grid">
                    <section>
                        <img src={process.env.PUBLIC_URL + "/android-studio.svg"} alt="Android Studio icon" loading="lazy"/>
                        <p> Android Studio</p> <br /> <p>1 Year <br /> 1 Project</p>
                    </section>
                    <section>
                        <img src={process.env.PUBLIC_URL + "/aws.svg"} alt="AWS icon" loading="lazy"/>
                        <p> AWS </p> <br /> <p> 2 Years <br /> Services: S3, Route 53</p>
                    </section>
                    <section>
                        <img src={process.env.PUBLIC_URL + "/linux.svg"} alt="Linux icon" loading="lazy"/>
                        <p> Linux </p> <br /> <p> 3 Years <br /> sudo rm -rf /*</p>
                    </section>
                    <section>
                        <img src={process.env.PUBLIC_URL + "/github.svg"} alt="Github icon" width="70px" height="70px" loading="lazy"/>
                        <p> Github </p> <br /> <p> 3 Years <br /> ID: <a href="https://github.com/willwen96" style={{color: '#0077BE'}}>willwen96</a></p>
                    </section>
                    <section className="last_row">
                        <img src={process.env.PUBLIC_URL + "/zenhub.svg"} alt="Zenhub icon" loading="lazy"/>
                        <p> Zenhub </p> <br /><p> 1 Year <br /> 1 Project</p>
                    </section>
                </div>
                <hr />
                <div>
                    <h2>Rubik's Cubes</h2>
                    <h3 style={{ textAlign: 'center' }}>My Records</h3>
                    <table>
                        <colgroup>
                            <col />
                            <col span="3" />
                            <col span="2" />
                            <col span="3" />
                        </colgroup>
                        <thead>
                        <tr>
                            <th>Event</th>
                            <th>
                                <abbr title="National Rank">NR</abbr>
                            </th>
                            <th>
                                <abbr title="Continental Rank">CR</abbr>
                            </th>
                            <th>
                                <abbr title="World Rank">WR</abbr>
                            </th>
                            <th>Single</th>
                            <th>Average</th>
                            <th>
                                <abbr title="World Rank">WR</abbr>
                            </th>
                            <th>
                                <abbr title="Continental Rank">CR</abbr>
                            </th>
                            <th>
                                <abbr title="National Rank">NR</abbr>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="odd_row">
                            <td className="event">3x3x3 Cube</td>
                            <td>7489</td>
                            <td>20246</td>
                            <td>53751</td>
                            <td>17.54</td>
                            <td>24.32</td>
                            <td>67849</td>
                            <td>25103</td>
                            <td>9156</td>
                        </tr>
                        <tr className="even_row">
                            <td>2x2x2 Cube</td>
                            <td>5645</td>
                            <td>16392</td>
                            <td>52213</td>
                            <td>5.74</td>
                            <td>8.18</td>
                            <td>53133</td>
                            <td>16924</td>
                            <td>5913</td>
                        </tr>
                        <tr className="odd_row">
                            <td>Pyraminx</td>
                            <td>3939</td>
                            <td>10890</td>
                            <td>38490</td>
                            <td>9.96</td>
                            <td>12.05</td>
                            <td>27573</td>
                            <td>8033</td>
                            <td>3044</td>
                        </tr>
                        </tbody>
                    </table>
                    <div style={{ textAlignLast: 'center' }}>
                        <h3>My best record for 3*3*3:</h3>
                        <video
                            src={process.env.PUBLIC_URL + "/cube.mp4"}
                            muted
                            controls
                            preload="metadata"
                            width="400px"
                            style={{ maxWidth: '80%' }}
                        ></video>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Skills;
