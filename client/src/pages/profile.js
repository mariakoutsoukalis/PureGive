import React from 'react';
import Footer from '../components/Footer';
import styles from '../styles/Updated_footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import NavBar3 from '@/components/NavBar3';

function ProfilePage() {
  return (
    <> 
    <NavBar3 />     
      <div className="container">
        {/* Profile Card */}
        <div className="profile-card">
          {/* Profile Header */}
          <div className="profile-header">
            <div className="main-profile">
              <div className="profile-image"></div>
              <div className="profile-names">
                <h1 className="username">Someone Cool</h1>
                <small className="page-title">Does Something Cool</small>
              </div>
            </div>
          </div>

          {/* Profile Body */}
          <div className="profile-body">
            {/* Profile Actions */}
            <div className="profile-actions">
              <button className="follow">Follow</button>
              <button className="message">Message</button>
              <section className="bio">
                <div className="bio-header">
                  <i className="fa fa-info-circle"></i>
                  Bio
                </div>
                <p className="bio-text">
                Someone Cool: proving that yes, that really is their name. 
                </p>
              </section>
            </div>

            {/* Account Info */}
            <div className="account-info">
              {/* Data */}
              <div className="data">
                <div className="important-data">
                  <section className="data-item">
                    <h3 className="value">104</h3>
                    <small className="title">Posts</small>
                  </section>
                  <section className="data-item">
                    <h3 className="value">21K</h3>
                    <small className="title">Followers</small>
                  </section>
                  <section className="data-item">
                    <h3 className="value">51</h3>
                    <small className="title">Following</small>
                  </section>
                </div>
                <div className="other-data">
                  {/* Other Data */}
                  <section className="data-item">
                    <h3 className="value">41K</h3>
                    <small className="title">Likes</small>
                  </section>
                  <section className="data-item">
                    <h3 className="value">12K</h3>
                    <small className="title">In Donations</small>
                  </section>
                  <section className="data-item">
                    <h3 className="value">2K</h3>
                    <small className="title">Saved</small>
                  </section>
                </div>
              </div>

              {/* Social Media */}
              <div className={styles.socialIcons}>
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
                  <a className={styles.linkedin} href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li> 
              </div>

              {/* Last Post */}
              <div className="last-post">
                <div className="post-cover">
                  <h2 className="last-badge">Cause Titles</h2>
                </div>
                <span className="post-title">
                  <h3>Knowledge Patron</h3>
                  <h3>Green Guardian</h3>
                  <h3>Paw Protector</h3>
                </span>
              </div>
              <button className="post-CTA">Donation Dashboard</button>
            </div>
          </div>
        </div>
      </div>
    <Footer />
    </>
  );
}

export default ProfilePage;