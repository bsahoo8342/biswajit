import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowDown } from 'react-icons/fi';
import { SiOrcid } from 'react-icons/si';
import { Link } from 'react-scroll';
import profileImg from '../../assets/profile.jpg';
import resumePDF from '../../assets/Biswajit.pdf';
import './Hero.css';

const Hero = () => {
    const roles = ["Programmer", "Researcher", "Web Developer"];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <section id="hero" className="hero">
            <div className="hero-background">
                <div className="gradient-blob blob-1"></div>
                <div className="gradient-blob blob-2"></div>
                <div className="gradient-blob blob-3"></div>
            </div>

            <div className="container">
                <motion.div
                    className="hero-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Profile Image */}
                    <motion.div
                        className="hero-image-wrapper"
                        variants={itemVariants}
                    >
                        <div className="image-container animate-float">
                            <img src={profileImg} alt="Biswajit Sahoo" className="hero-image" />
                            <div className="image-glow"></div>
                        </div>
                    </motion.div>

                    {/* Hero Text */}
                    <motion.div className="hero-text" variants={itemVariants}>
                        <h1 className="hero-title">
                            Hi, I'm <span className="gradient-text">Biswajit Sahoo</span>
                        </h1>
                    </motion.div>

                    <motion.div className="hero-subtitle" variants={itemVariants}>
                        <h2>
                            {roles.map((role, index) => (
                                <React.Fragment key={role}>
                                    <span className="role">{role}</span>
                                    {index < roles.length - 1 && <span className="separator"> | </span>}
                                </React.Fragment>
                            ))}
                        </h2>
                    </motion.div>

                    <motion.p className="hero-description" variants={itemVariants}>
                        UGC-NET qualified Computer Science postgraduate specializing in blockchain,
                        IoT, and AI. Passionate about building innovative solutions and advancing
                        research in emerging technologies.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div className="hero-cta" variants={itemVariants}>
                        <a
                            href={resumePDF}
                            className="btn btn-primary"
                            download="Biswajit_Sahoo_Resume.pdf"
                        >
                            <FiDownload /> Download Resume
                        </a>
                        <a
                            href="mailto:sahoobiswajit9090@gmail.com"
                            className="btn btn-outline"
                        >
                            <FiMail /> Hire Me
                        </a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div className="hero-social" variants={itemVariants}>
                        <a
                            href="https://github.com/bsahoo8342"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="GitHub"
                        >
                            <FiGithub />
                        </a>
                        <a
                            href="https://linkedin.com/in/biswajit-sahoo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="LinkedIn"
                        >
                            <FiLinkedin />
                        </a>
                        <a
                            href="https://orcid.org/0009-0004-6632-5710"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="ORCID"
                        >
                            <SiOrcid />
                        </a>
                        <a
                            href="mailto:sahoobiswajit9090@gmail.com"
                            className="social-link"
                            aria-label="Email"
                        >
                            <FiMail />
                        </a>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        className="scroll-indicator"
                        variants={itemVariants}
                    >
                        <Link to="about" smooth={true} duration={500} offset={-80}>
                            <div className="scroll-mouse">
                                <div className="scroll-wheel"></div>
                            </div>
                            <p>Scroll Down</p>
                            <FiArrowDown className="arrow-down animate-pulse" />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
