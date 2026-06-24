import { registerPreset } from '@zenixui/core';
import type { ExperiencePreset } from '@zenixui/core';
import { OceanScene } from '@zenixui/scenes';
import { OceanEffect } from '@zenixui/effects';
import './theme.css';

export const oceanPreset: ExperiencePreset = {
  metadata: {
    id: 'ocean',
    name: 'Ocean',
    description: 'A deep, tranquil oceanic experience.',
    defaultMotion: 'standard',
    capabilities: ['glass', 'waves', 'particles', 'gradient', 'ambient-motion'],
    assets: {
      wave: '/assets/ocean-wave.svg',
    },
    supportedFrameworks: ['react', 'nextjs', 'vite']
  },
  themeClass: 'zx-theme-ocean',
  SceneComponent: OceanScene,
  EffectComponent: OceanEffect,
};

// Auto-register upon import
registerPreset(oceanPreset);

export default oceanPreset;
