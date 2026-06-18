'use client';

import { Experience } from '@zenixui/react';
import '@zenixui/react/styles.css';
import '@zenixui/pack-zenix';
import '@zenixui/pack-ocean';
import '@zenixui/pack-night-city';
import '@zenixui/pack-autumn';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Experience preset="zenix">
      {children}
    </Experience>
  );
}
