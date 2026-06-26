'use client';

import React, { useState, useEffect } from 'react';
import { Surface, Button } from '@zenixui/components';
import { Experience } from '@zenixui/react';
import dynamic from 'next/dynamic';

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
    <Surface variant="card" style={{ 
      display: 'grid', 
      gridTemplateColumns: '320px 1fr', 
      gap: '0', 
      border: '1px solid var(--zx-elevated)', 
      borderRadius: 'var(--zx-radius-lg)', 
      overflow: 'hidden',
      background: 'var(--zx-background)'
    }}>
      
      {/* LEFT: Controls & CLI */}
      <div style={{ padding: '2.5rem 2rem', borderRight: '1px solid var(--zx-elevated)', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        
        <div>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, marginBottom: '0.75rem' }}>
            1. Choose Section
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {['glass', 'minimal', 'saas'].map(s => (
              <button 
                key={s} 
                onClick={() => setSection(s as Section)}
                style={{ 
                  padding: '0.5rem 1rem', 
                  borderRadius: 'var(--zx-radius-sm)', 
                  border: section === s ? '1px solid var(--zx-primary)' : '1px solid var(--zx-elevated)', 
                  background: section === s ? 'rgba(var(--zx-primary-rgb, 99, 102, 241), 0.1)' : 'transparent',
                  color: section === s ? 'var(--zx-primary)' : 'inherit',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  transition: 'all 0.2s ease'
                }}
              >
                {s.charAt(0).toUpperCase() + s.slice(1)} Header
              </button>
            ))}
          </div>
        </div>

        <div>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, marginBottom: '0.75rem' }}>
            2. Choose Design Language
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
            {[
              { id: 'zenix', color: '#6366f1' },
              { id: 'ocean', color: '#0ea5e9' },
              { id: 'midnight', color: '#22c55e' },
              { id: 'autumn', color: '#d97706' }
            ].map(t => (
              <button 
                key={t.id} 
                onClick={() => setTheme(t.id as Theme)}
                style={{ 
                  padding: '0.5rem', 
                  borderRadius: 'var(--zx-radius-sm)', 
                  border: theme === t.id ? '1px solid var(--zx-primary)' : '1px solid var(--zx-elevated)', 
                  background: 'var(--zx-surface)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: t.color }} />
                <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'capitalize' }}>
                  {t.id}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 'auto' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, marginBottom: '0.75rem' }}>
            3. CLI Output
          </div>
          <div style={{ 
            background: 'var(--zx-surface)', 
            border: '1px solid var(--zx-elevated)', 
            borderRadius: 'var(--zx-radius-sm)', 
            padding: '1rem',
            fontFamily: 'ui-monospace, monospace',
            fontSize: '0.8rem',
            minHeight: '120px'
          }}>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--zx-primary)' }}>
              <span style={{ opacity: 0.5 }}>$</span>
              <span>
                {commandText}
                {installState === 'typing' && <span style={{ animation: 'blink 1s step-end infinite' }}>_</span>}
              </span>
            </div>
            
            {installState === 'installing' && (
              <div style={{ color: '#a1a1aa', marginTop: '0.5rem' }}>Downloading {section} header...</div>
            )}
            
            {installState === 'done' && (
              <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <div style={{ color: '#22c55e' }}>✓ Installed components/headers/{section.charAt(0).toUpperCase() + section.slice(1)}Header.tsx</div>
                <div style={{ color: '#22c55e' }}>✓ Applied {theme} design language</div>
                <div style={{ color: '#a1a1aa', marginTop: '0.5rem' }}>Ready to use.</div>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* RIGHT: Live Preview */}
      <div style={{ position: 'relative', background: 'var(--zx-elevated)', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--zx-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--zx-surface)' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5 }}>
            Live Preview
          </span>
          <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', background: installState === 'done' ? 'rgba(34,197,94,0.1)' : 'rgba(255,255,255,0.05)', color: installState === 'done' ? '#22c55e' : 'inherit', borderRadius: '4px', transition: 'all 0.3s ease' }}>
            {installState === 'done' ? 'Updated' : 'Updating...'}
          </span>
        </div>
        
        <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
          <div style={{ 
            position: 'absolute', 
            top: 0, left: 0, right: 0, bottom: 0, 
            opacity: installState === 'done' ? 1 : 0.5,
            transition: 'opacity 0.3s ease',
            pointerEvents: installState === 'done' ? 'auto' : 'none'
          }}>
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
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}} />
    </Surface>
  );
}
