import React, { useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './Toast.module.css';

type Toast = { id: string; message: string; duration?: number };

export function ToastContainer() {
    const [toasts, setToasts] = useState<Toast[]>([]);

    useEffect(() => {
        // expose simple api on window for quick use in stories/dev
        (window as any).appToasts = {
            push: (msg: string, d = 3500) => {
                const id = Math.random().toString(36).slice(2);
                setToasts((t) => [...t, { id, message: msg, duration: d }]);
                setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), d);
            },
        };
    }, []);

    return ReactDOM.createPortal(
        <div className="app-toast-portal">
            {toasts.map((t) => (
                <div key={t.id} className={styles.toast}>
                    {t.message}
                </div>
            ))}
        </div>,
        document.body
    );
}
