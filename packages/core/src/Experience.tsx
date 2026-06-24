'use client';

import React, { createContext, useContext, useMemo } from 'react';
import { getPreset } from './registry';
import { transformThemeToCSSVariables } from './transformer';
import type { MotionProfile, ExperiencePreset, ThemeConfig, ThemePreset } from './types';

interface ExperienceContextValue {
  preset: ExperiencePreset;
  motion: MotionProfile;
  overrides?: Partial<ThemeConfig>;
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
  preset?: ThemePreset | ExperiencePreset;
  theme?: ThemeConfig;
  overrides?: Partial<ThemeConfig>;
  background?: 'default' | 'none' | React.ReactNode;
  children: React.ReactNode;
}

export function Experience({
  preset,
  theme,
  overrides = {},
  background = 'default',
  children,
}: ExperienceProps) {
  if (preset && theme?.base) {
    throw new Error('ZenixUI: Use either preset or theme.base, not both. They are mutually exclusive.');
  }

  const resolvedPresetId = theme?.base || preset || 'zenix';
  const resolvedOverrides: Partial<ThemeConfig> = {
    ...overrides,
    ...(theme || {})
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

  const styleOverrides = transformThemeToCSSVariables(resolvedOverrides);

  return (
    <ExperienceContext.Provider value={{ preset: resolvedPreset, motion: activeMotion as MotionProfile, overrides: resolvedOverrides }}>
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
