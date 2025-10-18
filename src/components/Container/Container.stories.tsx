import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Container from './Container';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta<typeof Container> = {
  title: 'Components/Container',
  component: Container,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof Container>;

// Заготовки для боковых блоков и контента
const LeftBlock = () => (
  <div style={{ background: '#e5e5e5', padding: 10, borderRadius: 8 }}>
    <h3>Левый блок</h3>
    <p>Категории, реклама или навигация</p>
  </div>
);

const RightBlock = () => (
  <div style={{ background: '#e5e5e5', padding: 10, borderRadius: 8 }}>
    <h3>Правый блок</h3>
    <p>Рекомендации, реклама или дополнительная информация</p>
  </div>
);

const MainContent = () => (
  <div style={{ padding: 10 }}>
    <h1>Основной контент</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet facilisis urna.
      Praesent ultrices, justo at commodo feugiat, elit sapien laoreet quam, eget varius
      nisl sem et velit. Integer imperdiet est in sapien tristique, ut eleifend risus blandit.
    </p>
    <p>
      Контент можно увеличивать, вставлять изображения, видео и т.д.
      Адаптивный контейнер будет корректно отображать боковые блоки.
    </p>
  </div>
);

export const FullWidth: Story = {
  render: () => <Container layout="fullWidth"><MainContent /></Container>,
};

export const Article: Story = {
  render: () => <Container layout="article"><MainContent /></Container>,
};

export const ArticleRight: Story = {
  render: () => (
    <Container layout="articleRight" right={<RightBlock />}>
      <MainContent />
    </Container>
  ),
};

export const ArticleLeft: Story = {
  render: () => (
    <Container layout="articleLeft" left={<LeftBlock />}>
      <MainContent />
    </Container>
  ),
};

export const ArticleBoth: Story = {
  render: () => (
    <Container layout="articleBoth" left={<LeftBlock />} right={<RightBlock />}>
      <MainContent />
    </Container>
  ),
};
