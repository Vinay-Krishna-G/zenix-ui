'use client';

import { useState } from 'react';
import { Surface, Features, Input, Textarea, Button } from '@zenixui/components';

export function AutumnContact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1200);
  };

  return (
    <Features.Root padded>
      <Features.Content spacing="xl" align="center" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif', fontStyle: 'italic', margin: '0 0 1rem', color: 'var(--zx-primary)' }}>Drop me a line</h2>
          <p style={{ opacity: 0.7, fontSize: '1.1rem', margin: 0 }}>I'd love to hear your story.</p>
        </div>

        <Surface variant="card" style={{ padding: 0, background: 'transparent', border: 'none' }}>
          {status === 'success' ? (
            <div style={{ textAlign: 'center', padding: '3rem', border: '1px solid var(--zx-elevated)', borderRadius: 'var(--zx-radius)' }}>
              <h3 style={{ fontSize: '1.5rem', fontFamily: 'Georgia, serif', fontStyle: 'italic', margin: '0 0 1rem' }}>Thank you.</h3>
              <p style={{ opacity: 0.7, lineHeight: 1.6 }}>Your words have been received safely. I will read them soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', position: 'relative' }}>
                <Input required variant="organic" type="text" placeholder=" " className="autumn-input" id="name" />
                <label htmlFor="name" style={labelStyle}>Your Name</label>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', position: 'relative' }}>
                <Input required variant="organic" type="email" placeholder=" " className="autumn-input" id="email" />
                <label htmlFor="email" style={labelStyle}>Your Email</label>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', position: 'relative' }}>
                <Textarea required variant="organic" placeholder=" " className="autumn-input" id="message" rows={4} />
                <label htmlFor="message" style={{...labelStyle, top: '0'}}>Your Message</label>
              </div>

              <div style={{ alignSelf: 'flex-start' }}>
                <Button type="submit" variant="organic" isLoading={status === 'loading'} style={{ fontSize: '1.25rem' }}>
                  Send Letter
                </Button>
              </div>
            </form>
          )}
        </Surface>
      </Features.Content>
      {/* We inline a little CSS snippet to handle the floating label effect for this specific blueprint */}
      <style dangerouslySetInnerHTML={{__html: `
        .autumn-input:focus + label,
        .autumn-input:not(:placeholder-shown) + label {
          transform: translateY(-20px) scale(0.85);
          opacity: 0.5;
        }
      `}} />
    </Features.Root>
  );
}

const labelStyle: React.CSSProperties = {
  position: 'absolute',
  top: '0.5rem',
  left: 0,
  fontSize: '1.1rem',
  opacity: 0.5,
  transition: 'all 0.3s ease',
  pointerEvents: 'none',
  zIndex: 1,
  transformOrigin: 'left top'
};
