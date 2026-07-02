'use client';

import { useState, useMemo, useEffect } from 'react';
import { Surface, Button, Input } from '@zenixui/components';
import { blueprints } from '@zenixui/blueprints';
import Link from 'next/link';
import { track } from '@vercel/analytics/react';
import { PreviewRenderer } from '../../components/preview/PreviewRenderer';
import { buildBlueprintProps } from '../../components/preview/PropsBuilder';
import { RenderMode, Viewport } from '@zenixui/core';

// ─── Category definitions ────────────────────────────────────────────────────
const CATEGORIES = [
  { id: 'all',        label: 'All Blueprints' },
  { id: 'landing',    label: 'Landing Pages' },
  { id: 'dashboard',  label: 'Dashboards' },
  { id: 'portfolio',  label: 'Portfolios' },
  { id: 'blog',       label: 'Blogs' },
  { id: 'auth',       label: 'Authentication' },
  { id: 'newsletter', label: 'Newsletters' },
  { id: 'contact',    label: 'Contact Forms' },
];

// ─── Theme display names ─────────────────────────────────────────────────────
const THEME_LABELS: Record<string, string> = {
  zenix:    'Solid',
  ocean:    'Glass',
  midnight: 'Cyber',
  autumn:   'Organic',
};

export function ExperienceGalleryClient() {
  const [searchQuery, setSearchQuery]     = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // ── Counts ─────────────────────────────────────────────────────────────────
  const counts = useMemo(() => {
    const map: Record<string, number> = { all: blueprints.length };
    CATEGORIES.forEach(c => {
      if (c.id !== 'all') {
        map[c.id] = blueprints.filter(bp => bp.category === c.id).length;
      }
    });
    return map;
  }, []);

  // ── Filter ─────────────────────────────────────────────────────────────────
  const filteredBlueprints = useMemo(() => {
    let result = blueprints;

    if (activeCategory !== 'all') {
      result = result.filter(bp => bp.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(bp =>
        [bp.title, bp.description ?? '', bp.category, bp.theme, ...bp.tags]
          .join(' ')
          .toLowerCase()
          .includes(q)
      );
    }

    return result;
  }, [searchQuery, activeCategory]);

  // ── Search analytics ───────────────────────────────────────────────────────
  useEffect(() => {
    if (!searchQuery.trim()) return;
    const t = setTimeout(() => {
      track('Search Query', { query: searchQuery.toLowerCase() });
    }, 1500);
    return () => clearTimeout(t);
  }, [searchQuery]);

  return (
    <div style={{ padding: '4rem 2rem 10rem', maxWidth: '1400px', margin: '0 auto' }}>

      {/* ── Page heading ─────────────────────────────────────────────────── */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{
          fontSize: '3.5rem', fontWeight: 800, margin: '0 0 1rem',
          letterSpacing: '-0.04em',
        }}>
          Blueprint Gallery
        </h1>
        <p style={{
          fontSize: '1.25rem', opacity: 0.6, margin: '0 auto',
          maxWidth: '600px', lineHeight: 1.6,
        }}>
          {blueprints.length}+ complete, production-ready page experiences.
          Choose a blueprint, customize it in the Studio, and install it with one CLI command.
        </p>
      </div>

      {/* ── Layout ───────────────────────────────────────────────────────── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '220px 1fr',
        gap: '3rem',
        alignItems: 'start',
      }}>

        {/* ── Sidebar ────────────────────────────────────────────────────── */}
        <aside style={{ position: 'sticky', top: '6rem' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <Input
              placeholder="Search blueprints…"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{ width: '100%' }}
            />
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {CATEGORIES.map(category => {
              if (category.id !== 'all' && counts[category.id] === 0) return null;
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => { setActiveCategory(category.id); setSearchQuery(''); }}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.625rem 0.875rem',
                    background: isActive ? 'var(--zx-elevated)' : 'transparent',
                    border: 'none',
                    borderRadius: 'var(--zx-radius-surface)',
                    color: isActive ? 'var(--zx-primary)' : 'inherit',
                    fontWeight: isActive ? 600 : 400,
                    opacity: isActive ? 1 : 0.7,
                    cursor: 'pointer',
                    textAlign: 'left',
                    width: '100%',
                    transition: 'all 0.15s ease',
                    fontSize: '0.875rem',
                  }}
                >
                  <span>{category.label}</span>
                  <span style={{ fontSize: '0.75rem', opacity: 0.5, fontWeight: 600 }}>
                    {counts[category.id]}
                  </span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* ── Content ────────────────────────────────────────────────────── */}
        <main>
          {filteredBlueprints.length === 0 ? (
            /* ── Empty state ─────────────────────────────────────────────── */
            <Surface variant="card" style={{
              padding: '4rem 2rem', textAlign: 'center',
              border: '1px solid var(--zx-elevated)', borderStyle: 'dashed',
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem', opacity: 0.2 }}>🔍</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, margin: '0 0 1rem' }}>
                No matching blueprints.
              </h3>
              <p style={{ opacity: 0.6, marginBottom: '2rem' }}>
                We couldn't find any blueprints matching your search.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <Button variant="default" onClick={() => { setSearchQuery(''); setActiveCategory('dashboard'); }}>
                  Try Dashboards
                </Button>
                <Button variant="glass" onClick={() => { setSearchQuery(''); setActiveCategory('portfolio'); }}>
                  Try Portfolios
                </Button>
                <Button variant="glass" onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}>
                  Clear Search
                </Button>
              </div>
            </Surface>
          ) : (
            /* ── Blueprint grid ──────────────────────────────────────────── */
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '2rem',
            }}>
              {filteredBlueprints.map(blueprint => (
                <BlueprintCard
                  key={blueprint.id}
                  blueprint={blueprint}
                />
              ))}
            </div>
          )}
        </main>

      </div>
    </div>
  );
}

// ─── Blueprint card ──────────────────────────────────────────────────────────

interface CardProps {
  blueprint: typeof blueprints[number];
}

function BlueprintCard({ blueprint }: CardProps) {
  return (
    <Surface
      variant="card"
      style={{
        padding: 0,
        overflow: 'hidden',
        border: '1px solid var(--zx-elevated)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--zx-primary)';
        (e.currentTarget as HTMLElement).style.transform   = 'translateY(-2px)';
        (e.currentTarget as HTMLElement).style.boxShadow  = 'var(--zx-shadow-lg)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--zx-elevated)';
        (e.currentTarget as HTMLElement).style.transform   = 'translateY(0)';
        (e.currentTarget as HTMLElement).style.boxShadow  = 'none';
      }}
    >
      {/* ── Live preview thumbnail ────────────────────────────────────────── */}
      {/*
       * Renders the actual blueprint component scaled down to card size.
       * No screenshots needed — always accurate, always up to date.
       */}
      <div style={{ position: 'relative' }}>
        <PreviewRenderer
          Component={blueprint.component as any}
          props={buildBlueprintProps(null, RenderMode.Thumbnail, Viewport.Desktop)}
          previewHeight={220}
          cardWidth={340}
        />

        {/* Theme badge */}
        <div style={{
          position: 'absolute', top: '0.75rem', right: '0.75rem',
          background: 'rgba(9,9,11,0.85)',
          backdropFilter: 'blur(8px)',
          padding: '0.2rem 0.625rem',
          borderRadius: 'var(--zx-radius-pill)',
          fontSize: '0.7rem',
          fontWeight: 700,
          color: 'var(--zx-text-primary)',
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
          border: '1px solid rgba(255,255,255,0.1)',
        }}>
          {THEME_LABELS[blueprint.theme] ?? blueprint.theme}
        </div>
      </div>

      {/* ── Card body ──────────────────────────────────────────────────────── */}
      <div style={{ padding: '1.25rem 1.5rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 0.375rem', letterSpacing: '-0.01em' }}>
          {blueprint.title}
        </h3>

        {blueprint.description && (
          <p style={{
            fontSize: '0.8rem',
            opacity: 0.55,
            margin: '0 0 0.875rem',
            lineHeight: 1.5,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}>
            {blueprint.description}
          </p>
        )}

        {/* Tags */}
        <div style={{
          display: 'flex', gap: '0.375rem', flexWrap: 'wrap', marginBottom: '1.25rem',
        }}>
          {blueprint.tags.slice(0, 3).map(tag => (
            <span
              key={tag}
              style={{
                fontSize: '0.7rem',
                padding: '0.15rem 0.5rem',
                background: 'var(--zx-elevated)',
                borderRadius: 'var(--zx-radius-surface)',
                opacity: 0.8,
                fontWeight: 500,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: 'auto', display: 'flex', gap: '0.5rem' }}>
          <Link
            href={`/blueprints/${blueprint.id}`}
            style={{ flex: 1, textDecoration: 'none' }}
            onClick={() => track('Blueprint View', { id: blueprint.id })}
          >
            <Button fullWidth size="sm">View Details</Button>
          </Link>
          <Link href="/studio" style={{ textDecoration: 'none' }}>
            <Button variant="glass" size="sm" title="Open in Studio">
              ✦
            </Button>
          </Link>
        </div>
      </div>
    </Surface>
  );
}
