import React from 'react';

const Header = () => {
    return (
        <header>
            <nav><h1>nohemi moser</h1>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <Link to="/">about me</Link>
                </li>
                <li className="nav-item">
                    <Link to="/portfolio">portfolio</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact">contact</Link>
                </li>
                <li className="nav-item">
                    <Link to="/resume">resume</Link>
                </li>
            </ul>
            </nav>
        </header>
    );
};

export default Header;