'use client';

import React, { useState } from 'react';
import { Surface, PageSection, SectionHeader, SectionHeading, SectionDescription } from '@zenixui/components';
import { SectionSelector } from './SectionSelector';
import { ThemeSelector } from './ThemeSelector';
import { ConfigSelector, CliConfig } from './ConfigSelector';
import { CLIOutput } from './CLIOutput';
import { PreviewPane } from './PreviewPane';
import styles from './InteractiveCliDemo.module.css';

type Theme = 'zenix' | 'ocean' | 'midnight' | 'autumn';
type Section = 'glass' | 'minimal' | 'saas';

const DEFAULT_CONFIG: CliConfig = {
  mode: 'native',
  radius: 'none',
  spacing: 'compact',
  glass: 'crystal',
  sticky: false,
  animated: false,
};

export function InteractiveCliDemo() {
  const [theme, setTheme] = useState<Theme>('ocean');
  const [section, setSection] = useState<Section>('glass');
  const [config, setConfig] = useState<CliConfig>(DEFAULT_CONFIG);

  return (
    <PageSection>
      <SectionHeader>
        <div>
          <SectionHeading>Install exactly what you need.</SectionHeading>
          <SectionDescription>Pick a section, configure its design properties, and generate the exact command.</SectionDescription>
        </div>
      </SectionHeader>
      
      <Surface variant="card" className={styles.card}>
        {/* LEFT: Controls & CLI */}
        <div className={styles.sidebar}>
          <SectionSelector section={section} onChange={setSection as any} />
          <ThemeSelector theme={theme} onChange={setTheme} />
          <ConfigSelector config={config} onChange={setConfig} />
          <CLIOutput section={section} theme={theme} config={config} />
        </div>

        {/* RIGHT: Live Preview */}
        <PreviewPane section={section} theme={theme} />
      </Surface>
    </PageSection>
  );
}
