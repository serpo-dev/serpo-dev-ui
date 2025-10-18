import React, { useState } from 'react';
import styles from './DropdownMenu.module.css';

type Item = { label: string; href?: string };
type Props = { label: string; items: Item[] };

export default function DropdownMenu({ label, items }: Props) {
    const [open, setOpen] = useState(false);

    return (
        <div
            className={styles.dropdown}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <button className={styles.trigger} aria-expanded={open}>
                <span>{label}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            <div className={`${styles.menu} ${open ? styles.open : ''}`} role="menu">
                {items.map((it, i) => (
                    <a key={i} href={it.href} className={styles.item} role="menuitem">
                        {it.label}
                    </a>
                ))}
            </div>
        </div>
    );
}
