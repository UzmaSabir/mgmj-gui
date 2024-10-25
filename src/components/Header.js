// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={{ backgroundColor: '#282c34', padding: '10px' }}>
            <nav style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
                <Link to="/" style={{ color: '#61dafb', textDecoration: 'none' }}>Home</Link>
                <Link to="/memberPage" style={{ color: '#61dafb', textDecoration: 'none' }}>Member</Link>
                <Link to="/taskPage" style={{ color: '#61dafb', textDecoration: 'none' }}>Task</Link>
                <Link to="/about" style={{ color: '#61dafb', textDecoration: 'none' }}>About</Link>
            </nav>
        </header>
    );
}

export default Header;
