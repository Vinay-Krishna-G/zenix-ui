/**
 * PreviewResolver — Maps (experience, brand, aesthetic) to a blueprint component.
 *
 * Resilience rules:
 *  1. If the exact aesthetic isn't in blueprintIdMap, fall back to the first
 *     available mapping rather than returning isValid=false.
 *  2. If no variant matches variantId, use the experience's first variant.
 *  3. brand is informational — its absence should not block rendering.
 */

import { EXPERIENCES, IDENTITIES, AESTHETICS, Experience, Identity, Aesthetic } from '../../lib/launchpad';
import { blueprints } from '@zenixui/blueprints';
import React from 'react';

export interface ResolvedPreview {
  experience?: Experience;
  brand?: Identity;
  aesthetic?: Aesthetic;
  BlueprintComponent?: React.ComponentType;
  /** True when a blueprint component was found. brand/aesthetic may still be absent. */
  isValid: boolean;
  /** The blueprint ID that was actually resolved (may differ from the aestheticId mapping). */
  resolvedBlueprintId?: string;
}

export function resolvePreview(
  experienceId: string,
  brandId: string,
  variantId: string,
  aestheticId: string
): ResolvedPreview {
  const experience = EXPERIENCES.find(e => e.id === experienceId);

  // Brand and aesthetic are optional for the preview to render.
  const brand     = IDENTITIES.find(b => b.id === brandId);
  const aesthetic = AESTHETICS.find(a => a.id === aestheticId);

  if (!experience) {
    return { isValid: false };
  }

  // Find the requested variant, fall back to the first available variant.
  const variant =
    experience.variants.find(v => v.id === variantId) ??
    experience.variants[0];

  if (!variant) {
    return { experience, brand, aesthetic, isValid: false };
  }

  const blueprintIdMap = variant.blueprintIdMap;

  // 1. Try the exact aesthetic mapping.
  // 2. Fall back to any available mapping in the variant.
  const resolvedBlueprintId =
    blueprintIdMap[aestheticId] ??
    blueprintIdMap[Object.keys(blueprintIdMap)[0]];

  const BlueprintComponent = blueprints.find(b => b.id === resolvedBlueprintId)?.component;

  // isValid only requires that we found a component to render.
  // brand and aesthetic are available for theming but are not blocking.
  const isValid = Boolean(BlueprintComponent);

  return {
    experience,
    brand,
    aesthetic,
    BlueprintComponent,
    isValid,
    resolvedBlueprintId,
  };
}
