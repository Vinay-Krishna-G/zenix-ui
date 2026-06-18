'use client';

import { useState } from 'react';
import { Surface, Features } from '@zenixui/components';

export function OceanDashboard() {
  const [view, setView] = useState<'home' | 'settings' | 'profile'>('home');

  return (
    <Features.Root>
      <div style={{ display: 'flex', minHeight: '80vh', background: 'var(--zx-background)', color: 'var(--zx-primary)' }}>
        
        <aside style={{ width: '280px', padding: '2rem', display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontWeight: 300, fontSize: '1.5rem', marginBottom: '4rem', letterSpacing: '0.05em' }}>
            Ocean<span style={{ opacity: 0.5 }}>.io</span>
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <SidebarLink active={view === 'home'} onClick={() => setView('home')}>Waves</SidebarLink>
            <SidebarLink active={view === 'profile'} onClick={() => setView('profile')}>Diver Profile</SidebarLink>
            <SidebarLink active={view === 'settings'} onClick={() => setView('settings')}>Depths (Settings)</SidebarLink>
          </nav>
        </aside>

        <main style={{ flex: 1, padding: '2rem 3rem' }}>
          
          {view === 'home' && (
            <div>
              <h1 style={{ fontSize: '3rem', fontWeight: 300, margin: '0 0 3rem', letterSpacing: '-0.02em' }}>Waves</h1>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '4rem' }}>
                <MetricTile title="Current Flow" value="1.2k" />
                <MetricTile title="Tidal Reach" value="84%" />
                <MetricTile title="Deep Dives" value="442" />
              </div>
              
              <Surface variant="glass" style={{ padding: '2.5rem', borderRadius: 'var(--zx-radius-lg)', background: 'var(--zx-glass-bg)', backdropFilter: 'var(--zx-glass-blur)', border: '1px solid var(--zx-glass-border)' }}>
                <h3 style={{ margin: '0 0 2rem', fontSize: '1.25rem', fontWeight: 300 }}>Recent Currents</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {[1,2,3].map(id => (
                    <div key={id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
                        <div>
                          <div style={{ fontWeight: 400, fontSize: '1rem' }}>Data stream {id} synchronized</div>
                          <div style={{ fontSize: '0.875rem', opacity: 0.5, fontWeight: 300 }}>Just now</div>
                        </div>
                      </div>
                      <div style={{ padding: '0.25rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--zx-radius-round)', fontSize: '0.75rem', border: '1px solid rgba(255,255,255,0.1)' }}>Completed</div>
                    </div>
                  ))}
                </div>
              </Surface>
            </div>
          )}

          {view === 'settings' && (
            <div style={{ maxWidth: '700px' }}>
              <h1 style={{ fontSize: '3rem', fontWeight: 300, margin: '0 0 3rem', letterSpacing: '-0.02em' }}>Depths</h1>
              <Surface variant="glass" style={{ borderRadius: 'var(--zx-radius-lg)', background: 'var(--zx-glass-bg)', backdropFilter: 'var(--zx-glass-blur)', border: '1px solid var(--zx-glass-border)', overflow: 'hidden' }}>
                <div style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <div>
                    <h4 style={{ margin: '0 0 0.5rem', fontSize: '1.125rem', fontWeight: 400 }}>Sonar Pings</h4>
                    <p style={{ margin: 0, fontSize: '0.875rem', opacity: 0.6, fontWeight: 300 }}>Allow notifications to surface.</p>
                  </div>
                  <Toggle active={true} />
                </div>
              </Surface>
            </div>
          )}

          {view === 'profile' && (
            <div style={{ maxWidth: '800px' }}>
              <Surface variant="glass" style={{ position: 'relative', height: '200px', borderRadius: 'var(--zx-radius-lg)', background: 'var(--zx-glass-bg)', backdropFilter: 'var(--zx-glass-blur)', border: '1px solid var(--zx-glass-border)', marginBottom: '5rem' }}>
                <div style={{ position: 'absolute', bottom: '-50px', left: '3rem', width: '120px', height: '120px', borderRadius: '50%', background: 'var(--zx-background)', padding: '0.5rem' }}>
                  <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
                </div>
              </Surface>
              <div style={{ paddingLeft: '3rem' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 300, margin: '0 0 0.5rem' }}>Alex Ocean</h1>
                <p style={{ opacity: 0.6, fontSize: '1.125rem', fontWeight: 300 }}>Deep Sea Navigator</p>
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
        padding: '1rem 1.5rem',
        borderRadius: 'var(--zx-radius-round)',
        background: active ? 'rgba(255,255,255,0.05)' : 'transparent',
        border: active ? '1px solid var(--zx-glass-border)' : '1px solid transparent',
        color: 'var(--zx-primary)',
        fontWeight: 300,
        fontSize: '1rem',
        cursor: 'pointer',
        opacity: active ? 1 : 0.6,
        transition: 'all 0.3s ease'
      }}
    >
      {children}
    </button>
  );
}

function MetricTile({ title, value }: any) {
  return (
    <Surface variant="glass" style={{ padding: '2rem', borderRadius: 'var(--zx-radius-lg)', background: 'var(--zx-glass-bg)', backdropFilter: 'var(--zx-glass-blur)', border: '1px solid var(--zx-glass-border)' }}>
      <div style={{ fontSize: '1rem', fontWeight: 300, opacity: 0.7, marginBottom: '1rem' }}>{title}</div>
      <div style={{ fontSize: '3rem', fontWeight: 300, letterSpacing: '-0.02em' }}>{value}</div>
    </Surface>
  );
}

function Toggle({ active }: { active: boolean }) {
  return (
    <div style={{ width: '50px', height: '26px', borderRadius: '13px', background: active ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.05)', border: '1px solid var(--zx-glass-border)', position: 'relative', cursor: 'pointer', transition: 'all 0.3s ease' }}>
      <div style={{ position: 'absolute', top: '2px', left: active ? '26px' : '2px', width: '20px', height: '20px', borderRadius: '50%', background: 'var(--zx-primary)', transition: 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1)', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }} />
    </div>
  );
}
