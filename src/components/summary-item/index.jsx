import { Link } from 'gatsby';
import React from 'react';

const classes = {
  wrapper: 'mb-6',
  name: 'font-semibold text-gray-900 pb-1',
  description: 'text-md text-gray-600 font-light',
  techStack: 'text-sm text-gray-500 font-light bg-gray-200 rounded px-3', 
  arrow: 'inline-block transform transition-transform duration-200', 
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

  return (
    <div className={classes.wrapper}>
      <h3
        className={`${classes.name} ${
          link ? 'hover:underline hover:text-black' : ''
        }`}
      >
        {link ? linkContent : name}
      </h3>
      {techStack && (
        <div className="flex flex-wrap gap-2">
          {techStack.split(',').map((tech, index) => (
            <span key={index} className={classes.techStack}>{tech.trim()}</span>
          ))}
        </div>
      )}
      <p className={classes.description}>{description}</p>
    </div>
  );
};

export default SummaryItem;