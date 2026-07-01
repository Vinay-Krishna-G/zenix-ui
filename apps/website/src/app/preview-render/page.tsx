import React from 'react';
import { LivePreview } from '../../components/preview/LivePreview';

// This is a hidden page used strictly by Playwright to generate clean screenshots
export default async function PreviewRenderPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedParams = await searchParams;
  
  const expId = typeof resolvedParams.exp === 'string' ? resolvedParams.exp : 'ai-startup';
  const brandId = typeof resolvedParams.brand === 'string' ? resolvedParams.brand : 'tiffany';
  const variantId = typeof resolvedParams.variant === 'string' ? resolvedParams.variant : 'cyber';
  const aestheticId = typeof resolvedParams.aesthetic === 'string' ? resolvedParams.aesthetic : 'nova';

  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0, overflow: 'hidden' }}>
      <LivePreview 
        experienceId={expId}
        brandId={brandId}
        variantId={variantId}
        aestheticId={aestheticId}
      />
    </div>
  );
}
