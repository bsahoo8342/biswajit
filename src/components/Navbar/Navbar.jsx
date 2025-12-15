import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../../contexts/ThemeContext';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', to: 'hero' },
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Education', to: 'education' },
        { name: 'Projects', to: 'projects' },
        { name: 'Achievements', to: 'achievements' },
        { name: 'Contact', to: 'contact' }
    ];

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="navbar-content">
                    {/* Logo */}
                    <Link
                        to="hero"
                        smooth={true}
                        duration={500}
                        className="navbar-logo"
                        onClick={closeMenu}
                    >
                        <span className="logo-text">BS</span>
                        <span className="logo-dot">.</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="nav-links desktop-nav">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    activeClass="active"
                                    offset={-80}
                                    className="nav-link"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Theme Toggle & Hamburger */}
                    <div className="navbar-actions">
                        <button
                            className="theme-toggle"
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? <FiSun /> : <FiMoon />}
                        </button>

                        <button
                            className="hamburger"
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <FiX /> : <FiMenu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
                    <ul className="nav-links">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    activeClass="active"
                                    offset={-80}
                                    className="nav-link"
                                    onClick={closeMenu}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
