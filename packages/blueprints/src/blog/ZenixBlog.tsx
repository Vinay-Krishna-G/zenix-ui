'use client';

import { useState } from 'react';
import { Surface, Features, Button, Badge } from '@zenixui/components';

const POSTS = [
  { id: 1, title: "Building the Engine", category: "Engineering", date: "Oct 12", readTime: "5 min" },
  { id: 2, title: "Designing the Zenix Radius", category: "Design", date: "Oct 08", readTime: "3 min" },
  { id: 3, title: "Why Micro-Experiences Matter", category: "Product", date: "Sep 28", readTime: "8 min" },
];

export function ZenixBlog() {
  const [view, setView] = useState<'list' | 'detail'>('list');

  if (view === 'detail') {
    return (
      <Features.Root padded>
        {/* Fake Reading Progress Bar */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'var(--zx-elevated)', zIndex: 10 }}>
          <div style={{ width: '35%', height: '100%', background: 'var(--zx-primary)' }} />
        </div>

        <Features.Content style={{ maxWidth: '700px', margin: '4rem auto 0' }}>
          <Button 
            variant="default"
            onClick={() => setView('list')} 
            style={{ background: 'transparent', border: 'none', color: 'var(--zx-primary)', opacity: 0.6, padding: 0, height: 'auto', marginBottom: '2rem' }}
          >
            ← Back to all posts
          </Button>
          
          <div style={{ marginBottom: '3rem' }}>
            <Badge variant="solid" tone="neutral">
              Engineering
            </Badge>
            <h1 style={{ fontSize: '3rem', fontWeight: 700, margin: '1rem 0', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              Building the Engine
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', opacity: 0.7, fontSize: '0.875rem' }}>
              <span>Oct 12, 2026</span>
              <span>•</span>
              <span>5 min read</span>
            </div>
          </div>

          <div style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--zx-primary)' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              When we set out to build ZenixUI, we realized that atomic components weren't enough. We needed an engine capable of rendering entire visual worlds.
            </p>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: '2.5rem 0 1rem' }}>The Architecture</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              We started by separating tokens from themes, and themes from effects. This allowed us to build robust components that adapt instantly.
            </p>
            
            {/* Code Block Discovery */}
            <div style={{ background: 'var(--zx-surface)', border: '1px solid var(--zx-elevated)', borderRadius: 'var(--zx-radius-surface)', padding: '1.5rem', fontFamily: 'var(--zx-font-mono, monospace)', fontSize: '0.875rem', margin: '2rem 0', overflowX: 'auto' }}>
              <span style={{ color: 'var(--zx-accent)' }}>const</span> engine = <span style={{ color: 'var(--zx-accent)' }}>new</span> <span style={{ color: 'var(--zx-accent)' }}>ExperienceEngine</span>();<br />
              engine.<span style={{ color: 'var(--zx-primary)' }}>mount</span>();
            </div>
          </div>

          {/* Author Card Discovery */}
          <Surface variant="card" style={{ marginTop: '4rem', padding: '2rem', display: 'flex', gap: '1.5rem', alignItems: 'center', border: '1px solid var(--zx-elevated)', borderRadius: 'var(--zx-radius-overlay)' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--zx-elevated)' }} />
            <div>
              <h4 style={{ margin: '0 0 0.25rem', fontSize: '1.125rem', fontWeight: 600 }}>Alex Developer</h4>
              <p style={{ margin: 0, fontSize: '0.875rem', opacity: 0.6 }}>Lead Architect at ZenixUI. Obsessed with API design and clean radii.</p>
            </div>
          </Surface>
        </Features.Content>
      </Features.Root>
    );
  }

  return (
    <Features.Root padded>
      <Features.Content style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 700, margin: '0 0 3rem', letterSpacing: '-0.03em' }}>
          Writing
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {POSTS.map(post => (
            <Surface 
              key={post.id}
              variant="card" 
              onClick={() => setView('detail')}
              style={{ padding: '2rem', border: '1px solid var(--zx-elevated)', borderRadius: 'var(--zx-radius-card)', cursor: 'pointer', transition: 'all 0.2s', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <Badge variant="solid" tone="neutral">
                    {post.category}
                  </Badge>
                  <span style={{ fontSize: '0.875rem', opacity: 0.5 }}>{post.date}</span>
                </div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0 }}>{post.title}</h2>
              </div>
              <div style={{ opacity: 0.5, fontSize: '0.875rem', fontWeight: 500 }}>
                {post.readTime}
              </div>
            </Surface>
          ))}
        </div>
      </Features.Content>
    </Features.Root>
  );
}
