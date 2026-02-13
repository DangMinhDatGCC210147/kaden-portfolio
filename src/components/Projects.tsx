import { useState, useRef } from 'react';
import {
  X,
  Briefcase,
  User,
  TrendingUp,
  Target,
  Lightbulb,
  Settings,
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

type ProjectCategory = 'all' | 'work' | 'personal';
type ProjectCategoryItem = Exclude<ProjectCategory, 'all'>; // 'work' | 'personal'

type Project = {
  name: string;
  category: ProjectCategoryItem;
  industry: string;
  role: string;
  image: string;
  color: string;
  problem: string;
  goal: string;
  approach: string[];
  tools: string[];
  outcome: {
    metrics: string[];
    learnings: string;
  };
};

const projects: Project[] = [
  {
    name: 'Vstep Trial Testing System',
    category: 'personal',
    industry: 'Education Technology',
    role: 'Business Analyst & UI/UX Designer',
    image:
      'https://images.unsplash.com/photo-1704881986205-ee7cb7688f3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdsaXNoJTIwbGFuZ3VhZ2UlMjB0ZXN0JTIwZXhhbSUyMGNlcnRpZmljYXRpb258ZW58MXx8fHwxNzcwMTA2MjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'var(--retro-teal)',
    problem:
      'Students and lecturers needed a streamlined system for conducting Vstep trial tests with real-time results and proper user role management.',
    goal: 'Design a Vstep testing system that supports accessibility for 200+ students while maintaining usability and visual appeal.',
    approach: [
      'Collaborated with stakeholders including students, lecturers, and academic staff to gather functional and non-functional requirements',
      'Designed a Vstep testing system with clear user experience focus',
      'Organized feedback sessions to prioritize enhancements and ensure continuous improvement',
      'Implemented new features based on user feedback, improving accessibility for over 200 students',
      'Leveraged Bootstrap 4 and Tailwind for UI/UX design, enhancing usability and visual appeal',
    ],
    tools: [
      'PHP',
      'Laravel Framework',
      'JavaScript',
      'MySQL',
      'Bootstrap 4',
      'Tailwind CSS',
      'Figma',
    ],
    outcome: {
      metrics: [
        'Successfully onboarded 200+ students',
        'Improved accessibility through user feedback implementation',
        'Live system deployed at https://run.myclass.vn/MHVL',
      ],
      learnings:
        'Working closely with end users and iterating based on their feedback was crucial to creating a system that truly met their needs and improved the Vstep trial experience.',
    },
  },
  {
    name: 'Academic Management System',
    category: 'personal',
    industry: 'Education Technology',
    role: 'Scrum Master, Project Manager, Tester & Developer',
    image:
      'https://images.unsplash.com/photo-1722299547714-697e1c92ed41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMHVuaXZlcnNpdHklMjBtYW5hZ2VtZW50JTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc3MDEwNTY0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'var(--retro-blue)',
    problem:
      'Managing academic exams and quizzes required a comprehensive system with proper role management and reporting capabilities.',
    goal: 'Build a complete academic management system following Scrum/Agile methodologies to manage exams and quizzes with full CRUD functionality.',
    approach: [
      'Bridged communication between lecturers and development team to gather system requirements',
      'Documented functionalities and supported CRUD feature implementation',
      'Conducted training sessions to ensure all team members were well-prepared',
      'Made risk assessments for the project from the very beginning',
      'Ensured seamless scrum meetings capturing audience content accessibility and system usability',
      'Improved team efficiency and collaboration by implementing Scrum methodologies',
    ],
    tools: [
      'C#',
      'ASP.NET Core',
      'SQL Server',
      'Azure DevOps',
      'Scrum/Agile',
      'Visual Studio',
    ],
    outcome: {
      metrics: [
        'Successfully delivered full CRUD functionality',
        'Improved team collaboration through Scrum implementation',
        'Live system at https://app.myclass.vn/myschool',
      ],
      learnings:
        'Leading a Scrum team taught me the importance of clear communication, proper risk assessment, and continuous stakeholder engagement for successful project delivery.',
    },
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');

  // IMPORTANT: ref can be null on first render
  const sectionRef = useRef<HTMLElement | null>(null);
  const isVisible = useScrollReveal(sectionRef, { threshold: 0.15 });

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

  const filters: { value: ProjectCategory; label: string; icon: typeof Briefcase }[] =
    [
      { value: 'all', label: 'All Projects', icon: TrendingUp },
      { value: 'work', label: 'Work Projects', icon: Briefcase },
      { value: 'personal', label: 'Personal Projects', icon: User },
    ];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-24 px-6 lg:px-12 transition-all duration-1000"
      style={{
        backgroundColor: 'white',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(80px)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-3 mb-12">
          <p
            className="text-sm tracking-widest uppercase"
            style={{ color: 'var(--retro-blue)' }}
          >
            Case Studies
          </p>
          <h2
            className="text-4xl md:text-5xl tracking-tight"
            style={{ fontFamily: 'Georgia, serif', color: 'var(--retro-text)' }}
          >
            Featured Projects
          </h2>
          <p
            className="max-w-2xl mx-auto text-lg"
            style={{ color: 'var(--retro-text-light)' }}
          >
            Real projects, real impact — see how I approach business analysis
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => {
            const Icon = filter.icon;
            const isActive = activeFilter === filter.value;

            return (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className="flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: isActive ? 'var(--retro-blue)' : 'white',
                  color: isActive ? 'white' : 'var(--retro-text)',
                  border: `1px solid ${
                    isActive ? 'var(--retro-blue)' : 'var(--border)'
                  }`,
                  boxShadow: isActive
                    ? '0 4px 12px rgba(91, 143, 163, 0.25)'
                    : 'none',
                }}
              >
                <Icon size={18} />
                <span>{filter.label}</span>
                <span
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{
                    backgroundColor: isActive
                      ? 'rgba(255, 255, 255, 0.2)'
                      : 'var(--retro-warm-gray)',
                    color: isActive ? 'white' : 'var(--retro-text-light)',
                  }}
                >
                  {filter.value === 'all'
                    ? projects.length
                    : projects.filter((p) => p.category === filter.value).length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const originalIndex = projects.findIndex(
              (p) => p.name === project.name
            );

            return (
              <button
                key={originalIndex}
                onClick={() => setSelectedProject(originalIndex)}
                className="group text-left rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer"
                style={{
                  backgroundColor: 'var(--retro-beige)',
                  border: '1px solid var(--border)',
                }}
              >
                {/* Image */}
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Category Badge */}
                  <div
                    className="absolute top-3 left-3 px-3 py-1 text-xs rounded-full backdrop-blur-sm flex items-center gap-1.5"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      color: 'var(--retro-text)',
                    }}
                  >
                    {project.category === 'work' ? (
                      <>
                        <Briefcase size={12} />
                        <span>Work</span>
                      </>
                    ) : (
                      <>
                        <User size={12} />
                        <span>Personal</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <span
                    className="inline-block px-3 py-1 text-xs tracking-wider uppercase rounded-full"
                    style={{
                      backgroundColor: project.color,
                      color: 'white',
                    }}
                  >
                    {project.industry}
                  </span>

                  <h3
                    className="text-xl line-clamp-2"
                    style={{
                      fontFamily: 'Georgia, serif',
                      color: 'var(--retro-text)',
                    }}
                  >
                    {project.name}
                  </h3>

                  <p
                    className="text-sm"
                    style={{ color: 'var(--retro-text-light)' }}
                  >
                    Role: {project.role}
                  </p>

                  <div
                    className="pt-2 text-sm group-hover:opacity-100 opacity-70 transition-opacity"
                    style={{ color: project.color }}
                  >
                    View Case Study →
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg" style={{ color: 'var(--retro-text-light)' }}>
              No projects found in this category
            </p>
          </div>
        )}

        {/* Modal */}
        {selectedProject !== null && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-300 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Sticky Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="sticky top-4 right-4 ml-auto w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center hover:bg-white transition-colors shadow-lg z-10 mb-[-40px] mr-4"
                style={{ color: 'var(--retro-text)' }}
              >
                <X size={20} />
              </button>

              {/* Header Image */}
              <div className="h-64 md:h-80 overflow-hidden rounded-t-3xl relative">
                <img
                  src={projects[selectedProject].image}
                  alt={projects[selectedProject].name}
                  className="w-full h-full object-cover"
                />
                {/* Category Badge in Modal */}
                <div
                  className="absolute top-4 left-4 px-4 py-2 rounded-full backdrop-blur-md flex items-center gap-2"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    color: 'var(--retro-text)',
                  }}
                >
                  {projects[selectedProject].category === 'work' ? (
                    <>
                      <Briefcase size={16} />
                      <span>Work Project</span>
                    </>
                  ) : (
                    <>
                      <User size={16} />
                      <span>Personal Project</span>
                    </>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 space-y-8">
                {/* Title */}
                <div>
                  <span
                    className="inline-block px-3 py-1 text-xs tracking-wider uppercase rounded-full mb-3"
                    style={{
                      backgroundColor: projects[selectedProject].color,
                      color: 'white',
                    }}
                  >
                    {projects[selectedProject].industry}
                  </span>
                  <h3
                    className="text-3xl md:text-4xl mb-2"
                    style={{
                      fontFamily: 'Georgia, serif',
                      color: 'var(--retro-text)',
                    }}
                  >
                    {projects[selectedProject].name}
                  </h3>
                  <p
                    className="text-lg"
                    style={{ color: 'var(--retro-text-light)' }}
                  >
                    Role: {projects[selectedProject].role}
                  </p>
                </div>

                {/* Problem */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: 'var(--retro-warm-gray)' }}
                    >
                      <Target
                        size={18}
                        style={{ color: projects[selectedProject].color }}
                      />
                    </div>
                    <h4 className="text-lg" style={{ color: 'var(--retro-text)' }}>
                      Problem Statement
                    </h4>
                  </div>
                  <p
                    className="leading-relaxed pl-10"
                    style={{ color: 'var(--retro-text-light)' }}
                  >
                    {projects[selectedProject].problem}
                  </p>
                </div>

                {/* Goal */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: 'var(--retro-warm-gray)' }}
                    >
                      <Lightbulb
                        size={18}
                        style={{ color: projects[selectedProject].color }}
                      />
                    </div>
                    <h4 className="text-lg" style={{ color: 'var(--retro-text)' }}>
                      Business Goal
                    </h4>
                  </div>
                  <p
                    className="leading-relaxed pl-10"
                    style={{ color: 'var(--retro-text-light)' }}
                  >
                    {projects[selectedProject].goal}
                  </p>
                </div>

                {/* Approach */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: 'var(--retro-warm-gray)' }}
                    >
                      <Settings
                        size={18}
                        style={{ color: projects[selectedProject].color }}
                      />
                    </div>
                    <h4 className="text-lg" style={{ color: 'var(--retro-text)' }}>
                      BA Approach
                    </h4>
                  </div>
                  <ul className="space-y-2 pl-10">
                    {projects[selectedProject].approach.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 leading-relaxed"
                        style={{ color: 'var(--retro-text-light)' }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: projects[selectedProject].color }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools */}
                <div className="space-y-3">
                  <h4 className="text-lg pl-10" style={{ color: 'var(--retro-text)' }}>
                    Tools Used
                  </h4>
                  <div className="flex flex-wrap gap-2 pl-10">
                    {projects[selectedProject].tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-full"
                        style={{
                          backgroundColor: 'var(--retro-warm-gray)',
                          color: 'var(--retro-text)',
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Outcome */}
                <div
                  className="space-y-4 p-6 rounded-2xl"
                  style={{ backgroundColor: 'var(--retro-beige)' }}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: 'white' }}
                    >
                      <TrendingUp
                        size={18}
                        style={{ color: projects[selectedProject].color }}
                      />
                    </div>
                    <h4 className="text-lg" style={{ color: 'var(--retro-text)' }}>
                      Solution & Outcome
                    </h4>
                  </div>

                  <div className="pl-10">
                    <p className="mb-2" style={{ color: 'var(--retro-text)' }}>
                      Key Metrics:
                    </p>
                    <ul className="space-y-2 mb-4">
                      {projects[selectedProject].outcome.metrics.map((metric, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 leading-relaxed"
                          style={{ color: 'var(--retro-text-light)' }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: projects[selectedProject].color }}
                          />
                          {metric}
                        </li>
                      ))}
                    </ul>

                    <p className="mb-2" style={{ color: 'var(--retro-text)' }}>
                      Key Learnings:
                    </p>
                    <p
                      className="leading-relaxed italic"
                      style={{ color: 'var(--retro-text-light)' }}
                    >
                      "{projects[selectedProject].outcome.learnings}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}