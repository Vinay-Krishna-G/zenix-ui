'use client';

import { useState } from 'react';
import { Features } from '@zenixui/components';

export function AutumnDashboard() {
  const [view, setView] = useState<'home' | 'settings' | 'profile'>('home');

  return (
    <Features.Root>
      <div style={{ display: 'flex', minHeight: '80vh', background: 'var(--zx-background)', color: 'var(--zx-primary)' }}>
        
        <aside style={{ width: '260px', padding: '3rem 2rem', display: 'flex', flexDirection: 'column', borderRight: '1px solid var(--zx-elevated)' }}>
          <div style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '1.5rem', marginBottom: '4rem' }}>
            The Study
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <SidebarLink active={view === 'home'} onClick={() => setView('home')}>Desk</SidebarLink>
            <SidebarLink active={view === 'profile'} onClick={() => setView('profile')}>Author</SidebarLink>
            <SidebarLink active={view === 'settings'} onClick={() => setView('settings')}>Preferences</SidebarLink>
          </nav>
        </aside>

        <main style={{ flex: 1, padding: '3rem 4rem' }}>
          
          {view === 'home' && (
            <div style={{ maxWidth: '900px' }}>
              <h1 style={{ fontSize: '3rem', fontFamily: 'Georgia, serif', margin: '0 0 3rem', color: 'var(--zx-primary)' }}>Desk</h1>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '3rem', marginBottom: '4rem' }}>
                <MetricTile title="Words Written" value="12,405" desc="A productive week." />
                <MetricTile title="Letters Sent" value="34" desc="Connecting with readers." />
              </div>
              
              <div>
                <h3 style={{ margin: '0 0 2rem', fontSize: '1.5rem', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>Recent Entries</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  {[1,2,3].map(id => (
                    <div key={id} style={{ paddingBottom: '2rem', borderBottom: '1px solid var(--zx-elevated)' }}>
                      <div style={{ fontSize: '0.875rem', opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>October 12, 2026</div>
                      <div style={{ fontSize: '1.25rem', lineHeight: 1.6, fontWeight: 300 }}>Started drafting the new chapter on typographic scale. The words are flowing nicely today.</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {view === 'settings' && (
            <div style={{ maxWidth: '600px' }}>
              <h1 style={{ fontSize: '3rem', fontFamily: 'Georgia, serif', margin: '0 0 3rem' }}>Preferences</h1>
              <div style={{ borderTop: '1px solid var(--zx-elevated)' }}>
                <div style={{ padding: '2rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--zx-elevated)' }}>
                  <div>
                    <h4 style={{ margin: '0 0 0.5rem', fontSize: '1.25rem', fontFamily: 'Georgia, serif' }}>Daily Digest</h4>
                    <p style={{ margin: 0, fontSize: '1rem', opacity: 0.6, fontWeight: 300 }}>Receive a summary of activity.</p>
                  </div>
                  <Toggle active={true} />
                </div>
              </div>
            </div>
          )}

          {view === 'profile' && (
            <div style={{ maxWidth: '600px' }}>
              <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
                <div style={{ width: '150px', height: '180px', borderRadius: '100px 100px 10px 10px', background: 'var(--zx-elevated)' }} />
                <div>
                  <h1 style={{ fontSize: '3.5rem', fontFamily: 'Georgia, serif', margin: '0 0 1rem' }}>Evelyn</h1>
                  <p style={{ opacity: 0.6, fontSize: '1.25rem', fontWeight: 300, lineHeight: 1.6 }}>
                    A writer and observer. Collecting moments and translating them into letters.
                  </p>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>
    </Features.Root>
  );
}

function SidebarLink({ children, active, onClick }: any) {
  return (
    <button 
      onClick={onClick}
      style={{
        width: '100%',
        textAlign: 'left',
        background: 'transparent',
        border: 'none',
        color: 'var(--zx-primary)',
        fontWeight: active ? 600 : 300,
        fontSize: '1.125rem',
        cursor: 'pointer',
        opacity: active ? 1 : 0.6,
        fontStyle: active ? 'italic' : 'normal',
        fontFamily: active ? 'Georgia, serif' : 'inherit',
        transition: 'all 0.3s'
      }}
    >
      {children}
    </button>
  );
}

function MetricTile({ title, value, desc }: any) {
  return (
    <div style={{ padding: '2rem', background: 'transparent', border: '1px solid var(--zx-elevated)', borderRadius: 'var(--zx-radius-overlay)' }}>
      <div style={{ fontSize: '1rem', fontFamily: 'Georgia, serif', fontStyle: 'italic', opacity: 0.7, marginBottom: '1rem' }}>{title}</div>
      <div style={{ fontSize: '3rem', fontWeight: 300, marginBottom: '1rem' }}>{value}</div>
      <div style={{ fontSize: '0.875rem', opacity: 0.5, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{desc}</div>
    </div>
  );
}

function Toggle({ active }: { active: boolean }) {
  return (
    <div style={{ width: '44px', height: '24px', borderRadius: '12px', border: '1px solid var(--zx-primary)', position: 'relative', cursor: 'pointer' }}>
      <div style={{ position: 'absolute', top: '3px', left: active ? '23px' : '3px', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--zx-primary)', transition: 'left 0.3s ease' }} />
    </div>
  );
}
