import { useState, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useScrollProgress } from '../hooks/useParallax';
import { useScrollReveal } from '../hooks/useScrollReveal';

const experiences = [
  {
    company: 'BeyondEdge Solution',
    role: 'IT Business Analyst',
    period: 'September 2025 - Present',
    responsibilities: [
      'Analyze business requirements and translate them into clear technical specifications',
      'Collaborate with stakeholders to define project scope, objectives, and success criteria',
      'Create and maintain comprehensive documentation including user stories, use cases, and process flows',
      'Support agile development teams through sprint planning, backlog refinement, and daily standups',
      'Facilitate communication between business stakeholders and technical teams',
      'Conduct UAT sessions and gather feedback for continuous improvement',
      'Contribute to business process optimization and workflow enhancement initiatives',
    ],
    achievements: [
      'Successfully onboarded and actively contributing to multiple client projects',
      'Building strong cross-functional relationships across business and technical teams',
      'Applying Agile methodologies to ensure efficient project delivery',
    ],
  },
  {
    company: 'Freelancer',
    role: 'Project Management Assistant',
    period: 'May 2025 - June 2025',
    responsibilities: [
      'Document meeting minutes from discussions with Singapore-based clients',
      'Conduct QC testing for the website during Phase 2 in both English and Vietnamese',
      'Validate the accuracy of existing documentation',
      'Collaborate with the UI/UX Designer to verify and clarify customer requirements',
      'Work with developers to deliver new requirements and bug industries',
    ],
    achievements: [
      'Successfully coordinated between international clients and development team',
      'Ensured quality delivery through comprehensive QC testing in bilingual environment',
    ],
  },
  {
    company: 'Leonix Vietnam',
    role: 'Business Analyst and Functional Consultant Internship',
    period: 'February 2025 - May 2025',
    responsibilities: [
      'Working in ERP system - Odoo with enhancements and bug industries',
      'Gained practical experience in CRM, Dashboard in real project and some experience in HRM and E-Commerce',
      'Gather and analyze requirements from clients and convert them into business requirement documents',
      'Meeting business process insights (Use Case, User Stories, Database Diagram, Project Charter, Risk Management)',
      'Support UAT testing and provide training for end users',
      'Communicate with developers to deliver business context, feature explanation and perform manual testing for features',
      'Perform manual testing to ensure the system works as expected based on client requirements',
      'Present the personalization system for clients based on Scrum model',
    ],
    achievements: [
      'Gained hands-on experience with multiple ERP modules including CRM, HRM, and E-Commerce',
      'Successfully delivered business requirement documents and process models',
      'Contributed to UAT success and end-user adoption',
    ],
  },
];

export function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef);
  const isVisible = useScrollReveal(sectionRef, { threshold: 0.15 });

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-24 px-6 lg:px-12 transition-all duration-1000"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(80px)',
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div
          className="text-center space-y-3 mb-16"
          style={{
            transform: `translateY(${progress * 40}px)`,
            opacity: 1 - progress * 0.5,
            transition: 'transform 0.1s linear, opacity 0.1s linear',
          }}
        >
          <p
            className="text-sm tracking-widest uppercase"
            style={{ color: 'var(--retro-blue)' }}
          >
            Work Experience
          </p>
          <h2
            className="text-4xl md:text-5xl tracking-tight"
            style={{ fontFamily: 'Georgia, serif', color: 'var(--retro-text)' }}
          >
            My Journey So Far
          </h2>
          <p
            className="max-w-2xl mx-auto text-lg"
            style={{ color: 'var(--retro-text-light)' }}
          >
            Learning, growing, and delivering value every step of the way
          </p>
        </div>

        <div className="space-y-4">
          {experiences.map((exp, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={index}
                className="rounded-2xl border transition-all duration-300"
                style={{
                  borderColor: isExpanded ? 'var(--retro-blue)' : 'var(--border)',
                  backgroundColor: 'white',
                  boxShadow: isExpanded ? '0 8px 24px rgba(91, 143, 163, 0.15)' : 'none',
                  transform: `translateX(${progress * (index % 2 === 0 ? 30 : -30)}px)`,
                  opacity: 1 - progress * 0.3,
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.1s linear, opacity 0.1s linear',
                }}
              >
                <button
                  onClick={() => toggleExpand(index)}
                  className="w-full p-6 md:p-8 text-left flex items-start justify-between gap-4 hover:bg-gray-50/50 transition-colors rounded-2xl"
                >
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <h3
                        className="text-xl md:text-2xl"
                        style={{
                          fontFamily: 'Georgia, serif',
                          color: 'var(--retro-text)',
                        }}
                      >
                        {exp.role}
                      </h3>
                      <span
                        className="text-sm mt-1 md:mt-0"
                        style={{ color: 'var(--retro-blue)' }}
                      >
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-lg" style={{ color: 'var(--retro-text-light)' }}>
                      {exp.company}
                    </p>
                  </div>

                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      backgroundColor: isExpanded
                        ? 'var(--retro-blue)'
                        : 'var(--retro-warm-gray)',
                      color: isExpanded ? 'white' : 'var(--retro-text)',
                    }}
                  >
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-6 md:px-8 pb-8 space-y-6 animate-in fade-in duration-300">
                    {/* Responsibilities */}
                    <div>
                      <h4 className="mb-3" style={{ color: 'var(--retro-text)' }}>
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 leading-relaxed"
                            style={{ color: 'var(--retro-text-light)' }}
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                              style={{ backgroundColor: 'var(--retro-blue)' }}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div
                      className="p-4 rounded-xl"
                      style={{ backgroundColor: 'var(--retro-beige)' }}
                    >
                      <h4 className="mb-2" style={{ color: 'var(--retro-text)' }}>
                        Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 leading-relaxed"
                            style={{ color: 'var(--retro-text-light)' }}
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                              style={{ backgroundColor: 'var(--retro-blue)' }}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}