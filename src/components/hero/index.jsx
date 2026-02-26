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

const Hero = ({ metadata }) => {
  return (
    <div id="hero" className={classes.wrapper}>
      <div className={classes.contentWrapper}>
        <div className={classes.imageWrapper}>
          <img src={profileImg} alt={metadata.name} className={classes.image} />
        </div>
        <div className={classes.textContent}>
          <h1 className={classes.title}>
            {metadata.name}
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
