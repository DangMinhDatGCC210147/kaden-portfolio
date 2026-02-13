import { Lightbulb, GitBranch, Users, Repeat, BarChart3, CheckCircle } from 'lucide-react';
import { useRef } from 'react';
import { useScrollProgress } from '../hooks/useParallax';
import { useScrollReveal } from '../hooks/useScrollReveal';

const services = [
  {
    title: 'Requirements Engineering',
    description:
      'Eliciting, documenting, and validating business requirements to ensure alignment between stakeholders and development teams.',
    color: 'var(--retro-blue)',
    icon: Lightbulb,
  },
  {
    title: 'Process Modeling & Optimization',
    description:
      'Mapping current-state processes, identifying bottlenecks, and designing future-state workflows using BPMN and UML.',
    color: 'var(--retro-teal)',
    icon: GitBranch,
  },
  {
    title: 'Stakeholder Management',
    description:
      'Building strong relationships across business and technical teams, facilitating workshops, and ensuring clear communication.',
    color: 'var(--retro-olive)',
    icon: Users,
  },
  {
    title: 'Agile & Scrum Practices',
    description:
      'Supporting agile teams through user story creation, backlog refinement, sprint planning, and iterative delivery.',
    color: 'var(--retro-brown)',
    icon: Repeat,
  },
  {
    title: 'Data Analysis & Insights',
    description:
      'Analyzing business data to uncover trends, create reports, and support data-driven decision making.',
    color: 'var(--retro-teal)',
    icon: BarChart3,
  },
  {
    title: 'Solution Evaluation',
    description:
      'Assessing technical feasibility, cost-benefit analysis, and risk evaluation to recommend optimal solutions.',
    color: 'var(--retro-blue)',
    icon: CheckCircle,
  },
];

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef);
  const isVisible = useScrollReveal(sectionRef, { threshold: 0.15 });

  return (
    <section 
      ref={sectionRef} 
      id="services" 
      className="py-24 px-6 lg:px-12 relative transition-all duration-1000"
      style={{ 
        backgroundColor: 'var(--retro-beige)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(80px)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div 
          className="text-center space-y-3 mb-16"
          style={{
            transform: `translateY(${progress * 30}px)`,
            opacity: 1 - progress * 0.5,
            transition: 'transform 0.1s linear, opacity 0.1s linear',
          }}
        >
          <p
            className="text-sm tracking-widest uppercase"
            style={{ color: 'var(--retro-blue)' }}
          >
            What I Do
          </p>
          <h2
            className="text-4xl md:text-5xl tracking-tight"
            style={{ fontFamily: 'Georgia, serif', color: 'var(--retro-text)' }}
          >
            How I Add Value
          </h2>
          <p
            className="max-w-2xl mx-auto text-lg"
            style={{ color: 'var(--retro-text-light)' }}
          >
            From requirements to delivery, I bridge the gap between business vision and technical reality
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const delay = index * 0.05;
            
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl transition-all duration-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
                style={{
                  backgroundColor: 'white',
                  border: '1px solid var(--border)',
                  transform: `translateY(${progress * (20 + index * 5)}px)`,
                  opacity: 1 - progress * (0.3 + delay),
                  transition: 'transform 0.1s linear, opacity 0.1s linear, box-shadow 0.5s ease, translate 0.5s ease',
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: 'var(--retro-warm-gray)',
                  }}
                >
                  <Icon
                    size={24}
                    style={{ color: service.color }}
                    className="transition-all duration-300 group-hover:scale-110"
                  />
                </div>

                <h3
                  className="text-xl mb-3"
                  style={{
                    color: 'var(--retro-text)',
                    fontFamily: 'Georgia, serif',
                  }}
                >
                  {service.title}
                </h3>

                <p className="leading-relaxed" style={{ color: 'var(--retro-text-light)' }}>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}