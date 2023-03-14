import './main.css'
import './home.css'
import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

// import {Link} from "react-router-dom";
function Home () {
    const navigate = useNavigate();
    const toContact = () => {
        navigate('/contact');
    };

    useEffect(() => {
        const audio = document.getElementById('audio');
        audio.volume = 0.2;
    }, []);

    return (
        <main id="Home">
            <nav id="mobile_menu">
                <a href="/" className="cur_nav">Home</a>
                <a href="/skills" className="nav">Skills</a>
                <a href="/portfolio" className="nav">Portfolio</a>
                <a href="/contact" className="nav">Contact</a>
            </nav>
            <div id="home" className="flex_row wrapper">
                <img id="img1" src={process.env.PUBLIC_URL + '/my_photo.png'} alt="Me drinking water" width="400" height="324"/>
                <aside style={{ margin: 'auto' }}>
                    <h1 id="title">Hi 👋🏻 I am Junhui (Will) Wen</h1>
                    <span id="intro">
                        I am a senior at UC San Diego double majoring in Computer Science and Applied Mathematics. I have a strong
                        interest in Software Design as well as Human Computer Interaction. Currently, I am a Tech Lead at Chinese
                        Computer Community at UC San Diego.
                        <br /><br />
                        Having four-year experience in Computer Science, I am eager to better the society as a future software
                        engineer or full stack developer with my acute sense in problem-solving, strong self-management and
                        efficiency.
                      </span>
                    <div id="icons">
                        <a href="https://www.linkedin.com/in/junhui-wen-73141421a/">
                            <img src={process.env.PUBLIC_URL + "/linkedin.svg"} alt="Link to my LinkedIn page" />
                        </a>
                        <a href="https://github.com/willwen96">
                            <img src={process.env.PUBLIC_URL + "/github.svg"} alt="Link to my github page" />
                        </a>
                        <a href="https://www.facebook.com/will.wen.313">
                            <img src={process.env.PUBLIC_URL + "/facebook.svg"} alt="Link to my Facebook page" />
                        </a>
                    </div>
                    <div id="home_button" className="flex_row" style={{ marginTop: '2em' }}>
                        <form action={process.env.PUBLIC_URL + "/Junhui_WEN_Resume.pdf"} method="get" style={{ margin: '0 2em 0 2em' }}>
                            <button>Resume</button>
                        </form>
                        <form>
                            <button onClick={() => toContact()}>Contact Me</button>
                        </form>
                    </div>
                </aside>
            </div>
            <audio autoPlay id="audio" preload="metadata">
                <source src={process.env.PUBLIC_URL + "/again.mp3"} type="audio/MP3" />
            </audio>
        </main>
    );
}

export default Home;
