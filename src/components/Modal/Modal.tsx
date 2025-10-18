import React, { ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

type Props = {
    open: boolean;
    onClose: () => void;
    title?: string;
    children?: ReactNode;
};

export default function Modal({ open, onClose, title, children }: Props) {
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [onClose]);

    if (!open) return null;

    return ReactDOM.createPortal(
        <div className={styles.backdrop} onMouseDown={onClose}>
            <div className={styles.dialog} onMouseDown={(e) => e.stopPropagation()}>
                {title && <div className={styles.title}>{title}</div>}
                <div className={styles.content}>{children}</div>
                <div className={styles.actions}>
                    <button className={styles.btn} onClick={onClose}>Close</button>
                </div>
            </div>
        </div>,
        document.body
    );
}
