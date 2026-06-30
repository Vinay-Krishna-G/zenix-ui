import React from 'react';
import { ThemeCard } from './ThemeCard';
import styles from './ThemeShowcase.module.css';

const themes = [
  { id: 'zenix', title: 'Zenix', description: 'Clean, modern, and professional. The default look.', colors: ['#ffffff', '#f4f4f5', '#6366f1', '#09090b'] },
  { id: 'midnight', title: 'Midnight', description: 'Dark, high-contrast, cyberpunk aesthetic.', colors: ['#09090b', '#18181b', '#22c55e', '#ffffff'] },
  { id: 'ocean', title: 'Ocean', description: 'Fluid gradients and glassmorphism.', colors: ['#f0f9ff', '#e0f2fe', '#0ea5e9', '#082f49'] },
  { id: 'autumn', title: 'Autumn', description: 'Warm, earthy tones with organic shapes.', colors: ['#fffbeb', '#fef3c7', '#d97706', '#451a03'] },
];

export function ThemeGrid() {
  return (
    <div className={styles.grid}>
      {themes.map(theme => (
        <ThemeCard key={theme.id} {...theme} />
      ))}
    </div>
  );
}
