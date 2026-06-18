import { useState } from 'react';
import { Experience } from '@zenixui/react';
import type { MotionProfile } from '@zenixui/core';

import '@zenixui/react/styles.css';
import '@zenixui/pack-zenix';
import '@zenixui/pack-ocean';
import '@zenixui/pack-night-city';
import '@zenixui/pack-autumn';

import {
  ZenixLanding,
  OceanLanding,
  NightCityLanding,
  AutumnLanding,
  ZenixPortfolio,
  OceanPortfolio,
  NightCityPortfolio,
  AutumnPortfolio
} from '@zenixui/blueprints';

function CustomBackground() {
  return (
    <div style={{ width: '100%', height: '100%', background: 'repeating-linear-gradient(45deg, #000 0, #000 10px, #111 10px, #111 20px)', opacity: 0.5 }} />
  );
}

function App() {
  const [theme, setTheme] = useState('zenix');
  const [pageType, setPageType] = useState<'landing' | 'portfolio'>('landing');
  const [motion, setMotion] = useState<MotionProfile>('normal');
  const [bgType, setBgType] = useState<'default' | 'none' | 'custom'>('default');
  
  // Theme Playground Options
  const [accent, setAccent] = useState<string>('');
  const [radius, setRadius] = useState<string>('');

  const resolvedBg = bgType === 'custom' ? <CustomBackground /> : bgType;

  return (
    <Experience preset={theme} motion={motion} background={resolvedBg} accent={accent || undefined} radius={radius || undefined}>
      
      {/* THEME DEBUG PANEL */}
      <div style={{ 
        position: 'fixed', 
        top: '1rem', 
        left: '1rem', 
        zIndex: 50,
        background: 'rgba(0,0,0,0.8)',
        color: 'white',
        padding: '1.5rem',
        borderRadius: '0.5rem',
        border: '1px solid rgba(255,255,255,0.2)',
        fontFamily: 'monospace',
        fontSize: '0.85rem',
        maxWidth: '300px',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        maxHeight: '90vh',
        overflowY: 'auto'
      }}>
        <div>
          <strong>Page Type:</strong>
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
            {['landing', 'portfolio'].map(p => (
              <button key={p} onClick={() => setPageType(p as any)} style={debugBtn(pageType === p)}>{p}</button>
            ))}
          </div>
        </div>

        <div>
          <strong>Preset:</strong>
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
            {['zenix', 'ocean', 'night-city', 'autumn'].map(t => (
              <button key={t} onClick={() => {
                setTheme(t);
                // Reset custom overrides when changing themes for best experience
                setAccent('');
                setRadius('');
              }} style={debugBtn(theme === t)}>{t}</button>
            ))}
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
          <strong>Brand Overrides:</strong>
          <div style={{ marginTop: '0.5rem' }}>
            <label style={{ display: 'block', fontSize: '0.75rem', marginBottom: '0.25rem' }}>Accent Color</label>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {['', '#0A84FF', '#FF2D55', '#32D74B', '#FF9F0A'].map(a => (
                <button key={a} onClick={() => setAccent(a)} style={{...debugBtn(accent === a), background: a || '#374151', width: '24px', height: '24px', borderRadius: '50%'}} />
              ))}
            </div>
          </div>
          <div style={{ marginTop: '0.5rem' }}>
            <label style={{ display: 'block', fontSize: '0.75rem', marginBottom: '0.25rem' }}>Radius</label>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {['', '0px', '8px', '20px', '32px'].map(r => (
                <button key={r} onClick={() => setRadius(r)} style={debugBtn(radius === r)}>{r || 'auto'}</button>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
          <strong>Motion:</strong>
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
            {['none', 'subtle', 'normal', 'immersive'].map(m => (
              <button key={m} onClick={() => setMotion(m as MotionProfile)} style={debugBtn(motion === m)}>{m}</button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ position: 'relative', zIndex: 10, width: '100%', height: '100%', overflowY: 'auto' }}>
        {pageType === 'landing' && theme === 'zenix' && <ZenixLanding />}
        {pageType === 'landing' && theme === 'ocean' && <OceanLanding />}
        {pageType === 'landing' && theme === 'night-city' && <NightCityLanding />}
        {pageType === 'landing' && theme === 'autumn' && <AutumnLanding />}
        
        {pageType === 'portfolio' && theme === 'zenix' && <ZenixPortfolio />}
        {pageType === 'portfolio' && theme === 'ocean' && <OceanPortfolio />}
        {pageType === 'portfolio' && theme === 'night-city' && <NightCityPortfolio />}
        {pageType === 'portfolio' && theme === 'autumn' && <AutumnPortfolio />}
      </div>
      
    </Experience>
  );
}

function debugBtn(active: boolean) {
  return {
    background: active ? '#3b82f6' : '#374151',
    color: 'white',
    border: 'none',
    padding: '0.25rem 0.5rem',
    borderRadius: '0.25rem',
    cursor: 'pointer',
    fontSize: '0.75rem'
  };
}

export default App;
