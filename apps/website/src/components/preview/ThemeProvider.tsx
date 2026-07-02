'use client';

import React from 'react';
import { ThemeTokens } from '@zenixui/core';

interface ThemeProviderProps {
  theme: ThemeTokens;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * ThemeProvider strictly handles CSS variable injection for a given identity.
 * It does not handle layout, scaling, or responsive modes.
 */
export function ThemeProvider({ theme, children, className, style }: ThemeProviderProps) {
  // Convert strongly-typed tokens to semantic CSS variables
  const cssVariables = {
    '--zx-primary': theme.primary,
    '--zx-secondary': theme.secondary,
    '--zx-accent': theme.accent,
    '--zx-background': theme.background,
    '--zx-surface': theme.surface,
    '--zx-text': theme.text,
    '--zx-muted': theme.muted,
    '--zx-border': theme.border,
    color: theme.text,
    backgroundColor: theme.background,
  } as React.CSSProperties;

  return (
    <div
      className={className}
      style={{
        ...cssVariables,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
