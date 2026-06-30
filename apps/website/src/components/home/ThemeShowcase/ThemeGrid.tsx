import React from 'react';
import { ThemeCard } from './ThemeCard';

export function ThemeGrid() {
  const featuredThemes = [
    { id: 'zenix', name: 'Zenix', tagline: 'Premium SaaS', color: '#6366f1' },
    { id: 'ocean', name: 'Ocean', tagline: 'Creative & Fluid', color: '#0ea5e9' },
    { id: 'midnight', name: 'Midnight', tagline: 'Calm Dark Mode', color: '#22c55e' },
    { id: 'autumn', name: 'Autumn', tagline: 'Warm Storytelling', color: '#d97706' }
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
      {featuredThemes.map((theme) => (
        <ThemeCard 
          key={theme.id}
          id={theme.id}
          name={theme.name}
          tagline={theme.tagline}
          color={theme.color}
        />
      ))}
    </div>
  );
}
