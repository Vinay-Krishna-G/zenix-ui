export function AutumnScene() {
  return (
    <div 
      className="zx-scene-autumn"
      style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 50% 0%, var(--zx-surface) 0%, var(--zx-background) 100%)',
        zIndex: 0,
      }}
    />
  );
}
