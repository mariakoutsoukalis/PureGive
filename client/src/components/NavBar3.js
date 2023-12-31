import React from 'react';
import Link from 'next/link';
import styles from '../styles/NavBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const NavBar3 = () => {
    return (
        <nav className={styles.navBar3}>
            <div className={styles.left}>
                <Link href="/">
                    <span className={`${styles.link2} ${styles.hoverEffect}`}>Home</span>
                </Link>
                <Link href="/OrganizationsPage">
                    <span className={`${styles.link2} ${styles.hoverEffect}`}>Organizations</span>
                </Link>
            </div>
            <div className={styles.title}>
             <h1>Welcome Back</h1>
            </div>
              <div className={styles.right}>
                <Link href="/logout.js">
                    <span className={`${styles.link2} ${styles.hoverEffect} ${styles.logout}`}>
                        Logout <FontAwesomeIcon icon={faSignInAlt} />
                    </span>
                </Link>
            </div>
        </nav>
    );
};

export default NavBar3;