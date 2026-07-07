import type { ComponentType } from 'react';
import type { EditableField } from './contracts/experience';

export interface EditorProps {
  value: any;
  onChange: (val: any) => void;
  field: EditableField;
}

export type EditorComponent = ComponentType<EditorProps>;

class EditorRegistry {
  private editors: Map<string, EditorComponent> = new Map();

  public register(type: string, component: EditorComponent) {
    this.editors.set(type, component);
  }

  public get(type: string): EditorComponent | undefined {
    return this.editors.get(type);
  }
}

export const editorRegistry = new EditorRegistry();
