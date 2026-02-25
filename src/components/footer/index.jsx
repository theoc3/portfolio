import React from 'react';

const classes = {
  wrapper: 'px-6 md:px-12 py-20 max-w-7xl mx-auto border-t border-accent-dim/20',
  content: 'max-w-3xl',
  title: 'text-accent text-2xl md:text-3xl font-light mb-8',
  text: 'text-accent-muted text-lg mb-8',
  link: 'text-accent underline hover:text-accent-muted transition-colors',
  copyright: 'text-accent-dim text-sm mt-12',
};

const Footer = ({ metadata }) => {
  const email = metadata.author || metadata.github?.replace('https://github.com/', '') + '@users.noreply.github.com';
  
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <h2 className={classes.title}>
          If you're looking to collaborate on a project or just want to chat,{' '}
          <a href={`mailto:${email}`} className={classes.link}>
            Get in touch
          </a>
          {' '}— I'd love to hear from you.
        </h2>
        <p className={classes.copyright}>
          © {new Date().getFullYear()} | {metadata.name}
        </p>
      </div>
    </div>
  );
};

export default Footer;
