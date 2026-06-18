'use client';

import { useState } from 'react';
import { Surface, Features } from '@zenixui/components';

const POSTS = [
  { id: 1, title: "The Art of Slow Living", desc: "A reflection on finding peace in the details.", date: "October 12" },
  { id: 2, title: "Coffee and Code", desc: "Morning rituals for the working developer.", date: "October 08" },
];

export function AutumnBlog() {
  const [view, setView] = useState<'list' | 'detail'>('list');

  if (view === 'detail') {
    return (
      <Features.Root padded>
        <Features.Content style={{ maxWidth: '650px', margin: '2rem auto' }}>
          <button 
            onClick={() => setView('list')} 
            style={{ background: 'transparent', border: 'none', color: 'var(--zx-primary)', opacity: 0.5, cursor: 'pointer', marginBottom: '4rem', fontSize: '1rem', fontStyle: 'italic', fontFamily: 'Georgia, serif' }}
          >
            Back to the journal
          </button>
          
          <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
            <span style={{ fontSize: '1rem', fontFamily: 'Georgia, serif', fontStyle: 'italic', opacity: 0.6 }}>
              Reflections
            </span>
            <h1 style={{ fontSize: '3.5rem', fontFamily: 'Georgia, serif', margin: '1rem 0', lineHeight: 1.1, color: 'var(--zx-primary)' }}>
              The Art of Slow Living
            </h1>
            <div style={{ opacity: 0.5, fontSize: '1rem', marginTop: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              October 12, 2026
            </div>
          </div>

          <div style={{ fontSize: '1.25rem', lineHeight: 2, color: 'var(--zx-primary)', fontFamily: 'system-ui, sans-serif', fontWeight: 300 }}>
            <p style={{ marginBottom: '2rem' }}>
              We rush through our days, ticking off boxes and answering notifications. But what happens when we pause? The Autumn theme was designed specifically to slow down the user experience.
            </p>
            
            {/* Pull Quote Discovery */}
            <div style={{ margin: '4rem -2rem', padding: '2rem', borderLeft: '4px solid var(--zx-primary)' }}>
              <p style={{ margin: 0, fontSize: '2rem', fontFamily: 'Georgia, serif', fontStyle: 'italic', lineHeight: 1.4 }}>
                "To design for slowness is to design for humanity."
              </p>
            </div>

            <p style={{ marginBottom: '2rem' }}>
              By relying on warm typography and soft, invisible boundaries, the reader is encouraged to read rather than scan. We strip away the hard borders of traditional cards and replace them with breathable space.
            </p>
          </div>
        </Features.Content>
      </Features.Root>
    );
  }

  return (
    <Features.Root padded>
      <Features.Content style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3.5rem', fontFamily: 'Georgia, serif', fontStyle: 'italic', margin: '0 0 4rem', textAlign: 'center' }}>
          The Journal
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {POSTS.map(post => (
            <div 
              key={post.id}
              onClick={() => setView('detail')}
              style={{ display: 'flex', gap: '3rem', cursor: 'pointer' }}
            >
              <div style={{ width: '150px', flexShrink: 0, opacity: 0.5, fontSize: '1rem', paddingTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {post.date}
              </div>
              <div>
                <h2 style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif', margin: '0 0 1rem', lineHeight: 1.2 }}>
                  {post.title}
                </h2>
                <p style={{ opacity: 0.7, fontSize: '1.25rem', margin: 0, fontWeight: 300, lineHeight: 1.6 }}>
                  {post.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Features.Content>
    </Features.Root>
  );
}
