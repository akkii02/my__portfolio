import styles from "./Project.module.css";
import mail from "../assets/mail.png";
import expense from "../assets/expense tracker.png";
import res from "../assets/res.png";
import wea from "../assets/wea.png";

const Project = () => {
    const projects = [
        {
            name: "restaurant website",
            description: "A dynamic platform for ordering and managing meals, featuring order placement and cart functionality.",
            image: res, // Replace with actual image URLs
            github: "https://github.com/akkii02/creating-a-restaurant-website",
            deploy:"https://keen-churros-84578d.netlify.app/"
        },
        {
            name: "Mail Box",
            description: "A complete mail management system with a user-friendly frontend dashboard. Features include login, viewing received mails, and sending new messages.",
            image: mail,
            github: "https://github.com/akkii02/mail-box-client",
            deploy:"https://65efe544d8cf5062e04af85d--mellifluous-caramel-f17055.netlify.app/"
        },
        {
            name:"Weather App",
            description:"This is a weather application that allows users to search for weather information .",
            image:wea,
            github:"https://github.com/akkii02/weather_app_assignment",
            deploy:"https://lucky-cheesecake-70cfd6.netlify.app/"
        },
        {
            name: "Expense Tracker",
            description: "A robust tool for managing expenses, offering premium features, data export, and detailed tracking.",
            image: expense, // Replace with actual image URLs
            github: "https://github.com/akkii02/expense_tracker_app"
        },
       
    ]
    return (
        <div className={styles.main}>
            <h1 className={styles.heading}>Projects</h1>
            <div className={styles.container}>
                {projects.map((project, index) => (
                 <div key={index} className={styles.box}>
                 <img src={project.image} alt={project.name} className={styles.image} />
                 <h2 className={styles.name}>{project.name}</h2>
                 <p className={styles.description}>{project.description}</p>
                 <div className={styles.link}  >

                 <a href={project.deploy} target="_blank" rel="noopener noreferrer" >
                     <button className={styles.btns}>View Live</button>
                 </a>
                 <a href={project.github} target="_blank" rel="noopener noreferrer" >
                     <button className={styles.btn}>Github Repo</button>
                 </a>
                 </div>
             </div>
             
                ))}
            </div>
        </div>
    );
};
export default Project;