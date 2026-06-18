import { registerPreset } from '@zenixui/core';
import type { ExperiencePreset } from '@zenixui/core';
import './tokens.css';

export const zenixPreset: ExperiencePreset = {
  metadata: {
    id: 'zenix',
    name: 'Zenix',
    description: 'The flagship minimal SaaS experience.',
    defaultMotion: 'subtle',
    capabilities: ['minimal'],
    assets: {}
  },
  themeClass: 'zx-theme-zenix'
};

// Zenix is extremely minimal, no heavy scenes or effects by default.
// It relies purely on geometry, typography, and shadow.

registerPreset(zenixPreset);

export default zenixPreset;
