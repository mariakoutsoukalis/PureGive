import React, { useState, useEffect, useRef, useMemo } from 'react';
import styles from '../styles/cause.module.css';


const Cause = () => {
    // List of causes
    const causes = [
        'Agriculture' , 
        'Animal Welfare',
        'Arts and Culture',
        'Youth Advocacy',
        'Civil Rights and Social Action',
        'Disaster and Humanitarian Relief',
        'Economic Empowerment',
        'Education', 
        'Politics',
        'Environmentalism',
        'Health',
        'Human Rights',
        'Poverty Alleviation',
        'Science and Technology',
        'Social Services',
        'Veteran Support',
    ];

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

        const getRandomStyles = (() => {
            const grid = []; // To keep track of occupied positions
            const gridSize = 50; // Size of each grid square (adjust as needed)
        
            const padding = 4; // Padding inside the causeItemsContainer
            const causeWidth = 120; // Width of each cause element
            const causeHeight = 50; // Height of each cause element
        
            // Use state values for container dimensions
            const containerWidth = sectionSize.width - 2 * padding - 2 * causeWidth;
            const containerHeight = sectionSize.height - 2 * padding - causeHeight - 29;
        
            // Calculate number of grid squares
            const gridColumns = Math.floor(containerWidth / gridSize);
            const gridRows = Math.floor(containerHeight / gridSize);
        
            // Initialize the grid
            for (let x = 0; x < gridColumns; x++) {
                grid[x] = [];
                for (let y = 0; y < gridRows; y++) {
                    grid[x][y] = false; // False indicates the grid square is empty
                }
            }

            // Function to find an empty space in the grid
            const findEmptySpace = () => {
                for (let x = 0; x < gridColumns; x++) {
                    for (let y = 0; y < gridRows; y++) {
                        if (!grid[x][y]) {
                            return { x, y };
                        }
                    }
                }
                return null; // No empty space found
            };
        
            return () => {
            const space = findEmptySpace();
            if (!space) {
                console.error('No space left to place the item');
                return null;
            }

            // Mark the space as occupied
            grid[space.x][space.y] = true;

            let left = space.x * gridSize + padding + 113;
            let top = space.y * gridSize + padding + 29;

            const animationDelay = 1 + Math.random() * .8; // Random delay

            return {
                top: `${top}px`,
                left: `${left}px`,
                animationDelay: `${animationDelay}s`,
                position: 'absolute',
                transform: 'translate(-50%, -50%)',
                opacity: 0
            };
        };
                   
    })();   
        
    const memoizedStyles = useMemo(() => {
        return causes.map(getRandomStyles);
    }, [causes, sectionSize]);
                 
return (
        <div className={styles.mainContent}>
            <div ref={causeSectionRef} className={styles.causeSection}>
                <h2 className={styles.causeTitle}>PureGive Supports</h2>
                <div className={styles.causeItemsContainer}>
                    {causes.map((cause, index) => (
                        <div key={index} className={styles.causeItem} style={memoizedStyles[index]}>
                            {cause}
                        </div>
                    ))}
                </div>
            </div>
        </div>
);
}

export default Cause;