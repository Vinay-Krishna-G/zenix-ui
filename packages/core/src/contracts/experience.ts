import type { ComponentType } from 'react';

export interface BlockInstance {
  instanceId: string;
  type: string;
  variant: string;
  props?: Record<string, any>;
}

export interface PageConfig {
  path: string;
  blocks: BlockInstance[];
}

export interface EditableField {
  type: 'text' | 'textarea' | 'color' | 'image' | 'boolean' | 'number' | 'select';
  label: string;
  description?: string;
  required?: boolean;
  defaultValue?: any;
  options?: any[]; // For select or segmented controls
}

export interface FieldGroup {
  id: string;
  title: string;
  fields: Record<string, EditableField>;
}

export interface BlockDefinition {
  type: string;
  variant: string;
  component: ComponentType<any>;
  metadata: {
    name: string;
    description?: string;
  };
  fieldGroups: FieldGroup[];
}

export interface ExperienceConfig {
  id: string;
  metadata: {
    name: string;
    category: string;
  };
  branding: {
    companyName: string;
    logo?: string;
    tagline?: string;
  };
  theme: {
    preset: string;
  };
  navigation: Record<string, any>;
  pages: Record<string, PageConfig>;
  content: Record<string, any>;
  assets: Record<string, any>;
}
