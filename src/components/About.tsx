import { useRef } from 'react';
import { useScrollProgress } from '../hooks/useParallax';
import { useScrollReveal } from '../hooks/useScrollReveal';
const profileImage = new URL('../assets/images/DSCF9710.JPG', import.meta.url).href;

export function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const progress = useScrollProgress(sectionRef);
  const isVisible = useScrollReveal(sectionRef, { threshold: 0.15 });

  return (
    <section 
      ref={sectionRef} 
      id="about" 
      className="py-24 px-6 lg:px-12 relative overflow-hidden transition-all duration-1000"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(80px)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Full-width image container with gradient overlay */}
        <div 
          className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center"
          style={{
            transform: `translateY(${progress * 50}px)`,
            transition: 'transform 0.1s linear',
          }}
        >
          {/* Background Image with Parallax */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              transform: `scale(${1 + progress * 0.1}) translateY(${-progress * 30}px)`,
              transition: 'transform 0.1s linear',
            }}
          >
            <img
              src={profileImage}
              alt="Kaden Dang - Business Analyst"
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          {/* Gradient Overlay - darker on left, transparent on right */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(42, 70, 80, 0.95) 0%, rgba(42, 70, 80, 0.90) 25%, rgba(42, 70, 80, 0.75) 45%, rgba(91, 143, 163, 0.5) 65%, rgba(91, 143, 163, 0.2) 85%, transparent 100%)',
            }}
          />

          {/* Content Overlay */}
          <div 
            className="relative z-10 w-full max-w-2xl px-6 md:px-12 lg:px-16 py-8 md:py-12"
            style={{
              transform: `translateX(${-progress * 20}px)`,
              opacity: 1 - progress * 0.3,
              transition: 'transform 0.1s linear, opacity 0.1s linear',
            }}
          >
            <div className="space-y-6 px-6">
              <div className="space-y-3">
                <p
                  className="text-sm tracking-widest uppercase"
                  style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                >
                  About Me
                </p>
                <h2
                  className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight"
                  style={{ fontFamily: 'Georgia, serif', color: 'white' }}
                >
                  Who is Kaden Dang?
                </h2>
              </div>

              <div className="space-y-4 text-white/90">
                <p className="leading-relaxed text-lg">
                  I'm a{' '}
                  <span
                    className="font-medium"
                    style={{ color: '#a3d5e8' }}
                  >
                    IT Business Analyst and UI/UX Designer
                  </span>
                  , with hands-on experience in writing user stories, managing project documentation, 
                  and supporting cross-functional teams. I'm passionate about bridging the gap between 
                  business needs and technical solutions through careful analysis and thoughtful design.
                </p>
                <p className="leading-relaxed">
                  My technical toolkit includes{' '}
                  <span
                    className="font-medium"
                    style={{ color: '#a3d5e8' }}
                  >
                    Scrum/Agile methodologies, requirement analysis, and UI/UX design
                  </span>
                  . I work with tools like Jira, Confluence, Figma, and Adobe XD 
                  to deliver solutions that create real value for users and stakeholders.
                </p>
                <p className="leading-relaxed">
                  My skills in requirements analysis, user-centered design, and providing 
                  solution-oriented suggestions form{' '}
                  <span
                    className="font-medium"
                    style={{ color: '#a3d5e8' }}
                  >
                    a strong foundation to support team collaboration and create meaningful user experiences
                  </span>
                  . Every project is an opportunity to learn, grow, and contribute to solutions that truly matter.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-8">
                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="px-6 py-3 rounded-full transition-all hover:scale-105 hover:shadow-xl flex items-center gap-2 group"
                  style={{
                    backgroundColor: 'white',
                    color: 'var(--retro-blue)',
                  }}
                >
                  <span>Let's Connect</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}