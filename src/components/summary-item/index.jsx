import { Link } from 'gatsby';
import React from 'react';

const classes = {
  wrapper: 'mb-6',
  name: 'font-semibold text-gray-900 pb-1',
  description: 'text-md text-gray-600 font-light',
  techStack: 'text-sm text-gray-500 font-light mr-2', // Add a class for the tech stack
  arrow: 'inline-block transform transition-transform duration-200', // Add a class for the arrow
};

const SummaryItem = ({ name, description, techStack = '', link = false, internal = false }) => {
  let linkContent;
  if (internal) {
    linkContent = (
      <Link to={link} className="hover-arrow">
        {name} <span className={`${classes.arrow} arrow`}>↗</span>
      </Link>
    );
  } else {
    linkContent = (
      <a href={link} target="_blank" rel="noopener noreferrer" className="hover-arrow">
        {name} <span className={`${classes.arrow} arrow`}>↗</span>
      </a>
    );
  }

  const techStackItems = techStack.split(',').map((item, index) => (
    <span key={index} className={classes.techStack}>{item.trim()}</span>
  ));

  return (
    <div className={classes.wrapper}>
      <h3
        className={`${classes.name} ${
          link ? 'hover:underline hover:text-black' : ''
        }`}
      >
        {link ? linkContent : name}
      </h3>
      <div>{techStackItems}</div>
      <p className={classes.description}>{description}</p>
    </div>
  );
};

export default SummaryItem;