import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Judicial Case Management System (JCMS)',
            description: 'The Judicial Case Management System enables electronic filing of cases (E-Cases) before High Courts. This system promotes paperless filing and creates time and cost-saving efficiencies by adopting technological solutions for case filing in various courts in India.',
            technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
            links: {
                github: null,
                demo: null
            }
        },
        {
            title: 'Notes Share',
            description: 'A public platform dedicated to sharing educational notes, providing students with free access to essential study materials. Users can download notes for various subjects and request specific notes for their semester examinations.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
            links: {
                github: 'https://github.com/bsahoo8342/notesshare',
                demo: null
            }
        },
        {
            title: 'Ravenshaw University Website Redesign',
            description: 'Redesigned and developed a user-friendly, responsive, and visually appealing website for Ravenshaw University to enhance online presence and improve user engagement. Serves as a comprehensive platform for students, faculty, and applicants.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
            links: {
                github: 'https://github.com/bsahoo8342/ravenshawuniversity',
                demo: null
            }
        },
        {
            title: 'Online Railway Reservation System (ORRS)',
            description: 'A real-time ticket booking platform designed to streamline the process of reserving train tickets. Allows users to check train schedules, availability, and make secure reservations efficiently from anywhere at any time.',
            technologies: ['Java', 'MySQL', 'Swing', 'JDBC'],
            links: {
                github: null,
                demo: null
            }
        },
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2>Featured Projects</h2>
                    <p>Showcasing my work and contributions</p>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                        >
                            <div className="project-header">
                                <h3>{project.title}</h3>
                                <div className="project-links">
                                    {project.links.github && (
                                        <a
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link"
                                            aria-label="View GitHub Repository"
                                        >
                                            <FiGithub />
                                        </a>
                                    )}
                                    {project.links.demo && (
                                        <a
                                            href={project.links.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link"
                                            aria-label="View Live Demo"
                                        >
                                            <FiExternalLink />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <p className="project-description">{project.description}</p>

                            <div className="project-tech">
                                {project.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="tech-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
