import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiCopy, FiCheck } from 'react-icons/fi';
import { SiOrcid } from 'react-icons/si';
import './Contact.css';

const Contact = () => {
    const [copied, setCopied] = useState(false);

    const contactMethods = [
        {
            icon: <FiMail />,
            label: 'Email',
            value: 'sahoobiswajit9090@gmail.com',
            link: 'mailto:sahoobiswajit9090@gmail.com',
            copyable: true
        },
        {
            icon: <FiPhone />,
            label: 'Phone',
            value: '+91-9692995380',
            link: 'tel:+919692995380',
            copyable: true
        },
        {
            icon: <FiMapPin />,
            label: 'Location',
            value: 'Cuttack, Odisha, India',
            link: null,
            copyable: false
        },
    ];

    const socialLinks = [
        {
            name: 'GitHub',
            icon: <FiGithub />,
            url: 'https://github.com/bsahoo8342',
            color: '#333'
        },
        {
            name: 'LinkedIn',
            icon: <FiLinkedin />,
            url: 'https://www.linkedin.com/in/biswajit8342/',
            color: '#0077B5'
        },
        {
            name: 'ORCID',
            icon: <SiOrcid />,
            url: 'https://orcid.org/0009-0004-6632-5710',
            color: '#A6CE39'
        },
    ];

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2>Get In Touch</h2>
                    <p>I'm always open to new opportunities and collaborations</p>
                </div>

                <div className="contact-content">
                    {/* Contact Methods */}
                    <motion.div
                        className="contact-methods"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {contactMethods.map((method, index) => (
                            <motion.div
                                key={index}
                                className="contact-card glass-card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                            >
                                <div className="contact-icon">{method.icon}</div>
                                <div className="contact-info">
                                    <p className="contact-label">{method.label}</p>
                                    {method.link ? (
                                        <a href={method.link} className="contact-value">
                                            {method.value}
                                        </a>
                                    ) : (
                                        <p className="contact-value">{method.value}</p>
                                    )}
                                </div>
                                {method.copyable && (
                                    <button
                                        onClick={() => handleCopy(method.value)}
                                        className="copy-btn"
                                        aria-label="Copy to clipboard"
                                    >
                                        {copied ? <FiCheck /> : <FiCopy />}
                                    </button>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        className="social-section"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <h3>Connect With Me</h3>
                        <div className="social-links-grid">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-card glass-card"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="social-icon" style={{ color: social.color }}>
                                        {social.icon}
                                    </div>
                                    <p>{social.name}</p>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
