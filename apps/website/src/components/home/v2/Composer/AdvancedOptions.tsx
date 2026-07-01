import React, { useState } from 'react';
import styles from './Composer.module.css';

export function AdvancedOptions({ framework, setFramework, styling, setStyling }: any) {
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <div>
      <div className={styles.advancedToggle} onClick={() => setShowAdvanced(!showAdvanced)}>
        Advanced Options {showAdvanced ? '▲' : '▼'}
      </div>
      
      {showAdvanced && (
        <div className={styles.advancedContent}>
          <div>
            <div className={styles.sectionTitleSmall}>Framework</div>
            <div className={styles.cardGridMedium}>
              {[
                { id: 'react', icon: '⚛', name: 'React', rec: true, desc: 'Vite Included' },
                { id: 'nextjs', icon: '▲', name: 'Next.js', rec: false, desc: 'Server Comp.' },
                { id: 'astro', icon: '🚀', name: 'Astro', rec: false, desc: 'Static Fast' },
                { id: 'vue', icon: '🟢', name: 'Vue', rec: false, desc: 'Composition' }
              ].map(f => (
                <div key={f.id} className={`${styles.card} ${framework === f.id ? styles.cardActive : ''} ${styles.fwCard}`} onClick={() => setFramework(f.id)}>
                  <div className={styles.fwIcon}>{f.icon}</div>
                  <div>
                    <div className={styles.fwName}>{f.name}</div>
                    <div className={styles.fwDesc}>{f.desc}</div>
                    {f.rec && <div className={styles.fwRec}>RECOMMENDED</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className={styles.sectionTitleSmall}>Styling</div>
            <div className={styles.cardGridMedium}>
              {[
                { id: 'tailwind', name: 'Tailwind CSS', desc: 'Most Popular' },
                { id: 'cssmodules', name: 'CSS Modules', desc: 'Enterprise' }
              ].map(s => (
                <div key={s.id} className={`${styles.card} ${styling === s.id ? styles.cardActive : ''} ${styles.styleOptionCard}`} onClick={() => setStyling(s.id)}>
                  <div className={styles.styleName}>{s.name}</div>
                  <div className={styles.styleDesc}>{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
