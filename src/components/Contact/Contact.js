import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faFacebookF, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from "./Contact.module.css";
import whatsappicon from "../assets/whatsappicon.png";

const Contact = () => {
    const [ data,setData ] = useState(
        {
            name: '',
            email: '',
            message: ''
        }
    )
    const handleChange = (event) => {
        const { name, value } = event.target;
        // console.log(event.target.value)
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const submitHandler = (event) => {
        event.preventDefault();
        console.log("Form Submitted:", data);
        setData({
            name: '',
            email: '',
            message: ''
        });
        
    };
    const redirectToWhatsApp = () => {
        const phoneNumber = "9130544527"; // Your phone number with country code
        const message = encodeURIComponent("Hello, I would like to chat with you!"); // Optional pre-filled message
        const url = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(url, "_blank");
      };
    return (
        <div className={styles.main}>
            <div className={styles.containerOne}>
                <div>
                    <h1 className={styles.subHead}>Connect with me :</h1>
                    <p>Satisfied with me? Please contact me</p>
                </div>
                <div className={styles.socialMedia}>
                    <a href="https://www.linkedin.com/in/akshay-sable097/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="https://www.instagram.com/akshaysable02/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://github.com/akkii02" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
                <div className={styles.contactCard}>
                <button onClick={redirectToWhatsApp} className={styles.btn}>
            <img className={styles.btnImg} src={whatsappicon} alt="WhatsApp" />
            <span>We are always excited to chat!</span>
          </button>
                </div>
            </div>
            <div className={styles.containerTwo}>
                <div className={styles.contact}> 
                    <h1 className={styles.formHead}>Contact me, let’s make magic together</h1>
                    <form onSubmit={submitHandler}>
                        <input value={data.name} type="text" placeholder="Your Name" onChange={handleChange} name="name" required />
                        <input value={data.email} type="email" placeholder="Your Email" onChange={handleChange} name='email' required />
                        <textarea value={data.message} placeholder="Your Message" onChange={handleChange} name='message' required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Contact;
