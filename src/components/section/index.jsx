import React from 'react';

const classes = {
  wrapper: 'block pt-12',
  title: 'pb-8 md:w-full',
  heading:
    'text-2xl font-bold tracking-widest text-gray-1200 leading-normal uppercase underline',
  content: 'text-lg text-gray-600 font-light',
};

const Section = ({ title, children }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>
        <h2 className={classes.heading}>{title}</h2>
      </div>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default Section;
