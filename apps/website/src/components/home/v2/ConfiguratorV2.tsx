'use client';

import React, { useState } from 'react';
import { INDUSTRIES, EXPERIENCES, AESTHETICS, BRAND_PACKS } from '../../../lib/launchpad';

export function ConfiguratorV2() {
  const [industry, setIndustry] = useState(INDUSTRIES[1].id);
  const [experience, setExperience] = useState(EXPERIENCES.find(e => e.industryId === INDUSTRIES[1].id)?.id || EXPERIENCES[3].id);
  const [designLanguage, setDesignLanguage] = useState(AESTHETICS[2].id);
  const [brandPack, setBrandPack] = useState(BRAND_PACKS[0].id);
  const [framework, setFramework] = useState('nextjs');
  const [styling, setStyling] = useState('tailwind');
  const [deploy, setDeploy] = useState('vercel');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      alert('In a real environment, this would download the fully composed source code or open a new repo!');
    }, 2000);
  };

  const selectStyle = {
    width: '100%',
    padding: '16px',
    background: '#111113',
    color: '#FAFAFA',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '16px',
    fontSize: '16px',
    outline: 'none',
    appearance: 'none' as const,
    cursor: 'pointer'
  };

  const labelStyle = {
    display: 'block',
    fontSize: '14px',
    color: '#A1A1AA',
    marginBottom: '8px',
    fontWeight: 600
  };

  return (
    <section style={{ padding: '96px 40px', background: '#09090B', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontSize: '56px', fontWeight: 800, letterSpacing: '-0.04em', color: '#FAFAFA', marginBottom: '16px' }}>Build your website.</h2>
          <p style={{ fontSize: '20px', color: '#A1A1AA' }}>Configure the entire stack before you write a line of code.</p>
        </div>

        <div style={{ background: '#111113', padding: '48px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '32px' }}>
            <div>
              <label style={labelStyle}>Industry</label>
              <select style={selectStyle} value={industry} onChange={e => setIndustry(e.target.value)}>
                {INDUSTRIES.map(i => <option key={i.id} value={i.id}>{i.name}</option>)}
              </select>
            </div>
            <div>
              <label style={labelStyle}>Experience</label>
              <select style={selectStyle} value={experience} onChange={e => setExperience(e.target.value)}>
                {EXPERIENCES.filter(e => e.industryId === industry).map(e => <option key={e.id} value={e.id}>{e.name}</option>)}
                {EXPERIENCES.filter(e => e.industryId === industry).length === 0 && <option value="any">Any Experience</option>}
              </select>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '32px' }}>
            <div>
              <label style={labelStyle}>Design Language</label>
              <select style={selectStyle} value={designLanguage} onChange={e => setDesignLanguage(e.target.value)}>
                {AESTHETICS.map(a => <option key={a.id} value={a.id}>{a.name}</option>)}
              </select>
            </div>
            <div>
              <label style={labelStyle}>Brand Pack</label>
              <select style={selectStyle} value={brandPack} onChange={e => setBrandPack(e.target.value)}>
                {BRAND_PACKS.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
              </select>
            </div>
          </div>

          <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', margin: '40px 0' }} />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', marginBottom: '48px' }}>
            <div>
              <label style={labelStyle}>Framework</label>
              <select style={selectStyle} value={framework} onChange={e => setFramework(e.target.value)}>
                <option value="nextjs">Next.js</option>
                <option value="react">React + Vite</option>
                <option value="angular">Angular</option>
                <option value="astro">Astro</option>
                <option value="html">HTML + CSS</option>
                <option value="vue">Vue</option>
                <option value="nuxt">Nuxt</option>
              </select>
            </div>
            <div>
              <label style={labelStyle}>Styling</label>
              <select style={selectStyle} value={styling} onChange={e => setStyling(e.target.value)}>
                <option value="tailwind">Tailwind CSS</option>
                <option value="cssmodules">CSS Modules</option>
                <option value="vanilla">Vanilla CSS</option>
              </select>
            </div>
            <div>
              <label style={labelStyle}>Deploy</label>
              <select style={selectStyle} value={deploy} onChange={e => setDeploy(e.target.value)}>
                <option value="vercel">Vercel</option>
                <option value="netlify">Netlify</option>
                <option value="cloudflare">Cloudflare</option>
              </select>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px', background: '#09090B', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div>
              <div style={{ fontSize: '14px', color: '#A1A1AA', marginBottom: '4px' }}>Estimated setup</div>
              <div style={{ fontSize: '24px', fontWeight: 800, color: '#FAFAFA' }}>2 minutes</div>
            </div>
            <button 
              onClick={handleGenerate}
              disabled={isGenerating}
              style={{ 
                padding: '16px 48px', background: isGenerating ? '#18181B' : '#FAFAFA', 
                color: isGenerating ? '#A1A1AA' : '#09090B', 
                border: 'none', borderRadius: '16px', fontSize: '16px', fontWeight: 800, 
                cursor: isGenerating ? 'wait' : 'pointer', transition: 'all 150ms ease'
              }}
            >
              {isGenerating ? 'Compiling...' : 'Generate Code'}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
