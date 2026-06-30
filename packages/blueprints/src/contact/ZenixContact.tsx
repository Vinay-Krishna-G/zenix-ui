'use client';

import { useState } from 'react';
import { Surface, Features, Input, Button, Textarea } from '@zenixui/components';

export function ZenixContact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1000);
  };

  return (
    <Features.Root padded>
      <Features.Content gap="xl">
        {/* ── Two-column layout: Info left, Form right ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.6fr',
          gap: '5rem',
          alignItems: 'start',
          maxWidth: '1080px',
          margin: '0 auto',
        }}>

          {/* ── Left: Identity + Contact Info ── */}
          <div style={{ paddingTop: '0.5rem' }}>
            {/* Label */}
            <div style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              opacity: 0.4,
              marginBottom: '1rem',
              fontFamily: 'Inter, system-ui, sans-serif',
            }}>
              Get in touch
            </div>

            {/* Heading */}
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 800,
              margin: '0 0 1.25rem',
              letterSpacing: '-0.04em',
              lineHeight: 1.1,
              fontFamily: 'Inter, system-ui, sans-serif',
            }}>
              Let's talk.
            </h2>

            <p style={{
              opacity: 0.55,
              fontSize: '1.0625rem',
              lineHeight: 1.65,
              margin: '0 0 3rem',
              fontFamily: 'Inter, system-ui, sans-serif',
            }}>
              We're here for partnerships, enterprise inquiries, or just a conversation
              about design systems. We respond within 24 hours.
            </p>

            {/* Contact details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
              {[
                { icon: '✉', label: 'Email',   value: 'hello@zenixui.com' },
                { icon: '◎', label: 'Discord',  value: 'discord.gg/zenixui' },
                { icon: '⌥', label: 'GitHub',   value: 'github.com/zenixui' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
                  <span style={{
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '8px',
                    background: 'var(--zx-elevated)',
                    fontSize: '0.875rem',
                    flexShrink: 0,
                  }}>
                    {item.icon}
                  </span>
                  <div>
                    <div style={{ fontSize: '0.72rem', opacity: 0.4, fontWeight: 600, marginBottom: '0.1rem', fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 600, fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div style={{
              padding: '1rem 1.25rem',
              borderRadius: '10px',
              background: 'var(--zx-elevated)',
              border: '1px solid rgba(255,255,255,0.04)',
            }}>
              <div style={{ fontSize: '0.8rem', opacity: 0.5, fontFamily: 'Inter, system-ui, sans-serif', lineHeight: 1.5 }}>
                "ZenixUI cut our design system setup from 3 weeks to a single afternoon."
              </div>
              <div style={{ fontSize: '0.72rem', opacity: 0.4, marginTop: '0.75rem', fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 600 }}>
                — Developer at a Y Combinator startup
              </div>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <Surface
            variant="card"
            style={{
              padding: '2.5rem',
              borderRadius: 'var(--zx-radius-overlay)',
              background: 'var(--zx-surface)',
              border: '1px solid var(--zx-elevated)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.12), 0 1px 0 rgba(255,255,255,0.04)',
            }}
          >
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                <div style={{
                  width: '56px', height: '56px',
                  borderRadius: '50%',
                  background: 'rgba(34,197,94,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  fontSize: '1.5rem',
                }}>
                  ✓
                </div>
                <h3 style={{ fontSize: '1.375rem', fontWeight: 700, margin: '0 0 0.625rem', letterSpacing: '-0.02em', fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Message received.
                </h3>
                <p style={{ opacity: 0.55, lineHeight: 1.6, margin: 0, fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.9375rem' }}>
                  We'll get back to you at your email address within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Form heading */}
                <div style={{ marginBottom: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0 0 0.25rem', letterSpacing: '-0.02em', fontFamily: 'Inter, system-ui, sans-serif' }}>
                    Send us a message
                  </h3>
                  <p style={{ fontSize: '0.82rem', opacity: 0.45, margin: 0, fontFamily: 'Inter, system-ui, sans-serif' }}>
                    All fields are required.
                  </p>
                </div>

                {/* Name row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 600, opacity: 0.7, fontFamily: 'Inter, system-ui, sans-serif' }}>
                      First name
                    </label>
                    <Input required variant="default" placeholder="Jane" />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 600, opacity: 0.7, fontFamily: 'Inter, system-ui, sans-serif' }}>
                      Last name
                    </label>
                    <Input required variant="default" placeholder="Doe" />
                  </div>
                </div>

                {/* Email */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 600, opacity: 0.7, fontFamily: 'Inter, system-ui, sans-serif' }}>
                    Work email
                  </label>
                  <Input required variant="default" type="email" placeholder="jane@company.com" />
                </div>

                {/* Subject */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 600, opacity: 0.7, fontFamily: 'Inter, system-ui, sans-serif' }}>
                    Subject
                  </label>
                  <Input required variant="default" placeholder="Partnership inquiry" />
                </div>

                {/* Message */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 600, opacity: 0.7, fontFamily: 'Inter, system-ui, sans-serif' }}>
                    Message
                  </label>
                  <Textarea
                    required
                    variant="default"
                    placeholder="Tell us what you're building and how we can help."
                    rows={5}
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  variant="default"
                  isLoading={status === 'loading'}
                  style={{ marginTop: '0.25rem', width: '100%' }}
                >
                  Send message →
                </Button>

                <p style={{ fontSize: '0.72rem', opacity: 0.35, margin: '0.25rem 0 0', textAlign: 'center', fontFamily: 'Inter, system-ui, sans-serif' }}>
                  We never share your information with third parties.
                </p>
              </form>
            )}
          </Surface>
        </div>
      </Features.Content>
    </Features.Root>
  );
}
