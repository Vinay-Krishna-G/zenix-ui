'use client';

import React from 'react';
import {
  ExperienceProvider,
  ExperienceEngine,
  useExperienceConfig,
  ExperienceConfig,
  blockRegistry,
  editorRegistry,
  TextInputEditor,
} from '@zenixui/core';

import { classicHeroDefinition } from './components/ClassicHero';
import { splitHeroDefinition } from './components/SplitHero';

// Register blocks
blockRegistry.register(classicHeroDefinition);
blockRegistry.register(splitHeroDefinition);

// Register editors
editorRegistry.register('text', TextInputEditor);
editorRegistry.register('textarea', TextInputEditor); // Fallback for now

// Mock initial config
const initialConfig: ExperienceConfig = {
  id: 'agency-01',
  metadata: {
    name: 'Agency Pro',
    category: 'Agency',
  },
  branding: {
    companyName: 'Acme AI',
    tagline: 'We build amazing AI experiences for everyone.',
  },
  theme: {
    preset: 'zenix',
  },
  navigation: {},
  pages: {
    home: {
      path: '/',
      blocks: [
        {
          instanceId: 'hero-1',
          type: 'hero',
          variant: 'classic',
          props: {},
        }
      ],
    }
  },
  content: {},
  assets: {},
};

function StudioControls() {
  const { config, activePageId, updateBlockField, updateConfig } = useExperienceConfig();
  
  const activePage = config.pages[activePageId];

  const handleHeroVariantChange = (e: React.ChangeEvent<HTMLSelectElement>, instanceId: string) => {
    const newVariant = e.target.value;
    updateConfig((prev) => {
      const newPages = { ...prev.pages };
      if (newPages[activePageId]) {
        newPages[activePageId] = {
          ...newPages[activePageId],
          blocks: newPages[activePageId].blocks.map(b => 
            b.instanceId === instanceId ? { ...b, variant: newVariant } : b
          )
        };
      }
      return { ...prev, pages: newPages };
    });
  };

  return (
    <div className="w-80 h-full border-r border-slate-200 bg-white p-6 flex flex-col font-sans overflow-y-auto">
      <h2 className="text-xl font-bold text-slate-800 mb-8">Studio Controls</h2>

      {activePage?.blocks.map(blockInstance => {
        const definition = blockRegistry.get(blockInstance.type, blockInstance.variant);
        const variants = blockRegistry.getVariantsForType(blockInstance.type);

        if (!definition) return null;

        return (
          <div key={blockInstance.instanceId} className="space-y-8 mb-12">
            <div>
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4 border-b pb-2">
                {definition.metadata.name}
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Variant</label>
                  <select
                    value={blockInstance.variant}
                    onChange={(e) => handleHeroVariantChange(e, blockInstance.instanceId)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm bg-white capitalize"
                  >
                    {variants.map(v => (
                      <option key={v} value={v}>{v}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {definition.fieldGroups.map(group => (
              <div key={group.id} className="mt-6">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                  {group.title}
                </h4>
                
                <div className="space-y-4">
                  {Object.entries(group.fields).map(([fieldId, field]) => {
                    const EditorComponent = editorRegistry.get(field.type);
                    
                    if (!EditorComponent) {
                      return (
                        <div key={fieldId} className="text-xs text-rose-500 bg-rose-50 p-2 rounded">
                          No editor registered for type: {field.type}
                        </div>
                      );
                    }

                    return (
                      <EditorComponent
                        key={fieldId}
                        field={field}
                        value={blockInstance.props?.[fieldId] ?? field.defaultValue}
                        onChange={(val) => updateBlockField(activePageId, blockInstance.instanceId, fieldId, val)}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

function LivePreview() {
  const { config } = useExperienceConfig();
  return (
    <div className="flex-1 bg-slate-100 h-full overflow-y-auto relative">
      <div className="absolute top-4 right-4 bg-black/80 text-white text-xs px-2 py-1 rounded shadow-sm z-50">
        Live Preview
      </div>
      <ExperienceEngine experience={config} />
    </div>
  );
}

export default function StudioPlaygroundPage() {
  return (
    <ExperienceProvider initialConfig={initialConfig}>
      <div className="flex w-full h-screen overflow-hidden bg-white">
        <StudioControls />
        <LivePreview />
      </div>
    </ExperienceProvider>
  );
}
