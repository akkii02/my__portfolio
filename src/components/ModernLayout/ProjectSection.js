import React from 'react';
import styles from './ProjectSection.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faBuilding, faUserAlt } from '@fortawesome/free-solid-svg-icons';

const ProjectSection = ({ projects = [] }) => {
    const companyProjects = projects.filter(p => p.type === 'company');
    const personalProjects = projects.filter(p => p.type === 'personal');

    return (
        <div className={styles.container}>
            <div className={styles.sectionHeader}>
                <h2 className={styles.title}>Impactful <span className={styles.accent}>Creations</span></h2>
                <p className={styles.subtitle}>A showcase of my professional work and independent engineering projects.</p>
            </div>

            {/* Professional Endeavors */}
            <div className={styles.categoryWrapper}>
                <div className={styles.categoryHeader}>
                    <FontAwesomeIcon icon={faBuilding} className={styles.catIcon} />
                    <h3>Professional Endeavors</h3>
                </div>
                <div className={styles.projectGrid}>
                    {companyProjects.map((project, index) => (
                        <div key={index} className={styles.projectCard}>
                            <div className={styles.cardHeader}>
                                <span className={styles.companyName}>{project.companyName}</span>
                                <div className={styles.cardLinks}>
                                    <a href={project.github} target="_blank" rel="noreferrer" title="View Source"><FontAwesomeIcon icon={faGithub} /></a>
                                    <a href={project.deploy} target="_blank" rel="noreferrer" title="Live Demo"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                                </div>
                            </div>
                            <h4 className={styles.projectName}>{project.name}</h4>
                            <p className={styles.projectDesc}>{project.description}</p>
                            <div className={styles.techStack}>
                                {project.language.split(',').map((tech, i) => (
                                    <span key={i} className={styles.techItem}>{tech.trim()}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Independent Initiatives */}
            <div className={styles.categoryWrapper}>
                <div className={styles.categoryHeader}>
                    <FontAwesomeIcon icon={faUserAlt} className={styles.catIcon} />
                    <h3>Independent Initiatives</h3>
                </div>
                <div className={styles.projectGrid}>
                    {personalProjects.map((project, index) => (
                        <div key={index} className={styles.projectCard}>
                            <div className={styles.cardHeader}>
                                <span className={styles.typeLabel}>Personal Project</span>
                                <div className={styles.cardLinks}>
                                    <a href={project.github} target="_blank" rel="noreferrer" title="View Source"><FontAwesomeIcon icon={faGithub} /></a>
                                    <a href={project.deploy} target="_blank" rel="noreferrer" title="Live Demo"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                                </div>
                            </div>
                            <h4 className={styles.projectName}>{project.name}</h4>
                            <p className={styles.projectDesc}>{project.description}</p>
                            <div className={styles.techStack}>
                                {project.language.split(',').map((tech, i) => (
                                    <span key={i} className={styles.techItem}>{tech.trim()}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectSection;
