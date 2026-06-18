'use client';

import { Surface, Button } from '@zenixui/components';
import { blueprints } from '@zenixui/blueprints';
import Link from 'next/link';

export default function ExperiencesPage() {
  const categories = [
    { id: 'landing', label: 'Landing Pages' },
    { id: 'portfolio', label: 'Portfolios' },
    { id: 'dashboard', label: 'Dashboards' },
    { id: 'blog', label: 'Content & Blogs' },
    { id: 'auth', label: 'Authentication' },
    { id: 'contact', label: 'Contact Forms' },
    { id: 'newsletter', label: 'Newsletters' },
  ];

  return (
    <div style={{ padding: '6rem 2rem 10rem', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
          Experience Gallery
        </h1>
        <p style={{ fontSize: '1.25rem', opacity: 0.6, margin: '0 auto', maxWidth: '600px', lineHeight: 1.6 }}>
          Browse complete, production-ready website templates. Find an experience you love, copy the blueprint, and make it your own.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
        {categories.map(category => {
          const categoryBlueprints = blueprints.filter(bp => bp.category === category.id);
          if (categoryBlueprints.length === 0) return null;

          return (
            <section key={category.id}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid var(--zx-elevated)', paddingBottom: '1rem' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 600, margin: 0 }}>{category.label}</h2>
                <span style={{ opacity: 0.5, fontSize: '0.875rem', fontWeight: 600 }}>{categoryBlueprints.length} Experiences</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                {categoryBlueprints.map(blueprint => (
                  <Surface variant="card" key={blueprint.id} style={{ padding: '0', overflow: 'hidden', border: '1px solid var(--zx-elevated)', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ height: '220px', background: 'var(--zx-elevated)', position: 'relative', backgroundImage: `url(${blueprint.previewImage})`, backgroundSize: 'cover', backgroundPosition: 'top center' }}>
                      <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--zx-background)', padding: '0.25rem 0.75rem', borderRadius: 'var(--zx-radius-round)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'capitalize' }}>
                        {blueprint.theme.replace('-', ' ')}
                      </div>
                    </div>
                    <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 600, margin: '0 0 0.5rem' }}>{blueprint.title}</h3>
                      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                        {blueprint.tags.map(tag => (
                          <span key={tag} style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-sm)', opacity: 0.8 }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div style={{ marginTop: 'auto', display: 'flex', gap: '0.5rem' }}>
                        <Link href={`/experiences/${blueprint.id}`} style={{ flex: 1, textDecoration: 'none' }}>
                          <Button fullWidth>View Details</Button>
                        </Link>
                      </div>
                    </div>
                  </Surface>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
