# serpo-ui

Modular React + TypeScript UI component library for building blog and photo gallery portfolio sites. Components are flexible, prop-driven for data and text (supporting multilingual setups), and responsive for smartphone (<600px), tablet (600-900px), laptop (900-1200px), and wide screens (>1200px).

Install after publishing:

npm install serpo-ui

Usage example:

import React from 'react';
import { Container, Header, Footer, Sidebar, BlogList, MasonryGallery, Lightbox } from 'serpo-ui';
import 'serpo-ui/dist/styles.css';

export default function App() {
  return (
    <Container maxWidth="1200px">
      <Header logoText="serpo-dev" navItems={[{label: 'Home', href: '/'}]} />
      <main style={{display: 'flex'}}>
        <Sidebar tags={['tag1']} categories={['cat1']} />
        <BlogList posts={[{id: '1', title: 'Post', excerpt: 'Excerpt'}]} />
      </main>
      <Footer siteName="serpo-dev" siteDesc="Fullstack Developer" links={[{label: 'About', href: '/about'}]} />
    </Container>
  );
}
