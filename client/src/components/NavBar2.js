import React from 'react';
import Link from 'next/link';
import styles from '../styles/NavBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import SearchOrganizations from '../components/Search';
import CauseFilter from '../components/Filter'; // Import the filter component

const NavBar2 = ({ search, setSearch, onCauseChange }) => {
    return (
        <nav className={styles.navBar2}>
            <div className={styles.left}>
                <Link href="/">
                    <span className={`${styles.link2} ${styles.hoverEffect}`}>Home</span>
                </Link>
            </div>

            <div className={styles.center2}>
                <SearchOrganizations search={search} setSearch={setSearch} />
                <CauseFilter onCauseChange={onCauseChange} /> {/* Add the filter dropdown */}
            </div>

            <div className={styles.right}>
                <Link href="/profile">
                    <span className={`${styles.link2} ${styles.hoverEffect}`}>Profile</span>
                </Link>
                
                <Link href="/logout.js">
                    <span className={`${styles.link2} ${styles.hoverEffect} ${styles.logout}`}>
                        Logout <FontAwesomeIcon icon={faSignInAlt} />
                    </span>
                </Link>
            </div>
        </nav>
    );
};

export default NavBar2;