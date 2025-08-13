import React, { useState } from 'react';
import "./Header.css";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div id='Header' className={menuOpen ? 'menu-open' : ''}>
            <div className="container">
                {/* Logo */}
                <div id="Header-logo">
                    <h1><a href="/">CHOR-CHINOR</a></h1>
                </div>

                {/* Navigation */}
                <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    <li><a href="#Home-Header">Bosh Sahifa</a></li>
                    <li><a href="#MainProducts">Katalog</a></li>
                    <li><a href="#Furniro">Biz haqimizda</a></li>
                </ul>

                {/* Contact */}
                <div id="Header-contact">
                    <p>
                        Bog'lanish uchun: <br />
                        <a href="tel:998918208446">+998 91 820-84-46</a>
                    </p>
                </div>

                {/* Burger Button */}
                <div
                    className={`burger ${menuOpen ? 'toggle' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
};

export default Header;
