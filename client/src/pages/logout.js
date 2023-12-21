import React from 'react';
import styles from '../styles/logout.module.css';

const LogoutPage = () => {
    return (
        <div className="flex flex-col">
            {/* Image Container */}
            <div className={styles.imageContainer}> {/* Use imageContainer class */}
                <img 
                    src="/pexels-julia-m-cameron-6995180.jpg" 
                    alt="Descriptive Alt Text" 
                />
            </div>
            {/* Additional content can go here */}
        </div> // Closing tag for the main div
    );
};

export default LogoutPage;