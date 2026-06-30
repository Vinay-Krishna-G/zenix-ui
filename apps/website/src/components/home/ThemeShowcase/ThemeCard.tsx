import React from 'react';
import Link from 'next/link';
import { Surface } from '@zenixui/components';
import styles from './ThemeShowcase.module.css';

interface ThemeCardProps {
  id: string;
  title: string;
  description: string;
  colors: string[];
}

export function ThemeCard({ id, title, description, colors }: ThemeCardProps) {
  return (
    <Link href="/studio" style={{ textDecoration: 'none' }}>
      <Surface variant="card" className={styles.card}>
        <div className={styles.leftColumn}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.rightColumn}>
          {colors.map((color, i) => (
            <div 
              key={i} 
              className={styles.swatch} 
              style={{ background: color, border: '1px solid var(--zx-elevated)' }} 
            />
          ))}
        </div>
      </Surface>
    </Link>
  );
}
