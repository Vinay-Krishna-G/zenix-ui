import React, { useState, useEffect } from 'react';
import styles from './InteractiveCliDemo.module.css';
import { CliConfig } from './ConfigSelector';

interface CLIOutputProps {
  section: string;
  theme: string;
  config: CliConfig;
}

export function CLIOutput({ section, theme, config }: CLIOutputProps) {
  const [installState, setInstallState] = useState<'idle' | 'typing' | 'installing' | 'done'>('done');
  const [commandText, setCommandText] = useState('');

  const isCustom = config.radius !== 'none' || config.spacing !== 'compact' || config.glass !== 'crystal' || config.sticky || config.animated;
  
  const targetCommand = isCustom 
    ? 'npx zenix-ui compose' 
    : `npx zenix-ui add header/${section} --theme ${theme}`;

  const composeFileContent = isCustom ? `
// zenix.compose.ts
export default {
  mode: '${config.mode}',
  theme: '${theme}',
  components: [
    {
      id: 'header/${section}',
      options: {
        radius: '${config.radius}',
        spacing: '${config.spacing}',
        glass: '${config.glass}',
        features: [
          ${config.sticky ? "'sticky', " : ""}${config.animated ? "'animated'" : ""}
        ].filter(Boolean)
      }
    }
  ]
};`.trim() : '';

  useEffect(() => {
    setInstallState('typing');
    setCommandText('');
    
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < targetCommand.length) {
        setCommandText(targetCommand.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setInstallState('installing');
        setTimeout(() => setInstallState('done'), 800);
      }
    }, 40);

    return () => clearInterval(typingInterval);
  }, [targetCommand, composeFileContent]);

  return (
    <div className={styles.cliWrapper}>
      <div className={styles.stepTitle}>
        {isCustom ? "5. Compose & Run" : "3. CLI Output"}
      </div>
      
      {isCustom && config.mode !== 'native' && (
        <div className={styles.cliOutput} style={{ marginBottom: '1rem', whiteSpace: 'pre-wrap', color: 'var(--zx-primary)' }}>
          {composeFileContent}
        </div>
      )}

      {config.mode === 'native' && (
        <div className={styles.cliOutput} style={{ marginBottom: '1rem' }}>
          <div style={{ color: 'var(--zx-primary)', fontWeight: 'bold', marginBottom: '1rem' }}>Installation Preview</div>
          
          <div style={{ color: 'var(--zx-primary)', fontWeight: 'bold', marginBottom: '0.5rem' }}>Reuse</div>
          <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.25rem', marginBottom: '1.25rem' }}>
            <div>✓ Button</div>
            <div>✓ Input</div>
            <div>✓ Card</div>
            <div>✓ Textarea</div>
          </div>
          
          <div style={{ color: 'var(--zx-primary)', fontWeight: 'bold', marginBottom: '0.5rem' }}>Generate</div>
          <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.25rem', marginBottom: '1.25rem' }}>
            <div>ContactForm.tsx</div>
            <div>ContactSuccess.tsx</div>
            <div>validation.ts</div>
          </div>

          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>No files will be overwritten.</div>
        </div>
      )}

      <div className={styles.cliOutput}>
        <div className={styles.cliPrompt}>
          <span className={styles.cliPromptSymbol}>$</span>
          <span>
            {commandText}
            {installState === 'typing' && <span className={styles.blink}>_</span>}
          </span>
        </div>
        
        {installState === 'installing' && (
          <div className={styles.installing}>
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.spinIcon}>
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
            Installing dependencies...
          </div>
        )}
        
        {installState === 'done' && (
          <div className={styles.done}>
            {config.mode === 'native' ? (
              <>
                <div style={{ color: 'var(--zx-primary)' }}>✓ Using existing Button</div>
                <div style={{ color: 'var(--zx-primary)' }}>✓ Using existing Surface</div>
                <div>✓ Installed components/headers/{section}.tsx</div>
              </>
            ) : (
              <div>✓ Installed components/headers/{section}.tsx</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
