// ProjectGallery/FilterButtons/FilterButtons.tsx
import React from 'react';
import { Category } from '../ProjectGallery';
import styles from './FilterButtons.module.css';

type Props = {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  theme: 'light' | 'dark';
  categories: Category[]; // First should be 'all' or equivalent
};

export default function FilterButtons({ activeFilter, onFilterChange, theme, categories }: Props) {
  return (
    <div className={`${styles.filterButtons} ${theme === 'dark' ? styles.dark : styles.light}`}>
      {categories.map((cat, index) => (
        <button 
          key={index}
          className={`${styles.filterBtn} ${activeFilter === cat.category ? styles.active : ''}`} 
          data-filter={cat.category} 
          onClick={() => onFilterChange(cat.category)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}