'use client';

import React, { useState } from 'react';
import { INDUSTRIES, EXPERIENCES, AESTHETICS, IDENTITIES } from '../../../lib/launchpad';
import { blueprints } from '@zenixui/blueprints';

export function ComposerV2() {
  // Primary selections
  const [industry, setIndustry] = useState(INDUSTRIES[1].id);
  const [experience, setExperience] = useState(EXPERIENCES.find(e => e.industryId === INDUSTRIES[1].id)?.id || EXPERIENCES[3].id);
  const [designLanguage, setDesignLanguage] = useState(AESTHETICS[2].id);
  const [identity, setIdentity] = useState(IDENTITIES[0].id);
  
  // Advanced toggles
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [framework, setFramework] = useState('nextjs');
  const [styling, setStyling] = useState('tailwind');
  
  const [isGenerating, setIsGenerating] = useState(false);

  // Active Blueprint logic
  const activeInd = INDUSTRIES.find(i => i.id === industry) || INDUSTRIES[0];
  const activeExp = EXPERIENCES.find(e => e.id === experience) || EXPERIENCES[0];
  const activeAes = AESTHETICS.find(a => a.id === designLanguage) || AESTHETICS[0];
  const activeIden = IDENTITIES.find(i => i.id === identity) || IDENTITIES[0];

  const activeAestheticMap = activeExp?.variants[0]?.blueprintIdMap || {};
  const activeBlueprintId = activeAestheticMap[designLanguage] || Object.values(activeAestheticMap)[0] || 'zenix-portfolio';
  const ActiveComp = blueprints.find(b => b.id === activeBlueprintId)?.component;

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      alert('Opening Zenix Composer workspace...');
    }, 2000);
  };

  const OptionPill = ({ label, active, onClick, icon, colorBox }: { label: string, active: boolean, onClick: () => void, icon?: string, colorBox?: string }) => (
    <div 
      onClick={onClick}
      style={{
        padding: '12px 24px',
        background: active ? '#FAFAFA' : '#111113',
        color: active ? '#09090B' : '#A1A1AA',
        border: active ? '1px solid #FAFAFA' : '1px solid rgba(255,255,255,0.08)',
        borderRadius: '16px',
        fontSize: '14px',
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'all 150ms ease',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}
    >
      {icon && <span>{icon}</span>}
      {colorBox && (
        <div style={{ width: 12, height: 12, borderRadius: 2, background: colorBox }} />
      )}
      {label}
    </div>
  );

  return (
    <section style={{ padding: '96px 40px', background: '#09090B', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontSize: '56px', fontWeight: 800, letterSpacing: '-0.04em', color: '#FAFAFA', marginBottom: '16px' }}>Composer.</h2>
          <p style={{ fontSize: '20px', color: '#A1A1AA' }}>Build your entire operating system before writing a single line of code.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '450px 1fr 350px', gap: '48px' }}>
          
          {/* LEFT: Composer Options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', overflowY: 'auto', paddingRight: '12px', maxHeight: '800px' }}>
            
            {/* Step 1: Industry */}
            <div>
              <div style={{ fontSize: '14px', color: '#A1A1AA', fontWeight: 600, marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>1. What are you building?</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {INDUSTRIES.map(i => (
                  <OptionPill 
                    key={i.id} 
                    label={i.name} 
                    active={industry === i.id} 
                    onClick={() => { setIndustry(i.id); setExperience(EXPERIENCES.find(e => e.industryId === i.id)?.id || ''); }} 
                  />
                ))}
              </div>
            </div>

            {/* Step 2: Experience */}
            <div>
              <div style={{ fontSize: '14px', color: '#A1A1AA', fontWeight: 600, marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>2. Choose Experience</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {EXPERIENCES.filter(e => e.industryId === industry).map(e => (
                  <OptionPill key={e.id} label={e.name} active={experience === e.id} onClick={() => setExperience(e.id)} />
                ))}
              </div>
            </div>

            {/* Step 3: Visual Style */}
            <div>
              <div style={{ fontSize: '14px', color: '#A1A1AA', fontWeight: 600, marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>3. Visual Style</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {AESTHETICS.map(a => (
                  <OptionPill key={a.id} label={a.name} active={designLanguage === a.id} onClick={() => setDesignLanguage(a.id)} />
                ))}
              </div>
            </div>

            {/* Step 4: Identity */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <div style={{ fontSize: '14px', color: '#A1A1AA', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>4. Identity</div>
                <div style={{ fontSize: '12px', color: '#5E6AD2', fontWeight: 600, cursor: 'pointer' }}>Customize Identity →</div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {IDENTITIES.map(i => (
                  <OptionPill key={i.id} colorBox={i.colors.primary} label={i.name} active={identity === i.id} onClick={() => setIdentity(i.id)} />
                ))}
              </div>
            </div>

            <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)' }} />

            {/* Step 5: Advanced Technology */}
            <div>
              <div 
                style={{ fontSize: '14px', color: '#FAFAFA', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', userSelect: 'none' }}
                onClick={() => setShowAdvanced(!showAdvanced)}
              >
                Advanced Options {showAdvanced ? '▲' : '▼'}
              </div>
              
              {showAdvanced && (
                <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <div>
                    <div style={{ fontSize: '12px', color: '#A1A1AA', marginBottom: '12px' }}>Framework</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                      <OptionPill icon="▲" label="Next.js" active={framework === 'nextjs'} onClick={() => setFramework('nextjs')} />
                      <OptionPill icon="⚛" label="React" active={framework === 'react'} onClick={() => setFramework('react')} />
                      <OptionPill icon="V" label="Vue" active={framework === 'vue'} onClick={() => setFramework('vue')} />
                      <OptionPill icon="A" label="Nuxt" active={framework === 'nuxt'} onClick={() => setFramework('nuxt')} />
                      <OptionPill icon="🅰" label="Angular" active={framework === 'angular'} onClick={() => setFramework('angular')} />
                      <OptionPill icon="S" label="SvelteKit" active={framework === 'svelte'} onClick={() => setFramework('svelte')} />
                      <OptionPill icon="🚀" label="Astro" active={framework === 'astro'} onClick={() => setFramework('astro')} />
                      <OptionPill icon="H" label="HTML" active={framework === 'html'} onClick={() => setFramework('html')} />
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: '12px', color: '#A1A1AA', marginBottom: '12px' }}>Styling</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                      <OptionPill label="Tailwind CSS" active={styling === 'tailwind'} onClick={() => setStyling('tailwind')} />
                      <OptionPill label="CSS Modules" active={styling === 'cssmodules'} onClick={() => setStyling('cssmodules')} />
                      <OptionPill label="Vanilla CSS" active={styling === 'vanilla'} onClick={() => setStyling('vanilla')} />
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* MIDDLE: Live Preview */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ 
              flex: 1,
              background: '#111113', 
              borderRadius: '28px', 
              border: '1px solid rgba(255,255,255,0.08)', 
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              display: 'flex', flexDirection: 'column'
            }}>
              {/* Browser chrome */}
              <div style={{ padding: '16px', background: '#09090B', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', gap: '8px', alignItems: 'center' }}>
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#EF4444' }} />
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#F59E0B' }} />
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#22C55E' }} />
                <div style={{ margin: '0 auto', fontSize: '14px', color: '#A1A1AA', fontWeight: 500, padding: '4px 32px', background: '#111113', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
                  Preview: {activeExp.name}
                </div>
              </div>
              {/* Live component */}
              <div style={{ flex: 1, position: 'relative', overflow: 'hidden', background: '#09090B' }}>
                 <div key={`${activeExp.id}-${designLanguage}-${identity}`} style={{ position: 'absolute', inset: 0, animation: 'blurFadeIn 400ms cubic-bezier(0.4, 0, 0.2, 1)' }}>
                   {ActiveComp ? <ActiveComp /> : null}
                 </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Stack Summary & CTA */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ padding: '32px', background: '#111113', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '16px', fontWeight: 700, color: '#FAFAFA', marginBottom: '24px' }}>Your Stack</div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ color: '#A1A1AA', fontSize: '14px' }}>Industry</div>
                  <div style={{ color: '#FAFAFA', fontSize: '14px', fontWeight: 600 }}>{activeInd.name}</div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ color: '#A1A1AA', fontSize: '14px' }}>Experience</div>
                  <div style={{ color: '#FAFAFA', fontSize: '14px', fontWeight: 600 }}>{activeExp.name}</div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ color: '#A1A1AA', fontSize: '14px' }}>Visual Style</div>
                  <div style={{ color: '#FAFAFA', fontSize: '14px', fontWeight: 600 }}>{activeAes.name}</div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ color: '#A1A1AA', fontSize: '14px' }}>Identity</div>
                  <div style={{ color: '#FAFAFA', fontSize: '14px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: 10, height: 10, borderRadius: 2, background: activeIden.colors.primary }} />
                    {activeIden.name}
                  </div>
                </div>
                <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', margin: '4px 0' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ color: '#A1A1AA', fontSize: '14px' }}>Framework</div>
                  <div style={{ color: '#FAFAFA', fontSize: '14px', fontWeight: 600 }}>{framework === 'react' ? 'React' : framework === 'nextjs' ? 'Next.js' : framework.toUpperCase()}</div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ color: '#A1A1AA', fontSize: '14px' }}>Styling</div>
                  <div style={{ color: '#FAFAFA', fontSize: '14px', fontWeight: 600 }}>{styling === 'tailwind' ? 'Tailwind' : styling === 'cssmodules' ? 'CSS Modules' : 'Vanilla CSS'}</div>
                </div>
              </div>
            </div>

            <div style={{ padding: '32px', background: '#111113', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '16px', fontWeight: 700, color: '#FAFAFA', marginBottom: '24px' }}>Estimated</div>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['32 Pages', '46 Components', '18 Sections', 'SEO Ready', 'Responsive', 'Dark + Light', 'Production Ready'].map((tag, i) => (
                  <div key={i} style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', fontSize: '12px', color: '#A1A1AA', fontWeight: 500 }}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={handleGenerate}
              disabled={isGenerating}
              style={{ 
                width: '100%',
                padding: '16px', 
                background: isGenerating ? '#18181B' : '#FAFAFA', 
                color: isGenerating ? '#A1A1AA' : '#09090B', 
                border: 'none', borderRadius: '24px', fontSize: '16px', fontWeight: 800, 
                cursor: isGenerating ? 'wait' : 'pointer', transition: 'all 150ms ease'
              }}
            >
              {isGenerating ? 'Initializing...' : 'Open Studio'}
            </button>
          </div>

        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blurFadeIn {
          0% { opacity: 0; filter: blur(10px); }
          100% { opacity: 1; filter: blur(0); }
        }
      `}} />
    </section>
  );
}
