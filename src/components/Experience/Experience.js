import React from 'react';
import styles from "./Experience.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

const experiences = [
    {
        role: "React.js Developer",
        company: "Vidya Online Services | Pune",
        duration: "Jan 2026 – Present",
        description: [
            "Building a secure closed banking wallet with internal fund transfers, wallet top-up, and real-time transaction history.",
            "Developing responsive UIs using React Hooks and Context API for payment flows and account dashboards.",
            "Integrating RESTful APIs with JWT-based authentication and role-based access control.",
            "Following Agile development practices with Git-based workflows and regular code reviews."
        ]
    },
    {
        role: "Software Engineer",
        company: "Provaantech Pvt Ltd | Hinjewadi, Pune",
        duration: "April 2024 – Dec 2025",
        description: [
            "Built and maintained full-stack applications using React.js, Node.js, Express.js, and MongoDB.",
            "Developed AI Calling Assistant using Twilio and Plivo, managing 1,000+ concurrent calls.",
            "Implemented real-time data streaming using WebSockets and Server-Sent Events (SSE).",
            "Integrated Meta/Facebook Ads API for automated campaign management and lead sync.",
            "Built AI chatbots using OpenAI and ElevenLabs with RAG pipelines for customer support."
        ]
    },
    {
        role: "Software Engineer Intern",
        company: "Provaantech Pvt Ltd | Hinjewadi, Pune",
        duration: "Jan 2024 – March 2024",
        description: [
            "Developed the Provaantech company website from scratch using React.js and Tailwind CSS.",
            "Built a comprehensive blog and job posting admin panel with CRUD operations and JWT authentication."
        ]
    },
    {
        role: "Web Developer Intern",
        company: "ABHYAZ | Remote",
        duration: "Jun 2022 – Aug 2022",
        description: [
            "Built responsive UI components for an AI-powered coding education platform.",
            "Collaborated with design teams implementing modern UI/UX patterns and ensuring consistency."
        ]
    }
];

const Experience = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>
                <FontAwesomeIcon icon={faBriefcase} /> Experience
            </h2>
            <div className={styles.timeline}>
                {experiences.map((exp, index) => (
                    <div key={index} className={styles.item}>
                        <div className={styles.dot}></div>
                        <div className={styles.itemHeader}>
                            <h3 className={styles.role}>{exp.role}</h3>
                            <span className={styles.duration}>{exp.duration}</span>
                        </div>
                        <div className={styles.company}>{exp.company}</div>
                        <ul className={styles.list}>
                            {exp.description.map((desc, i) => (
                                <li key={i} className={styles.listItem}>{desc}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
