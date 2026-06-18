import { registerPreset } from '@zenixui/core';
import type { ExperiencePreset } from '@zenixui/core';
import { AutumnScene } from '@zenixui/scenes';
import { AutumnEffect } from '@zenixui/effects';
import './theme.css';

export const autumnPreset: ExperiencePreset = {
  metadata: {
    id: 'autumn',
    name: 'Autumn',
    description: 'A warm, falling leaves atmosphere.',
    defaultMotion: 'subtle',
    capabilities: ['leaves', 'warm-light', 'ambient-motion', 'organic'],
    assets: {
      leaf: '/assets/autumn-leaf.svg',
    }
  },
  themeClass: 'zx-theme-autumn',
  SceneComponent: AutumnScene,
  EffectComponent: AutumnEffect,
};

registerPreset(autumnPreset);

export default autumnPreset;
