import { useParallax } from '../hooks/useParallax';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useRef } from 'react';

export function Hero() {
  const parallaxY = useParallax(-0.3);
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollReveal(sectionRef, { threshold: 0.2 });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="hero" 
      className="min-h-screen flex items-center justify-center px-6 lg:px-12 pt-24 md:pt-0 relative overflow-hidden transition-all duration-1000"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
      }}
    >
      {/* Animated Background Gradients with Parallax */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{
          transform: `translateY(${parallaxY}px)`,
        }}
      >
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl animate-pulse-slow"
          style={{
            background: 'radial-gradient(circle, var(--retro-blue), transparent 70%)',
            animation: 'morph 15s ease-in-out infinite, float 20s ease-in-out infinite',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
          style={{
            background: 'radial-gradient(circle, var(--retro-teal), transparent 70%)',
            animation: 'morph 18s ease-in-out infinite reverse, float-delayed 25s ease-in-out infinite',
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl"
          style={{
            background: 'radial-gradient(circle, var(--retro-olive), transparent 70%)',
            animation: 'morph 20s ease-in-out infinite, pulse 8s ease-in-out infinite',
          }}
        />
      </div>

      {/* Geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 right-20 w-32 h-32 border-2 rounded-lg opacity-10"
          style={{ 
            borderColor: 'var(--retro-blue)',
            animation: 'rotate 30s linear infinite, float 15s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute bottom-32 left-32 w-24 h-24 border-2 rounded-full opacity-10"
          style={{ 
            borderColor: 'var(--retro-teal)',
            animation: 'rotate-reverse 25s linear infinite, float-delayed 18s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute top-1/3 left-20 w-20 h-20 border-2 opacity-10"
          style={{ 
            borderColor: 'var(--retro-olive)',
            animation: 'rotate 20s linear infinite reverse, float 12s ease-in-out infinite'
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-10 relative z-10">
        {/* Name & Nickname with staggered animation */}
        <div className="space-y-6 animate-fade-in-up">
          <div className="space-y-2">
            <h1
              className="text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none animate-slide-in-top"
              style={{ 
                fontFamily: 'Georgia, serif', 
                color: 'var(--retro-text)',
                animation: 'slide-in-top 1s ease-out, text-shimmer 3s ease-in-out infinite'
              }}
            >
              Kaden Dang
            </h1>
            <div className="flex items-center justify-center gap-3 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div 
                className="h-px flex-1 max-w-[100px] animate-expand-width" 
                style={{ 
                  backgroundColor: 'var(--retro-blue)',
                  animationDelay: '0.5s'
                }} 
              />
              <p
                className="text-xl md:text-2xl tracking-wide"
                style={{ 
                  color: 'var(--retro-blue)',
                  fontFamily: 'Georgia, serif',
                  fontStyle: 'italic',
                  animation: 'fade-in 1s ease-out 0.6s both, glow-pulse 4s ease-in-out infinite'
                }}
              >
                Dang Minh Dat
              </p>
              <div 
                className="h-px flex-1 max-w-[100px] animate-expand-width" 
                style={{ 
                  backgroundColor: 'var(--retro-blue)',
                  animationDelay: '0.5s'
                }} 
              />
            </div>
          </div>

          <p
            className="text-sm tracking-[0.3em] uppercase animate-fade-in"
            style={{ 
              color: 'var(--retro-text-light)',
              animationDelay: '0.8s'
            }}
          >
            Business Analyst & UI/UX Designer
          </p>
        </div>

        {/* Tagline with fade in */}
        <div className="max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight"
            style={{ fontFamily: 'Georgia, serif', color: 'var(--retro-text)' }}
          >
            Bridging Business & Technology
            <br />
            <span 
              className="animate-gradient-text"
              style={{ color: 'var(--retro-blue)' }}
            >
              Through Design & Analysis
            </span>
          </h2>
          
          <p
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: 'var(--retro-text-light)' }}
          >
            With hands-on experience in writing user stories, managing project documentation, 
            and supporting cross-functional teams, I translate business needs into technical 
            solutions that drive real impact.
          </p>
        </div>

        {/* CTA Buttons with hover lift */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          <button
            onClick={() => scrollToSection('projects')}
            className="group px-8 py-4 rounded-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 flex items-center gap-2 relative overflow-hidden"
            style={{
              backgroundColor: 'var(--retro-blue)',
              color: 'white',
            }}
          >
            <span className="relative z-10">View My Work</span>
            <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">→</span>
            <div 
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
            />
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="group px-8 py-4 rounded-full border-2 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:bg-white/5 backdrop-blur-sm relative overflow-hidden"
            style={{
              borderColor: 'var(--retro-text)',
              color: 'var(--retro-text)',
            }}
          >
            <span className="relative z-10">About Me</span>
          </button>
        </div>

        {/* Scroll Indicator with continuous animation */}
        <div className="pt-12 animate-bounce-slow">
          <div className="inline-block animate-fade-in" style={{ animationDelay: '1.5s' }}>
            <div
              className="w-6 h-10 rounded-full border-2 p-1 relative"
              style={{ borderColor: 'var(--retro-text-light)' }}
            >
              <div
                className="w-1 h-2 rounded-full absolute left-1/2 -translate-x-1/2 animate-scroll-indicator"
                style={{ backgroundColor: 'var(--retro-blue)' }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-in-top {
          from {
            transform: translateY(-100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fade-in-up {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes expand-width {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes glow-pulse {
          0%, 100% {
            text-shadow: 0 0 20px rgba(91, 143, 163, 0.3);
          }
          50% {
            text-shadow: 0 0 30px rgba(91, 143, 163, 0.5);
          }
        }

        @keyframes text-shimmer {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.95; }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes scroll-indicator {
          0% {
            top: 8px;
            opacity: 1;
          }
          100% {
            top: 24px;
            opacity: 0;
          }
        }

        @keyframes morph {
          0%, 100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          50% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-30px, 30px) scale(1.03); }
          66% { transform: translate(30px, -30px) scale(0.97); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.15; }
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes rotate-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out both;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse 4s ease-in-out infinite;
        }

        .animate-scroll-indicator {
          animation: scroll-indicator 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}