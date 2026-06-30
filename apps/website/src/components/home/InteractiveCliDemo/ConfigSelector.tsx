import React from 'react';
import styles from './InteractiveCliDemo.module.css';

export interface CliConfig {
  mode: 'native' | 'recipe' | 'isolated';
  radius: string;
  spacing: string;
  glass: string;
  sticky: boolean;
  animated: boolean;
}

interface ConfigSelectorProps {
  config: CliConfig;
  onChange: (config: CliConfig) => void;
}

export function ConfigSelector({ config, onChange }: ConfigSelectorProps) {
  const update = (key: keyof CliConfig, value: any) => {
    onChange({ ...config, [key]: value });
  };

  return (
    <div>
      <div className={styles.stepTitle}>
        4. Configure Properties
      </div>
      
      <div className={styles.configGroup}>
        <label className={styles.configLabel}>Installation Mode</label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginTop: '0.25rem' }}>
          <label className={styles.configToggle}>
            <input 
              type="radio" 
              name="mode" 
              value="native" 
              checked={config.mode === 'native'} 
              onChange={e => update('mode', 'native')} 
            />
            <span>Native (Adapts to project)</span>
          </label>
          <label className={styles.configToggle}>
            <input 
              type="radio" 
              name="mode" 
              value="recipe" 
              checked={config.mode === 'recipe'} 
              onChange={e => update('mode', 'recipe')} 
            />
            <span>Recipe (Zenix UI tokens)</span>
          </label>
          <label className={styles.configToggle}>
            <input 
              type="radio" 
              name="mode" 
              value="isolated" 
              checked={config.mode === 'isolated'} 
              onChange={e => update('mode', 'isolated')} 
            />
            <span>Isolated (No mapping)</span>
          </label>
        </div>
      </div>
      
      <div className={styles.configGroup}>
        <label className={styles.configLabel}>Radius</label>
        <select 
          className={styles.configSelect} 
          value={config.radius} 
          onChange={e => update('radius', e.target.value)}
        >
          <option value="none">Sharp (0px)</option>
          <option value="sm">Small</option>
          <option value="md">Medium</option>
          <option value="lg">Large</option>
          <option value="full">Full (Pill)</option>
        </select>
      </div>

      <div className={styles.configGroup}>
        <label className={styles.configLabel}>Spacing</label>
        <select 
          className={styles.configSelect} 
          value={config.spacing} 
          onChange={e => update('spacing', e.target.value)}
        >
          <option value="compact">Compact</option>
          <option value="comfortable">Comfortable</option>
          <option value="spacious">Spacious</option>
        </select>
      </div>

      <div className={styles.configGroup}>
        <label className={styles.configLabel}>Glass Preset</label>
        <select 
          className={styles.configSelect} 
          value={config.glass} 
          onChange={e => update('glass', e.target.value)}
        >
          <option value="crystal">Crystal</option>
          <option value="clear">Clear</option>
          <option value="tinted">Tinted</option>
          <option value="acrylic">Acrylic</option>
        </select>
      </div>

      <div className={styles.configRow}>
        <label className={styles.configToggle}>
          <input 
            type="checkbox" 
            checked={config.sticky} 
            onChange={e => update('sticky', e.target.checked)} 
          />
          <span>Sticky Navigation</span>
        </label>
        <label className={styles.configToggle}>
          <input 
            type="checkbox" 
            checked={config.animated} 
            onChange={e => update('animated', e.target.checked)} 
          />
          <span>Animated Underline</span>
        </label>
      </div>
    </div>
  );
}
