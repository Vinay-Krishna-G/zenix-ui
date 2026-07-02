import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { EXPERIENCES } from '../../../../lib/experiences';
import { LivePreview } from '../../../../components/preview/LivePreview';

export default async function ExperienceDetail({ params }: { params: { slug: string } }) {
  const experience = EXPERIENCES.find(e => e.id === params.slug);
  
  if (!experience) {
    return notFound();
  }

  const defaultBrandId = 'ocean';
  const defaultAestheticId = 'glass';

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '6rem 2rem 10rem' }}>
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'inline-flex', gap: '1rem', marginBottom: '2rem' }}>
            <span style={{ padding: '0.5rem 1.25rem', background: 'rgba(33,241,168,0.1)', color: 'var(--zx-primary)', borderRadius: '2rem', fontSize: '0.875rem', fontWeight: 800 }}>
              Deploy Ready
            </span>
            <span style={{ padding: '0.5rem 1.25rem', background: 'rgba(255,255,255,0.05)', borderRadius: '2rem', fontSize: '0.875rem', fontWeight: 700, border: '1px solid rgba(255,255,255,0.1)' }}>
              <span style={{ color: '#FFB800' }}>★★★★★</span> {experience.rating} ({experience.launches} launches)
            </span>
          </div>
          <h1 style={{ fontSize: '5rem', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: '1.5rem', lineHeight: 1 }}>
            {experience.name}
          </h1>
          <p style={{ fontSize: '1.5rem', opacity: 0.7, maxWidth: '800px', margin: '0 auto 3rem', lineHeight: 1.5 }}>
            {experience.marketingCopy}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href={`/studio/${experience.id}`} style={{ textDecoration: 'none' }}>
              <button style={{ padding: '1.25rem 4rem', background: 'var(--zx-primary, #FFF)', color: '#000', border: 'none', borderRadius: '3rem', fontSize: '1.25rem', fontWeight: 800, cursor: 'pointer', boxShadow: '0 20px 40px -10px rgba(255,255,255,0.2)' }}>
                Customize in Studio
              </button>
            </Link>
            <button style={{ padding: '1.25rem 3rem', background: 'transparent', color: '#FFF', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '3rem', fontSize: '1.25rem', fontWeight: 700, cursor: 'pointer' }}>
              View Live Demo
            </button>
          </div>
        </div>

        {/* Massive Interactive Preview */}
        <div style={{ 
          width: '100%', height: '800px', position: 'relative', borderRadius: '1.5rem', overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 50px 100px -20px rgba(0,0,0,0.5)',
          marginBottom: '8rem', background: '#09090B'
        }}>
          <LivePreview 
            experienceId={experience.id} 
            brandId={defaultBrandId} 
            variantId={experience.variants[0]?.id}
            aestheticId={defaultAestheticId}
          />
        </div>

        {/* Details Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', marginBottom: '8rem' }}>
          <div>
            <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', letterSpacing: '-0.03em' }}>Features</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {experience.includes.outcomes.map(out => (
                <li key={out} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', fontWeight: 500 }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(33,241,168,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--zx-primary, #3b82f6)' }}>✔</div>
                  {out}
                </li>
              ))}
            </ul>
          </div>
          
          <div style={{ padding: '3rem', background: 'rgba(255,255,255,0.02)', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Perfect For</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '3rem' }}>
              {experience.perfectFor.map(pf => (
                <span key={pf} style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: '2rem', fontSize: '0.875rem', fontWeight: 600 }}>
                  {pf}
                </span>
              ))}
            </div>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Technical Specs</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFF' }}>{experience.includes.technicalDetails.files}</div>
                <div style={{ fontSize: '1rem', opacity: 0.5, fontWeight: 600 }}>Files Included</div>
              </div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFF' }}>{experience.averageSetupTime}</div>
                <div style={{ fontSize: '1rem', opacity: 0.5, fontWeight: 600 }}>Setup Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
