import { Mail, Linkedin, FileText } from 'lucide-react';
import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import cvPdf from '../assets/files/Kaden_CV.pdf';

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollReveal(sectionRef, { threshold: 0.2 });

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 px-6 lg:px-12 transition-all duration-1000"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(80px)',
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-3 mb-12">
          <p
            className="text-sm tracking-widest uppercase"
            style={{ color: 'var(--retro-blue)' }}
          >
            Get In Touch
          </p>
          <h2
            className="text-4xl md:text-5xl tracking-tight"
            style={{ fontFamily: 'Georgia, serif', color: 'var(--retro-text)' }}
          >
            Let's Work Together
          </h2>
          <p
            className="max-w-2xl mx-auto text-lg"
            style={{ color: 'var(--retro-text-light)' }}
          >
            Have a project in mind or want to discuss BA opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="mailto:dangminhdat03.forwork@gmail.com"
            className="flex items-center gap-2 px-6 py-3 rounded-full transition-all hover:shadow-lg hover:scale-105"
            style={{
              backgroundColor: 'var(--retro-blue)',
              color: 'white',
            }}
          >
            <Mail size={20} />
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/kaden-dang-885373324/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border transition-all hover:shadow-md hover:scale-105"
            style={{
              borderColor: 'var(--retro-text)',
              color: 'var(--retro-text)',
            }}
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
        </div>

        <div className="grid sm:grid-cols-1 gap-4 max-w-xs mx-auto">
          <a
            href={cvPdf}
            target="_blank"
            className="flex items-center justify-center gap-2 p-4 rounded-xl transition-all hover:shadow-md hover:scale-105"
            style={{
              backgroundColor: 'white',
              border: '1px solid var(--border)',
              color: 'var(--retro-text-light)',
            }}
          >
            <FileText size={20} />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}