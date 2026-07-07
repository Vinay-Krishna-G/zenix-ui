import React from 'react';
import type { ExperienceConfig } from './contracts/experience';
import { blockRegistry } from './BlockRegistry';
import { useExperienceConfig } from './ExperienceProvider';

export interface ExperienceEngineProps {
  experience: ExperienceConfig;
}

export function ExperienceEngine({ experience }: ExperienceEngineProps) {
  const { activePageId } = useExperienceConfig();
  
  const activePage = experience.pages[activePageId];

  if (!activePage) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 text-slate-500 font-sans">
        No active page configured in the experience.
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col min-h-screen bg-white font-sans">
      {activePage.blocks.map((blockInstance) => {
        const definition = blockRegistry.get(blockInstance.type, blockInstance.variant);

        if (!definition) {
          return (
            <div 
              key={blockInstance.instanceId} 
              className="p-8 border-2 border-dashed border-rose-300 bg-rose-50 text-rose-600 m-4 rounded-lg text-center"
            >
              <strong>Missing Block:</strong> Could not resolve {blockInstance.type} ({blockInstance.variant})
            </div>
          );
        }

        const Component = definition.component;
        
        return (
          <Component 
            key={blockInstance.instanceId} 
            experience={experience} 
            instance={blockInstance} 
          />
        );
      })}
    </div>
  );
}
