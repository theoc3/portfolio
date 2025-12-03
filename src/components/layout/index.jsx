import React from 'react';

const classes = {
  wrapper: 'p-8 relative w-full max-w-screen-2xl mx-auto md:p-12',
  outerWrapper: 'relative',
  watermark:
    'hidden fixed transform right-0 top-0 z-0 xl:block text-gray-100 font-bold select-none pointer-events-none',
};

const Layout = ({ children }) => {
  return (
    <div className={classes.outerWrapper}>
      <div className={classes.watermark} style={{ fontSize: '20rem' }}>
        テオ
      </div>
      <div className={classes.wrapper}>{children}</div>
    </div>
  );
};

export default Layout;
