import { useEffect, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const coreStrengths = [
  { number: '01', title: 'Scrum/Agile Methodologies' },
  { number: '02', title: 'Requirements Analysis' },
  { number: '03', title: 'Process Modeling & Documentation' },
  { number: '04', title: 'User Stories & Use Cases' },
  { number: '05', title: 'UAT Testing & Quality Assurance' },
  { number: '06', title: 'Stakeholder Communication' },
  { number: '07', title: 'UI/UX Design & Prototyping' },
];

export function CoreStrengths() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollReveal(sectionRef, { threshold: 0.15 });
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 1.2; // pixels per frame

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset position when scrolled past halfway (for infinite loop)
      const maxScroll = scrollContainer.scrollWidth / 2;
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      requestAnimationFrame(animate);
    };

    const animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="core-strengths"
      className="py-20 px-6 lg:px-12 relative transition-all duration-1000 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #4a7380 0%, #5b8fa3 50%, #6ba5bb 100%)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(80px)',
      }}
    >
      {/* Grain Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-2 mb-12">
          <p
            className="text-xs tracking-[0.3em] uppercase font-medium"
            style={{ color: 'rgba(255, 255, 255, 0.8)' }}
          >
            My Expertise
          </p>
          <h2
            className="text-4xl md:text-5xl tracking-tight"
            style={{ 
              fontFamily: 'Georgia, serif', 
              color: 'white',
              textShadow: '2px 2px 20px rgba(0, 0, 0, 0.3)',
            }}
          >
            What I Have Own
          </h2>
        </div>

        {/* Horizontal Scrolling Slider */}
        <div className="relative">
          {/* Gradient Fade Edges */}
          <div 
            className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, #5b8fa3, transparent)',
            }}
          />
          <div 
            className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(to left, #6ba5bb, transparent)',
            }}
          />

          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-hidden whitespace-nowrap py-4"
            style={{
              scrollBehavior: 'auto',
            }}
          >
            {/* Duplicate items for infinite scroll effect */}
            {[...coreStrengths, ...coreStrengths, ...coreStrengths, ...coreStrengths].map((strength, index) => (
              <div
                key={index}
                className="inline-block group"
              >
                {/* Retro Badge Card */}
                <div
                  className="relative px-10 py-6 rounded-full border-4 transition-all duration-300"
                  style={{
                    backgroundColor: index % 2 === 0 ? 'rgba(255, 255, 255, 0.15)' : 'rgba(42, 70, 80, 0.4)',
                    borderColor: 'rgba(255, 255, 255, 0.4)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 2px 8px rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <div className="flex items-center gap-6">
                    {/* Number Badge */}
                    <div
                      className="text-6xl font-bold leading-none"
                      style={{
                        fontFamily: 'Georgia, serif',
                        color: 'rgba(255, 255, 255, 0.3)',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                      }}
                    >
                      {strength.number}
                    </div>
                    
                    {/* Divider */}
                    <div
                      className="w-1 h-16 rounded-full"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
                      }}
                    />
                    
                    {/* Title */}
                    <div
                      className="text-2xl md:text-3xl font-light tracking-wide"
                      style={{
                        fontFamily: 'Georgia, serif',
                        color: 'white',
                        textShadow: '2px 2px 8px rgba(0, 0, 0, 0.4)',
                      }}
                    >
                      {strength.title}
                    </div>
                  </div>

                  {/* Shine Effect */}
                  <div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, transparent 50%, rgba(255, 255, 255, 0.1) 100%)',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}