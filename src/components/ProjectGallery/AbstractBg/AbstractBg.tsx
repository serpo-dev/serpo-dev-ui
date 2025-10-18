// ProjectGallery/AbstractBg/AbstractBg.tsx
import React, { useEffect } from 'react';
import styles from './AbstractBg.module.css';

type Props = {
    theme: 'light' | 'dark';
};

export default function AbstractBg({ theme }: Props) {
    useEffect(() => {
        const container = document.getElementById('abstractBg');
        if (container) {
            container.innerHTML = '';

            // Horizontal lines
            for (let i = 0; i < 10; i++) {
                const line = document.createElement('div');
                line.classList.add(styles.line, styles.horizontal);
                line.style.top = `${Math.random() * 100}%`;
                line.style.animationDelay = `${Math.random() * 20}s`;
                line.style.animationDuration = `${15 + Math.random() * 10}s`;
                container.appendChild(line);
            }

            // Vertical lines
            for (let i = 0; i < 10; i++) {
                const line = document.createElement('div');
                line.classList.add(styles.line, styles.vertical);
                line.style.left = `${Math.random() * 100}%`;
                line.style.animationDelay = `${Math.random() * 15}s`;
                line.style.animationDuration = `${10 + Math.random() * 10}s`;
                container.appendChild(line);
            }
        }
    }, []);

    return <div id="abstractBg" className={`${styles.abstractBg} ${theme === 'dark' ? styles.dark : styles.light}`} />;
}