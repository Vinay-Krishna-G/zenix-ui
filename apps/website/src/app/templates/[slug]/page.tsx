import { notFound } from 'next/navigation';
import { blueprints, type Framework } from '@zenixui/blueprints';
import Link from 'next/link';
import { Surface, Button } from '@zenixui/components';
import { BlueprintThumbnail } from '../../../components/preview/BlueprintThumbnail';

const FRAMEWORKS: { id: Framework; name: string }[] = [
  { id: 'react', name: 'React' },
  { id: 'nextjs', name: 'Next.js' },
  { id: 'vite', name: 'Vite' },
];

export async function generateStaticParams() {
  const categories = Array.from(new Set(blueprints.map(bp => bp.category)));
  const params: { slug: string }[] = [];

  for (const fw of FRAMEWORKS) {
    for (const category of categories) {
      params.push({ slug: `${fw.id}-${category}-template` });
    }
  }

  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  const fwId = FRAMEWORKS.find(f => resolvedParams.slug.startsWith(`${f.id}-`))?.id || 'react';
  const category = resolvedParams.slug.replace(`${fwId}-`, '').replace('-template', '');
  
  const framework = FRAMEWORKS.find(f => f.id === fwId)?.name || 'React';
  const displayCategory = category ? category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : 'Experience';

  return {
    title: `${framework} ${displayCategory} Templates | ZenixUI`,
    description: `Production-ready ${framework} ${displayCategory} templates with Tailwind CSS and ZenixUI. Copy, paste, and customize in seconds.`,
  };
}

export default async function TemplateCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  const fwId = FRAMEWORKS.find(f => resolvedParams.slug.startsWith(`${f.id}-`))?.id || 'react';
  const category = resolvedParams.slug.replace(`${fwId}-`, '').replace('-template', '');

  const framework = FRAMEWORKS.find(f => f.id === fwId)?.name || 'React';
  const displayCategory = category ? category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : 'Experience';

  const matchingBlueprints = blueprints.filter(bp => bp.category === category);

  if (matchingBlueprints.length === 0) {
    notFound();
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>
      <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.04em' }}>
          {framework} {displayCategory} Templates
        </h1>
        <p style={{ fontSize: '1.25rem', opacity: 0.7, maxWidth: '600px', margin: '0 auto 2rem' }}>
          Beautiful, production-ready {displayCategory.toLowerCase()} experiences built for {framework}. Fully customizable with the ZenixUI Theme Studio.
        </p>
        <Link href="/studio" style={{ textDecoration: 'none' }}>
          <Button size="lg">Open Theme Studio</Button>
        </Link>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
        {matchingBlueprints.map(bp => (
          <Link key={bp.id} href={`/blueprints/${bp.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Surface variant="card" style={{ padding: 0, overflow: 'hidden', border: '1px solid var(--zx-elevated)', transition: 'transform 0.2s', height: '100%', display: 'flex', flexDirection: 'column' }}>
              {/* Live preview — replaced broken backgroundImage: url(bp.previewImage) */}
              <BlueprintThumbnail id={bp.id}  />
              <div style={{ padding: '1.5rem', flex: 1 }}>
                <p style={{ fontSize: '0.875rem', opacity: 0.7, margin: '0 0 1rem' }}>{bp.description}</p>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-surface)', textTransform: 'capitalize' }}>
                    {bp.theme.replace('-', ' ')}
                  </span>
                  {bp.supportedFrameworks?.includes(fwId) && (
                    <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', background: 'var(--zx-primary)', color: 'var(--zx-background)', borderRadius: 'var(--zx-radius-surface)' }}>
                      {framework} Ready
                    </span>
                  )}
                </div>
              </div>
            </Surface>
          </Link>
        ))}
      </div>
    </div>
  );
}
