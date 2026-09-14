import React from 'react';
import profileImg from '../../images/profile.jpg';

const classes = {
  wrapper: 'pt-20 pb-20 px-6 md:px-12 max-w-7xl mx-auto',
  contentWrapper: 'flex flex-col md:flex-row items-center gap-12',
  imageWrapper: 'flex-shrink-0',
  image: 'w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-accent-dim/30',
  textContent: 'flex-1',
  title: 'text-accent text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6',
  description: 'text-accent-muted text-lg md:text-xl leading-relaxed',
};

// Maps each English name segment to its Japanese equivalent for the hover transition.
const NAME_TRANSLATIONS = {
  Theo: 'テオ',
  Chen: 'チェン',
};

const NameWord = ({ word }) => {
  const translation = NAME_TRANSLATIONS[word];
  if (!translation) {
    return <span>{word}</span>;
  }
  return (
    <span className="inline-grid align-baseline">
      <span className="[grid-area:1/1] transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:-translate-y-1">
        {word}
      </span>
      <span className="[grid-area:1/1] opacity-0 translate-y-1 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
        {translation}
      </span>
    </span>
  );
};

const NameTransition = ({ name }) => (
  <span className="group inline-flex flex-wrap gap-x-3 cursor-default">
    {name.split(' ').map((word, index) => (
      <NameWord key={index} word={word} />
    ))}
  </span>
);

const Hero = ({ metadata }) => {
  return (
    <div id="hero" className={classes.wrapper}>
      <div className={classes.contentWrapper}>
        <div className={classes.imageWrapper}>
          <img src={profileImg} alt={metadata.name} className={classes.image} />
        </div>
        <div className={classes.textContent}>
          <h1 className={classes.title}>
            <NameTransition name={metadata.name} />
          </h1>
          <div className={classes.description}>
            {metadata.description.split('\n').filter(line => line.trim()).map((line, index) => (
              <p key={index}>{line.trim()}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
