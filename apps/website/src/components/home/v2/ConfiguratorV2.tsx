'use client';

import React, { useState } from 'react';
import { INDUSTRIES, EXPERIENCES, AESTHETICS, IDENTITIES } from '../../../lib/launchpad';
import { blueprints } from '@zenixui/blueprints';

export function ConfiguratorV2() {
  const [step, setStep] = useState<number>(0);
  
  // Selections
  const [industry, setIndustry] = useState(INDUSTRIES[1].id);
  const [experience, setExperience] = useState(EXPERIENCES.find(e => e.industryId === INDUSTRIES[1].id)?.id || EXPERIENCES[3].id);
  const [designLanguage, setDesignLanguage] = useState(AESTHETICS[2].id);
  const [identity, setIdentity] = useState(IDENTITIES[0].id);
  
  // Technical selections
  const [framework, setFramework] = useState('nextjs');
  const [language, setLanguage] = useState('ts');
  const [styling, setStyling] = useState('tailwind');
  const [icons, setIcons] = useState('lucide');
  const [animation, setAnimation] = useState('motion');
  
  const [isGenerating, setIsGenerating] = useState(false);

  // Active Blueprint logic
  const activeExp = EXPERIENCES.find(e => e.id === experience) || EXPERIENCES[0];
  const activeAestheticMap = activeExp?.variants[0]?.blueprintIdMap || {};
  const activeBlueprintId = activeAestheticMap[designLanguage] || Object.values(activeAestheticMap)[0] || 'zenix-portfolio';
  const ActiveComp = blueprints.find(b => b.id === activeBlueprintId)?.component;

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      alert('Opening Zenix Studio workspace...');
    }, 2000);
  };

  const OptionPill = ({ label, active, onClick, icon }: { label: string, active: boolean, onClick: () => void, icon?: string }) => (
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
      {label}
    </div>
  );

  return (
    <section style={{ padding: '96px 40px', background: '#09090B', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontSize: '56px', fontWeight: 800, letterSpacing: '-0.04em', color: '#FAFAFA', marginBottom: '16px' }}>Launch Studio.</h2>
          <p style={{ fontSize: '20px', color: '#A1A1AA' }}>Build your entire operating system before writing a single line of code.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '400px 1fr', gap: '48px' }}>
          
          {/* LEFT: Configurator Options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', overflowY: 'auto', paddingRight: '24px', maxHeight: '800px' }}>
            
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

            {/* Step 3: Design Language */}
            <div>
              <div style={{ fontSize: '14px', color: '#A1A1AA', fontWeight: 600, marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>3. Design Language</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {AESTHETICS.map(a => (
                  <OptionPill key={a.id} label={a.name} active={designLanguage === a.id} onClick={() => setDesignLanguage(a.id)} />
                ))}
              </div>
            </div>

            {/* Step 4: Identity */}
            <div>
              <div style={{ fontSize: '14px', color: '#A1A1AA', fontWeight: 600, marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>4. Identity</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {IDENTITIES.map(i => (
                  <OptionPill key={i.id} label={i.name} active={identity === i.id} onClick={() => setIdentity(i.id)} />
                ))}
              </div>
            </div>

            <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)' }} />

            {/* Step 5: Technology */}
            <div>
              <div style={{ fontSize: '14px', color: '#FAFAFA', fontWeight: 700, marginBottom: '24px' }}>Technical Foundation</div>
              
              <div style={{ marginBottom: '32px' }}>
                <div style={{ fontSize: '12px', color: '#A1A1AA', marginBottom: '12px' }}>Framework</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  <OptionPill icon="▲" label="Next.js" active={framework === 'nextjs'} onClick={() => setFramework('nextjs')} />
                  <OptionPill icon="⚛" label="React + Vite" active={framework === 'react'} onClick={() => setFramework('react')} />
                  <OptionPill icon="🅰" label="Angular" active={framework === 'angular'} onClick={() => setFramework('angular')} />
                  <OptionPill icon="A" label="Astro" active={framework === 'astro'} onClick={() => setFramework('astro')} />
                  <OptionPill icon="V" label="Vue" active={framework === 'vue'} onClick={() => setFramework('vue')} />
                  <OptionPill icon="H" label="HTML" active={framework === 'html'} onClick={() => setFramework('html')} />
                </div>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <div style={{ fontSize: '12px', color: '#A1A1AA', marginBottom: '12px' }}>Language</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  <OptionPill label="TypeScript" active={language === 'ts'} onClick={() => setLanguage('ts')} />
                  <OptionPill label="JavaScript" active={language === 'js'} onClick={() => setLanguage('js')} />
                </div>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <div style={{ fontSize: '12px', color: '#A1A1AA', marginBottom: '12px' }}>Styling</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  <OptionPill label="Tailwind CSS" active={styling === 'tailwind'} onClick={() => setStyling('tailwind')} />
                  <OptionPill label="CSS Modules" active={styling === 'cssmodules'} onClick={() => setStyling('cssmodules')} />
                  <OptionPill label="Vanilla CSS" active={styling === 'vanilla'} onClick={() => setStyling('vanilla')} />
                  <OptionPill label="Sass / SCSS" active={styling === 'scss'} onClick={() => setStyling('scss')} />
                </div>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <div style={{ fontSize: '12px', color: '#A1A1AA', marginBottom: '12px' }}>Icons & Animation</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  <OptionPill label="Lucide Icons" active={icons === 'lucide'} onClick={() => setIcons('lucide')} />
                  <OptionPill label="Framer Motion" active={animation === 'motion'} onClick={() => setAnimation('motion')} />
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: Live Preview */}
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

            {/* Launch Action */}
            <div style={{ marginTop: '32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px', background: '#111113', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.08)' }}>
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
                {isGenerating ? 'Initializing...' : 'Open in Studio'}
              </button>
            </div>
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
