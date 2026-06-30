import React from 'react';
import { SectionCard } from './SectionCard';
import styles from './SectionLibrary.module.css';

const categories = [
  { id: 'headers', title: 'Headers & Nav', count: 12, icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="6" rx="2" /><path d="M3 13h18" /><path d="M3 17h18" /></svg> },
  { id: 'heroes', title: 'Hero Sections', count: 8, icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" /></svg> },
  { id: 'features', title: 'Feature Blocks', count: 15, icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /></svg> },
  { id: 'pricing', title: 'Pricing Tables', count: 6, icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1v22" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg> },
];

export function CategoryGrid() {
  return (
    <div className={styles.grid}>
      {categories.map(category => (
        <SectionCard key={category.id} {...category} />
      ))}
    </div>
  );
}
