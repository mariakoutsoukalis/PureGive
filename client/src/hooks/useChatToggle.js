// hooks/useChatToggle.js
import { useState } from 'react';

const useChatToggle = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);

    const toggleChat = () => {
        setIsChatOpen(prevState => !prevState);
    };

    return { isChatOpen, toggleChat };
};

export default useChatToggle;