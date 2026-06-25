'use client';

/**
 * ============================================================
 * ZenixUI — Color Theory Engine (Interactive UI)
 *
 * Pick a primary color → receive a complete 11-color design
 * system palette generated using HSL color theory.
 *
 * Output: CSS variables, TypeScript ThemeConfig
 * ============================================================
 */

import { useState } from 'react';
import Link from 'next/link';
import {
  generatePalette,
  generateCssVariables,
  generateThemeConfig,
  getContrastText,
  getAnalogous,
  getComplementary,
  getTriadic,
} from '@/lib/colorTheory';

// ─────────────────────────────────────────────────────────────────────────────
// Quick-pick presets (the 4 existing design systems)
// ─────────────────────────────────────────────────────────────────────────────

const PRESETS = [
  { name: 'Zenix', hex: '#6366f1' },
  { name: 'Ocean', hex: '#0ea5e9' },
  { name: 'Autumn', hex: '#d97706' },
  { name: 'Night City', hex: '#22c55e' },
  { name: 'Crimson', hex: '#dc2626' },
  { name: 'Sakura', hex: '#f472b6' },
  { name: 'Amethyst', hex: '#a855f7' },
  { name: 'Copper', hex: '#c2410c' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Palette role labels with descriptions
// ─────────────────────────────────────────────────────────────────────────────

type PaletteKey = keyof ReturnType<typeof generatePalette>;

const PALETTE_ROLES: { key: PaletteKey; label: string; desc: string }[] = [
  { key: 'primary',    label: 'Primary',    desc: 'Brand color — buttons, links, focus rings' },
  { key: 'secondary',  label: 'Secondary',  desc: 'Analogous +30° — badges, chips, secondary actions' },
  { key: 'accent',     label: 'Accent',     desc: 'Analogous +60° — highlights, gradients' },
  { key: 'background', label: 'Background', desc: 'Page background — brand-tinted dark' },
  { key: 'surface',    label: 'Surface',    desc: 'Card backgrounds, sidebars' },
  { key: 'elevated',   label: 'Elevated',   desc: 'Modals, dropdowns, tooltips' },
  { key: 'border',     label: 'Border',     desc: 'Subtle dividers and outlines' },
  { key: 'mutedText',  label: 'Muted Text', desc: 'Labels, captions, placeholders' },
  { key: 'success',    label: 'Success',    desc: 'Fixed green — universally understood' },
  { key: 'warning',    label: 'Warning',    desc: 'Fixed amber — universally understood' },
  { key: 'danger',     label: 'Danger',     desc: 'Fixed red — universally understood' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

type OutputMode = 'css' | 'typescript';

export function ColorTheoryClient() {
  const [primary, setPrimary] = useState('#6366f1');
  const [outputMode, setOutputMode] = useState<OutputMode>('css');
  const [copied, setCopied] = useState(false);
  const [hoveredSwatch, setHoveredSwatch] = useState<string | null>(null);

  const palette = generatePalette(primary);
  const [analogousNeg, analogousPos] = getAnalogous(primary);
  const complementary = getComplementary(primary);
  const [triadic1, triadic2] = getTriadic(primary);

  const codeOutput = outputMode === 'css'
    ? generateCssVariables(palette)
    : generateThemeConfig(primary, 'my-theme');

  function handleCopy() {
    navigator.clipboard.writeText(codeOutput).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <section id="color-theory" style={{ padding: '5rem 2rem', maxWidth: '900px', margin: '0 auto' }}>

      {/* Section header */}
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', opacity: 0.4, marginBottom: '0.75rem' }}>
          Color Theory Engine
        </div>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, margin: '0 0 1rem', letterSpacing: '-0.03em' }}>
          Pick One Color.<br />
          <span style={{ opacity: 0.45 }}>Get an Entire System.</span>
        </h2>
        <p style={{ fontSize: '1.125rem', opacity: 0.6, maxWidth: '560px', margin: '0 auto', lineHeight: 1.6 }}>
          Choose a primary brand color. The engine generates your complete design system palette
          using HSL color theory — analogous harmonies, brand-tinted backgrounds, and correct contrast ratios.
        </p>
      </div>

      {/* ── Primary Color Input ── */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem',
        marginBottom: '3rem',
      }}>
        {/* Color picker row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          padding: '0.75rem 1.25rem',
          background: 'var(--zx-elevated)',
          borderRadius: '12px',
          border: '1px solid var(--zx-elevated)',
        }}>
          <label
            htmlFor="zx-primary-picker"
            style={{ fontSize: '0.875rem', opacity: 0.6, fontWeight: 600, whiteSpace: 'nowrap' }}
          >
            Primary Color
          </label>
          <div style={{
            position: 'relative',
            width: '44px', height: '44px',
            borderRadius: '8px',
            overflow: 'hidden',
            border: `2px solid ${primary}40`,
            flexShrink: 0,
          }}>
            <input
              id="zx-primary-picker"
              type="color"
              value={primary}
              onChange={e => setPrimary(e.target.value)}
              style={{
                position: 'absolute',
                inset: '-8px',
                width: 'calc(100% + 16px)',
                height: 'calc(100% + 16px)',
                cursor: 'pointer',
                border: 'none',
                padding: 0,
              }}
              aria-label="Choose primary brand color"
            />
          </div>
          <code style={{
            fontSize: '0.9rem',
            fontFamily: 'ui-monospace, monospace',
            fontWeight: 700,
            color: primary,
            letterSpacing: '0.06em',
          }}>
            {primary.toUpperCase()}
          </code>
        </div>

        {/* Quick-pick presets */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {PRESETS.map(p => (
            <button
              key={p.hex}
              onClick={() => setPrimary(p.hex)}
              title={`Use ${p.name} (${p.hex})`}
              aria-label={`Apply ${p.name} preset`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.35rem 0.75rem',
                borderRadius: '100px',
                border: `1px solid ${primary === p.hex ? p.hex : 'var(--zx-elevated)'}`,
                background: primary === p.hex ? `${p.hex}20` : 'transparent',
                cursor: 'pointer',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'inherit',
                transition: 'border-color 0.15s, background 0.15s',
              }}
            >
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: p.hex, flexShrink: 0 }} />
              {p.name}
            </button>
          ))}
        </div>
      </div>

      {/* ── Color Relationships ── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '0.75rem',
        marginBottom: '2.5rem',
      }}>
        {[
          { label: 'Analogous −30°', color: analogousNeg, desc: 'Harmonious sibling' },
          { label: 'Primary', color: primary, desc: 'Your brand color' },
          { label: 'Analogous +30°', color: analogousPos, desc: 'Harmonious sibling' },
          { label: 'Complementary', color: complementary, desc: 'Maximum contrast' },
        ].map(item => (
          <div
            key={item.label}
            style={{
              borderRadius: '10px',
              overflow: 'hidden',
              border: '1px solid var(--zx-elevated)',
            }}
          >
            <div style={{ height: '60px', background: item.color }} />
            <div style={{ padding: '0.5rem 0.65rem', background: 'var(--zx-surface)' }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 700, opacity: 0.5, marginBottom: '0.15rem' }}>
                {item.label}
              </div>
              <code style={{ fontSize: '0.72rem', fontFamily: 'ui-monospace, monospace', color: item.color }}>
                {item.color}
              </code>
            </div>
          </div>
        ))}
      </div>

      {/* ── Generated Palette ── */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.4, marginBottom: '1.25rem' }}>
          Generated Palette — 11 Colors
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {PALETTE_ROLES.map(({ key, label, desc }) => {
            const color = palette[key];
            const isHovered = hoveredSwatch === key;
            return (
              <div
                key={key}
                onMouseEnter={() => setHoveredSwatch(key)}
                onMouseLeave={() => setHoveredSwatch(null)}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '48px 1fr auto',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '0.5rem 0.75rem',
                  borderRadius: '8px',
                  background: isHovered ? 'var(--zx-elevated)' : 'transparent',
                  transition: 'background 0.15s',
                  cursor: 'default',
                }}
              >
                {/* Swatch */}
                <div style={{
                  width: '48px', height: '32px',
                  borderRadius: '6px',
                  background: color,
                  border: '2px solid rgba(255,255,255,0.08)',
                  flexShrink: 0,
                }} />

                {/* Role + description */}
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 700 }}>{label}</div>
                  <div style={{ fontSize: '0.72rem', opacity: 0.45, marginTop: '0.1rem' }}>{desc}</div>
                </div>

                {/* Hex */}
                <code style={{
                  fontSize: '0.8rem',
                  fontFamily: 'ui-monospace, monospace',
                  color,
                  opacity: isHovered ? 1 : 0.7,
                  transition: 'opacity 0.15s',
                }}>
                  {color}
                </code>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Code Output ── */}
      <div style={{
        borderRadius: '12px',
        border: '1px solid var(--zx-elevated)',
        overflow: 'hidden',
      }}>
        {/* Tab bar */}
        <div style={{
          display: 'flex',
          borderBottom: '1px solid var(--zx-elevated)',
          background: 'var(--zx-surface)',
        }}>
          {(['css', 'typescript'] as OutputMode[]).map(mode => (
            <button
              key={mode}
              onClick={() => setOutputMode(mode)}
              style={{
                padding: '0.65rem 1.25rem',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: 'inherit',
                opacity: outputMode === mode ? 1 : 0.45,
                borderBottom: outputMode === mode ? `2px solid ${primary}` : '2px solid transparent',
                transition: 'opacity 0.15s',
              }}
            >
              {mode === 'css' ? 'CSS Variables' : 'ThemeConfig (TypeScript)'}
            </button>
          ))}

          <div style={{ flex: 1 }} />

          {/* Copy button */}
          <button
            onClick={handleCopy}
            style={{
              padding: '0.5rem 1rem',
              margin: '0.35rem 0.5rem',
              borderRadius: '6px',
              border: `1px solid ${primary}40`,
              background: copied ? `${primary}20` : 'transparent',
              cursor: 'pointer',
              fontSize: '0.75rem',
              fontWeight: 700,
              color: primary,
              transition: 'background 0.15s',
            }}
          >
            {copied ? '✓ Copied' : 'Copy'}
          </button>
        </div>

        {/* Code block */}
        <pre style={{
          margin: 0,
          padding: '1.5rem',
          overflowX: 'auto',
          fontSize: '0.8rem',
          fontFamily: 'ui-monospace, "Cascadia Code", monospace',
          lineHeight: 1.7,
          background: 'var(--zx-background)',
          color: 'rgba(255,255,255,0.75)',
          maxHeight: '340px',
        }}>
          {codeOutput}
        </pre>
      </div>

      {/* ── CTAs ── */}
      <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', justifyContent: 'center' }}>
        <Link
          href="/studio"
          style={{
            padding: '0.75rem 1.5rem',
            borderRadius: 'var(--zx-radius-sm)',
            background: primary,
            color: getContrastText(primary),
            fontWeight: 700,
            textDecoration: 'none',
            fontSize: '0.9rem',
          }}
        >
          Customize in Theme Studio →
        </Link>
        <Link
          href="/blueprints"
          style={{
            padding: '0.75rem 1.5rem',
            borderRadius: 'var(--zx-radius-sm)',
            background: 'var(--zx-elevated)',
            color: 'inherit',
            fontWeight: 700,
            textDecoration: 'none',
            fontSize: '0.9rem',
          }}
        >
          Browse Blueprints
        </Link>
      </div>
    </section>
  );
}
