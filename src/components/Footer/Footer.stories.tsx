
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Footer from './Footer';

import logo from "../../assets/logo.png"

const meta: Meta<typeof Footer> = {
    title: 'Components/Footer',
    component: Footer,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof Footer>;

const sampleColumns = [
    {
        title: 'Обо мне',
        links: [
            { label: 'Обо мне', href: '/about' },
            { label: 'Проекты', href: '/projects' },
            { label: 'Связаться', href: '/contact' },
        ],
    },
    {
        title: 'Статьи',
        links: [
            { label: 'Курсы', href: '/courses' },
            { label: 'Фотографии', href: '/photos' },
            { label: 'Видеоуроки', href: '/videos' },
        ],
    },
];

export const Default: Story = {
    args: {
        logoSrc: logo,
        title: 'serpo-dev',
        subtitle: 'Fullstack-разработчик (Go + JS)',
        columns: sampleColumns,
        domain: 'serpo-dev.ru',
        copyright: '© 2014 — 2025 | Potapov Sergei',
    },
};