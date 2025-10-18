// ProjectGallery/ProjectCard/ProjectCard.tsx
import React, { useEffect, useState } from 'react';
import { Project } from '../ProjectGallery';
import styles from './ProjectCard.module.css';

type Props = {
    project: Project;
    index: number;
    theme: 'light' | 'dark';
    onOpenModal: (project: Project) => void;
    demoLabel: string;
    codeLabel: string;
};

export default function ProjectCard({ project, index, theme, onOpenModal, demoLabel, codeLabel }: Props) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setVisible(true);
        }, 100);
    }, []);

    const handleDemoClick = (e: React.MouseEvent) => {
        e.preventDefault();
        onOpenModal(project);
    };

    const handleCodeClick = (e: React.MouseEvent) => {
        e.preventDefault();
        window.open(project.codeLink, '_blank');
    };

    return (
        <div
            className={`${styles.projectCard} ${theme === 'dark' ? styles.dark : styles.light} ${visible ? styles.visible : ''}`}
            data-category={project.category}
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            <div className={styles.projectImage} style={{ backgroundImage: `url('${project.image}')` }}>
                <div className={styles.projectOverlay}>
                    <div className={styles.projectLinks}>
                        <a href="#" className={styles.projectLink} onClick={handleDemoClick}>{demoLabel}</a>
                        <a href="#" className={styles.projectLink} onClick={handleCodeClick}>{codeLabel}</a>
                    </div>
                </div>
            </div>
            <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectTech}>
                    {project.technologies.map((tech, i) => (
                        <span key={i} className={styles.techTag}>{tech}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}