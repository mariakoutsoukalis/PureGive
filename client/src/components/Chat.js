import React, { useState, useEffect, useRef} from 'react';
import styles from '../styles/chat.module.css';

const ChatWindow = () => {
// State for the chatbox
const [userInput, setUserInput] = useState('');
const [chatHistory, setChatHistory] = useState([]);

// Handle user input change
const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!userInput.trim()) return;

        // Update chat history with user's question
        const userMessage = { type: 'user', text: userInput };
        setChatHistory(prevHistory => [...prevHistory, userMessage]);

        // TODO: Integrate with the backend to get response
        const apiResponse = "This is a placeholder response."; // Replace with actual API call
        setChatHistory(prevHistory => [...prevHistory, { type: 'bot', text: apiResponse }]);

        setUserInput(''); // Clear input field
    };

    // Auto-scroll to latest message
    useEffect(() => {
        const chatHistoryDiv = document.querySelector('.' + styles.chatHistory);
        if (chatHistoryDiv) {
            chatHistoryDiv.scrollTop = chatHistoryDiv.scrollHeight;
        }
    }, [chatHistory]);

        // Ref for the causeSection
        const causeSectionRef = useRef(null);

        // State to store dimensions
        const [sectionSize, setSectionSize] = useState({ width: 0, height: 0 });

        // Effect to update dimensions on mount and window resize
        useEffect(() => {
            const updateSize = () => {
                if (causeSectionRef.current) {
                    setSectionSize({
                        width: causeSectionRef.current.offsetWidth,
                        height: causeSectionRef.current.offsetHeight
                    });
                }
            };

            // Update dimensions initially and on resize
            window.addEventListener('resize', updateSize);
            updateSize();

            // Cleanup listener
            return () => window.removeEventListener('resize', updateSize);
        }, []);

        return (
            <div className={styles.gptContainer}>
                <div className={styles.gptSection}>
                    <h2 className={styles.gptTitle}>PureGive → ChatGPT...</h2>
                    <div className={styles.chatHistory}>
                        {chatHistory.map((chat, index) => (
                            <div key={index} className={chat.type === 'user' ? styles.userMessage : styles.botMessage}>
                                {chat.text}
                            </div>
                        ))}
                    </div>
                    <form onSubmit={handleSubmit} className={styles.chatForm}>
                        <input
                            type="text"
                            value={userInput}
                            onChange={handleInputChange}
                            placeholder="PureGive → ChatGPT..." //unicode character for arrow
                            className={styles.chatInput}
                        />
                        <button type="submit" className={styles.sendButton}>Send</button>
                    </form>
                </div>
            </div>
        );
        
     }
export default ChatWindow;