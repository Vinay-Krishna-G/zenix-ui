'use client';

import { useState } from 'react';
import { Surface, Features, Button, Badge } from '@zenixui/components';

export function NightCityBlog() {
  const [view, setView] = useState<'list' | 'detail'>('list');

  if (view === 'detail') {
    return (
      <Features.Root padded>
        <Features.Content style={{ maxWidth: '800px', margin: '2rem auto', fontFamily: 'var(--zx-font-mono)' }}>
          <Button 
            variant="cyber"
            onClick={() => setView('list')} 
            style={{ background: 'transparent', border: 'none', color: 'var(--zx-primary)', opacity: 0.6, padding: 0, height: 'auto', marginBottom: '2rem' }}
          >
            {'< RETURN'}
          </Button>
          
          <div style={{ marginBottom: '3rem', borderBottom: '1px solid var(--zx-primary)', paddingBottom: '2rem' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#00ff00', textTransform: 'uppercase' }}>
              [DATALOG] // OP_REPORT
            </span>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 600, margin: '1rem 0', textTransform: 'uppercase', lineHeight: 1.2 }}>
              BREACHING THE MAINFRAME
            </h1>
            <div style={{ display: 'flex', gap: '2rem', opacity: 0.5, fontSize: '0.875rem' }}>
              <span>TS: 2026.10.12</span>
              <span>READ_CYCLE: 5M</span>
            </div>
          </div>

          <div style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--zx-primary)' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              {'>'} INITIALIZING PACKET SNIFFER...<br/>
              {'>'} ENCRYPTED PAYLOAD DETECTED.
              <br/><br/>
              The architecture of the Night City theme requires zero radius borders and stark, aggressive typography. The mono font isn't just a stylistic choice, it's a structural requirement for alignment.
            </p>
            
            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: '3rem 0 1.5rem', textTransform: 'uppercase', color: '#ff003c' }}>
              {'>>'} SYSTEM_ARCHITECTURE
            </h2>
            
            <div style={{ background: 'transparent', border: '1px solid var(--zx-elevated)', borderLeft: '2px solid #00ff00', padding: '1.5rem', fontSize: '0.875rem', margin: '2rem 0', overflowX: 'auto' }}>
              <span style={{ opacity: 0.5 }}>01</span> <span style={{ color: '#00ff00' }}>const</span> breach = <span style={{ color: '#ff003c' }}>async</span> () {'=>'} {'{'}<br/>
              <span style={{ opacity: 0.5 }}>02</span>   <span style={{ color: '#00ff00' }}>await</span> System.override(0x00FF);<br/>
              <span style={{ opacity: 0.5 }}>03</span> {'}'};
            </div>
          </div>
        </Features.Content>
      </Features.Root>
    );
  }

  return (
    <Features.Root padded>
      <Features.Content style={{ maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--zx-font-mono)' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 600, margin: '0 0 3rem', textTransform: 'uppercase', borderBottom: '2px solid var(--zx-primary)', paddingBottom: '1rem' }}>
          SYS.DATALOGS
          <Badge variant="terminal" tone="neutral">
            SYS.LOG
          </Badge>
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {[1,2,3].map(id => (
            <div 
              key={id}
              onClick={() => setView('detail')}
              style={{ padding: '2rem 0', borderBottom: '1px solid var(--zx-elevated)', cursor: 'pointer', display: 'flex', gap: '2rem' }}
            >
              <div style={{ width: '100px', opacity: 0.5, fontSize: '0.875rem', flexShrink: 0 }}>
                2026.10.{10+id}
              </div>
              <div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 600, margin: '0 0 0.5rem', textTransform: 'uppercase' }}>
                  BREACHING THE MAINFRAME {id}
                  <Badge variant="terminal" tone="neutral">
                    REPORT
                  </Badge>
                </h2>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', color: '#00ff00' }}>[REPORT]</span>
                  <span style={{ fontSize: '0.75rem', opacity: 0.5 }}>STATUS: DECRYPTED</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Features.Content>
    </Features.Root>
  );
}
