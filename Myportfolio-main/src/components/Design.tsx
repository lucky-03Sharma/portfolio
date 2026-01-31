'use client';

import { useEffect, useRef } from 'react';
import styles from './Design.module.css';

export default function Design() {
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

    const designs = [
        { title: 'SaaS Dashboard', description: 'Clean dashboard interface with data visualization and user management', icon: '📊' },
        { title: 'Product Landing Page', description: 'High-converting landing page with bold typography and clear CTAs', icon: '🚀' },
        { title: 'E-Commerce Interface', description: 'Modern shopping experience with smooth checkout flow and product discovery', icon: '🛍️' }
    ];

    return (
        <section ref={sectionRef} className={`${styles.design} reveal`} id="design">
            <div className="container">
                <div className={styles.sectionHeader}>
                    <h2>Design <span className="gradient-text">Portfolio</span></h2>
                    <p>UI/UX designs crafted in Figma with attention to detail</p>
                </div>

                <div className={styles.designCarousel}>
                    <div className={styles.designTrack}>
                        {designs.map((design, index) => (
                            <div key={index} className={`${styles.designItem} glass-strong`}>
                                <div className={styles.designImage}>
                                    <div className={styles.designPlaceholder}>{design.icon}</div>
                                </div>
                                <div className={styles.designInfo}>
                                    <h4>{design.title}</h4>
                                    <p>{design.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
