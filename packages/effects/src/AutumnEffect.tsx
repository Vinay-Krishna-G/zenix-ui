export function AutumnEffect() {
  return (
    <div 
      className="zx-effect-autumn"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'hidden'
      }}
    >
      <div className="zx-leaf" style={{ left: '10%', animationDuration: '7s', animationDelay: '0s', background: '#d97706' }} />
      <div className="zx-leaf" style={{ left: '30%', animationDuration: '9s', animationDelay: '2s', background: '#b45309' }} />
      <div className="zx-leaf" style={{ left: '60%', animationDuration: '6s', animationDelay: '1s', background: '#f59e0b' }} />
      <div className="zx-leaf" style={{ left: '80%', animationDuration: '8s', animationDelay: '3s', background: '#d97706' }} />

      <style>{`
        .zx-leaf {
          position: absolute;
          top: -20px;
          width: 15px;
          height: 15px;
          border-radius: 2px 10px 2px 10px;
          opacity: 0.8;
          animation-name: zx-fall;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }

        @keyframes zx-fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }

        /* Motion Profile Map */
        [data-zx-motion="none"] .zx-effect-autumn,
        @media (prefers-reduced-motion: reduce) {
          .zx-effect-autumn { display: none !important; }
        }
        
        [data-zx-motion="subtle"] .zx-leaf { animation-duration: 15s !important; opacity: 0.4; }
        [data-zx-motion="immersive"] .zx-leaf { opacity: 1; }
      `}</style>
    </div>
  );
}
