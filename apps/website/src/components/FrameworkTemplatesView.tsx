import { blueprints } from '@zenixui/blueprints';
import Link from 'next/link';
import { Surface, Button } from '@zenixui/components';
import { BlueprintThumbnail } from './preview/BlueprintThumbnail';

export function FrameworkTemplatesView({ frameworkId, frameworkName }: { frameworkId: string, frameworkName: string }) {
  // Get all unique categories
  const categories = Array.from(new Set(blueprints.map(bp => bp.category)));

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>
      <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.04em' }}>
          {frameworkName} Templates
        </h1>
        <p style={{ fontSize: '1.25rem', opacity: 0.7, maxWidth: '600px', margin: '0 auto 2rem' }}>
          Beautiful, production-ready templates built for {frameworkName}. Pick a category below to see all available blueprints.
        </p>
        <Link href="/studio" style={{ textDecoration: 'none' }}>
          <Button size="lg">Open Theme Studio</Button>
        </Link>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
        {categories.map(category => {
          const displayCategory = category
            ? category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
            : 'Experience';
          const coverBlueprint = blueprints.find(bp => bp.category === category);

          if (!coverBlueprint) return null;

          return (
            <Link key={category} href={`/templates/${frameworkId}-${category}-template`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Surface variant="card" style={{ padding: 0, overflow: 'hidden', border: '1px solid var(--zx-elevated)', transition: 'transform 0.2s', height: '100%', display: 'flex', flexDirection: 'column' }}>
                {/*
                 * Previously: backgroundImage: url(coverBlueprint.previewImage) — always 404.
                 * Now: live React preview via DocsBlueprintCard thumbnail.
                 */}
                <BlueprintThumbnail id={coverBlueprint.id}  />
                <div style={{ padding: '1.5rem', flex: 1 }}>
                  <p style={{ fontSize: '0.875rem', opacity: 0.7, margin: '0 0 1rem' }}>
                    Browse all {displayCategory.toLowerCase()} blueprints optimized for {frameworkName}.
                  </p>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', background: 'var(--zx-primary)', color: 'var(--zx-background)', borderRadius: 'var(--zx-radius-surface)' }}>
                      {blueprints.filter(bp => bp.category === category).length} Templates
                    </span>
                  </div>
                </div>
              </Surface>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
