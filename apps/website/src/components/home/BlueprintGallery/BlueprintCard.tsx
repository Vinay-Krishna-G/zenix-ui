import React from 'react';
import Link from 'next/link';
import { Surface } from '@zenixui/components';
import type { BlueprintMetadata } from '@zenixui/blueprints/src/registry';
import styles from './BlueprintGallery.module.css';

interface BlueprintCardProps {
  blueprint: BlueprintMetadata;
}

export function BlueprintCard({ blueprint }: BlueprintCardProps) {
  return (
    <Link href={`/blueprints/${blueprint.id}`} className={styles.link}>
      <Surface variant="card" className={styles.card}>
        <div className={styles.imageContainer}>
          {blueprint.previewImage && (
            <img 
              src={blueprint.previewImage} 
              alt={blueprint.title} 
              className={styles.image}
              style={{ width: '100%', height: '100%' }}
            />
          )}
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{blueprint.title}</h3>
          <p className={styles.description}>{blueprint.description}</p>
          <div className={styles.footer}>
            <span className={styles.category}>{blueprint.category}</span>
            <span>View Blueprint →</span>
          </div>
        </div>
      </Surface>
    </Link>
  );
}
