import React, { useEffect, useState } from 'react';
import styles from './ThemeToggle.module.css';

import lightIcon from "../../../assets/light.svg";
import darkIcon from "../../../assets/dark.svg";

type Props = { onToggle?: () => void };

export default function ThemeToggle({ onToggle }: Props) {
    const [isDark, setIsDark] = useState<boolean>(() => {
        try {
            return (localStorage.getItem('app-theme') || 'light') === 'dark';
        } catch {
            return false;
        }
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        try { localStorage.setItem('app-theme', isDark ? 'dark' : 'light'); } catch { }
    }, [isDark]);

    const toggle = () => {
        setIsDark((v) => !v);
        onToggle?.();
    };

    return (
        <button className={styles.toggle} onClick={toggle} aria-pressed={isDark} title="Toggle theme">
            {
                isDark
                    ? <img src={lightIcon} className={styles.icon} alt="light toggle icon" />
                    : <img src={darkIcon} className={styles.icon} alt="dark toggle icon" />
            }
        </button>
    );
}
