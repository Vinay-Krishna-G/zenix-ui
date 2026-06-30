import React from 'react';
import styles from './InteractiveCliDemo.module.css';

interface SectionSelectorProps {
  section: string;
  onChange: (section: string) => void;
}

export function SectionSelector({ section, onChange }: SectionSelectorProps) {
  const sections = ['glass', 'minimal', 'saas'];

  return (
    <div>
      <div className={styles.stepTitle}>
        1. Choose Section
      </div>
      <div className={styles.sectionGrid}>
        {sections.map(s => (
          <button 
            key={s} 
            onClick={() => onChange(s)}
            className={styles.sectionButton}
            data-active={section === s}
          >
            {s.charAt(0).toUpperCase() + s.slice(1)} Header
          </button>
        ))}
      </div>
    </div>
  );
}
