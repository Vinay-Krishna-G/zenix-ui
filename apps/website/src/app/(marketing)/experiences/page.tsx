import React from 'react';
import Link from 'next/link';
import { EXPERIENCES } from '../../../lib/experiences';
import { ExperienceThumbnail } from '../../../components/preview/ExperienceThumbnail';

export const metadata = {
  title: 'Experiences | ZenixUI',
  description: 'Browse production-ready digital experiences and launch your next project.',
};

export default function ExperiencesPage() {
  // Use the first identity/aesthetic as the default preview state for the gallery
  const defaultBrandId = 'ocean';
  const defaultAestheticId = 'glass';

  return (
    <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '6rem 2rem', fontFamily: 'Inter, system-ui, sans-serif' }}>
      
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
        <h1 style={{ fontSize: '5rem', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: '1.5rem' }}>
          Launch faster.
        </h1>
        <p style={{ fontSize: '1.5rem', color: 'var(--zx-muted, #A1A1AA)', maxWidth: '600px', margin: '0 auto' }}>
          Production-ready experiences built for performance and conversion.
        </p>
      </div>

      <style>{`
        .experience-card {
          background: var(--zx-surface, #111113);
          border-radius: 1.5rem;
          border: 1px solid rgba(255,255,255,0.08);
          overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
          cursor: pointer;
        }
        .experience-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.5);
          border-color: rgba(255,255,255,0.2);
        }
      `}</style>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '3rem' }}>
        {EXPERIENCES.map(exp => (
          <Link 
            key={exp.id} 
            href={`/experiences/${exp.id}`}
            style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
          >
            <div className="experience-card">
              
              {/* Thumbnail Preview */}
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', background: '#09090B' }}>
                <ExperienceThumbnail 
                  experienceId={exp.id} 
                  brandId={defaultBrandId} 
                  variantId={exp.variants[0]?.id}
                  aestheticId={defaultAestheticId}
                  previewHeight="100%"
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)', pointerEvents: 'none' }} />
              </div>

              {/* Info */}
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>{exp.name}</h3>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {exp.tags.slice(0, 1).map(tag => (
                      <span key={tag} style={{ fontSize: '0.75rem', fontWeight: 700, background: 'rgba(255,255,255,0.1)', padding: '0.2rem 0.5rem', borderRadius: '1rem', textTransform: 'uppercase' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p style={{ fontSize: '0.875rem', color: '#A1A1AA', margin: 0, lineHeight: 1.5 }}>
                  {exp.promise}
                </p>
              </div>

            </div>
          </Link>
        ))}
      </div>
      
    </div>
  );
}
