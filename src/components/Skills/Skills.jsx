import React from 'react';
import { motion } from 'framer-motion';
import {
    SiC, SiCplusplus, SiPhp, SiR, SiPython, SiSolidity,
    SiJavascript, SiHtml5, SiCss3, SiReact, SiNodedotjs,
    SiGit, SiMysql
} from 'react-icons/si';
import { FaBrain, FaNetworkWired, FaDatabase, FaCube } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Programming Languages',
            skills: [
                { name: 'C', icon: <SiC />, color: '#A8B9CC' },
                { name: 'Java', icon: <FaCube />, color: '#007396' },
                { name: 'Python', icon: <SiPython />, color: '#3776AB' },
                { name: 'PHP', icon: <SiPhp />, color: '#777BB4' },
                { name: 'R', icon: <SiR />, color: '#276DC3' },
                { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
                { name: 'Solidity', icon: <SiSolidity />, color: '#363636' },
            ]
        },
        {
            title: 'Web Technologies',
            skills: [
                { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26' },
                { name: 'CSS3', icon: <SiCss3 />, color: '#1572B6' },
                { name: 'React', icon: <SiReact />, color: '#61DAFB' },
                { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
                { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
                { name: 'Git', icon: <SiGit />, color: '#F05032' },
            ]
        },
        {
            title: 'Research Areas',
            skills: [
                { name: 'Blockchain', icon: <FaDatabase />, color: '#7c3aed' },
                { name: 'IoT', icon: <FaNetworkWired />, color: '#a78bfa' },
                { name: 'AI', icon: <FaBrain />, color: '#667eea' },
            ]
        }
    ];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2>Skills & Expertise</h2>
                    <p>Technologies and research areas I work with</p>
                </div>

                <div className="skills-content">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            className="skill-category"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: categoryIndex * 0.2, duration: 0.5 }}
                        >
                            <h3>{category.title}</h3>
                            <div className="skills-grid">
                                {category.skills.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        className="skill-card glass-card"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05, duration: 0.3 }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <div className="skill-icon" style={{ color: skill.color }}>
                                            {skill.icon}
                                        </div>
                                        <p className="skill-name">{skill.name}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
