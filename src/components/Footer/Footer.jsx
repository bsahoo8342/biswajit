import React from 'react';
import { Link } from 'react-scroll';
import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiOrcid } from 'react-icons/si';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const navLinks = [
        { name: 'Home', to: 'hero' },
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Education', to: 'education' },
        { name: 'Projects', to: 'projects' },
        { name: 'Contact', to: 'contact' }
    ];

    const socialLinks = [
        { icon: <FiGithub />, url: 'https://github.com/bsahoo8342', label: 'GitHub' },
        { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/biswajit8342/', label: 'LinkedIn' },
        { icon: <SiOrcid />, url: 'https://orcid.org/0009-0004-6632-5710', label: 'ORCID' },
        { icon: <FiMail />, url: 'mailto:sahoobiswajit9090@gmail.com', label: 'Email' },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* Footer Top */}
                    <div className="footer-top">
                        <div className="footer-logo">
                            <span className="logo-text">BS</span>
                            <span className="logo-dot">.</span>
                        </div>
                        <p className="footer-tagline">
                            Building innovative solutions through code and research
                        </p>
                    </div>

                    {/* Footer Links */}
                    <div className="footer-links">
                        <div className="footer-section">
                            <h4>Quick Links</h4>
                            <ul>
                                {navLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            to={link.to}
                                            smooth={true}
                                            duration={500}
                                            offset={-80}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="footer-section">
                            <h4>Connect</h4>
                            <div className="footer-social">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className="footer-social-link"
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="footer-bottom">
                        <p>&copy; {currentYear} Biswajit Sahoo. All rights reserved.</p>
                    </div>
                </div>

                {/* Back to Top Button */}
                <button
                    className="back-to-top"
                    onClick={scrollToTop}
                    aria-label="Back to top"
                >
                    <FiArrowUp />
                </button>
            </div>
        </footer>
    );
};

export default Footer;
