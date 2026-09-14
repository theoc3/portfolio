import React from 'react';

// Cross-fades an English title into its Japanese translation on hover.
const TranslatedTitle = ({ text, translation, as: Tag = 'h2', className = '' }) => (
  <Tag className={`group inline-grid cursor-default ${className}`}>
    <span className="[grid-area:1/1] transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:-translate-y-1">
      {text}
    </span>
    <span className="[grid-area:1/1] opacity-0 translate-y-1 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
      {translation}
    </span>
  </Tag>
);

export default TranslatedTitle;
