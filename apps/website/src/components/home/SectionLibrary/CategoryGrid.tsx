import React from 'react';
import { SectionCard } from './SectionCard';

export function CategoryGrid() {
  const categories = [
    { title: 'Headers', count: 4 },
    { title: 'Footers', count: 4 },
    { title: 'Heroes', count: 0 },
    { title: 'Pricing', count: 0 }
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
      {categories.map((cat) => (
        <SectionCard key={cat.title} title={cat.title} count={cat.count} />
      ))}
    </div>
  );
}
