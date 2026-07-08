'use client';

import React from 'react';
import {
  ExperienceProvider,
  ExperienceEngine,
  useExperienceConfig,
  blockRegistry,
  editorRegistry,
  TextInputEditor,
  TextareaEditor,
  BooleanEditor,
  ArrayEditor
} from '@zenixui/core';

import { centeredHeroDefinition, splitHeroDefinition } from './blocks/hero';
import { businessNavbarDefinition } from './blocks/navbar';
import { gridFeaturesDefinition } from './blocks/features';
import { cardsPricingDefinition } from './blocks/pricing';
import { centeredCTADefinition } from './blocks/cta';
import { businessFooterDefinition } from './blocks/footer';

import { businessLandingExperience } from './experiences/business-landing';

// Register blocks
blockRegistry.register(businessNavbarDefinition);
blockRegistry.register(centeredHeroDefinition);
blockRegistry.register(splitHeroDefinition);
blockRegistry.register(gridFeaturesDefinition);
blockRegistry.register(cardsPricingDefinition);
blockRegistry.register(centeredCTADefinition);
blockRegistry.register(businessFooterDefinition);

// Register editors
editorRegistry.register('text', TextInputEditor);
editorRegistry.register('textarea', TextareaEditor);
editorRegistry.register('boolean', BooleanEditor);
editorRegistry.register('array', ArrayEditor);
editorRegistry.register('image', TextInputEditor); // Fallback for image

function StudioControls() {
  const { config, activePageId, updateBlockField, updateConfig } = useExperienceConfig();
  
  const activePage = config.pages[activePageId];

  const handleVariantChange = (e: React.ChangeEvent<HTMLSelectElement>, instanceId: string) => {
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

  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateConfig(prev => ({
      ...prev,
      theme: {
        ...prev.theme,
        preset: prev.theme?.preset || 'zenix',
        colors: {
          ...prev.theme?.colors,
          primary: e.target.value
        }
      }
    }));
  };

  const handleExport = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(config, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "experience.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const primaryColor = config.theme?.colors?.primary || '#4f46e5';

  return (
    <div className="w-96 h-full border-r border-slate-200 bg-white p-6 flex flex-col font-sans overflow-y-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-bold text-slate-800">Studio Controls</h2>
        <button 
          onClick={handleExport}
          className="text-xs bg-slate-900 text-white px-3 py-1.5 rounded hover:bg-slate-800 transition-colors shadow-sm"
        >
          Export
        </button>
      </div>

      {/* Theme Panel */}
      <div className="space-y-4 mb-10 border border-slate-200 rounded-lg p-4 bg-white shadow-sm">
        <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-2 border-b border-slate-100 pb-2">
          Global Theme
        </h3>
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-slate-700">Primary Color</label>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-mono">{primaryColor}</span>
            <input 
              type="color" 
              value={primaryColor}
              onChange={handleThemeChange}
              className="w-8 h-8 rounded cursor-pointer border-0 p-0"
            />
          </div>
        </div>
      </div>

      {activePage?.blocks.map(blockInstance => {
        const definition = blockRegistry.get(blockInstance.type, blockInstance.variant);
        const variants = blockRegistry.getVariantsForType(blockInstance.type);

        if (!definition) return null;

        return (
          <div key={blockInstance.instanceId} className="space-y-8 mb-12 border border-slate-100 rounded-lg p-4 bg-slate-50/50">
            <div>
              <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-4 border-b pb-2 flex items-center justify-between">
                <span>{definition.metadata.name}</span>
                <span className="text-[10px] bg-slate-200 text-slate-600 px-2 py-0.5 rounded capitalize">{blockInstance.type}</span>
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Variant</label>
                  <select
                    value={blockInstance.variant}
                    onChange={(e) => handleVariantChange(e, blockInstance.instanceId)}
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
              <div key={group.id} className="mt-6 pt-4 border-t border-slate-200/60">
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                  {group.title}
                </h4>
                
                <div className="space-y-6">
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
    <ExperienceProvider initialConfig={businessLandingExperience}>
      <div className="flex w-full h-screen overflow-hidden bg-white">
        <StudioControls />
        <LivePreview />
      </div>
    </ExperienceProvider>
  );
}
