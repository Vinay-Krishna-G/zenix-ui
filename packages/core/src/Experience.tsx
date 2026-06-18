import React, { createContext, useContext, useMemo } from 'react';
import { getPreset } from './registry';
import type { MotionProfile, ExperiencePreset } from './types';

interface ExperienceContextValue {
  preset: ExperiencePreset;
  motion: MotionProfile;
}

const ExperienceContext = createContext<ExperienceContextValue | null>(null);

export function useExperience() {
  const context = useContext(ExperienceContext);
  if (!context) {
    throw new Error('useExperience must be used within an Experience provider');
  }
  return context;
}

export interface ExperienceProps {
  preset: string | ExperiencePreset;
  motion?: MotionProfile;
  background?: 'default' | 'none' | React.ReactNode;
  accent?: string;
  radius?: string;
  children: React.ReactNode;
}

export function Experience({
  preset,
  motion,
  background = 'default',
  accent,
  radius,
  children,
}: ExperienceProps) {
  const resolvedPreset = useMemo(() => {
    if (typeof preset === 'string') {
      const found = getPreset(preset);
      if (!found) {
        throw new Error(`ZenixUI: Preset "${preset}" not found in registry. Did you forget to register it?`);
      }
      return found;
    }
    return preset;
  }, [preset]);

  const activeMotion = motion || resolvedPreset.metadata.defaultMotion || 'normal';

  const { themeClass, SceneComponent, EffectComponent } = resolvedPreset;

  return (
    <ExperienceContext.Provider value={{ preset: resolvedPreset, motion: activeMotion }}>
      <div 
        className={`zx-experience ${themeClass || ''}`} 
        data-zx-motion={activeMotion}
        style={{ 
          position: 'relative', 
          width: '100%', 
          minHeight: '100vh', 
          overflow: 'hidden',
          ...((accent || radius) ? { 
            ...(accent ? { '--zx-accent': accent } : {}),
            ...(radius ? { '--zx-radius': radius } : {}) 
          } : {}) as any
        }}
      >
        {/* Render Background Scene logic */}
        {background === 'default' && SceneComponent && <SceneComponent />}
        {background !== 'default' && background !== 'none' && (
          <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
            {background}
          </div>
        )}

        {EffectComponent && <EffectComponent />}
        
        {/* Render content on top of scenes and effects */}
        <div style={{ position: 'relative', zIndex: 10, width: '100%', height: '100%' }}>
          {children}
        </div>
      </div>
    </ExperienceContext.Provider>
  );
}
