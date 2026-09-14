import React from 'react';
import TranslatedTitle from '../translated-title';

const classes = {
  wrapper: 'px-6 md:px-12 py-16 max-w-7xl mx-auto',
  title: 'text-accent text-3xl md:text-4xl font-bold mb-8',
  content: 'text-accent-muted text-lg leading-relaxed space-y-4',
};

const SectionAbout = ({ about }) => {
  return (
    <div id="about" className={classes.wrapper}>
      <TranslatedTitle as="h2" className={classes.title} text="About" translation="自己紹介" />
      <div className={classes.content}>
        {about.split('<br/>').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default SectionAbout;
