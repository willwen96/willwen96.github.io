import React from "react";

import './contact.css';
import './Effect';

function Contact() {
    return (
        <main id="Contact">
            <nav id="mobile_menu">
                <a href="/" className="nav">Home</a>
                <a href="/skills" className="nav">Skills</a>
                <a href="/portfolio" className="nav">Portfolio</a>
                <a href="/contact" className="cur_nav">Contact</a>
            </nav>
            <div className="wrapper grid">
                <picture className="row_inline">
                    <source
                        media="(max-width:991px)"
                        srcSet={process.env.PUBLIC_URL + "/contact_me_small2.png"}
                        sizes="300px"
                    />
                    <img src={process.env.PUBLIC_URL + "/contact_me.png"} alt="Contact" style={{ width: "100%" }} />
                </picture>
                <section id="contact_form">
                    <form action="form-handler.php" method="post" id="my_form"></form>
                    <h1 style={{ margin: "20px 0 10px 7px", color: "#0077BE" }}>Let's Chat</h1>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor="name" form="my_form">
                                        Name: <span style={{ color: "darkred" }}></span>
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="text" name="name" id="name" form="my_form" required />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="email" form="my_form">
                                        Email: <span style={{ color: "darkred" }}></span>
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="email" name="email" id="email" form="my_form" required />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="msg" form="my_form">
                                        Message: <span style={{ color: "darkred" }}>*</span>
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <textarea name="message" id="message" cols="48" rows="10" form="my_form" style={{ resize: "none" }}></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button type="submit" form="my_form"> {" "} SEND{" "} </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </main>
    );
}

export default Contact;