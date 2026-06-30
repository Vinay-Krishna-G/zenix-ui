import React from 'react';

export function HeroDescription() {
  return (
    <>
      <p style={{ fontSize: '1.5rem', opacity: 0.8, margin: '2rem auto 2.5rem', maxWidth: '640px', lineHeight: 1.5, letterSpacing: '-0.01em' }}>
        An experience ecosystem for React. Install independent sections or complete pages via CLI. You own the source code.
      </p>
      <p style={{ fontSize: '1.125rem', opacity: 0.5, margin: '0 auto 3rem', maxWidth: '576px', fontStyle: 'italic', lineHeight: 1.6 }}>
        Like Tailwind UI meets Vercel templates — but with full theme generation and a CLI installer.
      </p>
    </>
  );
}
