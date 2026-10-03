import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Gallery from './pages/Gallery';

ReactGA.initialize('G-153GKETWX1');

// Track page views and reset scroll on every route change
function RouteEffects() {
    const { pathname } = useLocation();
    useEffect(() => {
        ReactGA.pageview(pathname);
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

function App() {
    return (
        <BrowserRouter>
            <RouteEffects />
            <div className="page">
                <Header />
                <main className="page-main">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="*" element={<Home />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
