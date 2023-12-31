
import React from 'react';
import styles from '../styles/Updated_footer.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={`${styles.colXs6} ${styles.colMd3}`}>
            <h6>Partnerships</h6>
            <ul className={styles.footerLinks}>
              <li><Link href="/404" className={styles.link}>Innovate Together</Link></li>
              <li><Link href="/404" className={styles.link}>Collaborate with Us</Link></li>
              <li><Link href="/404" className={styles.link}>Join Our Network</Link></li>
              <li><Link href="/404" className={styles.link}>Community Guidelines</Link></li>
              <li><Link href="/404" className={styles.link}>Partnership Map</Link></li>
            </ul>
          </div>

          <div className={`${styles.colXs6} ${styles.colMd3}`}>
            <h6>Quick Links</h6>
            <ul className={styles.footerLinks}>
              <li><Link href="/404" className={styles.link}>About Us</Link></li>
              <li><Link href="/404" className={styles.link}>Contact Us</Link></li>
              <li><Link href="/404" className={styles.link}>Contribute</Link></li>
              <li><Link href="/404" className={styles.link}>Privacy Policy</Link></li>
              <li><Link href="/404" className={styles.link}>Sitemap</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.container}>
          <div className={`${styles.colSm12} ${styles.colMd6}`}>
                <h6>About</h6>
                <p className={styles.textJustify}><i>PUREGIVE</i> is a platform designed to bridge the gap between Donors and NGOs. The platform is uniquely structured categorizing NGOs into distinct Causes associating Causes with Donors through Donations.</p>
              </div>
        <div className={styles.row}>
          <div className={`${styles.colMd8} ${styles.colSm6} ${styles.colXs12}`}>
            <p className={styles.copyrightText}>Copyright &copy; 2023 All Rights Reserved by 
         <a href="#">PureGive</a>.
            </p>
          </div>

          <div className={`${styles.colMd4} ${styles.colSm6} ${styles.colXs12}`}>
  <ul className={styles.socialIcons}>
    <li>
      <a className={styles.facebook} href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
    </li>
    <li>
      <a className={styles.instagram} href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </li>
    <li>
      <a className={styles.custom} href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTimes} />
      </a>
    </li>
    <li>
      <a className={styles.linkedin} href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </li>   
  </ul>
</div>
        </div>
      </div>
</footer>
  );
};

export default Footer;