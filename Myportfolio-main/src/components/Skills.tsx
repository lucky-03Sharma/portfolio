'use client';

import { useEffect, useRef } from 'react';
import styles from './Skills.module.css';

export default function Skills() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const skills = [
        {
            icon: '💻',
            title: 'Frontend Development',
            description: 'Building responsive web pages with clean code.',
            tech: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap']
        },
        {
            icon: '⚙️',
            title: 'Backend Development',
            description: 'Creating robust server-side applications and APIs.',
            tech: ['Node.js', 'Express.js', 'REST APIs']
        },
        {
            icon: '🗄️',
            title: 'Database & Tools',
            description: 'Managing data and version control efficiently.',
            tech: ['MongoDB', 'Git', 'GitHub', 'VS Code']
        },
        {
            icon: '🐍',
            title: 'Programming Languages',
            description: 'Core programming logic and automation.',
            tech: ['Python', 'JavaScript', 'C', 'C++']
        }
    ];

    return (
        <section ref={sectionRef} className={`${styles.skills} reveal`} id="skills">
            <div className="container">
                <div className={styles.sectionHeader}>
                    <h2>Skills & <span className="gradient-text">Tech Stack</span></h2>
                    <p>Technologies and tools I use to bring ideas to life</p>
                </div>

                <div className={styles.skillsGrid}>
                    {skills.map((skill, index) => (
                        <div key={index} className={`${styles.skillCard} glass`}>
                            <span className={styles.skillIcon}>{skill.icon}</span>
                            <h3>{skill.title}</h3>
                            <p>{skill.description}</p>
                            <div className={styles.techList}>
                                {skill.tech.map((tech, i) => (
                                    <span key={i} className={styles.techTag}>{tech}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
