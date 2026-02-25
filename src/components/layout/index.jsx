import React from 'react';

const classes = {
  wrapper: 'relative w-full min-h-screen pl-8 pr-8 sm:pl-12 sm:pr-12 md:pl-28 md:pr-28 lg:pl-32 lg:pr-32',
  outerWrapper: 'relative bg-dark-bg min-h-screen',
};

const Layout = ({ children }) => {
  return (
    <div className={classes.outerWrapper}>
      <div className={classes.wrapper}>{children}</div>
    </div>
  );
};

export default Layout;
