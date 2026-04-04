import React from 'react';
import styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faBell, faPlus, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <button className={styles.hamburger}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <div className={styles.logo}>
                    <FontAwesomeIcon icon={faGithub} className={styles.githubLogo} />
                </div>
                <div className={styles.searchContainer}>
                    <div className={styles.searchWrapper}>
                        <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
                        <input 
                            type="text" 
                            placeholder="Type / to search" 
                            className={styles.searchInput}
                        />
                        <span className={styles.slash}>/</span>
                    </div>
                </div>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}><a href="#home">Pull requests</a></li>
                        <li className={styles.navItem}><a href="#about">Issues</a></li>
                        <li className={styles.navItem}><a href="#skill">Codespaces</a></li>
                        <li className={styles.navItem}><a href="#project">Marketplace</a></li>
                        <li className={styles.navItem}><a href="#contact">Explore</a></li>
                    </ul>
                </nav>
            </div>
            
            <div className={styles.right}>
                <div className={styles.actionIcons}>
                    <FontAwesomeIcon icon={faPlus} className={styles.icon} />
                    <FontAwesomeIcon icon={faCaretDown} className={styles.caret} />
                </div>
                <FontAwesomeIcon icon={faBell} className={styles.icon} />
                <div className={styles.profileDropdown}>
                    <div className={styles.avatarMini}></div>
                    <FontAwesomeIcon icon={faCaretDown} className={styles.caret} />
                </div>
            </div>
        </header>
    );
};

export default Navbar;
