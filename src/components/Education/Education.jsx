import React from 'react';
import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';
import './Education.css';

const Education = () => {
    const educationData = [
        {
            degree: 'Master of Science in Computer Science',
            institution: 'Central University of Odisha, Koraput, Odisha',
            period: '2024 - Continuing',
            icon: '🎓',
        },
        {
            degree: 'Bachelor of Science in Information Science and Telecommunication (IST)',
            institution: 'Ravenshaw University, Cuttack, Odisha',
            period: '2021 - 2024',
            icon: '🎓',
        },
        {
            degree: '+2 / Intermediate (Science)',
            institution: 'Stewart Science College, Cuttack, Odisha',
            period: '2019 - 2021',
            icon: '📚',
        },
        {
            degree: '10th / Matriculation',
            institution: 'Ravenshaw Collegiate School, Cuttack, Odisha',
            period: '2019',
            icon: '📖',
        },
    ];

    return (
        <section id="education" className="education">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2>Education & Qualification</h2>
                    <p>My academic journey</p>
                </div>

                <div className="education-timeline">
                    {educationData.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                        >
                            <div className="timeline-content card">
                                <div className="timeline-icon">{item.icon}</div>
                                <div className="timeline-text">
                                    <h3>{item.degree}</h3>
                                    <p className="institution">{item.institution}</p>
                                    <p className="period">
                                        <FiAward className="award-icon" />
                                        {item.period}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
