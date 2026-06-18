export function NightCityEffect() {
  return (
    <div 
      className="zx-effect-night-city"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'hidden'
      }}
    >
      {/* Light streaks */}
      <div className="zx-light-streak" style={{ top: '60%', background: '#ec4899', animationDuration: '3s', animationDelay: '0s' }} />
      <div className="zx-light-streak" style={{ top: '70%', background: '#3b82f6', animationDuration: '4s', animationDelay: '1s' }} />
      <div className="zx-light-streak" style={{ top: '80%', background: '#eab308', animationDuration: '2.5s', animationDelay: '0.5s' }} />

      <style>{`
        .zx-light-streak {
          position: absolute;
          width: 100px;
          height: 3px;
          border-radius: 3px;
          left: -100px;
          opacity: 0.6;
          filter: blur(2px);
          animation-name: zx-streak;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }

        @keyframes zx-streak {
          0% { transform: translateX(0); }
          100% { transform: translateX(2000px); }
        }

        /* Motion Profile Map */
        [data-zx-motion="none"] .zx-effect-night-city,
        @media (prefers-reduced-motion: reduce) {
          .zx-effect-night-city { display: none !important; }
        }
        
        [data-zx-motion="subtle"] .zx-light-streak { animation-duration: 8s !important; opacity: 0.3; }
        [data-zx-motion="immersive"] .zx-light-streak { width: 300px; filter: blur(4px); opacity: 0.8; }
      `}</style>
    </div>
  );
}
