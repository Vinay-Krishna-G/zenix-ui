import React from 'react';
import { blueprints } from '@zenixui/blueprints/src/registry';
import { BlueprintCard } from './BlueprintCard';
import styles from './BlueprintGallery.module.css';

export function BlueprintGrid() {
  const featured = blueprints.filter(b => b.featured).slice(0, 3);
  
  return (
    <div className={styles.grid}>
      {featured.map(blueprint => (
        <BlueprintCard key={blueprint.id} blueprint={blueprint} />
      ))}
    </div>
  );
}
