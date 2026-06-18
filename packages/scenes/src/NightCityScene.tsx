export function NightCityScene() {
  return (
    <div 
      className="zx-scene-night-city"
      style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, #09090b 0%, #18181b 100%)',
        zIndex: 0,
      }}
    >
      <div 
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '40%',
          display: 'flex',
          alignItems: 'flex-end',
          gap: '2px',
          opacity: 0.3
        }}
      >
        <div style={{ width: '10%', height: '80%', background: 'var(--zx-accent)' }}></div>
        <div style={{ width: '15%', height: '100%', background: 'var(--zx-elevated)' }}></div>
        <div style={{ width: '8%', height: '50%', background: 'var(--zx-accent)' }}></div>
        <div style={{ width: '20%', height: '90%', background: 'var(--zx-elevated)' }}></div>
        <div style={{ width: '12%', height: '70%', background: 'var(--zx-accent)' }}></div>
        <div style={{ width: '25%', height: '60%', background: 'var(--zx-elevated)' }}></div>
        <div style={{ width: '10%', height: '85%', background: 'var(--zx-accent)' }}></div>
      </div>
    </div>
  );
}
