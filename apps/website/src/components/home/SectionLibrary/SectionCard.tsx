import React from 'react';
import Link from 'next/link';
import { Surface } from '@zenixui/components';
import styles from './SectionLibrary.module.css';

interface SectionCardProps {
  id: string;
  title: string;
  count: number;
  icon: React.ReactNode;
}

export function SectionCard({ id, title, count, icon }: SectionCardProps) {
  return (
    <Link href={`/sections#${id}`} style={{ textDecoration: 'none' }}>
      <Surface variant="card" className={styles.card}>
        <div className={styles.icon}>
          {icon}
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.count}>{count} variants available</p>
      </Surface>
    </Link>
  );
}
