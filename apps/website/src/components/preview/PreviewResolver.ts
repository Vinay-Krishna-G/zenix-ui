import { EXPERIENCES, IDENTITIES, AESTHETICS, Experience, Identity, Aesthetic } from '../../lib/launchpad';
import { blueprints } from '@zenixui/blueprints';
import React from 'react';

export interface ResolvedPreview {
  experience?: Experience;
  brand?: Identity;
  aesthetic?: Aesthetic;
  BlueprintComponent?: React.ComponentType;
  isValid: boolean;
}

export function resolvePreview(
  experienceId: string, 
  brandId: string, 
  variantId: string, 
  aestheticId: string
): ResolvedPreview {
  const experience = EXPERIENCES.find(e => e.id === experienceId);
  const brand = IDENTITIES.find(b => b.id === brandId);
  const aesthetic = AESTHETICS.find(a => a.id === aestheticId);
  
  const variant = experience?.variants.find(v => v.id === variantId) || experience?.variants[0];
  const blueprintId = variant?.blueprintIdMap[aestheticId] || variant?.blueprintIdMap[Object.keys(variant?.blueprintIdMap || {})[0]];
  
  const BlueprintComponent = blueprints.find(b => b.id === blueprintId)?.component;

  const isValid = Boolean(experience && brand && aesthetic && BlueprintComponent);

  return {
    experience,
    brand,
    aesthetic,
    BlueprintComponent,
    isValid
  };
}
