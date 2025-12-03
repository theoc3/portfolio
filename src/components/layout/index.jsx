import React from 'react';

const classes = {
  wrapper: 'p-8 relative w-full max-w-screen-2xl mx-auto md:p-12',
  outerWrapper: 'relative bg-green min-h-screen overflow-x-hidden',
  svg: 'hidden fixed transform left-0 top-0 z-0 xl:block',
  watermark:
    'hidden fixed transform right-5 bottom-0 z-0 xl:block text-green-dark font-bold select-none pointer-events-none text-right leading-none',
};

const Layout = ({ children }) => {
  return (
    <div className={classes.outerWrapper}>
      <div className={classes.watermark} style={{ fontSize: '30rem', bottom: '2rem', textShadow: '-1px -1px 0 #d0e0d0, 1px 1px 0 #ffffff' }}>
        テオ<br/>
        チェン
      </div>
      <svg
        className={classes.svg}
        width="340"
        height="1200"
        fill="none"
        viewBox="0 0 340 1200"
      >
        <defs>
          <pattern
            id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              className="text-green-darker"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width="800"
          height="1200"
          fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
        />
      </svg>
      <div className={classes.wrapper}>{children}</div>
    </div>
  );
};

export default Layout;
