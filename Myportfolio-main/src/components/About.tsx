'use client';

import { useEffect, useRef } from 'react';
import styles from './About.module.css';

export default function About() {
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

    return (
        <section ref={sectionRef} className={`${styles.about} reveal`} id="about">
            <div className="container">
                <div className={styles.aboutContent}>
                    <div className={styles.aboutText}>
                        <h2>About Me</h2>
                        <p>
                            I'm a Computer Engineering student with a deep love for creating digital experiences that matter. My journey in tech has been driven by curiosity and a desire to build solutions that are both beautiful and functional.
                        </p>

                        <h3 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem', color: 'var(--accent-blue)' }}>Experience & Internships</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong>Ethnus - Assessment & Training</strong> <span style={{ color: 'var(--text-secondary)' }}>(Apr 2025 - Jul 2025)</span><br />
                                Soft Skills Training: Communication, teamwork & confidence building.
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong>Cyberen Technologies - R&D Intern</strong> <span style={{ color: 'var(--text-secondary)' }}>(Jul 2025)</span><br />
                                Worked on cost-effective analysis tools and research evaluation in the research and development department.
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong>Digital Forensic Team - Intern</strong><br />
                                Cyber Security & Forensics Training: Evidence collection, investigation & cyber protection.
                            </li>
                        </ul>

                        <h3 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem', color: 'var(--accent-blue)' }}>Courses & Certifications</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '0.5rem' }}>• Cybersecurity & Ethical Hacking</li>
                            <li style={{ marginBottom: '0.5rem' }}>• Coursera - Frontend Development Certification (HTML, CSS, Bootstrap & JavaScript)</li>
                            <li style={{ marginBottom: '0.5rem' }}>• Python Development</li>
                            <li style={{ marginBottom: '0.5rem' }}>• Full Stack Development in MERN</li>
                            <li style={{ marginBottom: '0.5rem' }}>• NPTEL Course & Exam in Python for Data Science</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
