import React from 'react';
import styles from '../styles/register.module.css'; 

const Login = () => {
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form data here (e.g., send to an API)
  };

  return (
  <div className={styles.body}>
    <div className={styles.registerContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className={styles.submitButton}>Login</button>
      </form>
    </div>
  </div>
  );
};

export default Login;