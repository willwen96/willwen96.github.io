import React, { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

const links = [
    { to: '/', label: 'Home' },
    { to: '/skills', label: 'Skills' },
    { to: '/portfolio', label: 'Portfolio' },
];

function Header() {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    // Close the mobile menu whenever the route changes
    useEffect(() => setOpen(false), [location.pathname]);

    return (
        <header className="site-header">
            <div className="container header-inner">
                <Link to="/" className="brand">
                    <span className="brand-dot" aria-hidden="true" />
                    Junhui Wen
                </Link>

                <button
                    className={`menu-toggle${open ? ' is-open' : ''}`}
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    aria-expanded={open}
                    onClick={() => setOpen(o => !o)}
                >
                    <span />
                    <span />
                </button>

                <nav className={`site-nav${open ? ' is-open' : ''}`}>
                    {links.map(l => (
                        <NavLink key={l.to} to={l.to} end className="nav-link">
                            {l.label}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    );
}

export default Header;
