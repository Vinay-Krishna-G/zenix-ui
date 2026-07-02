'use client';

import { useState } from 'react';
import { Surface, Features } from '@zenixui/components';

export function ZenixDashboard() {
  const [view, setView] = useState<'home' | 'settings' | 'profile'>('home');

  return (
    <Features.Root>
      <div style={{ display: 'flex', minHeight: '80vh', background: 'var(--zx-background)', color: 'var(--zx-primary)' }}>
        
        {/* Sidebar Discovery */}
        <aside style={{ width: '240px', borderRight: '1px solid var(--zx-elevated)', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontWeight: 600, fontSize: '1.25rem', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '20px', height: '20px', background: 'var(--zx-primary)', borderRadius: '4px' }} />
            Zenix
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <SidebarLink active={view === 'home'} onClick={() => setView('home')}>Overview</SidebarLink>
            <SidebarLink active={view === 'profile'} onClick={() => setView('profile')}>Profile</SidebarLink>
            <SidebarLink active={view === 'settings'} onClick={() => setView('settings')}>Settings</SidebarLink>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main style={{ flex: 1, padding: '3rem 4rem' }}>
          
          {view === 'home' && (
            <div>
              <h1 style={{ fontSize: '2rem', fontWeight: 600, margin: '0 0 2rem' }}>Overview</h1>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
                {/* MetricTile Discovery */}
                <MetricTile title="Total Revenue" value="$45,231.89" trend="+20.1%" />
                <MetricTile title="Subscriptions" value="+2350" trend="+180.1%" />
                <MetricTile title="Active Now" value="+12,234" trend="+19%" />
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
                <Surface variant="card" style={{ padding: '1.5rem', border: '1px solid var(--zx-elevated)', borderRadius: 'var(--zx-radius-card)' }}>
                  <h3 style={{ margin: '0 0 1.5rem', fontSize: '1rem', fontWeight: 600 }}>Recent Sales</h3>
                  {/* Table Row Discovery */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {[1,2,3,4].map(id => (
                      <div key={id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1rem', borderBottom: '1px solid var(--zx-elevated)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                          <Avatar />
                          <div>
                            <div style={{ fontWeight: 500, fontSize: '0.875rem' }}>Olivia Martin</div>
                            <div style={{ fontSize: '0.75rem', opacity: 0.6 }}>olivia@example.com</div>
                          </div>
                        </div>
                        <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>+${Math.floor(Math.random() * 500) + 50}.00</div>
                      </div>
                    ))}
                  </div>
                </Surface>
                <Surface variant="card" style={{ padding: '1.5rem', border: '1px solid var(--zx-elevated)', borderRadius: 'var(--zx-radius-card)' }}>
                  <h3 style={{ margin: '0 0 1rem', fontSize: '1rem', fontWeight: 600 }}>Activity</h3>
                  {/* ActivityFeed Discovery */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem' }}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--zx-accent)', marginTop: '6px' }} />
                      <div>
                        <div style={{ fontSize: '0.875rem', fontWeight: 500 }}>System Updated</div>
                        <div style={{ fontSize: '0.75rem', opacity: 0.5 }}>2 hours ago</div>
                      </div>
                    </div>
                  </div>
                </Surface>
              </div>
            </div>
          )}

          {view === 'settings' && (
            <div style={{ maxWidth: '600px' }}>
              <h1 style={{ fontSize: '2rem', fontWeight: 600, margin: '0 0 2rem' }}>Settings</h1>
              <Surface variant="card" style={{ border: '1px solid var(--zx-elevated)', borderRadius: 'var(--zx-radius-card)' }}>
                {/* FormRow & Toggle Discovery */}
                <div style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--zx-elevated)' }}>
                  <div>
                    <h4 style={{ margin: '0 0 0.25rem', fontSize: '0.875rem', fontWeight: 500 }}>Email Notifications</h4>
                    <p style={{ margin: 0, fontSize: '0.75rem', opacity: 0.6 }}>Receive emails about your account activity.</p>
                  </div>
                  <Toggle active={true} />
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h4 style={{ margin: '0 0 0.25rem', fontSize: '0.875rem', fontWeight: 500 }}>Marketing Emails</h4>
                    <p style={{ margin: 0, fontSize: '0.75rem', opacity: 0.6 }}>Receive emails about new products and features.</p>
                  </div>
                  <Toggle active={false} />
                </div>
              </Surface>
            </div>
          )}

          {view === 'profile' && (
            <div style={{ maxWidth: '600px' }}>
              <h1 style={{ fontSize: '2rem', fontWeight: 600, margin: '0 0 2rem' }}>Profile</h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '3rem' }}>
                {/* Avatar Discovery */}
                <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'var(--zx-elevated)' }} />
                <div>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: '0 0 0.5rem' }}>Alex Developer</h2>
                  <p style={{ margin: 0, opacity: 0.6 }}>Software Engineer</p>
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
        padding: '0.5rem 0.75rem',
        borderRadius: 'var(--zx-radius-surface)',
        background: active ? 'var(--zx-elevated)' : 'transparent',
        border: 'none',
        color: 'var(--zx-primary)',
        fontWeight: 500,
        fontSize: '0.875rem',
        cursor: 'pointer',
        opacity: active ? 1 : 0.6,
        transition: 'all 0.2s'
      }}
    >
      {children}
    </button>
  );
}

function MetricTile({ title, value, trend }: any) {
  return (
    <Surface variant="card" style={{ padding: '1.5rem', border: '1px solid var(--zx-elevated)', borderRadius: 'var(--zx-radius-card)' }}>
      <div style={{ fontSize: '0.875rem', fontWeight: 500, opacity: 0.7, marginBottom: '0.5rem' }}>{title}</div>
      <div style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>{value}</div>
      <div style={{ fontSize: '0.75rem', color: 'var(--zx-accent)', fontWeight: 500 }}>{trend} from last month</div>
    </Surface>
  );
}

function Avatar() {
  return <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--zx-elevated)' }} />;
}

function Toggle({ active }: { active: boolean }) {
  return (
    <div style={{ width: '36px', height: '20px', borderRadius: '10px', background: active ? 'var(--zx-primary)' : 'var(--zx-elevated)', position: 'relative', cursor: 'pointer', transition: 'background 0.2s' }}>
      <div style={{ position: 'absolute', top: '2px', left: active ? '18px' : '2px', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--zx-background)', transition: 'left 0.2s' }} />
    </div>
  );
}
