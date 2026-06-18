

export function OceanEffect() {
  return (
    <div 
      className="zx-effect-ocean"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'hidden'
      }}
    >
      <div 
        style={{
          position: 'absolute',
          bottom: '-20px',
          left: '10%',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          background: 'rgba(56, 189, 248, 0.2)',
          animation: 'zx-float 4s infinite ease-in-out'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '-20px',
          left: '40%',
          width: '15px',
          height: '15px',
          borderRadius: '50%',
          background: 'rgba(56, 189, 248, 0.2)',
          animation: 'zx-float 6s infinite ease-in-out 1s'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '-20px',
          left: '80%',
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          background: 'rgba(56, 189, 248, 0.2)',
          animation: 'zx-float 3s infinite ease-in-out 0.5s'
        }}
      />
      <style>{`
        @keyframes zx-float {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-500px) scale(1.5); opacity: 0; }
        }
        
        /* Implement reduced motion per effect */
        [data-zx-motion="none"] .zx-effect-ocean,
        @media (prefers-reduced-motion: reduce) {
          .zx-effect-ocean {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
