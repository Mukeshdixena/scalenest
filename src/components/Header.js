import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">ScaleNest</div>
                <nav className="nav">
                    <a href="#about">About Us</a>
                    <a href="#services">Services</a>
                    <a href="#industries">Industries</a>
                    <a href="#solutions">Solutions</a>
                    <a href="#careers">Careers</a>
                    <a href="#contact">Contact Us</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
