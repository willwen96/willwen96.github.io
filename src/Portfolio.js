import React from 'react';

import './portfolio.css';
import './Effect';

function Portfolio() {
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
                        <summary><strong>Goal Tritons</strong></summary>
                        <em>Highly accessible & integrated informational website for career-finding among UCSD students</em><br/><br/>
                        {/* <img src={process.env.PUBLIC_URL + "/logo.svg"} alt="Goal Tritons Logo" style="position: relative; display: inline-block; margin-bottom: 1rem"><br> */}
                        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", width: "fit-content"}}>
                            <p style={{width: "fit-content"}}><b>Role:</b> Tech Lead</p>
                            <p><b>Tools:</b> Vue, AWS, SpringBoot, Node.js</p>
                        </div>
                        <a href="//www.goaltritonscareer.com" target="_blank"><img src={process.env.PUBLIC_URL + "/GT_home.svg"} alt="A computer screen showing Goal Tritons' Home Page" width="680px" height="510px" style={{marginLeft: "50px"}}/></a>
                    </details>
                </section>
                <section className="work">
                    <details open>
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
