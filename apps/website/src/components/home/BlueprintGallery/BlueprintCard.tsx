import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Surface } from '@zenixui/components';
import type { BlueprintMetadata } from '@zenixui/blueprints/registry';
import styles from './BlueprintGallery.module.css';

interface BlueprintCardProps {
  blueprint: BlueprintMetadata;
}

export function BlueprintCard({ blueprint }: BlueprintCardProps) {
  return (
    <Link href={`/blueprints/${blueprint.id}`} className={styles.link}>
      <Surface variant="card" className={styles.card}>
        <div className={styles.imageContainer} style={{ position: 'relative', width: '100%', height: '100%' }}>
          {blueprint.previewImage && (
            <Image 
              src={blueprint.previewImage} 
              alt={blueprint.title} 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
              className={styles.image}
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
