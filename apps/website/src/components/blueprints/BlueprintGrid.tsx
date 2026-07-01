import React from 'react';
import { blueprints } from '@zenixui/blueprints/registry';
import { BlueprintCard } from './BlueprintCard';

export function BlueprintGrid() {
  const featured = blueprints.filter(b => b.featured).slice(0, 3);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '3rem', paddingTop: '2rem' }}>
      {featured.map(blueprint => (
        <BlueprintCard
          key={blueprint.id}
          id={blueprint.id}
          title={blueprint.title}
          description={blueprint.description}
          category={blueprint.category}
          // Pass the real component — BlueprintCard renders it as a live scaled preview
          component={blueprint.component}
          theme={blueprint.theme}
        />
      ))}
    </div>
  );
}
