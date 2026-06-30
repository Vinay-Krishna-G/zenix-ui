import React from 'react';
import Link from 'next/link';
import { Surface, Button, PageSection } from '@zenixui/components';
import styles from './FooterCTA.module.css';

export function FooterCTA() {
  return (
    <PageSection>
      <Surface variant="card" className={styles.card}>
        <h2 className={styles.title}>
          Ready to ship something real?
        </h2>
        <p className={styles.description}>
          Pick a section, customize it in the studio, get the CLI command. Ship in minutes.
        </p>
        <div className={styles.actions}>
          <Link href="/blueprints" style={{ textDecoration: 'none' }}>
            <Button size="lg" style={{ fontWeight: 600 }}>Browse Gallery</Button>
          </Link>
          <Link href="/docs" style={{ textDecoration: 'none' }}>
            <Button variant="glass" size="lg" style={{ fontWeight: 600, border: '1px solid var(--zx-border)', color: 'var(--zx-primary)' }}>Read the Docs</Button>
          </Link>
        </div>
        <code className={styles.codeBlock}>
          npx zenix-ui add dashboard/header
        </code>
      </Surface>
    </PageSection>
  );
}
