import styles from "./Education.module.css"

const Education  = () => {
    return (
        <div className={styles.main}>
            <h1 className={styles.heading}>Education</h1>
            <div className={styles.container}>
                <div className={styles.box}>
                    <h2 className={styles.name}>Bachelor of Engineering (BE) in Computer Science</h2>
                    <p className={styles.university}>P.R.Pote College of Engineering and Management </p>
                    <p className={styles.duration}>2016 - 2022</p>
                </div>
                <div className={styles.box}>
                    <h2 className={styles.name}>HSC</h2>
                    <p className={styles.university}>BKV Junior College</p>
                    <p className={styles.duration}>2014 - 2016</p>
                </div>
                <div className={styles.box}>
                    <h2 className={styles.name}>SSC</h2>
                    <p className={styles.university}>Bhikamchand Khandelwal Vidyalaya</p>
                    <p className={styles.duration}>2014 - 2016</p>
                </div>
            </div>
        </div>
    );
};
export default Education;