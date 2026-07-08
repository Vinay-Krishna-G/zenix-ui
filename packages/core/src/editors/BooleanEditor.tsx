import React from 'react';
import type { EditorProps } from '../EditorRegistry';

export function BooleanEditor({ value, onChange, field }: EditorProps) {
  const isChecked = Boolean(value ?? field.defaultValue ?? false);
  
  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id={`checkbox-${field.label}`}
        checked={isChecked}
        onChange={(e) => onChange(e.target.checked)}
        className="w-4 h-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500"
      />
      <label htmlFor={`checkbox-${field.label}`} className="text-sm font-medium text-slate-700">
        {field.label}
      </label>
      {field.description && (
        <span className="text-xs text-slate-500 ml-2">({field.description})</span>
      )}
    </div>
  );
}
