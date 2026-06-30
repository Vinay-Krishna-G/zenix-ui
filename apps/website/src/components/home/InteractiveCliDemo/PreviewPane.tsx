import React from 'react';
import dynamic from 'next/dynamic';
import { Experience } from '@zenixui/react';
import { Stack } from '@zenixui/components';
import styles from './InteractiveCliDemo.module.css';

const GlassHeader = dynamic(() => import('@/components/sections/headers/GlassHeader').then(m => ({ default: m.GlassHeader })), { ssr: false });
const MinimalHeader = dynamic(() => import('@/components/sections/headers/MinimalHeader').then(m => ({ default: m.MinimalHeader })), { ssr: false });
const SaaSHeader = dynamic(() => import('@/components/sections/headers/SaaSHeader').then(m => ({ default: m.SaaSHeader })), { ssr: false });

interface PreviewPaneProps {
  section: string;
  theme: 'zenix' | 'ocean' | 'midnight' | 'autumn';
}

export function PreviewPane({ section, theme }: PreviewPaneProps) {
  const PreviewComponent = () => {
    switch (section) {
      case 'glass': return <GlassHeader />;
      case 'minimal': return <MinimalHeader />;
      case 'saas': return <SaaSHeader />;
      default: return <GlassHeader />;
    }
  };

  return (
    <div className={styles.previewContainer}>
      <div className={styles.previewHeader}>
        <div className={styles.previewTitle}>
          Live Preview
        </div>
        <div className={styles.previewDots}>
          <div className={styles.previewDot} />
          <div className={styles.previewDot} />
          <div className={styles.previewDot} />
        </div>
      </div>
      <div className={styles.previewContent}>
        <div className={styles.previewInner}>
          <div className={styles.previewScaleWrapper}>
            <Experience preset={theme}>
              <div className={styles.previewBackground}>
                <PreviewComponent />
                <Stack align="center" gap="md" className={styles.previewPlaceholder}>
                  <div className={styles.placeholderLine} style={{ width: '60%' }} />
                  <div className={styles.placeholderLine} style={{ width: '80%' }} />
                  <div className={styles.placeholderLine} style={{ width: '75%' }} />
                </Stack>
              </div>
            </Experience>
          </div>
        </div>
      </div>
    </div>
  );
}
