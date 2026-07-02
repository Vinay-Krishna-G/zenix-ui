'use client';

import React, { useState } from 'react';
import { mockFeatured } from './mockFeatured';
import { blueprints } from '@zenixui/blueprints';
import { RenderMode, Viewport, BlueprintProps } from '@zenixui/core';
import { PreviewRenderer } from '../../components/preview/PreviewRenderer';
import { PreviewSurface } from '../../components/preview/PreviewSurface';
import { oceanTheme, editorialTheme, luxuryTheme } from '@zenixui/themes';
import styles from './FeaturedExperiencePrototype.module.css';

const THEMES = [
  { id: 'ocean', name: 'Ocean', tokens: oceanTheme },
  { id: 'editorial', name: 'Editorial', tokens: editorialTheme },
  { id: 'luxury', name: 'Luxury', tokens: luxuryTheme },
];

export function FeaturedExperiencePrototype() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeThemeIndex, setActiveThemeIndex] = useState(0);

  const blueprint = blueprints.find(bp => bp.id === mockFeatured.previewBlueprint);
  if (!blueprint) return null;

  const currentTheme = THEMES[activeThemeIndex];
  
  const dynamicProps: BlueprintProps = {
    theme: currentTheme.tokens,
    content: null,
    mode: RenderMode.Thumbnail,
    viewport: Viewport.Desktop
  };

  return (
    <div className={styles.container}>
      
      {/* Narrative Lead-in */}
      <div className={styles.leadin}>
        <p className={styles.tagline}>
          {mockFeatured.tagline}
        </p>
        <h1 className={styles.title}>
          {mockFeatured.title}
        </h1>
      </div>

      {/* Responsive Container Grid */}
      <div className={styles.grid}>

        {/* 1. Preview Block (Massive Cinematic Preview) */}
        <div 
          className={styles.previewArea}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Surface handles scaling and bounds */}
          <PreviewSurface isHovered={isHovered}>
            <PreviewRenderer 
              Component={blueprint.component as any}
              props={dynamicProps}
            />
          </PreviewSurface>

          {/* Identity Signature Strip */}
          <div className={styles.identityStrip}>
            {mockFeatured.identities.map((identity, idx) => (
              <button
                key={identity.id}
                onClick={() => setActiveThemeIndex(idx)}
                className={`${styles.identityButton} ${activeThemeIndex === idx ? styles.identityButtonActive : styles.identityButtonInactive}`}
              >
                {identity.name}
              </button>
            ))}
          </div>
        </div>

        {/* 2. Story Block */}
        <div className={styles.story}>
          <div className={styles.storyVerification}>
            {mockFeatured.verified && (
              <span style={{ color: '#fff', display: 'flex', alignItems: 'center', gap: '4px', fontSize: 'var(--zx-text-body-sm)', fontWeight: 600 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                Verified Experience
              </span>
            )}
            <span style={{ color: '#86868b', fontSize: 'var(--zx-text-body-sm)' }}>—</span>
            <span style={{ color: '#86868b', fontSize: 'var(--zx-text-body-sm)', fontWeight: 500 }}>{mockFeatured.featuredReason}</span>
          </div>

          <p className={styles.storyDescription}>
            {mockFeatured.shortDescription}
          </p>
        </div>

        {/* 3. Actions Block */}
        <div className={styles.actions}>
          <button className={styles.btnPrimary}>
            {mockFeatured.actions.primary}
          </button>
          <button className={styles.btnSecondary}>
            {mockFeatured.actions.secondary}
          </button>
        </div>

        {/* 4. Trust Block */}
        <div className={styles.trust}>
          <div>
            <h4 className={styles.trustHeading}>Designer</h4>
            <p style={{ fontSize: 'var(--zx-text-body-md)', color: '#fff', margin: 0, fontWeight: 500 }}>{mockFeatured.designer}</p>
          </div>

          <div>
            <h4 className={styles.trustHeading}>Version</h4>
            <p style={{ fontSize: 'var(--zx-text-body-md)', color: '#fff', margin: 0, fontWeight: 500 }}>{mockFeatured.version} <span style={{ color: '#86868b', fontSize: 'var(--zx-text-body-sm)', fontWeight: 400 }}>(Updated {mockFeatured.updatedAt})</span></p>
          </div>

          <div>
            <h4 className={styles.trustHeading}>Works With</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--zx-space-inline)' }}>
              {mockFeatured.frameworks.map(f => (
                <div key={f.id} style={{ display: 'flex', alignItems: 'center', gap: 'var(--zx-space-inline)', color: '#fff', fontSize: 'var(--zx-text-body-sm)' }}>
                  <span style={{ opacity: 0.5 }}>{f.icon}</span> {f.name}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className={styles.trustHeading}>Compatible With</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--zx-space-inline)', color: '#fff', fontSize: 'var(--zx-text-body-sm)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--zx-space-inline)' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3b82f6' }} /> Studio
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--zx-space-inline)' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8b5cf6' }} /> CLI
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
