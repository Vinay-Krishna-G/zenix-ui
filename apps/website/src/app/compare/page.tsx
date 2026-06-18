'use client';

import { Experience } from '@zenixui/react';
import { Surface, Input, Button, Textarea, Badge } from '@zenixui/components';

const themes = [
  { id: 'zenix', title: 'Zenix (Default)', variant: 'default', badgeTone: 'neutral' },
  { id: 'ocean', title: 'Ocean (Glass)', variant: 'glass', badgeTone: 'neutral' },
  { id: 'night-city', title: 'Night City (Cyber)', variant: 'terminal', buttonVariant: 'cyber', badgeTone: 'neutral' },
  { id: 'autumn', title: 'Autumn (Organic)', variant: 'organic', badgeTone: 'neutral' }
] as const;

export default function CompareCatalog() {
  return (
    <div style={{ padding: '6rem 2rem 10rem', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 700, letterSpacing: '-0.04em', margin: '0 0 1rem' }}>
          Component Catalog
        </h1>
        <p style={{ fontSize: '1.25rem', opacity: 0.6, maxWidth: '600px', margin: '0 auto' }}>
          Comparing atomic components across our 4 official design systems.
        </p>
      </div>

      {/* Button Row */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: '0 0 1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--zx-elevated)' }}>
          Button
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
          {themes.map(t => (
            <Experience key={t.id} preset={t.id}>
              <Surface variant={t.variant === 'glass' ? 'glass' : 'card'} style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', border: '1px solid var(--zx-elevated)', borderRadius: 'var(--zx-radius-md)' }}>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, opacity: 0.5 }}>{t.title}</div>
                <Button variant={t.buttonVariant || t.variant as any}>Click Me</Button>
              </Surface>
            </Experience>
          ))}
        </div>
      </div>

      {/* Input Row */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: '0 0 1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--zx-elevated)' }}>
          Input
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
          {themes.map(t => (
            <Experience key={t.id} preset={t.id}>
              <Surface variant={t.variant === 'glass' ? 'glass' : 'card'} style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', border: '1px solid var(--zx-elevated)', borderRadius: 'var(--zx-radius-md)' }}>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, opacity: 0.5 }}>{t.title}</div>
                <Input variant={t.variant as any} placeholder="Placeholder text" />
              </Surface>
            </Experience>
          ))}
        </div>
      </div>

      {/* Textarea Row */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: '0 0 1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--zx-elevated)' }}>
          Textarea
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
          {themes.map(t => (
            <Experience key={t.id} preset={t.id}>
              <Surface variant={t.variant === 'glass' ? 'glass' : 'card'} style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', border: '1px solid var(--zx-elevated)', borderRadius: 'var(--zx-radius-md)' }}>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, opacity: 0.5 }}>{t.title}</div>
                <Textarea variant={t.variant as any} placeholder="Enter your message..." rows={3} />
              </Surface>
            </Experience>
          ))}
        </div>
      </div>

      {/* Badge Row */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: '0 0 1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--zx-elevated)' }}>
          Badge
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
          {themes.map(t => (
            <Experience key={t.id} preset={t.id}>
              <Surface variant={t.variant === 'glass' ? 'glass' : 'card'} style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', border: '1px solid var(--zx-elevated)', borderRadius: 'var(--zx-radius-md)' }}>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, opacity: 0.5 }}>{t.title}</div>
                <Badge variant={t.variant === 'glass' ? 'glass' : t.variant === 'terminal' ? 'terminal' : t.variant === 'organic' ? 'organic' : 'solid'} tone="neutral">
                  Status
                </Badge>
              </Surface>
            </Experience>
          ))}
        </div>
      </div>

    </div>
  );
}
