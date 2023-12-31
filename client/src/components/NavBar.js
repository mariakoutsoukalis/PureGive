import Link from 'next/link';
import styles from '../styles/NavBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'; // Import the sign-in icon

const NavBar = ({ totalDonations }) => {
    return (
        <nav className={styles.navBar}>
            <div className={styles.left}>
                <Link href="/OrganizationsPage" className={styles.link}> 
                    <span className={`${styles.link} ${styles.hoverEffect}`}>Organizations</span>
                </Link>
            </div>

            <div className={styles.center}>
                <div className={styles.totalDonationsContainer}>
                    <div>Total Donations Made</div>
                    <span className={styles.totalDonations}>
                        {totalDonations}
                    </span>
                </div>
            </div>

            <div className={styles.right}>
                <Link href="/profile" className={styles.link}> 
                    <span className={`${styles.link} ${styles.hoverEffect}`}>Profile</span>
                </Link>
                <Link href="/logout" className={styles.link}>
                    <span className={`${styles.link} ${styles.hoverEffect} ${styles.logout}` }>
                    Logout <FontAwesomeIcon icon={faSignInAlt} /> {/* Use FontAwesomeIcon */}
                    </span>
                </Link>

                
            </div>
        </nav>
    );
};

export default NavBar;