import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiPhone, FiCalendar } from 'react-icons/fi';
import './About.css';

const About = () => {
    const personalInfo = [
        { icon: <FiCalendar />, label: 'Age', value: '22' },
        { icon: <FiMapPin />, label: 'Location', value: 'Cuttack, Odisha, India' },
        { icon: <FiMail />, label: 'Email', value: 'sahoobiswajit9090@gmail.com' },
        { icon: <FiPhone />, label: 'Phone', value: '+91-9692995380' },
    ];

    const interests = ['Playing Chess', 'Listening to Music', 'Coding'];

    return (
        <section id="about" className="about">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2>About Me</h2>
                    <p>Get to know me better</p>
                </div>

                <div className="about-content">
                    {/* About Text */}
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="gradient-text">
                            Hello! I'm Biswajit Sahoo
                        </h3>
                        <p>
                            A dedicated Computer Science postgraduate student at Central University of Odisha,
                            with a UGC NET qualification. I possess strong programming skills in C, Java, PHP,
                            R, and MATLAB, along with specialized knowledge in blockchain development using
                            Solidity and smart contracts.
                        </p>
                        <p>
                            My research interests focus on emerging technologies including blockchain, Internet
                            of Things, artificial intelligence, and their applications in supply chain systems.
                            I am passionate about leveraging my technical expertise and research-driven approach
                            to contribute to innovative solutions and academic advancements.
                        </p>
                        <p>
                            My goal is to advance my career in academia and research, focusing on emerging
                            technologies to develop innovative and secure systems, while also contributing to
                            teaching and mentoring future computer scientists.
                        </p>

                        {/* Interests */}
                        <div className="interests">
                            <h4>Interests</h4>
                            <div className="interest-tags">
                                {interests.map((interest, index) => (
                                    <span key={index} className="interest-tag">
                                        {interest}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Personal Info Cards */}
                    <motion.div
                        className="personal-info"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {personalInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                className="info-card glass-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                            >
                                <div className="info-icon">{info.icon}</div>
                                <div className="info-content">
                                    <p className="info-label">{info.label}</p>
                                    <p className="info-value">{info.value}</p>
                                </div>
                            </motion.div>
                        ))}

                        {/* ORCID Card */}
                        <motion.a
                            href="https://orcid.org/0009-0004-6632-5710"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="info-card glass-card orcid-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.4 }}
                        >
                            <div className="info-icon">🆔</div>
                            <div className="info-content">
                                <p className="info-label">ORCID</p>
                                <p className="info-value orcid-value">View Profile</p>
                            </div>
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
