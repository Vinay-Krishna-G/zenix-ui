import React from 'react';
import styles from './Composer.module.css';

export function InstallLevelSelector({ activeId, onChange }: any) {
  return (
    <div>
      <div className={styles.sectionTitleMedium}>4. What do you want?</div>
      <div className={styles.cardGridLarge}>
        {[
          { id: 'complete', name: 'Complete Website', rec: true, features: ['35 Pages', 'SEO', 'Blog', 'Dashboard', 'Analytics'] },
          { id: 'landing', name: 'Landing Page', rec: false, features: ['Home', 'Pricing', 'FAQ', 'Contact'] },
          { id: 'components', name: 'Components Only', rec: false, features: ['UI Kit', 'Design Tokens', 'No Layouts'] }
        ].map(lvl => (
          <div 
            key={lvl.id}
            onClick={() => onChange(lvl.id)}
            className={`${styles.card} ${activeId === lvl.id ? styles.cardActive : ''}`}
          >
            <div className={styles.installCard}>
              <div className={styles.installHeader}>
                <div className={styles.installTitle}>{lvl.name}</div>
                {lvl.rec && <div className={styles.installRec}>Recommended</div>}
              </div>
              <div className={styles.installList}>
                {lvl.features.map(f => (
                  <div key={f} className={styles.installListItem}>✔ {f}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
