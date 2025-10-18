import React from 'react';
import styles from './Container.module.css';

type Layout =
    | 'fullWidth'
    | 'article'
    | 'articleLeft'
    | 'articleRight'
    | 'articleBoth';

type Props = {
    layout?: Layout;
    children?: React.ReactNode;
    left?: React.ReactNode;
    right?: React.ReactNode;
};

export default function Container({
    layout = 'article',
    children,
    left,
    right,
}: Props) {
    // Отдельная логика для fullWidth — без wrapper
    if (layout === 'fullWidth') {
        return <div className={styles.fullWidth}>{children}</div>;
    }

    return (
        <div className={`${styles.container} ${styles[layout]}`}>
            {(layout === 'articleLeft' || layout === 'articleBoth') && (
                <aside className={styles.sidebarLeft}>{left}</aside>
            )}

            <main className={styles.main}>{children}</main>

            {(layout === 'articleRight' || layout === 'articleBoth') && (
                <aside className={styles.sidebarRight}>{right}</aside>
            )}
        </div>
    );
}
