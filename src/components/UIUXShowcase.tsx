import { useState, useRef } from 'react';
import { X, Monitor, Smartphone } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface UIScreen {
  url: string;
  caption: string;
}

interface UIUXProject {
  name: string;
  category: string;
  year: string;
  thumbnail: string;
  color: string;
  description: string;
  role: string;
  duration: string;
  tools: string[];
  challenges: string;
  solution: string;
  impact: string[];
  screens: {
    desktop?: UIScreen[];
    mobile?: UIScreen[];
    tablet?: UIScreen[];
  };
}

const uiuxProjects: UIUXProject[] = [
  {
    name: 'FoodHub Delivery',
    category: 'Mobile App',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcwMDA0NTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'var(--retro-dusty-orange)',
    description: 'A modern food delivery app focused on local restaurants and quick ordering experience with real-time tracking.',
    role: 'Lead UI/UX Designer',
    duration: '3 months',
    tools: ['Figma', 'Adobe Illustrator', 'Principle', 'Maze'],
    challenges: 'Users found existing food delivery apps cluttered and confusing. The checkout process averaged 8 steps.',
    solution: 'Simplified the ordering flow to 3 steps, implemented smart filters, and designed an intuitive map-based tracking system.',
    impact: [
      'Checkout time reduced by 60%',
      'User satisfaction increased to 4.8/5',
      '35% increase in repeat orders',
    ],
    screens: {
      mobile: [
        { url: 'https://images.unsplash.com/photo-1717323454555-f053c31ff4b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzY5OTg4MDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', caption: 'Home & Discovery' },
        { url: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcwMDA0NTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', caption: 'Restaurant Details' },
        { url: 'https://images.unsplash.com/photo-1717323454555-f053c31ff4b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzY5OTg4MDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', caption: 'Checkout Flow' },
        { url: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcwMDA0NTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', caption: 'Order Tracking' },
      ],
    },
  },
  {
    name: 'FitLife Pro',
    category: 'Mobile App & Web',
    year: '2023',
    thumbnail: 'https://images.unsplash.com/photo-1732917771633-fff965badabe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwYXBwJTIwbW9iaWxlJTIwc2NyZWVufGVufDF8fHx8MTc3MDAwNDU3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'var(--retro-teal)',
    description: 'Comprehensive fitness tracking platform with personalized workout plans and nutrition guidance.',
    role: 'UI/UX Designer & Researcher',
    duration: '4 months',
    tools: ['Figma', 'Sketch', 'InVision', 'Hotjar', 'Google Analytics'],
    challenges: 'Users struggled to stay motivated and found fitness apps overwhelming with too many features.',
    solution: 'Created a progressive onboarding experience, gamification elements, and a clean dashboard focused on daily goals.',
    impact: [
      '70% user retention after 30 days',
      'Average session time: 12 minutes',
      'Featured in App Store health category',
    ],
    screens: {
      mobile: [
        { url: 'https://images.unsplash.com/photo-1732917771633-fff965badabe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwYXBwJTIwbW9iaWxlJTIwc2NyZWVufGVufDF8fHx8MTc3MDAwNDU3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', caption: 'Dashboard' },
        { url: 'https://images.unsplash.com/photo-1717323454555-f053c31ff4b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzY5OTg4MDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', caption: 'Workout Player' },
        { url: 'https://images.unsplash.com/photo-1732917771633-fff965badabe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwYXBwJTIwbW9iaWxlJTIwc2NyZWVufGVufDF8fHx8MTc3MDAwNDU3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', caption: 'Progress Tracking' },
      ],
      desktop: [
        { url: 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmQlMjBVSSUyMGRlc2lnbnxlbnwxfHx8fDE3NzAwMDQ1NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', caption: 'Web Dashboard' },
        { url: 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmQlMjBVSSUyMGRlc2lnbnxlbnwxfHx8fDE3NzAwMDQ1NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', caption: 'Analytics View' },
      ],
    },
  },
  {
    name: 'TravelMate',
    category: 'Web Platform',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1701686794404-3670ea43687e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBib29raW5nJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2OTk0OTM0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'var(--retro-olive)',
    description: 'Travel planning and booking platform that combines flights, hotels, and experiences in one seamless journey.',
    role: 'Senior Product Designer',
    duration: '5 months',
    tools: ['Figma', 'Framer', 'Adobe XD', 'UserTesting', 'Optimal Workshop'],
    challenges: 'Users had to visit multiple websites to plan a trip. Comparison shopping was frustrating and time-consuming.',
    solution: 'Designed a unified search experience with smart bundling, price comparison tools, and saved itineraries.',
    impact: [
      'Booking completion rate: 68%',
      'Average order value increased 40%',
      'Won UX Design Award 2024',
    ],
    screens: {
      desktop: [
        { url: 'https://images.unsplash.com/photo-1701686794404-3670ea43687e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBib29raW5nJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2OTk0OTM0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', caption: 'Homepage & Search' },
        { url: 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmQlMjBVSSUyMGRlc2lnbnxlbnwxfHx8fDE3NzAwMDQ1NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', caption: 'Search Results' },
        { url: 'https://images.unsplash.com/photo-1701686794404-3670ea43687e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBib29raW5nJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2OTk0OTM0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', caption: 'Booking Flow' },
        { url: 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmQlMjBVSSUyMGRlc2lnbnxlbnwxfHx8fDE3NzAwMDQ1NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', caption: 'User Dashboard' },
      ],
      mobile: [
        { url: 'https://images.unsplash.com/photo-1717323454555-f053c31ff4b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzY5OTg4MDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', caption: 'Mobile Experience' },
      ],
    },
  },
  {
    name: 'ShopEase',
    category: 'E-Commerce Web',
    year: '2023',
    thumbnail: 'https://images.unsplash.com/photo-1579642984094-5be053d579b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBwcm9kdWN0JTIwcGFnZSUyMGRlc2lnbnxlbnwxfHx8fDE3NzAwMDQ1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'var(--retro-brown)',
    description: 'Modern e-commerce platform with AR try-on features and personalized shopping recommendations.',
    role: 'Product Designer',
    duration: '6 months',
    tools: ['Figma', 'ProtoPie', 'Zeplin', 'Lookback'],
    challenges: 'High cart abandonment rate and low product discovery. Users wanted to see products in their space before buying.',
    solution: 'Implemented AR preview, smart recommendations, one-click checkout, and improved product imagery standards.',
    impact: [
      'Cart abandonment reduced by 45%',
      'AR feature used by 60% of users',
      'Conversion rate increased 28%',
    ],
    screens: {
      desktop: [
        { url: 'https://images.unsplash.com/photo-1579642984094-5be053d579b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBwcm9kdWN0JTIwcGFnZSUyMGRlc2lnbnxlbnwxfHx8fDE3NzAwMDQ1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', caption: 'Product Page' },
        { url: 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmQlMjBVSSUyMGRlc2lnbnxlbnwxfHx8fDE3NzAwMDQ1NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', caption: 'Shopping Cart' },
        { url: 'https://images.unsplash.com/photo-1579642984094-5be053d579b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBwcm9kdWN0JTIwcGFnZSUyMGRlc2lnbnxlbnwxfHx8fDE3NzAwMDQ1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', caption: 'AR Try-On' },
      ],
      mobile: [
        { url: 'https://images.unsplash.com/photo-1717323454555-f053c31ff4b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzY5OTg4MDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', caption: 'Mobile Shop' },
        { url: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcwMDA0NTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', caption: 'Checkout' },
      ],
    },
  },
];

export function UIUXShowcase() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'desktop' | 'mobile' | 'tablet'>('desktop');
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollReveal(sectionRef, { threshold: 0.15 });

  return (
    <section 
      ref={sectionRef}
      id="uiux" 
      className="py-24 px-6 lg:px-12 transition-all duration-1000"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(80px)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-3 mb-16">
          <p
            className="text-sm tracking-widest uppercase"
            style={{ color: 'var(--retro-blue)' }}
          >
            UI/UX Portfolio
          </p>
          <h2
            className="text-4xl md:text-5xl tracking-tight"
            style={{ fontFamily: 'Georgia, serif', color: 'var(--retro-text)' }}
          >
            Design Showcase
          </h2>
          <p
            className="max-w-2xl mx-auto text-lg"
            style={{ color: 'var(--retro-text-light)' }}
          >
            Beautiful interfaces crafted with intention and user-centered thinking
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {uiuxProjects.map((project, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedProject(index);
                setActiveTab(project.screens.desktop ? 'desktop' : 'mobile');
              }}
              className="group text-left rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl cursor-pointer relative"
              style={{
                backgroundColor: 'white',
                border: '1px solid var(--border)',
              }}
            >
              {/* Thumbnail */}
              <div className="h-64 overflow-hidden relative">
                <img
                  src={project.thumbnail}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                >
                  <span className="text-white text-sm flex items-center gap-2">
                    <Monitor size={16} />
                    View Details
                  </span>
                </div>
                {/* Year Badge */}
                <div
                  className="absolute top-3 right-3 px-3 py-1 text-xs rounded-full backdrop-blur-sm"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    color: 'var(--retro-text)',
                  }}
                >
                  {project.year}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-2">
                <span
                  className="text-xs tracking-wider uppercase"
                  style={{ color: project.color }}
                >
                  {project.category}
                </span>

                <h3
                  className="text-lg line-clamp-1"
                  style={{
                    fontFamily: 'Georgia, serif',
                    color: 'var(--retro-text)',
                  }}
                >
                  {project.name}
                </h3>

                <p className="text-sm line-clamp-2" style={{ color: 'var(--retro-text-light)' }}>
                  {project.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Modal */}
        {selectedProject !== null && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 z-10 bg-white border-b px-8 py-6 rounded-t-3xl" style={{ borderColor: 'var(--border)' }}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <span
                      className="inline-block px-3 py-1 text-xs tracking-wider uppercase rounded-full mb-2"
                      style={{
                        backgroundColor: uiuxProjects[selectedProject].color,
                        color: 'white',
                      }}
                    >
                      {uiuxProjects[selectedProject].category}
                    </span>
                    <h3
                      className="text-3xl md:text-4xl mb-1"
                      style={{
                        fontFamily: 'Georgia, serif',
                        color: 'var(--retro-text)',
                      }}
                    >
                      {uiuxProjects[selectedProject].name}
                    </h3>
                    <p className="text-sm" style={{ color: 'var(--retro-text-light)' }}>
                      {uiuxProjects[selectedProject].role} • {uiuxProjects[selectedProject].duration} • {uiuxProjects[selectedProject].year}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors flex-shrink-0"
                    style={{ color: 'var(--retro-text)' }}
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 space-y-8">
                {/* Description */}
                <div>
                  <p className="text-lg leading-relaxed" style={{ color: 'var(--retro-text-light)' }}>
                    {uiuxProjects[selectedProject].description}
                  </p>
                </div>

                {/* Device Tabs */}
                <div className="flex flex-wrap gap-2 border-b pb-4" style={{ borderColor: 'var(--border)' }}>
                  {uiuxProjects[selectedProject].screens.desktop && (
                    <button
                      onClick={() => setActiveTab('desktop')}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all"
                      style={{
                        backgroundColor: activeTab === 'desktop' ? uiuxProjects[selectedProject].color : 'transparent',
                        color: activeTab === 'desktop' ? 'white' : 'var(--retro-text-light)',
                      }}
                    >
                      <Monitor size={18} />
                      <span>Desktop</span>
                    </button>
                  )}
                  {uiuxProjects[selectedProject].screens.mobile && (
                    <button
                      onClick={() => setActiveTab('mobile')}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all"
                      style={{
                        backgroundColor: activeTab === 'mobile' ? uiuxProjects[selectedProject].color : 'transparent',
                        color: activeTab === 'mobile' ? 'white' : 'var(--retro-text-light)',
                      }}
                    >
                      <Smartphone size={18} />
                      <span>Mobile</span>
                    </button>
                  )}
                </div>

                {/* Screens Grid - Dynamic Layout */}
                <div>
                  {activeTab === 'desktop' && uiuxProjects[selectedProject].screens.desktop && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {uiuxProjects[selectedProject].screens.desktop!.map((screen, idx) => (
                        <div key={idx} className="space-y-3">
                          <div className="rounded-xl overflow-hidden border shadow-md" style={{ borderColor: 'var(--border)' }}>
                            <img src={screen.url} alt={screen.caption} className="w-full h-auto" />
                          </div>
                          <p className="text-sm text-center" style={{ color: 'var(--retro-text-light)' }}>
                            {screen.caption}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'mobile' && uiuxProjects[selectedProject].screens.mobile && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {uiuxProjects[selectedProject].screens.mobile!.map((screen, idx) => (
                        <div key={idx} className="space-y-3">
                          <div className="rounded-2xl overflow-hidden border shadow-md" style={{ borderColor: 'var(--border)' }}>
                            <img src={screen.url} alt={screen.caption} className="w-full h-auto" />
                          </div>
                          <p className="text-xs text-center" style={{ color: 'var(--retro-text-light)' }}>
                            {screen.caption}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Project Details */}
                <div className="grid md:grid-cols-2 gap-8 pt-8 border-t" style={{ borderColor: 'var(--border)' }}>
                  {/* Challenge */}
                  <div className="space-y-3">
                    <h4 className="text-lg" style={{ color: 'var(--retro-text)' }}>
                      Challenge
                    </h4>
                    <p className="leading-relaxed" style={{ color: 'var(--retro-text-light)' }}>
                      {uiuxProjects[selectedProject].challenges}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="space-y-3">
                    <h4 className="text-lg" style={{ color: 'var(--retro-text)' }}>
                      Design Solution
                    </h4>
                    <p className="leading-relaxed" style={{ color: 'var(--retro-text-light)' }}>
                      {uiuxProjects[selectedProject].solution}
                    </p>
                  </div>
                </div>

                {/* Impact */}
                <div className="space-y-4 p-6 rounded-2xl" style={{ backgroundColor: 'var(--retro-beige)' }}>
                  <h4 className="text-lg" style={{ color: 'var(--retro-text)' }}>
                    Impact & Results
                  </h4>
                  <ul className="space-y-2">
                    {uiuxProjects[selectedProject].impact.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 leading-relaxed"
                        style={{ color: 'var(--retro-text-light)' }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: uiuxProjects[selectedProject].color }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools */}
                <div className="space-y-3">
                  <h4 className="text-lg" style={{ color: 'var(--retro-text)' }}>
                    Tools & Methods
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {uiuxProjects[selectedProject].tools.map((tool, i) => (
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
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}