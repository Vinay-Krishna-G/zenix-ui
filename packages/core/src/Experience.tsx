import React, { createContext, useContext, useMemo } from 'react';
import { getPreset } from './registry';
import type { MotionProfile, ExperiencePreset, ThemeConfig, ThemeOverrides } from './types';

interface ExperienceContextValue {
  preset: ExperiencePreset;
  motion: MotionProfile;
  overrides?: ThemeOverrides;
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
  preset?: string | ExperiencePreset;
  config?: ThemeConfig;
  overrides?: ThemeOverrides;
  background?: 'default' | 'none' | React.ReactNode;
  children: React.ReactNode;
}

export function Experience({
  preset,
  config,
  overrides = {},
  background = 'default',
  children,
}: ExperienceProps) {
  // If config is provided, it overrides the preset and base overrides
  const resolvedPresetId = config?.base || preset || 'zenix';
  const resolvedOverrides: ThemeOverrides = {
    ...overrides,
    ...(config || {})
  };

  const resolvedPreset = useMemo(() => {
    if (typeof resolvedPresetId === 'string') {
      const found = getPreset(resolvedPresetId);
      if (!found) {
        throw new Error(`ZenixUI: Preset "${resolvedPresetId}" not found in registry. Did you forget to register it?`);
      }
      return found;
    }
    return resolvedPresetId;
  }, [resolvedPresetId]);

  const activeMotion = resolvedOverrides.motion || resolvedPreset.metadata.defaultMotion || 'normal';

  const { themeClass, SceneComponent, EffectComponent } = resolvedPreset;

  const styleOverrides: Record<string, string> = {};
  if (resolvedOverrides.accent) styleOverrides['--zx-accent'] = resolvedOverrides.accent;
  if (resolvedOverrides.radius) styleOverrides['--zx-radius'] = resolvedOverrides.radius;
  if (resolvedOverrides.density) styleOverrides['--zx-density-scale'] = resolvedOverrides.density === 'compact' ? '0.8' : resolvedOverrides.density === 'spacious' ? '1.2' : '1';
  if (resolvedOverrides.typography) styleOverrides['--zx-font-primary'] = resolvedOverrides.typography;

  return (
    <ExperienceContext.Provider value={{ preset: resolvedPreset, motion: activeMotion, overrides: resolvedOverrides }}>
      <div 
        className={`zx-experience ${themeClass || ''}`} 
        data-zx-motion={activeMotion}
        style={{ 
          position: 'relative', 
          width: '100%', 
          minHeight: '100vh', 
          overflow: 'hidden',
          ...styleOverrides
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
