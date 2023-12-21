import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/index.module.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Updated_Footer';

const Home = () => {
    const [totalDonations, setTotalDonations] = useState(0);
    
    const fetchTotalDonations = async () => {
        const response = await fetch('http://127.0.0.1:5000/donations/total');
        if (!response.ok) {
            throw new Error('Network response error');
        }
        return response.json();
    };

    useEffect(() => {
        fetchTotalDonations().then(data => {
            setTotalDonations(data.total_donations);
        }).catch(error => {
            console.error("Failed to fetch total donations:", error);
        });

        // Video pause logic
        const video = document.getElementById('myVideo');
        const freezeTime = 2.5; // Time in seconds where you want to freeze the video

        const handleTimeUpdate = () => {
            if (video.currentTime >= freezeTime) {
                video.pause();
                // Optional: Jump to the specific frame if the freeze time is not exact
                // video.currentTime = freezeTime;
            }
        };

        if (video) {
            video.addEventListener('timeupdate', handleTimeUpdate);
        }

        // Cleanup function
        return () => {
            if (video) {
                video.removeEventListener('timeupdate', handleTimeUpdate);
            }
        };
    }, []);

    return (
        <React.Fragment>
            <div className={styles.fullscreenVideoWrap}>
                <NavBar totalDonations={totalDonations}/>
                <video autoPlay muted className={styles.video} id="myVideo">
                    <source src="/pexels-diva-plavalaguna-6192775 (2160p).mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className={styles.content}>
                    <h1>PureGive</h1>
                </div>
            </div>
            <Footer />
    </React.Fragment>
    );
};

export default Home;