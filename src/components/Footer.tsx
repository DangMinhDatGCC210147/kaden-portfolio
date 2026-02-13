export function Footer() {
  return (
    <footer className="py-12 px-6 lg:px-12 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p
              className="text-2xl mb-1"
              style={{ fontFamily: 'Georgia, serif', color: 'var(--retro-text)' }}
            >
              Kaden Dang
            </p>
            <p className="text-sm italic mb-2" style={{ color: 'var(--retro-blue)' }}>
              Dang Minh Dat
            </p>
            <p className="text-sm" style={{ color: 'var(--retro-text-light)' }}>
              IT Business Analyst & UI/UX Designer
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/kaden-dang-885373324/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:opacity-70 transition-opacity"
              style={{ color: 'var(--retro-text-light)' }}
            >
              LinkedIn
            </a>
            <a
              href="mailto:dangminhdat03.forwork@gmail.com"
              className="text-sm hover:opacity-70 transition-opacity"
              style={{ color: 'var(--retro-text-light)' }}
            >
              Email
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center" style={{ borderColor: 'var(--border)' }}>
          <p className="text-sm" style={{ color: 'var(--retro-text-light)' }}>
            © {new Date().getFullYear()} Kaden Dang. Designed with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}