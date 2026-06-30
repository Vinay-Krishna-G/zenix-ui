'use client';

import React, { useState, useEffect } from 'react';
import { Surface, Button, PageSection, SectionHeader, SectionHeading, SectionDescription } from '@zenixui/components';
import { Experience } from '@zenixui/react';
import dynamic from 'next/dynamic';
import styles from './InteractiveCliDemo.module.css';

const GlassHeader = dynamic(() => import('@/components/sections/headers/GlassHeader').then(m => ({ default: m.GlassHeader })), { ssr: false });
const MinimalHeader = dynamic(() => import('@/components/sections/headers/MinimalHeader').then(m => ({ default: m.MinimalHeader })), { ssr: false });
const SaaSHeader = dynamic(() => import('@/components/sections/headers/SaaSHeader').then(m => ({ default: m.SaaSHeader })), { ssr: false });

type Theme = 'zenix' | 'ocean' | 'midnight' | 'autumn';
type Section = 'glass' | 'minimal' | 'saas';

export function InteractiveCliDemo() {
  const [theme, setTheme] = useState<Theme>('ocean');
  const [section, setSection] = useState<Section>('glass');
  const [installState, setInstallState] = useState<'idle' | 'typing' | 'installing' | 'done'>('done');
  const [commandText, setCommandText] = useState('');

  const targetCommand = `npx zenix-ui add header/${section} --theme ${theme}`;

  // When selections change, trigger the fake CLI install animation
  useEffect(() => {
    setInstallState('typing');
    setCommandText('');
    
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < targetCommand.length) {
        setCommandText(targetCommand.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setInstallState('installing');
        setTimeout(() => setInstallState('done'), 800);
      }
    }, 40);

    return () => clearInterval(typingInterval);
  }, [theme, section, targetCommand]);

  const PreviewComponent = () => {
    switch (section) {
      case 'glass': return <GlassHeader />;
      case 'minimal': return <MinimalHeader />;
      case 'saas': return <SaaSHeader />;
      default: return <GlassHeader />;
    }
  };

  return (
    <PageSection>
      <SectionHeader>
        <div>
          <SectionHeading>Install exactly what you need.</SectionHeading>
          <SectionDescription>Pick a section, pick a design language, generate the command.</SectionDescription>
        </div>
      </SectionHeader>
      
      <Surface variant="card" className={styles.card}>
      
      {/* LEFT: Controls & CLI */}
      <div className={styles.sidebar}>
        
        <div>
          <div className={styles.stepTitle}>
            1. Choose Section
          </div>
          <div className={styles.sectionGrid}>
            {['glass', 'minimal', 'saas'].map(s => (
              <button 
                key={s} 
                onClick={() => setSection(s as Section)}
                className={styles.sectionButton}
                data-active={section === s}
              >
                {s.charAt(0).toUpperCase() + s.slice(1)} Header
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className={styles.stepTitle}>
            2. Choose Design Language
          </div>
          <div className={styles.themeGrid}>
            {[
              { id: 'zenix', color: '#6366f1' },
              { id: 'ocean', color: '#0ea5e9' },
              { id: 'midnight', color: '#22c55e' },
              { id: 'autumn', color: '#d97706' }
            ].map(t => (
              <button 
                key={t.id} 
                onClick={() => setTheme(t.id as Theme)}
                className={styles.themeButton}
                data-active={theme === t.id}
              >
                <div className={styles.themeDot} style={{ background: t.color }} />
                <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'capitalize' }}>
                  {t.id}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 'auto' }}>
          <div className={styles.stepTitle}>
            3. CLI Output
          </div>
          <div className={styles.cliOutput}>
            <div className={styles.cliPrompt}>
              <span style={{ opacity: 0.5 }}>$</span>
              <span>
                {commandText}
                {installState === 'typing' && <span className={styles.blink}>_</span>}
              </span>
            </div>
            
            {installState === 'installing' && (
              <div className={styles.installing}>
                <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'zx-spin 1s linear infinite' }}>
                  <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                </svg>
                Installing dependencies...
              </div>
            )}
            
            {installState === 'done' && (
              <div className={styles.done}>
                ✓ Installed components/headers/{section}.tsx
              </div>
            )}
          </div>
        </div>
      </div>

      {/* RIGHT: Live Preview */}
      <div className={styles.previewContainer}>
        <div className={styles.previewHeader}>
          <div className={styles.previewTitle}>
            Live Preview
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--zx-elevated)' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--zx-elevated)' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--zx-elevated)' }} />
          </div>
        </div>
        <div className={styles.previewContent}>
          <Experience preset={theme}>
            {/* Add a dummy height to show header properly */}
            <div style={{ minHeight: '100%', background: 'var(--zx-background)' }}>
              <PreviewComponent />
              {/* Dummy content below header */}
              <div style={{ padding: '4rem 2rem', textAlign: 'center', opacity: 0.3 }}>
                <div style={{ width: '60%', height: '24px', background: 'var(--zx-elevated)', margin: '0 auto 1rem', borderRadius: '4px' }} />
                <div style={{ width: '80%', height: '16px', background: 'var(--zx-elevated)', margin: '0 auto 0.5rem', borderRadius: '4px' }} />
                <div style={{ width: '75%', height: '16px', background: 'var(--zx-elevated)', margin: '0 auto', borderRadius: '4px' }} />
              </div>
            </div>
          </Experience>
        </div>
      </div>
      </Surface>
    </PageSection>
  );
}
