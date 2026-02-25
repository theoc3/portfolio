import React, { useState, useEffect } from 'react';

const classes = {
  navSection: 'fixed left-2 sm:left-4 md:left-16 lg:left-24 top-1/2 -translate-y-1/2 z-40',
  navList: 'flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-24 items-center',
  navItem: 'relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center',
  navLink: 'text-accent-muted hover:text-accent transition-all duration-500 ease-in-out text-xs sm:text-sm md:text-lg lg:text-2xl block -rotate-90 whitespace-nowrap',
  navLinkActive: 'text-accent font-bold',
  socialSection: 'flex flex-col gap-6 fixed right-2 sm:right-4 md:right-16 lg:right-24 top-1/2 -translate-y-1/2 z-40',
  socialLink: 'text-accent-dim hover:text-accent transition-colors w-6 h-6',
};

const sections = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
];

const SidebarNav = ({ metadata = {} }) => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id); // Set active immediately on click
    // When clicking About, scroll to hero (home) section
    const targetId = id === 'about' ? 'hero' : id;
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 20; // Small offset from top
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <nav className={classes.navSection}>
        <ul className={classes.navList}>
          {sections.map(({ id, label }) => (
            <li key={id} className={classes.navItem}>
              <button
                onClick={() => scrollToSection(id)}
                className={`${classes.navLink} ${
                  activeSection === id ? classes.navLinkActive : ''
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className={classes.socialSection}>
        {metadata.github && (
          <a
            className={classes.socialLink}
            href={metadata.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        )}
        {metadata.linkedin && (
          <a
            className={classes.socialLink}
            href={metadata.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        )}
        {metadata.itchio && (
          <a
            className={classes.socialLink}
            href={metadata.itchio}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="itch.io"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M3.13 1.338C2.08 1.96.02 4.328 0 4.95v1.03c0 1.303 1.22 2.45 2.325 2.45 1.33 0 2.436-1.102 2.436-2.41 0 1.308 1.07 2.41 2.4 2.41 1.328 0 2.362-1.102 2.362-2.41 0 1.308 1.137 2.41 2.466 2.41h.024c1.33 0 2.466-1.102 2.466-2.41 0 1.308 1.034 2.41 2.363 2.41 1.33 0 2.4-1.102 2.4-2.41 0 1.308 1.106 2.41 2.435 2.41C22.78 8.43 24 7.283 24 5.98V4.95c-.02-.622-2.082-2.99-3.13-3.612-3.253-.114-5.508-.134-8.87-.133-3.362 0-7.945.053-8.87.133zm6.376 6.477c-1.496 0-2.886.8-3.675 1.984-.79-1.184-2.18-1.984-3.675-1.984C.956 7.815 0 8.847 0 10.181c0 1.335.956 2.416 2.156 2.416 1.2 0 2.156-1.08 2.156-2.416v3.254c0 2.41 1.94 4.364 4.335 4.364 2.395 0 4.335-1.953 4.335-4.364v-3.254c0 1.336.956 2.416 2.156 2.416 1.2 0 2.156-1.08 2.156-2.416 0-1.334-.956-2.366-2.156-2.366-1.496 0-2.886.8-3.675 1.984-.79-1.184-2.18-1.984-3.675-1.984zm-6.304 5.238V12.1c-.894 0-1.617.77-1.617 1.72 0 .95.723 1.72 1.617 1.72zm12.304 0V12.1c.894 0 1.617.77 1.617 1.72 0 .95-.723 1.72-1.617 1.72zm-6.152 3.647c-1.02 0-1.843.853-1.843 1.904v1.808h3.686v-1.808c0-1.051-.822-1.904-1.843-1.904z"/>
            </svg>
          </a>
        )}
      </div>
    </>
  );
};

export default SidebarNav;
