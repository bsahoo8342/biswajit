import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiStar } from 'react-icons/fi';
import './Achievements.css';

const Achievements = () => {
    const achievements = [
        {
            title: 'UGC-NET 2024 DEC Qualified',
            description: 'Successfully qualified for PhD & Assistant Professor eligibility through the prestigious UGC National Eligibility Test',
            icon: <FiAward />,
            color: '#FFD700'
        }
    ];

    return (
        <section id="achievements" className="achievements">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2>Achievements</h2>
                    <p>Milestones in my academic journey</p>
                </div>

                <div className="achievements-grid">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            className="achievement-card glass-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                        >
                            <div className="achievement-icon-wrapper">
                                <div
                                    className="achievement-icon"
                                    style={{ color: achievement.color }}
                                >
                                    {achievement.icon}
                                </div>
                                <div className="icon-glow" style={{ background: achievement.color }}></div>
                            </div>
                            <h3>{achievement.title}</h3>
                            <p>{achievement.description}</p>
                            <div className="achievement-badge">
                                <FiStar /> Featured Achievement
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
