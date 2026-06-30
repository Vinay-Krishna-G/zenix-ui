import React from 'react';
import { blueprints } from '@zenixui/blueprints';
import { BlueprintCard } from './BlueprintCard';

export function BlueprintGrid() {
  const categories = ['Landing Pages', 'Portfolios', 'Dashboards', 'Blogs'];
  const idMap: Record<string, string> = { 
    'Landing Pages': 'landing', 
    'Portfolios': 'portfolio', 
    'Dashboards': 'dashboard', 
    'Blogs': 'blog' 
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
      {categories.map((category) => {
        const categoryId = idMap[category];
        const topBp = blueprints.find(bp => bp.category === categoryId);
        const count = blueprints.filter(bp => bp.category === categoryId).length;
        
        return (
          <BlueprintCard 
            key={category} 
            categoryName={category} 
            categoryId={categoryId} 
            count={count} 
            previewImage={topBp?.previewImage} 
          />
        );
      })}
    </div>
  );
}
