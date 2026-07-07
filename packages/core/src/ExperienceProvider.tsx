'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import type { ExperienceConfig } from './contracts/experience';

interface ExperienceContextValue {
  config: ExperienceConfig;
  activePageId: string;
  setActivePageId: (id: string) => void;
  updateBlockField: (pageId: string, instanceId: string, fieldId: string, value: any) => void;
  // Expose the raw updater for advanced cases, but prefer specific mutations
  updateConfig: (updater: (prev: ExperienceConfig) => ExperienceConfig) => void;
}

const ExperienceContext = createContext<ExperienceContextValue | null>(null);

export function useExperienceConfig() {
  const context = useContext(ExperienceContext);
  if (!context) {
    throw new Error('useExperienceConfig must be used within an ExperienceProvider');
  }
  return context;
}

interface ExperienceProviderProps {
  initialConfig: ExperienceConfig;
  initialPageId?: string;
  children: ReactNode;
}

export function ExperienceProvider({ initialConfig, initialPageId = 'home', children }: ExperienceProviderProps) {
  const [config, setConfig] = useState<ExperienceConfig>(initialConfig);
  const [activePageId, setActivePageId] = useState<string>(initialPageId);

  const updateBlockField = (pageId: string, instanceId: string, fieldId: string, value: any) => {
    setConfig((prev) => {
      const newPages = { ...prev.pages };
      const page = newPages[pageId];
      if (page) {
        newPages[pageId] = {
          ...page,
          blocks: page.blocks.map(b => 
            b.instanceId === instanceId 
              ? { ...b, props: { ...(b.props || {}), [fieldId]: value } }
              : b
          )
        };
      }
      return { ...prev, pages: newPages };
    });
  };

  return (
    <ExperienceContext.Provider value={{ config, activePageId, setActivePageId, updateBlockField, updateConfig: setConfig }}>
      {children}
    </ExperienceContext.Provider>
  );
}
