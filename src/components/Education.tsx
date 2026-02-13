import { useRef } from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function Education() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollReveal(sectionRef, { threshold: 0.15 });

  return (
    <section
      ref={sectionRef}
      id="education"
      className="py-24 px-6 lg:px-12 transition-all duration-1000"
      style={{
        backgroundColor: 'white',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(80px)',
      }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <p
            className="text-sm tracking-widest uppercase"
            style={{ color: 'var(--retro-blue)' }}
          >
            Education
          </p>
          <h2
            className="text-4xl md:text-5xl tracking-tight"
            style={{ fontFamily: 'Georgia, serif', color: 'var(--retro-text)' }}
          >
            Academic Background
          </h2>
        </div>

        {/* Education Card */}
        <div
          className="rounded-3xl border p-8 md:p-12"
          style={{
            backgroundColor: 'var(--retro-beige)',
            borderColor: 'var(--border)',
          }}
        >
          <div className="flex flex-col md:flex-row gap-8">
            {/* Icon */}
            <div
              className="shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: 'var(--retro-blue)' }}
            >
              <GraduationCap size={40} color="white" />
            </div>

            {/* Content */}
            <div className="flex-1 space-y-4">
              <div>
                <h3
                  className="text-2xl md:text-3xl mb-2"
                  style={{
                    fontFamily: 'Georgia, serif',
                    color: 'var(--retro-text)',
                  }}
                >
                  Bachelor of Science
                </h3>
                <p
                  className="text-xl mb-1"
                  style={{ color: 'var(--retro-blue)' }}
                >
                  University of Greenwich
                </p>
                <p
                  className="text-lg"
                  style={{ color: 'var(--retro-text-light)' }}
                >
                  2021 - 2025
                </p>
              </div>

              {/* Achievement Badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{
                  backgroundColor: 'white',
                  border: '2px solid var(--retro-blue)',
                }}
              >
                <Award size={20} style={{ color: 'var(--retro-blue)' }} />
                <span
                  className="font-medium"
                  style={{ color: 'var(--retro-blue)' }}
                >
                  First Class Honours (4.0 - UK scale)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* English Proficiency */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div
            className="rounded-2xl border p-6"
            style={{
              backgroundColor: 'white',
              borderColor: 'var(--border)',
            }}
          >
            <h4
              className="text-lg mb-2"
              style={{ color: 'var(--retro-text)' }}
            >
              Vstep - Vietnamese Standardized Test
            </h4>
            <div className="flex items-center gap-2">
              <span
                className="text-3xl font-medium"
                style={{ color: 'var(--retro-blue)' }}
              >
                8.0/10
              </span>
              <span
                className="text-sm px-3 py-1 rounded-full"
                style={{
                  backgroundColor: 'var(--retro-warm-gray)',
                  color: 'var(--retro-text)',
                }}
              >
                B2
              </span>
            </div>
          </div>

          <div
            className="rounded-2xl border p-6"
            style={{
              backgroundColor: 'white',
              borderColor: 'var(--border)',
            }}
          >
            <h4
              className="text-lg mb-2"
              style={{ color: 'var(--retro-text)' }}
            >
              IELTS - International English Language Testing
            </h4>
            <div className="flex items-center gap-2">
              <span
                className="text-3xl font-medium"
                style={{ color: 'var(--retro-blue)' }}
              >
                5.5/9
              </span>
              <span
                className="text-sm px-3 py-1 rounded-full"
                style={{
                  backgroundColor: 'var(--retro-warm-gray)',
                  color: 'var(--retro-text)',
                }}
              >
                B2
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
