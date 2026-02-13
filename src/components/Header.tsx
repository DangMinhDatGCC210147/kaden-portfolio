import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section
      const sections = ['hero', 'about', 'core-strengths', 'services', 'experience', 'projects', 'education', 'achievements', 'uiux', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
        <button
          onClick={() => scrollToSection('hero')}
          className="group flex items-center gap-3 hover:opacity-70 transition-opacity"
        >
          <div className="text-left">
            <div className="text-xl tracking-tight" style={{ fontFamily: 'Georgia, serif', color: 'var(--retro-text)' }}>
              Kaden Dang
            </div>
            <div className="text-xs italic" style={{ color: 'var(--retro-blue)' }}>
              Dang Minh Dat
            </div>
          </div>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {['about', 'core-strengths', 'services', 'experience', 'projects', 'education', 'achievements', 'uiux'].map((item) => {
            const isActive = activeSection === item;
            return (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className="text-sm capitalize hover:opacity-70 transition-all relative"
                  style={{ 
                    color: isActive ? 'var(--retro-blue)' : 'var(--retro-text-light)',
                    fontWeight: isActive ? '600' : '400',
                  }}
                >
                  {item === 'services' ? 'What I Do' : item === 'uiux' ? 'UI/UX' : item === 'core-strengths' ? 'Skills' : item}
                  {/* Active indicator */}
                  {isActive && (
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                      style={{ backgroundColor: 'var(--retro-blue)' }}
                    />
                  )}
                </button>
              </li>
            );
          })}
          <li>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-5 py-2 rounded-full transition-all hover:shadow-md"
              style={{
                backgroundColor: 'var(--retro-blue)',
                color: 'white',
              }}
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden"
          style={{ color: 'var(--retro-text)' }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
            <ul className="flex flex-col py-4">
              {['about', 'core-strengths', 'services', 'experience', 'projects', 'education', 'achievements', 'uiux'].map((item) => {
                const isActive = activeSection === item;
                return (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item)}
                      className="w-full text-left px-6 py-3 capitalize hover:bg-gray-50 transition-colors relative"
                      style={{ 
                        color: isActive ? 'var(--retro-blue)' : 'var(--retro-text-light)',
                        fontWeight: isActive ? '600' : '400',
                        backgroundColor: isActive ? 'rgba(91, 143, 163, 0.1)' : 'transparent',
                      }}
                    >
                      {item === 'services' ? 'What I Do' : item === 'uiux' ? 'UI/UX' : item === 'core-strengths' ? 'Skills' : item}
                      {/* Active indicator for mobile */}
                      {isActive && (
                        <span
                          className="absolute left-0 top-0 bottom-0 w-1"
                          style={{ backgroundColor: 'var(--retro-blue)' }}
                        />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}