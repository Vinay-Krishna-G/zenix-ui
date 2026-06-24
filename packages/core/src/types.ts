import React from 'react';

export type MotionProfile = 'none' | 'minimal' | 'standard' | 'expressive';
export type ThemePreset = 'zenix' | 'ocean' | 'night-city' | 'autumn';
export type HeadingFont = 'inter' | 'geist' | 'manrope';
export type BodyFont = 'system' | 'inter' | 'geist';
export type MonoFont = 'fira-code' | 'jetbrains-mono';

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

export interface ThemeConfig {
  /** The foundational design system */
  base: ThemePreset;
  
  /** Name of this specific theme configuration */
  name?: string;

  /** Controlled Design Tokens */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  density?: 'compact' | 'comfortable' | 'spacious';
  motion?: MotionProfile;
  
  /** Typography System */
  typography?: {
    heading?: HeadingFont;
    body?: BodyFont;
    mono?: MonoFont;
  };

  /** Theme Effects */
  effects?: {
    shadow?: 'none' | 'soft' | 'medium' | 'strong';
    glass?: 'none' | 'subtle' | 'normal' | 'heavy';
    blur?: 'none' | 'sm' | 'md' | 'lg';
  };
  
  /** Comprehensive Semantic Palette */
  palette?: {
    // Brand
    primary?: string;
    primaryHover?: string;
    primaryActive?: string;
    
    // Backgrounds
    background?: string;
    surface?: string;
    surfaceElevated?: string;
    
    // Typography
    textPrimary?: string;
    textSecondary?: string;
    textMuted?: string;
    
    // Intent
    success?: string;
    warning?: string;
    danger?: string;
    info?: string;
    
    // UI Elements
    border?: string;
    borderHover?: string;
  };
}
