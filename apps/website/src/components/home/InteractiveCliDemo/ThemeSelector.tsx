import React from 'react';
import styles from './InteractiveCliDemo.module.css';

interface ThemeSelectorProps {
  theme: 'zenix' | 'ocean' | 'midnight' | 'autumn';
  onChange: (theme: 'zenix' | 'ocean' | 'midnight' | 'autumn') => void;
}

export function ThemeSelector({ theme, onChange }: ThemeSelectorProps) {
  const themes = [
    { id: 'zenix', color: '#6366f1' },
    { id: 'ocean', color: '#0ea5e9' },
    { id: 'midnight', color: '#22c55e' },
    { id: 'autumn', color: '#d97706' }
  ];

  return (
    <div>
      <div className={styles.stepTitle}>
        2. Choose Design Language
      </div>
      <div className={styles.themeGrid}>
        {themes.map(t => (
          <button 
            key={t.id} 
            onClick={() => onChange(t.id as any)}
            className={styles.themeButton}
            data-active={theme === t.id}
          >
            <div className={styles.themeDot} style={{ background: t.color }} />
            <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'capitalize' }}>
              {t.id}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
