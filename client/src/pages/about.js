import React from 'react';
import styles from '../styles/about.module.css';


const AboutPage = () => {
    return (
        <div className={styles.fullBackgroundImageContainer}>

            <header className={styles.header}>
                <h1 className={styles.headerTitle}>Welcome to PureGive</h1>
            </header>

            <div className={styles.mainContent}>
                <div className={styles.aboutSection}>
                    <h2 className={styles.aboutTitle}>About</h2>
                    <p>
                    PureGive is a platform designed to bridge the gap between Donors and NGOs. The platform is uniquely structured categorizing NGOs into distinct Causes associating Causes with Donors through Donations.
                    </p>
                </div>
            </div>

            <footer className={styles.footer}>
                <p>Connecting Donors & Organizations Alike &copy; {new Date().getFullYear()}</p>
            </footer>

            <img 
                src="/pexels-diva-plavalaguna-6147357.jpg" 
                alt="Welcome to PureGive" 
                className={`${styles.fullBackgroundImage} ${styles.backgroundImagePosition}`}
            />
        </div>
    );
};

export default AboutPage;