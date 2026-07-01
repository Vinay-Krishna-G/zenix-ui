'use client';

import React, { useState } from 'react';
import { INDUSTRIES, EXPERIENCES, AESTHETICS, IDENTITIES } from '../../../../lib/launchpad';
import { blueprints } from '@zenixui/blueprints';
import styles from './Composer.module.css';

import { IndustrySelector } from './IndustrySelector';
import { ExperienceSelector } from './ExperienceSelector';
import { IdentitySelector } from './IdentitySelector';
import { VisualStyleSelector } from './VisualStyleSelector';
import { InstallLevelSelector } from './InstallLevelSelector';
import { AdvancedOptions } from './AdvancedOptions';
import { PreviewCanvas } from './PreviewCanvas';
import { ProjectSummary } from './ProjectSummary';

export function Composer() {
  const [industry, setIndustry] = useState(INDUSTRIES[1].id);
  const [experience, setExperience] = useState(EXPERIENCES.find(e => e.industryId === INDUSTRIES[1].id)?.id || EXPERIENCES[3].id);
  const [visualStyle, setVisualStyle] = useState(AESTHETICS[2].id);
  const [identity, setIdentity] = useState(IDENTITIES[0].id);
  const [installLevel, setInstallLevel] = useState('complete');
  
  const [framework, setFramework] = useState('react');
  const [styling, setStyling] = useState('tailwind');
  
  const [isGenerating, setIsGenerating] = useState(false);

  // Hover states for immersive exploration
  const [hoveredInd, setHoveredInd] = useState<string | null>(null);
  const [hoveredExp, setHoveredExp] = useState<string | null>(null);
  const [hoveredAes, setHoveredAes] = useState<string | null>(null);
  const [hoveredIden, setHoveredIden] = useState<string | null>(null);

  // Resolution logic (use hover if present, else active)
  const targetIndId = hoveredInd || industry;
  const targetExpId = hoveredExp || (hoveredInd ? EXPERIENCES.find(e => e.industryId === hoveredInd)?.id || experience : experience);
  const targetAesId = hoveredAes || visualStyle;
  const targetIdenId = hoveredIden || identity;

  const targetInd = INDUSTRIES.find(i => i.id === targetIndId) ?? INDUSTRIES[0] ?? { id: 'unknown', name: 'Unknown' };
  const targetExp = EXPERIENCES.find(e => e.id === targetExpId) ?? EXPERIENCES[0] ?? { id: 'unknown', name: 'Unknown', variants: [] };
  const targetAes = AESTHETICS.find(a => a.id === targetAesId) ?? AESTHETICS[0] ?? { id: 'unknown', name: 'Unknown' };
  const targetIden = IDENTITIES.find(i => i.id === targetIdenId) ?? IDENTITIES[0] ?? { id: 'unknown', name: 'Unknown' };

  const targetAestheticMap = targetExp?.variants[0]?.blueprintIdMap || {};
  const targetBlueprintId = targetAestheticMap[targetAesId] || Object.values(targetAestheticMap)[0] || 'zenix-portfolio';
  const TargetComp = blueprints.find(b => b.id === targetBlueprintId)?.component;

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      window.location.href = '/studio';
    }, 2000);
  };

  const handleIndustryChange = (id: string) => {
    setIndustry(id);
    const newExp = EXPERIENCES.find(e => e.industryId === id);
    if (newExp) setExperience(newExp.id);
  };

  return (
    <section className={styles.composerWrapper}>
      <div className={styles.composerContainer}>
        
        {/* LEFT: Massive Preview Area (75%) */}
        <PreviewCanvas 
          targetExpName={targetExp.name} 
          targetKey={`${targetExp.id}-${targetAes.id}-${targetIden.id}`} 
          TargetComp={TargetComp} 
          targetStack={{
            exp: targetExp.name,
            iden: targetIden.name,
            aes: targetAes.name,
            framework: framework === 'react' ? 'React' : framework === 'nextjs' ? 'Next.js' : framework.toUpperCase()
          }}
        />

        {/* RIGHT: Configuration Area (25%) */}
        <div className={styles.configSection}>
          
          <div className={styles.separatorLine} />
          <div className={styles.headerContainer}>
            <h2 className={styles.headerTitle}>Compose your website.</h2>
            <p className={styles.headerDesc}>Choose an experience. Shape its identity. Launch when you're ready.</p>
          </div>

          <div>
            <div className={styles.sectionTitleBig}>1. What are you building?</div>
            <IndustrySelector 
              industries={INDUSTRIES} 
              experiences={EXPERIENCES} 
              activeId={industry} 
              onChange={handleIndustryChange}
              onHover={setHoveredInd}
            />
          </div>

          <div>
            <div className={styles.sectionTitleBig}>2. Choose your experience</div>
            <ExperienceSelector 
              experiences={EXPERIENCES.filter(e => e.industryId === industry)} 
              activeId={experience} 
              onChange={setExperience}
              onHover={setHoveredExp}
            />
          </div>

          <div>
            <div className={styles.sectionTitleMedium}>3. Make it yours</div>
            <div className={styles.flexColLarge}>
              <VisualStyleSelector 
                styles={AESTHETICS} 
                activeId={visualStyle} 
                onChange={setVisualStyle}
                onHover={setHoveredAes}
              />
              <IdentitySelector 
                identities={IDENTITIES} 
                activeId={identity} 
                onChange={setIdentity}
                onHover={setHoveredIden}
              />
            </div>
          </div>

          <InstallLevelSelector 
            activeId={installLevel} 
            onChange={setInstallLevel} 
          />
          
          <AdvancedOptions 
            framework={framework} setFramework={setFramework}
            styling={styling} setStyling={setStyling}
          />
          
          <ProjectSummary 
            isGenerating={isGenerating} onGenerate={handleGenerate}
          />
        </div>
      </div>
    </section>
  );
}
