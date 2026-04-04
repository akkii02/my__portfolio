import React from 'react';
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiGithub,
  SiTailwindcss, SiExpress, SiMysql, SiMongodb, SiTypescript, SiRedux, SiGraphql,
  SiPostgresql, SiFirebase, SiAmazonwebservices, SiDocker, SiKubernetes, SiOpenai
} from "react-icons/si";
import { FaDatabase, FaExchangeAlt, FaRobot } from "react-icons/fa";
import styles from './Skill.module.css';

const skillCategories = [
    {
        title: "Frontend",
        skills: [
            { icon: <SiReact />, color: '#61DBFB', name: "React.js" },
            { icon: <SiRedux />, color: '#764ABC', name: "Redux" },
            { icon: <SiTypescript />, color: '#3178C6', name: "TypeScript" },
            { icon: <SiJavascript />, color: '#F7E01C', name: "JavaScript" },
            { icon: <SiTailwindcss />, color: '#38B2AC', name: "Tailwind CSS" },
            { icon: <SiHtml5 />, color: '#E34F26', name: "HTML5" },
            { icon: <SiCss3 />, color: '#1572B6', name: "CSS3" },
        ]
    },
    {
        title: "Backend & APIs",
        skills: [
            { icon: <SiNodedotjs />, color: '#8CC84B', name: "Node.js" },
            { icon: <SiExpress />, color: '#000', name: "Express.js" },
            { icon: <SiGraphql />, color: '#E10098', name: "GraphQL" },
            { icon: <FaExchangeAlt />, color: '#58a6ff', name: "WebSockets/SSE" },
            { icon: <FaDatabase />, color: '#4479A1', name: "REST API" },
        ]
    },
    {
        title: "Databases",
        skills: [
            { icon: <SiMongodb />, color: '#47A248', name: "MongoDB" },
            { icon: <SiPostgresql />, color: '#336791', name: "PostgreSQL" },
            { icon: <SiMysql />, color: '#4479A1', name: "MySQL" },
            { icon: <SiFirebase />, color: '#FFCA28', name: "Firebase" },
        ]
    },
    {
        title: "Cloud & DevOps",
        skills: [
            { icon: <SiAmazonwebservices />, color: '#FF9900', name: "AWS (Lambda/EC2)" },
            { icon: <SiGithub />, color: '#fff', name: "CI/CD Pipelines" },
            { icon: <SiDocker />, color: '#2496ED', name: "Docker" },
            { icon: <SiKubernetes />, color: '#326CE5', name: "Kubernetes" },
        ]
    },
    {
        title: "AI & Tools",
        skills: [
            { icon: <SiOpenai />, color: '#412991', name: "OpenAI / RAG" },
            { icon: <FaRobot />, color: '#FF5733', name: "Prompt Engineering" },
            { icon: <SiGithub />, color: '#fff', name: "Git / GitHub" },
        ]
    }
];

const Skill = () => {
    return (
        <div className={styles.main}>
            <h2 className={styles.heading}>Technical Skills</h2>
            <div className={styles.categoryContainer}>
                {skillCategories.map((category, catIndex) => (
                    <div key={catIndex} className={styles.categoryBox}>
                        <h3 className={styles.categoryTitle}>{category.title}</h3>
                        <div className={styles.skillsGrid}>
                            {category.skills.map((skill, index) => (
                                <div key={index} className={styles.skillItem} title={skill.name}>
                                    <div style={{ color: skill.color }} className={styles.icon}>
                                        {skill.icon}
                                    </div>
                                    <span className={styles.skillName}>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skill;

