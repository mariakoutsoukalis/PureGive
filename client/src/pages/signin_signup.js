import React from 'react';
import styles from '../styles/register.module.css';

const SignInSignUp = () => {
  // Function to handle login form submission
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Handle the login form data here (e.g., send to an API)
  };

  // Function to handle register form submission
  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    // Handle the register form data here (e.g., send to an API)
  };

  return (
    
    <div className="forms-container">
        <div className={styles.body}>
        {/* Login Form */}
        <div className={styles.registerContainer}>
            <form onSubmit={handleLoginSubmit} className={styles.form}>
            <div className={styles.formGroup}>
                <label htmlFor="login-username">Username</label>
                <input type="text" id="login-username" name="username" required />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="login-password">Password</label>
                <input type="password" id="login-password" name="password" required />
            </div>

            <button type="submit" className={styles.submitButton}>Login</button>
            </form>
        </div>

        {/* Register Form */}
        <div className={styles.registerContainer}>
            <form onSubmit={handleRegisterSubmit} className={styles.form}>
            <div className={styles.formGroup}>
                <label htmlFor="register-username">Username</label>
                <input type="text" id="register-username" name="username" required />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="register-password">Password</label>
                <input type="password" id="register-password" name="password" required />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="register-email">Email</label>
                <input type="email" id="register-email" name="email" required />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="role">Role</label>
                <select id="role" name="role" required>
                <option value="Donor">Donor</option>
                <option value="Organization">Organization</option>
                </select>
            </div>

            <button type="submit" className={styles.submitButton}>Register</button>
            </form>
        </div>
        </div>
    </div>
  );
};

export default SignInSignUp;
