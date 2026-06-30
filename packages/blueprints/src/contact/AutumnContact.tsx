'use client';

import { useState } from 'react';
import { Surface, Features, Input, Textarea, Button } from '@zenixui/components';

/**
 * Autumn Contact — editorial, warm, personal
 *
 * Design intent: feels like writing a letter.
 * Left column: warm brand identity, "why reach out" context.
 * Right column: form with visible field contrast on warm background.
 */

export function AutumnContact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1200);
  };

  return (
    <Features.Root padded>
      <Features.Content gap="xl">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.5fr',
          gap: '5rem',
          alignItems: 'start',
          maxWidth: '1080px',
          margin: '0 auto',
        }}>

          {/* ── Left: Identity ── */}
          <div style={{ paddingTop: '0.75rem' }}>
            <div style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              opacity: 0.35,
              marginBottom: '1.25rem',
              fontFamily: 'Georgia, serif',
            }}>
              Write to us
            </div>

            <h2 style={{
              fontSize: '2.75rem',
              fontFamily: 'Georgia, serif',
              fontStyle: 'italic',
              fontWeight: 400,
              margin: '0 0 1.25rem',
              lineHeight: 1.15,
              color: 'var(--zx-primary)',
            }}>
              Drop me a line.
            </h2>

            <p style={{
              opacity: 0.6,
              fontSize: '1.0625rem',
              lineHeight: 1.7,
              margin: '0 0 2.5rem',
              fontFamily: 'Georgia, serif',
              fontStyle: 'italic',
            }}>
              Every great collaboration starts with a conversation.
              I'd love to hear your story, your challenge, or simply what you're building.
            </p>

            {/* Contact info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
              {[
                { label: 'Email',   value: 'hello@zenixui.com', icon: '✉' },
                { label: 'Twitter', value: '@zenixui',          icon: '𝕏' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{
                    width: '32px', height: '32px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    borderRadius: '7px',
                    background: 'var(--zx-elevated)',
                    fontSize: '0.875rem',
                    flexShrink: 0,
                  }}>
                    {item.icon}
                  </span>
                  <div>
                    <div style={{ fontSize: '0.7rem', opacity: 0.35, fontWeight: 600, fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>{item.label}</div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <blockquote style={{
              margin: 0,
              padding: '1.25rem 1.5rem',
              borderLeft: '3px solid var(--zx-primary)',
              background: 'var(--zx-elevated)',
              borderRadius: '0 8px 8px 0',
            }}>
              <p style={{
                margin: 0,
                fontSize: '0.875rem',
                fontFamily: 'Georgia, serif',
                fontStyle: 'italic',
                opacity: 0.65,
                lineHeight: 1.6,
              }}>
                "The best design is not about adding more, but about knowing what to keep."
              </p>
            </blockquote>
          </div>

          {/* ── Right: Form ── */}
          <Surface
            variant="card"
            style={{
              padding: '2.5rem',
              borderRadius: 'var(--zx-radius-overlay)',
              background: 'var(--zx-surface)',
              border: '1px solid var(--zx-elevated)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
            }}
          >
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '3rem 1.5rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>🍂</div>
                <h3 style={{
                  fontSize: '1.375rem',
                  fontFamily: 'Georgia, serif',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  margin: '0 0 0.75rem',
                }}>
                  Your words are received.
                </h3>
                <p style={{ opacity: 0.55, lineHeight: 1.65, margin: 0, fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                  I will read them carefully and respond soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ marginBottom: '0.25rem' }}>
                  <h3 style={{ fontSize: '1.125rem', fontFamily: 'Georgia, serif', fontStyle: 'italic', margin: '0 0 0.25rem' }}>
                    Send a letter
                  </h3>
                  <p style={{ fontSize: '0.8rem', opacity: 0.4, margin: 0, fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                    Thoughtful replies within 48 hours.
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 600, opacity: 0.65 }}>Your name</label>
                  <Input required variant="default" type="text" placeholder="Ada Lovelace" />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 600, opacity: 0.65 }}>Your email</label>
                  <Input required variant="default" type="email" placeholder="ada@company.com" />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 600, opacity: 0.65 }}>Your message</label>
                  <Textarea
                    required
                    variant="default"
                    placeholder="Share your story, your project, or what's on your mind..."
                    rows={5}
                  />
                </div>

                <Button
                  type="submit"
                  variant="organic"
                  isLoading={status === 'loading'}
                  style={{ marginTop: '0.25rem' }}
                >
                  Send letter →
                </Button>

                <p style={{ fontSize: '0.7rem', opacity: 0.3, margin: 0, textAlign: 'center', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                  Your email stays private. Always.
                </p>
              </form>
            )}
          </Surface>
        </div>
      </Features.Content>
    </Features.Root>
  );
}
