'use client';

/**
 * ============================================================
 * ZenixUI — Theme Wheel (Interactive)
 *
 * SVG donut wheel with one arc segment per design system.
 * Hover → center shows palette + emotional identity.
 * Click → smooth scroll to the theme's full detail card.
 *
 * Arc math: 0° = top (12 o'clock), increasing clockwise.
 * 4 themes × 86° each + 4 × 4° gaps = 360°.
 * ============================================================
 */

import { useState } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────

interface DesignSystemSegment {
  id: string;
  name: string;
  tagline: string;
  primary: string;
  gradientInner: string;   // dark version — shown near center of donut
  gradientOuter: string;   // light version — shown at outer edge
  palette: { role: string; color: string }[];
  emotions: string[];
  useCases: string[];
  startAngle: number;      // degrees from top, clockwise
  endAngle: number;
}

const DESIGN_SYSTEMS: DesignSystemSegment[] = [
  {
    id: 'zenix',
    name: 'Zenix',
    tagline: 'Premium SaaS',
    primary: '#6366f1',
    gradientInner: '#312e81',
    gradientOuter: '#a5b4fc',
    palette: [
      { role: 'Primary', color: '#6366f1' },
      { role: 'Secondary', color: '#818cf8' },
      { role: 'Accent', color: '#a78bfa' },
      { role: 'Background', color: '#09090b' },
      { role: 'Surface', color: '#18181b' },
    ],
    emotions: ['Professional', 'Trustworthy', 'Scalable'],
    useCases: ['B2B SaaS', 'Admin', 'Dashboard'],
    startAngle: 2,
    endAngle: 88,
  },
  {
    id: 'ocean',
    name: 'Ocean',
    tagline: 'Deep & Fluid',
    primary: '#0ea5e9',
    gradientInner: '#0c4a6e',
    gradientOuter: '#7dd3fc',
    palette: [
      { role: 'Primary', color: '#0ea5e9' },
      { role: 'Secondary', color: '#38bdf8' },
      { role: 'Accent', color: '#7dd3fc' },
      { role: 'Background', color: '#030712' },
      { role: 'Surface', color: '#0c1929' },
    ],
    emotions: ['Calm', 'Trustworthy', 'Creative'],
    useCases: ['Fintech', 'Portfolio', 'Agency'],
    startAngle: 92,
    endAngle: 178,
  },
  {
    id: 'autumn',
    name: 'Autumn',
    tagline: 'Warm & Organic',
    primary: '#d97706',
    gradientInner: '#78350f',
    gradientOuter: '#fcd34d',
    palette: [
      { role: 'Primary', color: '#d97706' },
      { role: 'Secondary', color: '#f59e0b' },
      { role: 'Accent', color: '#fcd34d' },
      { role: 'Background', color: '#0c0a09' },
      { role: 'Surface', color: '#1c1917' },
    ],
    emotions: ['Warm', 'Inviting', 'Authentic'],
    useCases: ['Blog', 'Publishing', 'Lifestyle'],
    startAngle: 182,
    endAngle: 268,
  },
  {
    id: 'midnight',
    name: 'Night City',
    tagline: 'Terminal Hacker',
    primary: '#22c55e',
    gradientInner: '#14532d',
    gradientOuter: '#86efac',
    palette: [
      { role: 'Primary', color: '#22c55e' },
      { role: 'Secondary', color: '#4ade80' },
      { role: 'Accent', color: '#86efac' },
      { role: 'Background', color: '#000000' },
      { role: 'Surface', color: '#0a0a0a' },
    ],
    emotions: ['Focused', 'Powerful', 'Technical'],
    useCases: ['Dev Tools', 'AI', 'CLI Sites'],
    startAngle: 272,
    endAngle: 358,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SVG Arc Math
// ─────────────────────────────────────────────────────────────────────────────

/** Converts polar (r, angleDeg) to SVG (x, y). 0° = top, clockwise. */
function polar(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

/** Builds an SVG path string for a donut arc segment. */
function arcPath(
  cx: number, cy: number,
  outerR: number, innerR: number,
  startDeg: number, endDeg: number,
): string {
  const o1 = polar(cx, cy, outerR, startDeg);
  const o2 = polar(cx, cy, outerR, endDeg);
  const i1 = polar(cx, cy, innerR, startDeg);
  const i2 = polar(cx, cy, innerR, endDeg);
  const large = endDeg - startDeg > 180 ? 1 : 0;
  const fmt = (n: number) => n.toFixed(2);

  return [
    `M ${fmt(o1.x)} ${fmt(o1.y)}`,
    `A ${outerR} ${outerR} 0 ${large} 1 ${fmt(o2.x)} ${fmt(o2.y)}`,
    `L ${fmt(i2.x)} ${fmt(i2.y)}`,
    `A ${innerR} ${innerR} 0 ${large} 0 ${fmt(i1.x)} ${fmt(i1.y)}`,
    `Z`,
  ].join(' ');
}

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

const CX = 280;
const CY = 280;
const OUTER_R = 248;
const INNER_R = 140;

// Stop at 56% of the gradient radius = inner edge of arc (140/248 ≈ 0.565)
const INNER_STOP = '56%';

export function ThemeWheelClient() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const hovered = DESIGN_SYSTEMS.find(d => d.id === hoveredId) ?? null;

  function handleSegmentClick(id: string) {
    document.getElementById(`theme-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '5rem' }}>
      {/* Instruction label */}
      <p style={{ fontSize: '0.875rem', opacity: 0.45, marginBottom: '2rem', letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600 }}>
        Hover to explore · Click to open
      </p>

      {/* Wheel container — relative so the center overlay can be positioned absolutely */}
      <div style={{ position: 'relative', width: '560px', height: '560px' }}>

        {/* ── SVG Wheel ── */}
        <svg
          width="560"
          height="560"
          viewBox="0 0 560 560"
          style={{ display: 'block' }}
          aria-label="Design Language Wheel — hover each segment to preview the design system"
        >
          <defs>
            {/* Radial gradient per theme: dark inner edge → vivid outer edge */}
            {DESIGN_SYSTEMS.map(ds => (
              <radialGradient
                key={ds.id}
                id={`zx-grad-${ds.id}`}
                cx={CX}
                cy={CY}
                r={OUTER_R}
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="var(--zx-background, #09090b)" stopOpacity="1" />
                <stop offset={INNER_STOP} stopColor={ds.gradientInner} stopOpacity="1" />
                <stop offset="100%" stopColor={ds.gradientOuter} stopOpacity="1" />
              </radialGradient>
            ))}

            {/* Glow filter per theme for hover state */}
            {DESIGN_SYSTEMS.map(ds => {
              const r = parseInt(ds.primary.slice(1, 3), 16) / 255;
              const g = parseInt(ds.primary.slice(3, 5), 16) / 255;
              const b = parseInt(ds.primary.slice(5, 7), 16) / 255;
              return (
                <filter key={ds.id} id={`zx-glow-${ds.id}`} x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feColorMatrix
                    in="blur"
                    type="matrix"
                    values={`0 0 0 0 ${r.toFixed(3)}  0 0 0 0 ${g.toFixed(3)}  0 0 0 0 ${b.toFixed(3)}  0 0 0 2 0`}
                    result="coloredBlur"
                  />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              );
            })}
          </defs>

          {/* Arc segments */}
          {DESIGN_SYSTEMS.map(ds => {
            const isHovered = hoveredId === ds.id;
            const isOtherHovered = hoveredId !== null && !isHovered;
            const midAngle = (ds.startAngle + ds.endAngle) / 2;
            const labelPos = polar(CX, CY, (OUTER_R + INNER_R) / 2, midAngle);

            return (
              <g
                key={ds.id}
                role="button"
                tabIndex={0}
                aria-label={`${ds.name}: ${ds.tagline}. Click to view details.`}
                style={{ cursor: 'pointer', outline: 'none' }}
                onMouseEnter={() => setHoveredId(ds.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => handleSegmentClick(ds.id)}
                onKeyDown={e => e.key === 'Enter' && handleSegmentClick(ds.id)}
              >
                {/* Arc shape */}
                <path
                  d={arcPath(CX, CY, OUTER_R, INNER_R, ds.startAngle, ds.endAngle)}
                  fill={`url(#zx-grad-${ds.id})`}
                  filter={isHovered ? `url(#zx-glow-${ds.id})` : undefined}
                  opacity={isOtherHovered ? 0.45 : 1}
                  strokeWidth={isHovered ? '2' : '0'}
                  stroke={isHovered ? ds.primary : 'none'}
                  style={{ transition: 'opacity 0.25s ease, stroke-width 0.15s ease' }}
                />

                {/* Name label inside the arc */}
                <text
                  x={labelPos.x}
                  y={labelPos.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={isHovered ? '#ffffff' : 'rgba(255,255,255,0.75)'}
                  fontSize={isHovered ? '15' : '13'}
                  fontWeight={isHovered ? '800' : '600'}
                  fontFamily="Inter, system-ui, sans-serif"
                  style={{
                    pointerEvents: 'none',
                    userSelect: 'none',
                    transition: 'font-size 0.15s ease, fill 0.15s ease',
                  }}
                >
                  {ds.name}
                </text>
              </g>
            );
          })}

          {/* Inner circle background (the donut hole) */}
          <circle
            cx={CX}
            cy={CY}
            r={INNER_R - 8}
            fill="var(--zx-background, #09090b)"
            stroke="var(--zx-elevated, #27272a)"
            strokeWidth="2"
          />
        </svg>

        {/* ── Center Content Overlay (HTML, not SVG for layout control) ── */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: `${(INNER_R - 16) * 2}px`,
            height: `${(INNER_R - 16) * 2}px`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            pointerEvents: 'none',
            padding: '0.75rem',
            borderRadius: '50%',
          }}
        >
          {hovered ? (
            <div style={{ animation: 'none', width: '100%' }}>
              {/* Theme name */}
              <div style={{
                fontSize: '1.2rem',
                fontWeight: 800,
                color: hovered.primary,
                marginBottom: '0.2rem',
                lineHeight: 1.2,
                fontFamily: 'Inter, system-ui, sans-serif',
              }}>
                {hovered.name}
              </div>

              {/* Tagline */}
              <div style={{
                fontSize: '0.65rem',
                opacity: 0.55,
                marginBottom: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                fontFamily: 'Inter, system-ui, sans-serif',
              }}>
                {hovered.tagline}
              </div>

              {/* Palette swatches */}
              <div style={{
                display: 'flex',
                gap: '0.3rem',
                justifyContent: 'center',
                marginBottom: '0.65rem',
              }}>
                {hovered.palette.map(p => (
                  <div
                    key={p.role}
                    title={`${p.role}: ${p.color}`}
                    style={{
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      background: p.color,
                      border: '2px solid rgba(255,255,255,0.12)',
                      flexShrink: 0,
                    }}
                  />
                ))}
              </div>

              {/* Emotion tags */}
              <div style={{
                display: 'flex',
                gap: '0.25rem',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}>
                {hovered.emotions.map(e => (
                  <span
                    key={e}
                    style={{
                      fontSize: '0.55rem',
                      fontWeight: 700,
                      padding: '0.15rem 0.4rem',
                      background: `${hovered.primary}28`,
                      color: hovered.primary,
                      borderRadius: '100px',
                      letterSpacing: '0.03em',
                      fontFamily: 'Inter, system-ui, sans-serif',
                    }}
                  >
                    {e}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <div style={{
                fontSize: '0.6rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                opacity: 0.3,
                marginBottom: '0.4rem',
                fontFamily: 'Inter, system-ui, sans-serif',
              }}>
                Design Language
              </div>
              <div style={{
                fontSize: '1rem',
                fontWeight: 700,
                opacity: 0.6,
                marginBottom: '0.5rem',
                fontFamily: 'Inter, system-ui, sans-serif',
              }}>
                Wheel
              </div>
              <div style={{
                fontSize: '0.58rem',
                opacity: 0.3,
                fontFamily: 'Inter, system-ui, sans-serif',
              }}>
                Hover to explore
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
