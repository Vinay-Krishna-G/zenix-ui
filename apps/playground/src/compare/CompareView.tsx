import React from 'react';
import { Experience } from '@zenixui/react';
import { Input, Button, Textarea, Badge } from '@zenixui/components';

export function CompareView() {
  return (
    <div style={{ padding: '3rem', minHeight: '100vh', background: '#0a0a0a', color: '#fff', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ marginBottom: '3rem', fontWeight: 300 }}>ZenixUI Component Comparison</h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        
        {/* INPUT */}
        <section>
          <h2 style={{ borderBottom: '1px solid #333', paddingBottom: '1rem', marginBottom: '2rem', fontWeight: 400 }}>Input</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: '#333', border: '1px solid #333' }}>
            <ThemeCell preset="zenix">
              <Input variant="default" placeholder="Zenix Default" />
            </ThemeCell>
            <ThemeCell preset="ocean">
              <Input variant="glass" placeholder="Ocean Glass" />
            </ThemeCell>
            <ThemeCell preset="night-city">
              <Input variant="terminal" placeholder="Night City Terminal" />
            </ThemeCell>
            <ThemeCell preset="autumn">
              <Input variant="organic" placeholder="Autumn Organic" />
            </ThemeCell>
          </div>
        </section>

        {/* BUTTON */}
        <section>
          <h2 style={{ borderBottom: '1px solid #333', paddingBottom: '1rem', marginBottom: '2rem', fontWeight: 400 }}>Button</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: '#333', border: '1px solid #333' }}>
            <ThemeCell preset="zenix">
              <Button variant="default">Submit</Button>
            </ThemeCell>
            <ThemeCell preset="ocean">
              <Button variant="glass">Dive In</Button>
            </ThemeCell>
            <ThemeCell preset="night-city">
              <Button variant="cyber">Execute</Button>
            </ThemeCell>
            <ThemeCell preset="autumn">
              <Button variant="organic">Read More</Button>
            </ThemeCell>
          </div>
        </section>

        {/* TEXTAREA */}
        <section>
          <h2 style={{ borderBottom: '1px solid #333', paddingBottom: '1rem', marginBottom: '2rem', fontWeight: 400 }}>Textarea</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: '#333', border: '1px solid #333' }}>
            <ThemeCell preset="zenix">
              <Textarea variant="default" placeholder="Write a message..." rows={3} />
            </ThemeCell>
            <ThemeCell preset="ocean">
              <Textarea variant="glass" placeholder="Share your thoughts..." rows={3} />
            </ThemeCell>
            <ThemeCell preset="night-city">
              <Textarea variant="terminal" placeholder="ENTER LOG..." rows={3} />
            </ThemeCell>
            <ThemeCell preset="autumn">
              <Textarea variant="organic" placeholder="Dear friend..." rows={3} />
            </ThemeCell>
          </div>
        </section>

        {/* BADGE */}
        <section>
          <h2 style={{ borderBottom: '1px solid #333', paddingBottom: '1rem', marginBottom: '2rem', fontWeight: 400 }}>Badge</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: '#333', border: '1px solid #333' }}>
            <ThemeCell preset="zenix">
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <Badge variant="solid" tone="neutral">Neutral</Badge>
                <Badge variant="solid" tone="success">Success</Badge>
              </div>
            </ThemeCell>
            <ThemeCell preset="ocean">
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <Badge variant="glass" tone="neutral">Neutral</Badge>
                <Badge variant="glass" tone="success">Success</Badge>
              </div>
            </ThemeCell>
            <ThemeCell preset="night-city">
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <Badge variant="terminal" tone="neutral">Neutral</Badge>
                <Badge variant="terminal" tone="error">Error</Badge>
              </div>
            </ThemeCell>
            <ThemeCell preset="autumn">
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <Badge variant="organic" tone="neutral">Neutral</Badge>
                <Badge variant="organic" tone="primary">Primary</Badge>
              </div>
            </ThemeCell>
          </div>
        </section>

      </div>
    </div>
  );
}

function ThemeCell({ preset, children }: { preset: string, children: React.ReactNode }) {
  return (
    <Experience preset={preset} background="none" motion="none">
      <div style={{ 
        padding: '2rem', 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '1.5rem', 
        background: 'var(--zx-background)',
        position: 'relative'
      }}>
        <div style={{ 
          position: 'absolute', 
          top: 0, left: 0, 
          padding: '0.25rem 0.5rem', 
          background: 'var(--zx-elevated)', 
          color: 'var(--zx-primary)', 
          fontSize: '0.65rem', 
          textTransform: 'uppercase', 
          letterSpacing: '0.05em',
          fontWeight: 600,
          opacity: 0.7
        }}>
          {preset}
        </div>
        <div style={{ marginTop: '1rem', width: '100%' }}>
          {children}
        </div>
      </div>
    </Experience>
  );
}
