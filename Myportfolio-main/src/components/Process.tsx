'use client';

import { useEffect, useRef } from 'react';
import styles from './Process.module.css';

export default function Process() {
    const sectionRef = useRef<HTMLElement>(null);
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

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

        itemsRef.current.forEach((item, index) => {
            if (item) {
                const itemObserver = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                setTimeout(() => {
                                    item.style.opacity = '1';
                                    item.style.transform = 'translateY(0)';
                                }, index * 150);
                            }
                        });
                    },
                    { threshold: 0.3 }
                );
                itemObserver.observe(item);
            }
        });

        return () => observer.disconnect();
    }, []);

    const steps = [
        {
            number: 1,
            title: 'Ideation & Research',
            description: 'Understanding the problem, researching solutions, and defining project scope. I analyze user needs, study competitors, and create a clear roadmap for development.'
        },
        {
            number: 2,
            title: 'Design & Prototyping',
            description: 'Creating wireframes and high-fidelity designs in Figma. I focus on user experience, visual hierarchy, and ensuring the design is both beautiful and functional.'
        },
        {
            number: 3,
            title: 'Development',
            description: 'Writing clean, maintainable code with best practices. I build responsive interfaces, integrate APIs, and ensure the application is performant and scalable.'
        },
        {
            number: 4,
            title: 'Testing & Deployment',
            description: 'Rigorous testing across devices and browsers, optimizing performance, and deploying to production. I ensure everything works flawlessly before launch.'
        }
    ];

    return (
        <section ref={sectionRef} className={`${styles.process} reveal`} id="process">
            <div className="container">
                <div className={styles.sectionHeader}>
                    <h2>Development <span className="gradient-text">Process</span></h2>
                    <p>How I transform ideas into polished products</p>
                </div>

                <div className={styles.timeline}>
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            ref={el => { itemsRef.current[index] = el; }}
                            className={styles.timelineItem}
                            style={{ opacity: 0, transform: 'translateY(30px)', transition: 'all 0.6s ease' }}
                        >
                            <div className={styles.timelineNumber}>{step.number}</div>
                            <div className={`${styles.timelineContent} glass-strong`}>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
