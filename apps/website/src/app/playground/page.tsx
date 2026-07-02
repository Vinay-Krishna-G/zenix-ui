'use client';

import React from 'react';
import { blueprints } from '@zenixui/blueprints';
import { MarketplaceHeroPrototype } from './MarketplaceHeroPrototype';
import { TrendingExperiencesPrototype } from './TrendingExperiencesPrototype';
import { FeaturedCollectionsPrototype } from './FeaturedCollectionsPrototype';

// Remove metadata since it's now a client component

export default function PlaygroundPage() {
  // Grab a few different blueprints to showcase
  const demoBlueprints = blueprints.slice(0, 3);

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#000', 
      color: '#fff',
      padding: '4rem 2rem 10rem',
      fontFamily: 'Inter, system-ui, sans-serif'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <MarketplaceHeroPrototype />
        
        <TrendingExperiencesPrototype />
        
        <FeaturedCollectionsPrototype />
      </div>
    </div>
  );
}
