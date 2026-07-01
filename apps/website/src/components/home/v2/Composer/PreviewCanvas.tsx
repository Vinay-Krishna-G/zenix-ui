import React from 'react';
import styles from './Composer.module.css';

export function PreviewCanvas({ targetKey, TargetComp, targetStack }: any) {
  return (
    <div className={styles.previewSection}>
      <div className={styles.previewCanvas}>
        <div key={targetKey} className={styles.previewContent}>
          {TargetComp ? <TargetComp /> : null}
        </div>
      </div>
      <div className={styles.previewHud}>
        <div className={styles.hudItem}>{targetStack.exp}</div>
        <div className={styles.hudSeparator} />
        <div className={styles.hudItem}>{targetStack.iden}</div>
        <div className={styles.hudSeparator} />
        <div className={styles.hudItem}>{targetStack.aes}</div>
        <div className={styles.hudSeparator} />
        <div className={styles.hudItem}>{targetStack.framework}</div>
      </div>
    </div>
  );
}
