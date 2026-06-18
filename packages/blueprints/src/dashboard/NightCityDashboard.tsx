'use client';

import { useState } from 'react';
import { Surface, Features } from '@zenixui/components';

export function NightCityDashboard() {
  const [view, setView] = useState<'home' | 'settings' | 'profile'>('home');

  return (
    <Features.Root>
      <div style={{ display: 'flex', minHeight: '80vh', background: 'var(--zx-background)', color: 'var(--zx-primary)', fontFamily: 'var(--zx-font-mono)' }}>
        
        <aside style={{ width: '250px', borderRight: '1px solid var(--zx-elevated)', padding: '2rem', display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontWeight: 600, fontSize: '1.25rem', marginBottom: '3rem', color: '#00ff00', textTransform: 'uppercase' }}>
            [SYS.ADMIN]
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <SidebarLink active={view === 'home'} onClick={() => setView('home')}>{'>>'} TERMINAL</SidebarLink>
            <SidebarLink active={view === 'profile'} onClick={() => setView('profile')}>{'>>'} OPERATIVE</SidebarLink>
            <SidebarLink active={view === 'settings'} onClick={() => setView('settings')}>{'>>'} CONFIG</SidebarLink>
          </nav>
        </aside>

        <main style={{ flex: 1, padding: '3rem 4rem' }}>
          
          {view === 'home' && (
            <div>
              <h1 style={{ fontSize: '2rem', fontWeight: 600, margin: '0 0 2rem', textTransform: 'uppercase', color: '#ff003c' }}>SYS.TERMINAL</h1>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
                <MetricTile title="CPU_LOAD" value="99.9%" status="critical" />
                <MetricTile title="NET_TRAFFIC" value="42.5 TB/s" status="normal" />
                <MetricTile title="ACTIVE_NODES" value="0x1A4" status="normal" />
              </div>
              
              <Surface variant="card" style={{ padding: '2rem', border: '1px solid var(--zx-elevated)', borderRadius: 0, background: 'transparent' }}>
                <h3 style={{ margin: '0 0 1.5rem', fontSize: '1rem', fontWeight: 600, textTransform: 'uppercase' }}>{'>>'} ACTIVITY_LOG</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
                  {[1,2,3,4,5].map(id => (
                    <div key={id} style={{ display: 'flex', gap: '1rem', opacity: id > 2 ? 0.5 : 1 }}>
                      <span style={{ color: id === 1 ? '#ff003c' : '#00ff00' }}>[TS:10{id}4]</span>
                      <span>{id === 1 ? 'UNAUTHORIZED BREACH DETECTED' : 'STANDARD PACKET ROUTED'}</span>
                    </div>
                  ))}
                </div>
              </Surface>
            </div>
          )}

          {view === 'settings' && (
            <div style={{ maxWidth: '600px' }}>
              <h1 style={{ fontSize: '2rem', fontWeight: 600, margin: '0 0 2rem', textTransform: 'uppercase' }}>SYS.CONFIG</h1>
              <Surface variant="card" style={{ border: '1px solid var(--zx-elevated)', borderRadius: 0, background: 'transparent' }}>
                <div style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--zx-elevated)' }}>
                  <div>
                    <h4 style={{ margin: '0 0 0.25rem', fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase' }}>ALLOW_INBOUND</h4>
                    <p style={{ margin: 0, fontSize: '0.75rem', opacity: 0.5, textTransform: 'uppercase' }}>OPEN PORT 0x00FF FOR INCOMING LOGS</p>
                  </div>
                  <Toggle active={true} />
                </div>
              </Surface>
            </div>
          )}

          {view === 'profile' && (
            <div style={{ maxWidth: '600px' }}>
              <h1 style={{ fontSize: '2rem', fontWeight: 600, margin: '0 0 3rem', textTransform: 'uppercase' }}>OPERATIVE.DAT</h1>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>
                <div style={{ width: '120px', height: '120px', border: '2px solid #00ff00', background: 'rgba(0,255,0,0.1)', position: 'relative' }}>
                   {/* Cyberpunk corner accents inside avatar */}
                   <div style={{ position: 'absolute', top: -2, left: -2, width: '10px', height: '10px', background: '#00ff00' }} />
                </div>
                <div>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: '0 0 0.5rem', textTransform: 'uppercase' }}>V. [UNKNOWN]</h2>
                  <p style={{ margin: 0, opacity: 0.5, textTransform: 'uppercase', fontSize: '0.875rem' }}>CLASS: NETRUNNER<br/>STATUS: ACTIVE</p>
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
        padding: '0.75rem 1rem',
        background: active ? 'var(--zx-elevated)' : 'transparent',
        border: 'none',
        color: active ? '#00ff00' : 'var(--zx-primary)',
        fontWeight: 600,
        fontSize: '0.875rem',
        fontFamily: 'inherit',
        cursor: 'pointer',
        opacity: active ? 1 : 0.5,
        textTransform: 'uppercase'
      }}
    >
      {children}
    </button>
  );
}

function MetricTile({ title, value, status }: any) {
  const color = status === 'critical' ? '#ff003c' : '#00ff00';
  return (
    <Surface variant="card" style={{ padding: '1.5rem', border: `1px solid ${color}`, borderRadius: 0, background: 'transparent' }}>
      <div style={{ fontSize: '0.75rem', fontWeight: 600, opacity: 0.7, marginBottom: '0.5rem', textTransform: 'uppercase' }}>{title}</div>
      <div style={{ fontSize: '1.5rem', fontWeight: 600, color }}>{value}</div>
    </Surface>
  );
}

function Toggle({ active }: { active: boolean }) {
  return (
    <div 
      style={{ 
        padding: '0.25rem 0.5rem', 
        border: '1px solid var(--zx-primary)', 
        color: active ? '#00ff00' : 'var(--zx-primary)', 
        cursor: 'pointer',
        fontSize: '0.75rem',
        fontWeight: 600
      }}
    >
      [{active ? ' ON' : 'OFF' }]
    </div>
  );
}
