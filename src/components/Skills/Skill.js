import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3Alt, faJsSquare, faNodeJs,faGithub,faBootstrap } from '@fortawesome/free-brands-svg-icons';
import styles from './Skill.module.css';

const skills = [
    { icon: faHtml5, color: '#E34F26',name:"HTML" },
    { icon: faCss3Alt, color: '#1572B6',name:"CSS" },
    { icon: faJsSquare, color: '#F7E01C',name:"JS" },
    { icon: faReact, color: '#61DBFB',name:"REACT JS" },
    { icon: faNodeJs, color: '#8CC84B',name:"NODE JS" },
    { icon: faGithub, color: '#000',name:"Github" },
    { icon: faBootstrap, color: '#fff',name:"BootStrap" },
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

                        <FontAwesomeIcon icon={skill.icon} style={{ color: skill.color }} className={styles.icon} />
                        <h4 className={styles.name}>{skill.name}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skill;
