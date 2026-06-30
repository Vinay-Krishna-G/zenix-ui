import React from 'react';
import { PageSection } from '@zenixui/components';
import { HeroTitle } from './HeroTitle';
import { HeroDescription } from './HeroDescription';
import Link from 'next/link';

export function Hero() {
  return (
    <PageSection style={{ textAlign: 'center', marginBottom: '8rem', paddingTop: '4rem' }}>
      <HeroTitle />
      <HeroDescription />

      {/* The Actual Product Outcome Hero Box */}
      <div style={{
        marginTop: '4rem',
        maxWidth: '1000px',
        margin: '4rem auto 0',
        background: '#09090B',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '1.5rem',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{ padding: '1.5rem 2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Launch an AI Startup</h2>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
             <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(255,255,255,0.1)', borderRadius: '2rem', fontSize: '0.75rem' }}>3 min setup</span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', minHeight: '400px' }}>
          {/* Beautiful Preview Area */}
          <div style={{ 
            background: 'linear-gradient(135deg, #1A0B1E 0%, #09090B 100%)',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
          }}>
             {/* Mock AI Startup Header */}
             <div style={{ width: '100%', maxWidth: '500px', textAlign: 'center' }}>
               <div style={{ display: 'inline-block', padding: '0.25rem 1rem', background: '#B6FF0022', color: '#B6FF00', borderRadius: '2rem', fontSize: '0.75rem', marginBottom: '1.5rem' }}>GPT-4 Integration</div>
               <h3 style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '1rem' }}>The future of <span style={{ color: '#B6FF00' }}>intelligence</span>.</h3>
               <p style={{ opacity: 0.7, fontSize: '0.875rem' }}>An entirely new way to process data.</p>
             </div>
          </div>

          {/* Checklist Area */}
          <div style={{ background: '#111', padding: '2rem', display: 'flex', flexDirection: 'column' }}>
            <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.5, marginBottom: '1.5rem' }}>Includes</h4>
            
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
              {[
                'Homepage', 'Pricing', 'Docs', 'Dashboard', 'Blog', 'SEO', 'Dark Mode'
              ].map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', fontWeight: 600 }}>
                  <span style={{ color: 'var(--zx-primary)' }}>✔</span> {item}
                </li>
              ))}
            </ul>

            <Link href="/launchpad" style={{ textDecoration: 'none' }}>
              <button style={{ 
                width: '100%', padding: '1rem', background: 'var(--zx-primary)', 
                color: '#000', fontWeight: 800, fontSize: '1rem', border: 'none', 
                borderRadius: '0.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' 
              }}>
                <span style={{ fontSize: '1.25rem' }}>🚀</span> Launch Experience
              </button>
            </Link>
          </div>
        </div>
      </div>
    </PageSection>
  );
}
