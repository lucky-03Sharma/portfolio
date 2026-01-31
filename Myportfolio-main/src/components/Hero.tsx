'use client';

import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
    const floatingRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Mouse movement parallax (no blur)
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;

            floatingRefs.current.forEach((element, index) => {
                if (element) {
                    const speed = (index + 1) * 15;
                    const x = (mouseX - 0.5) * speed;
                    const y = (mouseY - 0.5) * speed;
                    element.style.transform = `translate(${x}px, ${y}px)`;
                }
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className={styles.hero} id="hero">
            {/* Floating elements - NO BLUR */}
            <div
                ref={el => { floatingRefs.current[0] = el; }}
                className={`${styles.floatingElement} ${styles.floating1}`}
            />
            <div
                ref={el => { floatingRefs.current[1] = el; }}
                className={`${styles.floatingElement} ${styles.floating2}`}
            />
            <div
                ref={el => { floatingRefs.current[2] = el; }}
                className={`${styles.floatingElement} ${styles.floating3}`}
            />

            <div className="container">
                <div className={styles.heroWrapper}>
                    <div className={styles.heroImageContent}>
                        <div className={styles.imageWrapper}>
                            <img
                                src="/profile.jpg"
                                alt="Lucky Sharma"
                                className={styles.profileImage}
                            />
                        </div>
                    </div>

                    <div className={styles.heroTextContent}>
                        <h1 className={styles.heroTitle}>
                            Hi, I'm <span className="gradient-text">Lucky Sharma</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            A passionate Full Stack Developer building modern web applications with clean UI, robust backend systems, and performance-driven design.
                        </p>
                        <div className={styles.heroCta}>
                            <button onClick={() => scrollToSection('projects')} className={styles.btnPrimary}>
                                View Projects
                                <span>→</span>
                            </button>
                            <button onClick={() => scrollToSection('contact')} className={styles.btnSecondary}>
                                Contact Me
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.experimentText}>
                exp.3 EC2<br />
                lucky sharma 231P061
            </div>
        </section>
    );
}
