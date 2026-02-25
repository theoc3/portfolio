import { Link } from 'gatsby';
import get from 'lodash/get';
import React from 'react';

const classes = {
  wrapper: 'fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-sm border-b border-accent-dim/20',
  inner: 'max-w-7xl mx-auto px-6 md:px-12 py-6 flex justify-between items-center',
  name: 'text-xl font-medium text-accent hover:text-accent-muted transition-colors',
  nav: 'flex gap-8',
  link: 'text-sm text-accent-muted hover:text-accent transition-colors',
};

const Header = ({ metadata = {} }) => {
  const github = get(metadata, 'github', false);
  const linkedin = get(metadata, 'linkedin', false);

  return (
    <div className={classes.wrapper}>
      <div className={classes.inner}>
        <Link to="/" className={classes.name}>
          {metadata.name}
        </Link>
        <nav className={classes.nav}>
          {github && (
            <a className={classes.link} href={github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          {linkedin && (
            <a className={classes.link} href={linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Header;
