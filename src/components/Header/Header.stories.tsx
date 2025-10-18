import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Header, { NavItemType } from './Header';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta<typeof Header> = {
    title: 'Components/Header',
    component: Header,
    parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof Header>;

const sampleNav: NavItemType[] = [
    { label: 'Главная', href: '/', useRouter: true },
    { label: 'Обо мне', subItems: [{ label: 'Биография', href: '/about' }, { label: 'Навыки', href: '/skills' }] },
    { label: 'Проекты', href: '/projects', useRouter: true  },
    { label: 'Статьи', href: '/blog' },
];

export const Default: Story = {
    decorators: [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        ),
    ],
    args: {
        logoText: 'serpo-dev',
        navItems: sampleNav,
        localeEmoji: '🇷🇺',
        onLocaleToggle: () => console.info('Locale toggled'),
        onThemeToggle: () => console.info('Theme toggled'),
    },
};
