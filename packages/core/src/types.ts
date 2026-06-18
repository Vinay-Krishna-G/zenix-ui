import React from 'react';

export type MotionProfile = 'none' | 'subtle' | 'normal' | 'immersive';

export interface ExperienceMetadata {
  id: string;
  name: string;
  description: string;
  defaultMotion: MotionProfile;
  capabilities: string[];
  assets: Record<string, string>;
}

export interface ExperiencePreset {
  metadata: ExperienceMetadata;
  themeClass?: string; // CSS class that injects the tokens, e.g. 'zx-theme-ocean'
  SceneComponent?: React.ComponentType<any>;
  EffectComponent?: React.ComponentType<any>;
}
