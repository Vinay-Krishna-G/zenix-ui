import React from 'react';
import styles from './Composer.module.css';

import { LivePreview } from '../../../preview/LivePreview';

export function PreviewCanvas({ experienceId, brandId, variantId, aestheticId, targetStack }: any) {
  return (
    <div className={styles.previewSection}>
      <div className={styles.previewCanvas}>
        <div key={`${experienceId}-${brandId}-${aestheticId}`} className={styles.previewContent}>
          <LivePreview 
            experienceId={experienceId}
            brandId={brandId}
            variantId={variantId}
            aestheticId={aestheticId}
          />
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
