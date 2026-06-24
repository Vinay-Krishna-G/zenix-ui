import { Metadata } from 'next';
import { Surface } from '@zenixui/components';
import Link from 'next/link';
import { getBlueprintsByCategory } from '@zenixui/blueprints';

export const metadata: Metadata = {
  title: 'Themes & Design Systems | ZenixUI',
  description: 'ZenixUI is a collection of completely distinct design languages. Write your logic once, and switch themes instantly.',
};

const THEMES = [
  { id: 'zenix', name: 'Zenix', tagline: 'The Foundation', description: 'Clean, professional, and accessible. Designed for scalable B2B applications and dashboards.', accent: '#6366f1', radius: '8px', typography: 'Inter' },
  { id: 'ocean', name: 'Ocean', tagline: 'Deep & Fluid', description: 'Immersive glassmorphism with heavy blur effects. Ideal for consumer apps and creative portfolios.', accent: '#0ea5e9', radius: '24px', typography: 'Outfit' },
  { id: 'night-city', name: 'Night City', tagline: 'Terminal Hacker', description: 'High contrast, neon accents, and zero border radius. Perfect for developer tools and CLI websites.', accent: '#22c55e', radius: '0px', typography: 'Fira Code' },
  { id: 'autumn', name: 'Autumn', tagline: 'Warm & Organic', description: 'Elegant serifs, paper textures, and subtle transitions. Beautiful for blogs, journals, and publishing.', accent: '#d97706', radius: '12px', typography: 'Georgia' },
];

export default function ThemesPage() {
  return (
    <div style={{ padding: '6rem 2rem 10rem', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
          Our Design Systems
        </h1>
        <p style={{ fontSize: '1.25rem', opacity: 0.6, margin: '0 auto', maxWidth: '600px', lineHeight: 1.6 }}>
          ZenixUI isn't a single theme. It's a collection of completely distinct design languages. Write your logic once, and switch themes instantly.
        </p>
      </div>

      <div style={{ display: 'grid', gap: '4rem' }}>
        {THEMES.map(theme => {
          const themeBlueprints = getBlueprintsByCategory('landing').filter(bp => bp.theme === theme.id) || [];
          
          return (
            <Surface variant="card" key={theme.id} style={{ padding: '3rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', border: '1px solid var(--zx-elevated)' }}>
              <div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: theme.radius, background: theme.accent }} />
                  <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: 0 }}>{theme.name}</h2>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: theme.accent, margin: '0 0 1rem' }}>{theme.tagline}</h3>
                <p style={{ opacity: 0.7, lineHeight: 1.6, marginBottom: '2rem' }}>{theme.description}</p>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem', fontSize: '0.875rem' }}>
                  <div>
                    <div style={{ opacity: 0.5, marginBottom: '0.25rem' }}>Primary Accent</div>
                    <div style={{ fontWeight: 600 }}>{theme.accent}</div>
                  </div>
                  <div>
                    <div style={{ opacity: 0.5, marginBottom: '0.25rem' }}>Base Radius</div>
                    <div style={{ fontWeight: 600 }}>{theme.radius}</div>
                  </div>
                  <div>
                    <div style={{ opacity: 0.5, marginBottom: '0.25rem' }}>Typography</div>
                    <div style={{ fontWeight: 600 }}>{theme.typography}</div>
                  </div>
                </div>

                <Link href={`/blueprints?theme=${theme.id}`} style={{ display: 'inline-block', padding: '0.75rem 1.5rem', background: 'var(--zx-elevated)', color: 'var(--zx-primary)', borderRadius: 'var(--zx-radius-sm)', fontWeight: 600, textDecoration: 'none' }}>
                  View {theme.name} Blueprints →
                </Link>
              </div>

              <div style={{ background: 'var(--zx-surface)', borderRadius: 'var(--zx-radius-lg)', overflow: 'hidden', height: '400px', position: 'relative', border: '1px solid var(--zx-elevated)' }}>
                 {themeBlueprints.length > 0 ? (
                   <div style={{ width: '100%', height: '100%', backgroundImage: `url(${themeBlueprints[0].previewImage})`, backgroundSize: 'cover', backgroundPosition: 'top center' }} />
                 ) : (
                   <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.5 }}>
                     No preview available
                   </div>
                 )}
              </div>
            </Surface>
          );
        })}
      </div>
    </div>
  );
}
