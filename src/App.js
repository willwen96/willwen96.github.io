import { BrowserRouter, Routes, Route } from "react-router-dom";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import ExtraCredit from "./ExtraCredit";

function App() {
    useEffect(() => {
        const initMobileMenu = () => {
            const menu = document.getElementById("mobile_menu");
            const header = document.querySelector("header");
            const bg = document.querySelector("body");

            let icon = document.getElementById("icon");
            let top_line = document.getElementById("top-line");
            let mid_line = document.getElementById("mid-line");
            let bot_line = document.getElementById("bot-line");

            let count = 0;

            icon.addEventListener("click", () => {
                setTimeout(() => {
                    if (count % 2 === 0) {
                        top_line.style.top = "3px";
                        top_line.style.left = "22px";
                        top_line.style.transform = "rotate(-135deg)";
                        top_line.style.backgroundColor = "black";

                        mid_line.style.transform = "rotate(-45deg)";
                        mid_line.style.backgroundColor = "black";

                        bot_line.style.top = "13px";
                        bot_line.style.left = "32px";
                        bot_line.style.transform = "rotate(-135deg)";
                        bot_line.style.backgroundColor = "black";

                        menu.style.visibility = "visible";
                        // bg.style.backgroundColor = "#87CEFA";
                        bg.style.overflow = "hidden";
                        header.style.background = "transparent";
                        // content.style.display = "none";
                        count++;
                    } else {
                        top_line.style.top = "0px";
                        top_line.style.left = "20px";
                        top_line.style.transform = "rotate(-0)";
                        top_line.style.backgroundColor = "var(--theme-color)";

                        mid_line.style.transform = "rotate(0)";
                        mid_line.style.backgroundColor = "var(--theme-color)";

                        bot_line.style.top = "16px";
                        bot_line.style.left = "34px";
                        bot_line.style.transform = "rotate(0)";
                        bot_line.style.backgroundColor = "var(--theme-color)";

                        menu.style.visibility = "hidden";
                        bg.style.backgroundColor = "var(--background-color)";
                        bg.style.overflow = "auto";
                        header.style.background = "white";
                        // content.style.display = "flex";
                        count++;
                    }
                }, 0);
            }, );
        };

        initMobileMenu();
    }, []);

    return (
        <div>
            <BrowserRouter>
                <Header style={{zIndex: "10"}} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/extracredit" element={<ExtraCredit />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
