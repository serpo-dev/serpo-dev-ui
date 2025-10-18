// ProjectGallery/ProjectGallery.tsx
import React, { useState, useEffect } from 'react';
import FilterButtons from './FilterButtons/FilterButtons';
import ProjectCard from './ProjectCard/ProjectCard';
import Modal from './Modal/Modal';
import AbstractBg from './AbstractBg/AbstractBg';
import styles from './ProjectGallery.module.css';

export type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string[];
  demoLink: string;
  codeLink: string;
};

export type Category = {
  category: string;
  label: string;
};

type Props = {
  theme: 'light' | 'dark';
  title: string;
  introText: string;
  footerText: string;
  projects: Project[];
  categories: Category[]; // e.g., [{category: 'all', label: 'Все проекты'}, {category: 'web', label: 'Веб'}, ...]
  demoLabel: string;
  codeLabel: string;
};

export default function ProjectGallery({ theme, title, introText, footerText, projects, categories, demoLabel, codeLabel }: Props) {
  const [filter, setFilter] = useState<string>(categories[0].category); // Assume first is 'all'
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [titleAnimated, setTitleAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTitleAnimated(true);
    }, 500);
  }, []);

  const filteredProjects = filter === categories[0].category ? projects : projects.filter(p => p.category === filter);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className={`${styles.body} ${theme === 'dark' ? styles.dark : styles.light}`}>
      <AbstractBg theme={theme} />
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={`${styles.h1} ${titleAnimated ? styles.animate : ''}`} id="mainTitle">{title}</h1>
          <p className={styles.intro}>{introText}</p>
        </header>
        
        <FilterButtons activeFilter={filter} onFilterChange={setFilter} theme={theme} categories={categories} />
        
        <div className={styles.projectsGrid}>
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              theme={theme} 
              onOpenModal={openModal}
              demoLabel={demoLabel}
              codeLabel={codeLabel} 
            />
          ))}
        </div>
      </div>
      
      <Modal 
        project={selectedProject} 
        onClose={closeModal} 
        theme={theme}
        demoLabel={demoLabel}
        codeLabel={codeLabel} 
      />
      
      <footer className={styles.footer}>
        <p>{footerText}</p>
      </footer>
    </div>
  );
}