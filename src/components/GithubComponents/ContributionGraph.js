import React from 'react';
import styles from './ContributionGraph.module.css';

const ContributionGraph = () => {
    // Generate mock data for a year (52 weeks * 7 days)
    const weeks = 53;
    const days = 7;
    
    // Randomize contribution levels (0 to 4)
    const getLevel = () => Math.floor(Math.random() * 5);
    
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>1,234 contributions in the last year</h3>
            <div className={styles.graphWrapper}>
                <div className={styles.graphContainer}>
                    <div className={styles.monthsRow}>
                        {months.map(month => (
                            <span key={month} className={styles.monthLabel}>{month}</span>
                        ))}
                    </div>
                    
                    <div className={styles.daysGrid}>
                        <div className={styles.dayLabels}>
                            <span></span>
                            <span>Mon</span>
                            <span></span>
                            <span>Wed</span>
                            <span></span>
                            <span>Fri</span>
                            <span></span>
                        </div>
                        
                        <div className={styles.weeksContainer}>
                            {Array.from({ length: weeks }).map((_, weekIndex) => (
                                <div key={weekIndex} className={styles.week}>
                                    {Array.from({ length: days }).map((_, dayIndex) => {
                                        const level = getLevel();
                                        return (
                                            <div 
                                                key={dayIndex} 
                                                className={`${styles.day} ${styles[`level${level}`]}`}
                                                title={`${level} contributions on ...`}
                                            />
                                        );
                                    })}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className={styles.legend}>
                    <span>Less</span>
                    <div className={`${styles.day} ${styles.level0}`}></div>
                    <div className={`${styles.day} ${styles.level1}`}></div>
                    <div className={`${styles.day} ${styles.level2}`}></div>
                    <div className={`${styles.day} ${styles.level3}`}></div>
                    <div className={`${styles.day} ${styles.level4}`}></div>
                    <span>More</span>
                </div>
            </div>
        </div>
    );
};

export default ContributionGraph;
