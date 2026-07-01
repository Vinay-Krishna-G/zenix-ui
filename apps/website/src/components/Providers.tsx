'use client';

import { Experience } from '@zenixui/react';
import '@zenixui/react/styles.css';
import '@zenixui/pack-zenix';
import '@zenixui/pack-ocean';
import '@zenixui/pack-midnight';
import '@zenixui/pack-autumn';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Experience 
      preset="zenix" 
      overrides={{ 
        palette: { 
          background: '#09090B', 
          surface: '#111113', 
          surfaceElevated: 'rgba(255, 255, 255, 0.08)', 
          textPrimary: '#FAFAFA',
          textMuted: '#A1A1AA',
          primary: '#FAFAFA',
          accent: '#5E6AD2'
        } 
      }}
    >
      {children}
    </Experience>
  );
}
