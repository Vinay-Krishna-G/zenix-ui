'use client';
import { buildBlueprintProps } from '../preview/PropsBuilder';
import { RenderMode, Viewport } from '@zenixui/core';

/**
 * ExperienceShowcase — Homepage section showing collections of experiences.
 *
 * Previously used <Image fill src={exp.coverImage}> which pointed to
 * /previews/glass-header.png — a file that never existed (all 9 experiences
 * shared the same broken path).
 *
 * Now resolves the experience's first blueprint variant and renders it
 * as a live scaled preview, exactly like the gallery cards.
 */

import React from 'react';
import { EXPERIENCES, Experience } from '../../lib/experiences';
import { blueprints } from '@zenixui/blueprints';
import Link from 'next/link';
import { PreviewRenderer } from '../preview/PreviewRenderer';

// ── Theme colors for the thumbnail skeleton ────────────────────────────────
const THEME_FOR_EXPERIENCE: Record<string, string> = {
  'agency':             'ocean',
  'ai-startup':         'midnight',
  'architecture':       'zenix',
  'creator-brand':      'ocean',
  'dental-clinic':      'zenix',
  'developer-portfolio':'midnight',
  'fine-dining':        'autumn',
  'student-portfolio':  'ocean',
};

function getExperienceBlueprint(exp: Experience): { component: React.ComponentType; theme: string } | null {
  const variant = exp.variants[0];
  if (!variant) return null;

  // Pick any mapped blueprint ID from the first variant.
  const blueprintId = Object.values(variant.blueprintIdMap)[0];
  if (!blueprintId) return null;

  const bp = blueprints.find(b => b.id === blueprintId);
  if (!bp) return null;

  return { component: bp.component, theme: bp.theme };
}

const COLLECTIONS = [
  { title: 'Launch a Startup',  desc: 'Convert visitors into beta testers and paying customers.', filter: (e: Experience) => ['startup', 'studio'].includes(e.industryId) },
  { title: 'Creator Economy',   desc: 'Monetize your audience with courses and digital products.', filter: (e: Experience) => ['creator'].includes(e.industryId) },
  { title: 'Local Business',    desc: 'Take orders, book appointments, and build trust.',           filter: (e: Experience) => ['local', 'health'].includes(e.industryId) },
];

export function ExperienceShowcase() {
  return (
    <section style={{ marginBottom: '10rem', marginTop: '6rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '6rem', padding: '0 2rem' }}>
        <h2 style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.04em' }}>
          Don't build from scratch.
        </h2>
        <p style={{ fontSize: '1.5rem', opacity: 0.6, maxWidth: '600px', margin: '0 auto', lineHeight: 1.5 }}>
          Explore our collection of production-ready businesses.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
        {COLLECTIONS.map(collection => {
          const rowExps = EXPERIENCES.filter(collection.filter);
          if (rowExps.length === 0) return null;

          return (
            <div key={collection.title}>
              <div style={{ paddingLeft: 'max(2rem, calc((100vw - 1440px) / 2 + 2rem))', marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 0.5rem' }}>
                  {collection.title}
                </h3>
                <p style={{ fontSize: '1.25rem', opacity: 0.6, margin: 0 }}>
                  {collection.desc}
                </p>
              </div>

              <div style={{
                display: 'flex',
                overflowX: 'auto',
                gap: '2.5rem',
                padding: '1rem max(2rem, calc((100vw - 1440px) / 2 + 2rem)) 4rem',
                scrollSnapType: 'x mandatory',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}>
                {rowExps.map(exp => {
                  const resolved = getExperienceBlueprint(exp);

                  return (
                    <Link
                      key={exp.id}
                      href="/experiences"
                      style={{ textDecoration: 'none', color: 'inherit', flexShrink: 0, width: '460px', scrollSnapAlign: 'start' }}
                    >
                      <div
                        style={{
                          background: 'var(--zx-surface)',
                          borderRadius: '1.5rem',
                          border: '1px solid rgba(255,255,255,0.05)',
                          overflow: 'hidden',
                          cursor: 'pointer',
                          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                          display: 'flex',
                          flexDirection: 'column',
                          height: '100%',
                          boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                        }}
                        onMouseOver={e => {
                          e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                          e.currentTarget.style.boxShadow = '0 30px 60px -15px rgba(0,0,0,0.6)';
                        }}
                        onMouseOut={e => {
                          e.currentTarget.style.transform = 'translateY(0) scale(1)';
                          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                          e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)';
                        }}
                      >
                        {/* Live blueprint preview — resolved from the experience's first variant */}
                        <div style={{ position: 'relative' }}>
                          {resolved ? (
                            <PreviewRenderer
                              Component={resolved.component as any}
                              props={buildBlueprintProps(null, RenderMode.Thumbnail, Viewport.Desktop)}
                              
                              
                            />
                          ) : (
                            /* Fallback: dark placeholder with personality label */
                            <div style={{
                              width: '100%', height: 280,
                              background: 'linear-gradient(135deg, #111113 0%, #1a1a1f 100%)',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}>
                              <span style={{ fontSize: '2rem', fontWeight: 800, opacity: 0.15, letterSpacing: '0.1em' }}>
                                {exp.personality}
                              </span>
                            </div>
                          )}

                          {/* Overlay — tags + title */}
                          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)' }} />

                          <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                            <span style={{ padding: '0.4rem 1rem', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', borderRadius: '2rem', fontSize: '0.75rem', color: '#FFF', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                              {exp.personality}
                            </span>
                            {exp.tags.map(tag => (
                              <span key={tag} style={{ padding: '0.4rem 1rem', background: 'var(--zx-primary)', color: '#000', borderRadius: '2rem', fontSize: '0.75rem', fontWeight: 800 }}>
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem' }}>
                            <h4 style={{ fontSize: '2.5rem', fontWeight: 800, margin: '0 0 0.5rem', color: '#FFF', textShadow: '0 2px 10px rgba(0,0,0,0.5)', lineHeight: 1.1 }}>
                              {exp.name}
                            </h4>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#FFF', fontSize: '0.875rem', fontWeight: 600 }}>
                              <span style={{ color: '#FFB800' }}>★★★★★ 5.0</span>
                              <span style={{ opacity: 0.6 }}>{exp.launches} launches</span>
                            </div>
                          </div>
                        </div>

                        <div style={{ padding: '2.5rem', flex: 1, display: 'flex', flexDirection: 'column', background: '#09090B' }}>
                          <p style={{ fontSize: '1.25rem', opacity: 0.8, marginBottom: '2.5rem', fontWeight: 500, lineHeight: 1.6 }}>
                            {exp.marketingCopy}
                          </p>

                          <div style={{ marginTop: 'auto' }}>
                            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                              {exp.includes.outcomes.slice(0, 6).map(outcome => (
                                <li key={outcome} style={{ fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 600, opacity: 0.8 }}>
                                  <span style={{ color: 'var(--zx-primary)' }}>✔</span> {outcome}
                                </li>
                              ))}
                            </ul>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                              <div style={{ flex: 1 }}>
                                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, marginBottom: '0.25rem' }}>Setup Time</div>
                                <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--zx-primary)' }}>{exp.averageSetupTime}</div>
                              </div>
                              <button style={{ padding: '0.75rem 2rem', background: '#FFF', color: '#000', border: 'none', borderRadius: '2rem', fontWeight: 800, cursor: 'pointer' }}>
                                View Kit
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
