import { registerPreset } from '@zenixui/core';
import type { ExperiencePreset } from '@zenixui/core';
import { NightCityScene } from '@zenixui/scenes';
import { NightCityEffect } from '@zenixui/effects';
import './theme.css';

export const nightCityPreset: ExperiencePreset = {
  metadata: {
    id: 'night-city',
    name: 'Night City',
    description: 'A neon-drenched urban atmosphere.',
    defaultMotion: 'standard',
    capabilities: ['glow', 'neon', 'particles', 'cityscape', 'fast-motion'],
    assets: {
      skyline: '/assets/city-skyline.svg',
    },
    supportedFrameworks: ['react', 'nextjs', 'vite']
  },
  themeClass: 'zx-theme-night-city',
  SceneComponent: NightCityScene,
  EffectComponent: NightCityEffect,
};

registerPreset(nightCityPreset);

export default nightCityPreset;
