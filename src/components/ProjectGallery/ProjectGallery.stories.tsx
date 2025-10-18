// ProjectGallery/ProjectGallery.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import ProjectGallery, { Project, Category } from './ProjectGallery';

const meta: Meta<typeof ProjectGallery> = {
    title: 'Components/ProjectGallery',
    component: ProjectGallery,
    parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof ProjectGallery>;

const sampleProjects: Project[] = [
    {
        id: 1,
        title: "Архитектурный визуализатор",
        description: "Инструмент для создания и визуализации архитектурных проектов с минималистичным интерфейсом.",
        category: "web",
        image: "https://images.unsplash.com/photo-1548611635-b6e7827d7d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80",
        technologies: ["Three.js", "JavaScript", "WebGL"],
        demoLink: "#",
        codeLink: "#"
    },
    {
        id: 2,
        title: "Минималистичный планировщик",
        description: "Приложение для управления задачами с чистым интерфейсом и фокусом на продуктивности.",
        category: "mobile",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80",
        technologies: ["React Native", "Redux", "Firebase"],
        demoLink: "#",
        codeLink: "#"
    },
    {
        id: 3,
        title: "Генератор паттернов",
        description: "Инструмент для создания геометрических паттернов с использованием алгоритмов.",
        category: "design",
        image: "https://images.unsplash.com/photo-1550684376-efcbd6e1f961?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80",
        technologies: ["Processing", "p5.js", "SVG"],
        demoLink: "#",
        codeLink: "#"
    },
    {
        id: 4,
        title: "Абстрактная головоломка",
        description: "Игра-головоломка с геометрическими фигурами и минималистичной графикой.",
        category: "game",
        image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80",
        technologies: ["Unity", "C#", "Shader Graph"],
        demoLink: "#",
        codeLink: "#"
    },
    {
        id: 5,
        title: "Анализатор кода",
        description: "Инструмент для визуализации структуры кода и выявления паттернов.",
        category: "web",
        image: "https://images.unsplash.com/photo-1618044619884-20c79efb76df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80",
        technologies: ["Python", "D3.js", "Node.js"],
        demoLink: "#",
        codeLink: "#"
    },
    {
        id: 6,
        title: "Монохромный фоторедактор",
        description: "Приложение для обработки фотографий с акцентом на черно-белую эстетику.",
        category: "mobile",
        image: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80",
        technologies: ["Swift", "Core Image", "Metal"],
        demoLink: "#",
        codeLink: "#"
    }
];

const sampleCategories: Category[] = [
    { category: 'all', label: 'Все проекты' },
    { category: 'web', label: 'Сайты' },
    { category: 'mobile', label: 'Программы' },
    { category: 'design', label: 'Скрипты' },
    { category: 'game', label: 'Песочница' }
];

export const Light: Story = {
    args: {
        theme: 'light',
        title: 'Мои проекты',
        introText: 'Список моих работ, созданных из интереса к какой-то технологии, для решения проблем или повседневных задач и т.д.',
        footerText: '',
        projects: sampleProjects,
        categories: sampleCategories,
        demoLabel: 'Демо',
        codeLabel: 'Просмотр'
    },
};

export const Dark: Story = {
    args: {
        theme: 'dark',
        title: 'Мои проекты',
        introText: 'Список моих работ, созданных из интереса к какой-то технологии, для решения проблем или повседневных задач и т.д.',
        footerText: '',
        projects: sampleProjects,
        categories: sampleCategories,
        demoLabel: 'Демо',
        codeLabel: 'Просмотр'
    },
};