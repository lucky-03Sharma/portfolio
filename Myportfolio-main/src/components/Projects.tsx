'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './Projects.module.css';

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<number | null>(null);
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

    const projects = [
        {
            title: 'QuizBurst',
            category: 'Web App',
            description: 'An online quiz application with certification and user friendly environment.',
            tech: ['MERN Stack', 'React', 'Node.js', 'MongoDB'],
            details: {
                fullDescription: 'An online quiz application designed to provide a user-friendly environment for taking quizzes and earning certifications.',
                features: [
                    'User-friendly interface',
                    'Certification generation upon completion',
                    'Secure user authentication',
                    'Admin dashboard for quiz management',
                    'Real-time score calculation'
                ],
                challenges: 'Implementing secure certification generation and ensuring exam integrity.',
                outcome: 'Created a robust platform for online assessment and certification.'
            }
        },

        {
            title: 'Airbnb Clone',
            category: 'Web App',
            description: 'Full-stack booking platform with property listings, authentication & search features.',
            tech: ['React', 'Node.js', 'Vercel', 'MongoDB'],
            details: {
                fullDescription: 'A full-stack booking platform mimicking the core features of Airbnb, including property listings, user authentication, and advanced search.',
                features: [
                    'Property listing and management',
                    'User authentication (Login/Signup)',
                    'Advanced search and filtering by location/price',
                    'Responsive design matching the official site',
                    'Booking management system'
                ],
                challenges: 'Replicating the complex search logic and booking availability management.',
                outcome: 'Built a feature-rich clone demonstrating full-stack development capabilities.'
            }
        }
    ];

    const closeModal = () => setSelectedProject(null);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeModal();
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, []);

    return (
        <section ref={sectionRef} className={`${styles.projects} reveal`} id="projects">
            <div className="container">
                <div className={styles.sectionHeader}>
                    <h2>Featured <span className="gradient-text">Projects</span></h2>
                    <p>A showcase of my web and mobile development work</p>
                </div>

                <div className={styles.projectsGrid}>
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`${styles.projectCard} glass`}
                            onClick={() => setSelectedProject(index)}
                        >
                            <div className={styles.projectImage}>
                                <div className={styles.projectPlaceholder}>
                                    {project.category === 'Mobile App' ? '📱' : '💻'}
                                </div>
                            </div>
                            <div className={styles.projectOverlay}>
                                <span className={styles.projectCategory}>{project.category}</span>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className={styles.projectTech}>
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className={styles.techTag}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedProject !== null && (
                <div className={styles.modal} onClick={closeModal}>
                    <div className={`${styles.modalContent} glass-strong`} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.modalClose} onClick={closeModal}>&times;</button>
                        <span className={styles.projectCategory}>{projects[selectedProject].category}</span>
                        <h2 style={{ margin: '1rem 0 1.5rem 0' }}>{projects[selectedProject].title}</h2>
                        <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>{projects[selectedProject].details.fullDescription}</p>

                        <h3 style={{ marginBottom: '1rem', color: 'var(--accent-blue)' }}>Key Features</h3>
                        <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem' }}>
                            {projects[selectedProject].details.features.map((feature, i) => (
                                <li key={i} style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>{feature}</li>
                            ))}
                        </ul>

                        <h3 style={{ marginBottom: '1rem', color: 'var(--accent-blue)' }}>Challenges & Solutions</h3>
                        <p style={{ marginBottom: '2rem' }}>{projects[selectedProject].details.challenges}</p>

                        <h3 style={{ marginBottom: '1rem', color: 'var(--accent-blue)' }}>Outcome</h3>
                        <p>{projects[selectedProject].details.outcome}</p>
                    </div>
                </div>
            )}
        </section>
    );
}
