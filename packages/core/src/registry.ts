import type { ExperiencePreset } from './types';

const registry = new Map<string, ExperiencePreset>();

export function registerPreset(preset: ExperiencePreset) {
  registry.set(preset.metadata.id, preset);
}

export function getPreset(id: string): ExperiencePreset | undefined {
  return registry.get(id);
}
