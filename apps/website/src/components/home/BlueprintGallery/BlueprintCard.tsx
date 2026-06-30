'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BlueprintCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  previewImage?: string;
}

export function BlueprintCard({ id, title, description, category, previewImage }: BlueprintCardProps) {
  return (
    <Link href={`/blueprints/${id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
      <div style={{
        background: 'var(--zx-surface, #111)',
        borderRadius: '1.5rem',
        border: '1px solid rgba(255,255,255,0.05)',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
        e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.5)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
        e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
      }}
      >
        <div style={{ width: '100%', height: '240px', position: 'relative', background: '#09090B' }}>
          {previewImage && (
            <Image 
              src={previewImage} 
              alt={title} 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
              loading="lazy"
            />
          )}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)' }} />
        </div>
        
        <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '0 0 0.5rem', color: '#FFF' }}>{title}</h3>
          <p style={{ fontSize: '1rem', opacity: 0.6, margin: '0 0 2rem', lineHeight: 1.5, flex: 1 }}>{description}</p>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, color: 'var(--zx-primary, #21F1A8)' }}>
              {category}
            </span>
            <span style={{ fontSize: '0.875rem', fontWeight: 600, opacity: 0.8 }}>View Blueprint &rarr;</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
