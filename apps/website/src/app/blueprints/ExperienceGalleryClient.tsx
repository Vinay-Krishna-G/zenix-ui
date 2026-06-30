'use client';

import { useState, useMemo, useEffect } from 'react';
import { Surface, Button, Input } from '@zenixui/components';
import { blueprints } from '@zenixui/blueprints';
import Link from 'next/link';
import { track } from '@vercel/analytics/react';

export function ExperienceGalleryClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Experiences' },
    { id: 'landing', label: 'Landing Pages' },
    { id: 'dashboard', label: 'Dashboards' },
    { id: 'portfolio', label: 'Portfolios' },
    { id: 'blog', label: 'Blogs' },
    { id: 'auth', label: 'Authentication' },
    { id: 'newsletter', label: 'Newsletters' },
    { id: 'contact', label: 'Contact Forms' },
  ];

  // Derive counts
  const counts = useMemo(() => {
    const map: Record<string, number> = { all: blueprints.length };
    categories.forEach(c => {
      if (c.id !== 'all') {
        map[c.id] = blueprints.filter(bp => bp.category === c.id).length;
      }
    });
    return map;
  }, []);

  // Filter blueprints
  const filteredBlueprints = useMemo(() => {
    let result = blueprints;
    
    // Category filter
    if (activeCategory !== 'all') {
      result = result.filter(bp => bp.category === activeCategory);
    }

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(bp => {
        const searchable = [
          bp.title,
          bp.description || '',
          bp.category,
          bp.theme,
          ...bp.tags
        ].join(' ').toLowerCase();
        return searchable.includes(query);
      });
    }

    return result;
  }, [searchQuery, activeCategory]);

  useEffect(() => {
    if (!searchQuery.trim()) return;
    const timeout = setTimeout(() => {
      track('Search Query', { query: searchQuery.toLowerCase() });
    }, 1500);
    return () => clearTimeout(timeout);
  }, [searchQuery]);

  return (
    <div style={{ padding: '4rem 2rem 10rem', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 800, margin: '0 0 1rem', letterSpacing: '-0.04em' }}>
          Blueprint Gallery
        </h1>
        <p style={{ fontSize: '1.25rem', opacity: 0.6, margin: '0 auto', maxWidth: '600px', lineHeight: 1.6 }}>
          30+ complete, production-ready page experiences. Choose a blueprint, customize it in the Studio, and install it with one CLI command.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '256px 1fr', gap: '4rem', alignItems: 'start' }}>
        
        {/* SIDEBAR */}
        <aside style={{ position: 'sticky', top: '2.5rem' }}>
          <div style={{ marginBottom: '2rem' }}>
            <Input 
              placeholder="Search experiences..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ width: '100%' }}
            />
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {categories.map(category => {
              if (counts[category.id] === 0) return null;
              
              const isActive = activeCategory === category.id;
              
              return (
                <button 
                  key={category.id}
                  onClick={() => { setActiveCategory(category.id); setSearchQuery(''); }}
                  style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.75rem 1rem', 
                    background: isActive ? 'var(--zx-elevated)' : 'transparent',
                    border: 'none',
                    borderRadius: 'var(--zx-radius-surface)',
                    color: isActive ? 'var(--zx-primary)' : 'inherit',
                    fontWeight: isActive ? 600 : 400,
                    opacity: isActive ? 1 : 0.7,
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.2s'
                  }}
                >
                  <span>{category.label}</span>
                  <span style={{ fontSize: '0.75rem', opacity: 0.5, fontWeight: 600 }}>{counts[category.id]}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* CONTENT */}
        <main>
          {filteredBlueprints.length === 0 ? (
            <Surface variant="card" style={{ padding: '4rem 2rem', textAlign: 'center', border: '1px solid var(--zx-elevated)', borderStyle: 'dashed' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem', opacity: 0.2 }}>🔍</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, margin: '0 0 1rem' }}>No matching experiences.</h3>
              <p style={{ opacity: 0.6, marginBottom: '2rem' }}>We couldn't find any blueprints matching your search criteria.</p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <Button variant="default" onClick={() => { setSearchQuery(''); setActiveCategory('dashboard'); }}>Try Dashboards</Button>
                <Button variant="glass" onClick={() => { setSearchQuery(''); setActiveCategory('portfolio'); }}>Try Portfolios</Button>
                <Button variant="glass" onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}>Clear Search</Button>
              </div>
            </Surface>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
              {filteredBlueprints.map(blueprint => (
                <Surface variant="card" key={blueprint.id} style={{ padding: '0', overflow: 'hidden', border: '1px solid var(--zx-elevated)', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ height: '220px', background: 'var(--zx-elevated)', position: 'relative', backgroundImage: `url(${blueprint.previewImage})`, backgroundSize: 'cover', backgroundPosition: 'top center' }}>
                    <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--zx-background)', padding: '0.25rem 0.75rem', borderRadius: 'var(--zx-radius-pill)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'capitalize' }}>
                      {blueprint.theme.replace('-', ' ')}
                    </div>
                  </div>
                  <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, margin: '0 0 0.5rem' }}>{blueprint.title}</h3>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                      {blueprint.tags.map(tag => (
                        <span key={tag} style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', background: 'var(--zx-elevated)', borderRadius: 'var(--zx-radius-surface)', opacity: 0.8 }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div style={{ marginTop: 'auto', display: 'flex', gap: '0.5rem' }}>
                      <Link href={`/blueprints/${blueprint.id}`} style={{ flex: 1, textDecoration: 'none' }} onClick={() => track('Blueprint View', { id: blueprint.id })}>
                        <Button fullWidth>View Details</Button>
                      </Link>
                    </div>
                  </div>
                </Surface>
              ))}
            </div>
          )}
        </main>
        
      </div>
    </div>
  );
}
