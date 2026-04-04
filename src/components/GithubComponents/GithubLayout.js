import React from 'react';
import styles from './GithubLayout.module.css';
import ProfileSidebar from './ProfileSidebar';
import ContributionGraph from './ContributionGraph';
import RepoCard from './RepoCard';
import Experience from '../Experience/Experience';
import Skill from '../Skills/Skill';
import Education from '../Education/Education';

const GithubLayout = ({ projects = [] }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.sidebarColumn}>
                    <ProfileSidebar />
                </div>
                
                <div className={styles.mainColumn}>
                    <div className={styles.tabsSticky}>
                        <div className={styles.tabs}>
                            <div className={`${styles.tab} ${styles.active}`}>
                                <span>Overview</span>
                            </div>
                            <div className={styles.tab}>
                                <span>Repositories</span>
                                <span className={styles.counter}>{projects.length}</span>
                            </div>
                            <div className={styles.tab}>
                                <span>Projects</span>
                            </div>
                            <div className={styles.tab}>
                                <span>Packages</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className={styles.content}>
                        <section className={styles.pinnedSection}>
                            <div className={styles.sectionHeader}>
                                <h3>Pinned</h3>
                            </div>
                            <div className={styles.repoGrid}>
                                {projects.slice(0, 6).map((project, index) => (
                                    <RepoCard 
                                        key={index}
                                        name={project.name}
                                        description={project.description}
                                        github={project.github}
                                    />
                                ))}
                            </div>
                        </section>
                        
                        <div className={styles.readmeSection}>
                            <div className={styles.readmeHeader}>
                                <span>akshaysable / README.md</span>
                            </div>
                            <div className={styles.readmeContent}>
                                <Experience />
                                <Skill />
                                <Education />
                            </div>
                        </div>
                        
                        <ContributionGraph />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GithubLayout;

