import React, { useState } from 'react';
import type { EditorProps } from '../EditorRegistry';
import { editorRegistry } from '../EditorRegistry';
import type { EditableField } from '../contracts/experience';

export function ArrayEditor({ value, onChange, field }: EditorProps) {
  const items = Array.isArray(value) ? value : [];
  const schema = field.schema || {};
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleAddItem = () => {
    const newItem: Record<string, any> = {};
    Object.entries(schema).forEach(([key, subField]) => {
      newItem[key] = subField.defaultValue ?? '';
    });
    const newItems = [...items, newItem];
    onChange(newItems);
    setExpandedIndex(newItems.length - 1);
  };

  const handleRemoveItem = (index: number) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    onChange(newItems);
    if (expandedIndex === index) setExpandedIndex(null);
  };

  const handleItemChange = (index: number, key: string, val: any) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [key]: val };
    onChange(newItems);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium text-slate-700">
          {field.label}
          {field.required && <span className="text-rose-500 ml-1">*</span>}
        </label>
        <button
          onClick={handleAddItem}
          className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 px-2 py-1 rounded"
        >
          + Add Item
        </button>
      </div>
      
      {field.description && (
        <p className="text-xs text-slate-500">{field.description}</p>
      )}

      {items.length === 0 && (
        <div className="text-xs text-slate-400 italic text-center py-4 bg-slate-50 border border-dashed border-slate-200 rounded">
          No items yet.
        </div>
      )}

      <div className="space-y-2">
        {items.map((item, index) => {
          const isExpanded = expandedIndex === index;
          const displayTitle = item.title || item.name || `Item ${index + 1}`;

          return (
            <div key={index} className="border border-slate-200 rounded bg-slate-50">
              <div 
                className="flex items-center justify-between p-2 cursor-pointer hover:bg-slate-100"
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
              >
                <span className="text-sm font-medium text-slate-700 truncate">{displayTitle}</span>
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleRemoveItem(index); }}
                    className="text-rose-400 hover:text-rose-600 px-1"
                  >
                    ×
                  </button>
                </div>
              </div>

              {isExpanded && (
                <div className="p-3 border-t border-slate-200 space-y-4 bg-white">
                  {Object.entries(schema).map(([key, subField]: [string, EditableField]) => {
                    const EditorComponent = editorRegistry.get(subField.type);
                    
                    if (!EditorComponent) {
                      return (
                        <div key={key} className="text-xs text-rose-500">
                          Missing editor for {subField.type}
                        </div>
                      );
                    }

                    return (
                      <EditorComponent
                        key={key}
                        field={subField}
                        value={item[key]}
                        onChange={(val) => handleItemChange(index, key, val)}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
