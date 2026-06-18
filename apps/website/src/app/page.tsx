'use client';

import { Surface } from '@zenixui/components';
import { Experience } from '@zenixui/react';
import Link from 'next/link';
import { blueprints } from '@zenixui/blueprints';

export default function Home() {
  const featuredExperience = blueprints.find(bp => bp.id === 'night-city-portfolio');
  const FeaturedComponent = featuredExperience?.component;
  const featuredThemes = [
    { id: 'zenix', name: 'Zenix', tagline: 'Premium SaaS', color: '#6366f1' },
    { id: 'ocean', name: 'Ocean', tagline: 'Creative & Fluid', color: '#0ea5e9' },
    { id: 'night-city', name: 'Night City', tagline: 'Cyberpunk Developer', color: '#22c55e' },
    { id: 'autumn', name: 'Autumn', tagline: 'Warm Storytelling', color: '#d97706' }
  ];

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '6rem 2rem 10rem' }}>
      
      {/* HERO */}
      <section style={{ textAlign: 'center', marginBottom: '8rem' }}>
        <h1 style={{ fontSize: '4.5rem', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1.5rem', marginInline: 'auto', maxWidth: '800px' }}>
          Build Entire Experiences.<br/>
          <span style={{ opacity: 0.5 }}>Not Components.</span>
        </h1>
        <p style={{ fontSize: '1.5rem', opacity: 0.7, margin: '0 auto 3rem', maxWidth: '600px', lineHeight: 1.5 }}>
          ZenixUI provides complete website templates, powered by 4 distinct design systems, that you can copy directly into your React apps.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link href="/experiences" style={{ padding: '1rem 2rem', background: 'var(--zx-primary)', color: 'var(--zx-background)', borderRadius: 'var(--zx-radius-sm)', fontWeight: 600, textDecoration: 'none', fontSize: '1.125rem' }}>
            Explore Experiences
          </Link>
          <Link href="/studio" style={{ padding: '1rem 2rem', background: 'var(--zx-elevated)', color: 'var(--zx-primary)', borderRadius: 'var(--zx-radius-sm)', fontWeight: 600, textDecoration: 'none', fontSize: '1.125rem' }}>
            Open Theme Studio
          </Link>
        </div>
      </section>

      {/* FEATURED EXPERIENCE */}
      <section style={{ marginBottom: '8rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 0.5rem' }}>Featured Experience</h2>
            <p style={{ opacity: 0.6, margin: 0 }}>The Night City Portfolio.</p>
          </div>
          <Link href={`/experiences/${featuredExperience?.id}`} style={{ fontWeight: 600, color: 'var(--zx-primary)', textDecoration: 'none' }}>
            View Full Blueprint →
          </Link>
        </div>
        <div style={{ 
          position: 'relative',
          width: '100%', 
          height: '600px', 
          background: 'var(--zx-elevated)', 
          borderRadius: 'var(--zx-radius-lg)', 
          overflow: 'hidden',
          border: '1px solid var(--zx-elevated)'
        }}>
          <div style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 10 }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, padding: '0.25rem 0.75rem', background: 'var(--zx-primary)', color: 'var(--zx-background)', borderRadius: 'var(--zx-radius-round)', boxShadow: 'var(--zx-shadow-sm)' }}>
              Live Preview
            </span>
            <span style={{ marginLeft: '0.5rem', fontSize: '0.75rem', fontWeight: 600, padding: '0.25rem 0.75rem', background: 'var(--zx-surface)', color: 'var(--zx-primary)', borderRadius: 'var(--zx-radius-round)', border: '1px solid var(--zx-elevated)', boxShadow: 'var(--zx-shadow-sm)' }}>
              Interactive
            </span>
          </div>
          <div style={{ width: '100%', height: '100%', overflowY: 'auto' }}>
            {FeaturedComponent && featuredExperience ? (
              <Experience preset={featuredExperience.theme}>
                <FeaturedComponent />
              </Experience>
            ) : null}
          </div>
        </div>
      </section>

      {/* EXPLORE EXPERIENCES */}
      <section style={{ marginBottom: '8rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 700, margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
            A Library of Complete Websites
          </h2>
          <p style={{ opacity: 0.6, fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
            Browse and copy fully functional pages, not just the building blocks.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
          {['Landing Pages', 'Portfolios', 'Dashboards', 'Blogs'].map((category, index) => {
            const idMap: any = { 'Landing Pages': 'landing', 'Portfolios': 'portfolio', 'Dashboards': 'dashboard', 'Blogs': 'blog' };
            const topBp = blueprints.find(bp => bp.category === idMap[category]);
            return (
              <Link key={category} href={`/experiences?category=${idMap[category]}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Surface variant="card" style={{ padding: '1rem', border: '1px solid var(--zx-elevated)', height: '100%' }}>
                  <div style={{ width: '100%', height: '160px', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-sm)', marginBottom: '1rem', backgroundImage: `url(${topBp?.previewImage})`, backgroundSize: 'cover', backgroundPosition: 'top center' }} />
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 600, margin: '0 0 0.25rem' }}>{category}</h3>
                  <p style={{ opacity: 0.5, fontSize: '0.875rem', margin: 0 }}>View all →</p>
                </Surface>
              </Link>
            )
          })}
        </div>
      </section>

      {/* FEATURED THEMES */}
      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, margin: '0 0 0.5rem', letterSpacing: '-0.03em' }}>Theme Ecosystems</h2>
            <p style={{ opacity: 0.6, margin: 0, fontSize: '1.125rem' }}>One component library. Infinite design languages.</p>
          </div>
          <Link href="/themes" style={{ fontWeight: 600, color: 'var(--zx-primary)', textDecoration: 'none' }}>
            Browse All Themes →
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
          {featuredThemes.map(theme => (
            <Surface variant="card" key={theme.id} style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '2rem', border: '1px solid var(--zx-elevated)' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: theme.id === 'night-city' ? '0px' : theme.id === 'ocean' ? '50%' : '16px', background: theme.color, flexShrink: 0 }} />
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '0 0 0.25rem' }}>{theme.name}</h3>
                <p style={{ opacity: 0.6, margin: '0 0 1rem' }}>{theme.tagline}</p>
                <Link href={`/themes`} style={{ fontSize: '0.875rem', fontWeight: 600, color: theme.color, textDecoration: 'none' }}>
                  Explore System →
                </Link>
              </div>
            </Surface>
          ))}
        </div>
      </section>

    </div>
  );
}
