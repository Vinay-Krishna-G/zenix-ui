import { ExperienceMetadata, registerPreset } from '@zenixui/core';
import './tokens.css';

export const metadata: ExperienceMetadata = {
  id: 'zenix',
  capabilities: ['glass', 'minimal'],
  assets: {}
};

// Zenix is extremely minimal, no heavy scenes or effects by default.
// It relies purely on geometry, typography, and shadow.

registerPreset({
  metadata,
  scenes: {},
  effects: {}
});
