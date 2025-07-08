// Header.js
import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="header-container">
                <div className="logo">ScaleNest</div>

                <button
                    className={`hamburger ${menuOpen ? 'open' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                <nav className={`nav ${menuOpen ? 'active' : ''}`}>
                    <a href="#about" onClick={closeMenu}>About Us</a>
                    <a href="#services" onClick={closeMenu}>Services</a>
                    <a href="#industries" onClick={closeMenu}>Industries</a>
                    <a href="#solutions" onClick={closeMenu}>Solutions</a>
                    <a href="#careers" onClick={closeMenu}>Careers</a>
                    <a href="#contact" onClick={closeMenu}>Contact</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
