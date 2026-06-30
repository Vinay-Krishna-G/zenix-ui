
export * from './types';
export * from './industries';
export * from './aesthetics';
export * from './brands';
export * from './experiences';

import * as industries from './industries';
import * as aesthetics from './aesthetics';
import * as brands from './brands';
import * as experiences from './experiences';

export const INDUSTRIES = Object.values(industries);
export const AESTHETICS = Object.values(aesthetics);
export const BRAND_PACKS = Object.values(brands);
export const EXPERIENCES = Object.values(experiences);
