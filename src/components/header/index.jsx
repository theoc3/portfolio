import { Link } from 'gatsby';
import get from 'lodash/get';
import React from 'react';

import profileImg from '../../images/profile.jpg';

const classes = {
  wrapper: 'block md:flex p-10 bg-white/50 backdrop-blur-md rounded-3xl shadow-xl border border-white/30',
  imageWrapper: 'w-full max-w-150',
  image: 'rounded-full transform transition-all duration-150 hover:scale-105',
  contentWrapper: 'flex-none pt-6 md:pt-1 md:flex-1 md:pl-20',
  name: 'text-5xl text-gray-900 font-bold leading-tight hover:text-black',
  description: 'text-gray-700 whitespace-pre-line',
  list: 'mt-2 uppercase tracking-wider',
  item: 'inline list-none pr-4',
  link:
    'inline-block py-2 font-semibold text-xs text-gray-700 hover:text-black hover-arrow',
  arrow: 'inline-block transform transition-transform duration-200',
};

const Header = ({ metadata = {}, noBlog = false }) => {
  //const itchio = get(metadata, 'itchio', false);
  const github = get(metadata, 'github', false);
  const linkedin = get(metadata, 'linkedin', false);

  return (
    <div className={classes.wrapper}>
      <div className={classes.imageWrapper}>
        <Link to="/">
          <img className={classes.image} src={profileImg} alt={metadata.name} />
        </Link>
      </div>
      <div className={classes.contentWrapper}>
        <h1 className={classes.name}>
          <Link to="/">{metadata.name}</Link>
        </h1>
        <p className={classes.description}>{metadata.description}</p>
        <ul className={classes.list}>
          {github && (
            <li className={classes.item}>
              <a className={classes.link} href={github} target="_blank" rel="noopener noreferrer">
                GitHub <span className={`${classes.arrow} arrow`}>↗</span>
              </a>
            </li>
          )}
          {linkedin && (
            <li className={classes.item}>
              <a className={classes.link} href={linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn <span className={`${classes.arrow} arrow`}>↗</span>
              </a>
            </li>
          )}
          {/* {itchio && (
            <li className={classes.item}>
              <a
                className={classes.link}
                href={itchio}
                target="_blank" 
                rel="noopener noreferrer"
              >
                itch.io
              </a>
            </li>
          )} */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
