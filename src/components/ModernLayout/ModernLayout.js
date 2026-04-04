import React, { useState } from 'react';
import styles from './ModernLayout.module.css';
import Hero from './Hero';
import ProjectSection from './ProjectSection';
import Experience from '../Experience/Experience';
import Skill from '../Skills/Skill';
import Education from '../Education/Education';
import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCode, faBriefcase, faGraduationCap, faUser } from '@fortawesome/free-solid-svg-icons';

const ModernLayout = ({ projects = [] }) => {
    const [activeSection, setActiveSection] = useState('home');

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
        }
    };

    return (
        <div className={styles.wrapper}>
            {/* Sidebar Navigation */}
            <nav className={styles.sidebar}>
                <div className={styles.logo}>AS</div>
                <div className={styles.navLinks}>
                    <button 
                        onClick={() => scrollToSection('home')} 
                        className={`${styles.navItem} ${activeSection === 'home' ? styles.active : ''}`}
                        title="Home"
                    >
                        <FontAwesomeIcon icon={faHome} />
                    </button>
                    <button 
                        onClick={() => scrollToSection('projects')} 
                        className={`${styles.navItem} ${activeSection === 'projects' ? styles.active : ''}`}
                        title="Projects"
                    >
                        <FontAwesomeIcon icon={faCode} />
                    </button>
                    <button 
                        onClick={() => scrollToSection('experience')} 
                        className={`${styles.navItem} ${activeSection === 'experience' ? styles.active : ''}`}
                        title="Experience"
                    >
                        <FontAwesomeIcon icon={faBriefcase} />
                    </button>
                    <button 
                        onClick={() => scrollToSection('skills')} 
                        className={`${styles.navItem} ${activeSection === 'skills' ? styles.active : ''}`}
                        title="Skills"
                    >
                        <FontAwesomeIcon icon={faUser} />
                    </button>
                    <button 
                        onClick={() => scrollToSection('education')} 
                        className={`${styles.navItem} ${activeSection === 'education' ? styles.active : ''}`}
                        title="Education"
                    >
                        <FontAwesomeIcon icon={faGraduationCap} />
                    </button>
                </div>
            </nav>

            {/* Main Content Area */}
            <main className={styles.mainContent}>
                <section id="home" className={`${styles.section} animateIn`}>
                    <Hero />
                </section>

                <section id="projects" className={styles.section}>
                    <ProjectSection projects={projects} />
                </section>

                <section id="experience" className={styles.section}>
                    <div className={styles.sectionCard}>
                        <Experience />
                    </div>
                </section>

                <section id="skills" className={styles.section}>
                    <div className={styles.sectionCard}>
                        <Skill />
                    </div>
                </section>

                <section id="education" className={styles.section}>
                    <div className={styles.sectionCard}>
                        <Education />
                    </div>
                </section>

                <Footer />
            </main>
        </div>
    );
};

export default ModernLayout;
