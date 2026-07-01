import manifestJson from '../../../public/previews/preview-manifest.json';

export interface PreviewManifestEntry {
  image: string;
  theme: string;
  updated: string;
}

export const previewManifest = manifestJson as Record<string, PreviewManifestEntry>;

export function getPreviewImage(experienceId: string, brandId: string, variantId: string = 'default', aestheticId: string = 'glass'): string {
  const cacheKey = `${experienceId}-${brandId}-${variantId}-${aestheticId}`;
  return previewManifest[cacheKey]?.image || `/previews/${cacheKey}.png`;
}
