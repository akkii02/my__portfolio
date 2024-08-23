import React from 'react';
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiGithub, SiBootstrap,
  SiTailwindcss, SiExpress, SiMysql, SiMongodb
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa"; // SQL icon from Font Awesome
import styles from './Skill.module.css';

const skills = [
    { icon: <SiHtml5 />, color: '#E34F26', name: "HTML" },
    { icon: <SiCss3 />, color: '#1572B6', name: "CSS" },
    { icon: <SiJavascript />, color: '#F7E01C', name: "JavaScript" },
    { icon: <SiReact />, color: '#61DBFB', name: "React" },
    { icon: <SiNodedotjs />, color: '#8CC84B', name: "Node.js" },
    { icon: <SiGithub />, color: '#000', name: "GitHub" },
    { icon: <SiBootstrap />, color: '#7952B3', name: "Bootstrap" },
    { icon: <SiTailwindcss />, color: '#38B2AC', name: "Tailwind CSS" },
    { icon: <SiExpress />, color: '#000', name: "Express.js" },
    { icon: <SiMysql />, color: '#4479A1', name: "MySQL" },
    { icon: <FaDatabase />, color: '#F29111', name: "SQL" }, // General SQL icon
    { icon: <SiMongodb />, color: '#47A248', name: "MongoDB" },
    // Add more skills here
];

const Skill = () => {
    return (
        <div className={styles.main}>
            <h1 className={styles.heading}>My Skills</h1>
            <div className={styles.container}>
                {skills.map((skill, index) => (
                    <div key={index} className={styles.box}>
                        <div>
                            <div style={{ color: skill.color, fontSize: '2em' }} className={styles.icon}>
                                {skill.icon}
                            </div>
                            <h4 className={styles.name}>{skill.name}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skill;
