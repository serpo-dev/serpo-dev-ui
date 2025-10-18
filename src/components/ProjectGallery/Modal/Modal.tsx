// ProjectGallery/Modal/Modal.tsx
import React from 'react';
import { Project } from '../ProjectGallery';
import styles from './Modal.module.css';

type Props = {
    project: Project | null;
    onClose: () => void;
    theme: 'light' | 'dark';
    demoLabel: string;
    codeLabel: string;
};

export default function Modal({ project, onClose, theme, demoLabel, codeLabel }: Props) {
    if (!project) return null;

    return (
        <div className={`${styles.modal} ${styles.active} ${theme === 'dark' ? styles.dark : styles.light}`} onClick={onClose}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                <button className={styles.closeModal} onClick={onClose}>&times;</button>
                <div className={styles.modalImage} style={{ backgroundImage: `url('${project.image}')` }}></div>
                <h2 className={styles.modalTitle}>{project.title}</h2>
                <p className={styles.modalDescription}>{project.description}</p>
                <div className={styles.modalTech}>
                    {project.technologies.map((tech, i) => (
                        <span key={i} className={styles.modalTechTag}>{tech}</span>
                    ))}
                </div>
                <div className={styles.modalLinks}>
                    <a href={project.demoLink} className={styles.modalLink}>{demoLabel}</a>
                    <a href={project.codeLink} className={styles.modalLink}>{codeLabel}</a>
                </div>
            </div>
        </div>
    );
}