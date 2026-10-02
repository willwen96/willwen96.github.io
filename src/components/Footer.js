import React from 'react';

function Footer() {
    return (
        <footer className="site-footer">
            <div className="container footer-inner">
                <span>&copy; {new Date().getFullYear()} Junhui Wen</span>
                <span className="footer-note">Made with React</span>
            </div>
        </footer>
    );
}

export default Footer;
