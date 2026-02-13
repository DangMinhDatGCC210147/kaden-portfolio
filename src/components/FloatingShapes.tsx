export function FloatingShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Animated gradient orbs - fully automatic */}
      <div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, var(--retro-blue), transparent)',
          top: '10%',
          left: '10%',
          animation: 'float 20s ease-in-out infinite',
        }}
      />
      <div
        className="absolute w-80 h-80 rounded-full blur-3xl opacity-15"
        style={{
          background: 'radial-gradient(circle, var(--retro-teal), transparent)',
          top: '60%',
          right: '15%',
          animation: 'float-delayed 25s ease-in-out infinite',
        }}
      />
      <div
        className="absolute w-72 h-72 rounded-full blur-3xl opacity-10"
        style={{
          background: 'radial-gradient(circle, var(--retro-olive), transparent)',
          bottom: '20%',
          left: '20%',
          animation: 'float 30s ease-in-out infinite reverse',
        }}
      />
      <div
        className="absolute w-64 h-64 rounded-full blur-3xl opacity-12"
        style={{
          background: 'radial-gradient(circle, var(--retro-blue), transparent)',
          top: '40%',
          right: '40%',
          animation: 'float-delayed 22s ease-in-out infinite',
        }}
      />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full opacity-30"
          style={{
            backgroundColor: i % 3 === 0 ? 'var(--retro-blue)' : i % 3 === 1 ? 'var(--retro-teal)' : 'var(--retro-olive)',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `particle-float ${10 + Math.random() * 10}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      {/* Floating lines */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`line-${i}`}
          className="absolute rounded-full opacity-20"
          style={{
            width: `${50 + Math.random() * 100}px`,
            height: '2px',
            backgroundColor: i % 2 === 0 ? 'var(--retro-blue)' : 'var(--retro-teal)',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `line-float ${15 + Math.random() * 10}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(50px, -50px) scale(1.1);
          }
          50% {
            transform: translate(100px, 20px) scale(0.95);
          }
          75% {
            transform: translate(-30px, 60px) scale(1.05);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(-60px, 40px) scale(1.08);
          }
          50% {
            transform: translate(-20px, -50px) scale(0.92);
          }
          75% {
            transform: translate(40px, -30px) scale(1.03);
          }
        }

        @keyframes particle-float {
          0%, 100% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-50px) translateX(30px) scale(1.2);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-100px) translateX(50px) scale(0.8);
            opacity: 0.6;
          }
          75% {
            transform: translateY(-70px) translateX(20px) scale(1.1);
            opacity: 0.4;
          }
        }

        @keyframes line-float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.2;
          }
          33% {
            transform: translate(100px, -80px) rotate(120deg);
            opacity: 0.3;
          }
          66% {
            transform: translate(-50px, 50px) rotate(240deg);
            opacity: 0.15;
          }
        }
      `}</style>
    </div>
  );
}
