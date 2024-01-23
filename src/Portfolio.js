import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

import './portfolio.css';
import './Effect';

function Portfolio() {
    const location = useLocation();

    useEffect(() => {
        // Track the page view when the component is mounted
        ReactGA.pageview(location.pathname);
    }, [location.pathname]);

    return (
        <main id="Portfolio">
            <nav id="mobile_menu">
                <a href="/" className="nav">Home</a>
                <a href="/skills" className="nav">Skills</a>
                <a href="/portfolio" className="cur_nav">Portfolio</a>
                <a href="/contact" className="nav">Contact</a>
            </nav>
            <div id="main_page" className="wrapper">
                <h1>My Works</h1>
                <section className="work">
                    <details open>
                        <summary><strong>CyberArch Warehouse Intern</strong></summary>
                        <em>Provide a sustainable approach to preserve knowledge of endangered cultural heritage sites
                            via virtual and augmented reality</em><br/><br/>
                        {/* <img src={process.env.PUBLIC_URL + "/logo.svg"} alt="Goal Tritons Logo" style="position: relative; display: inline-block; margin-bottom: 1rem"><br> */}
                        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", width: "fit-content"}}>
                            <p style={{width: "fit-content"}}><b>Role:</b>Plugins Developer</p>
                            <p><b>Tools:</b> Unreal Engine 5, C++, React, Node.js</p>
                        </div>
                        <section className={"flex_row"} style={{display: 'flex'}}>
                            <img style={{flex: 1, margin: "auto 50px"}} src={process.env.PUBLIC_URL + "/QiDemo.jpeg"} alt="Demo Day Report on UC San Diego Today"/>
                            <a style={{flex: 6, alignSelf: 'center', color: '#0077BE'}} href="https://today.ucsd.edu/story/students-showcase-their-work-in-augmented-and-virtual-reality-at-the-qualcomm-institute" target="_blank">
                                <p className={'report'}>
                                    UC San Diego Today: Students Showcase Their Work in Augmented and Virtual Reality
                                    at the Qualcomm Institute
                                </p>
                            </a>
                        </section>
                    </details>
                </section>
                <section className="work">
                    <details open>
                        <summary><strong>Goal Tritons</strong></summary>
                        <em>Highly accessible & integrated informational website for career-finding among UCSD students</em><br/><br/>
                        {/* <img src={process.env.PUBLIC_URL + "/logo.svg"} alt="Goal Tritons Logo" style="position: relative; display: inline-block; margin-bottom: 1rem"><br> */}
                        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", width: "fit-content"}}>
                            <p style={{width: "fit-content"}}><b>Role: </b> Tech Lead</p>
                            <p><b>Tools:</b> Vue, AWS, SpringBoot, Node.js</p>
                        </div>
                        <a href="https://dynamic-crisp-4efd82.netlify.app/" target="_blank"><img src={process.env.PUBLIC_URL + "/GT_home.svg"} alt="A computer screen showing Goal Tritons' Home Page" width="680px" height="510px" style={{marginLeft: "50px"}}/></a>
                    </details>
                </section>
                <section className="work">
                    <details>
                        <summary><strong>Birds of a Feather</strong></summary>
                        <em>Concise Android App for connecting students with others who take the same courses as them</em><br/><br/>
                        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", width: "fit-content"}}>
                            <p style={{width: "fit-content"}}><b>Role:</b> Co-leader </p>
                            <p><b>Tools:</b> Java, Android Studio, Robolectric</p>
                        </div>
                        <figure>
                            <img src={process.env.PUBLIC_URL + "/BOF.png"} alt="Birds of a Feather Wireframe" />
                            <figcaption><i>Fig. 1 - One of the wireframes we drew</i></figcaption>
                        </figure>
                    </details>
                </section>
            </div>
        </main>
    );
}

export default Portfolio;
