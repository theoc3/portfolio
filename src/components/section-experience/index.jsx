import React from 'react';

const classes = {
  wrapper: 'px-6 md:px-12 py-16 max-w-7xl mx-auto',
  title: 'text-accent text-3xl md:text-4xl font-bold mb-12',
  list: 'space-y-8',
  item: 'border-b border-accent-dim/20 pb-6',
  itemHeader: 'flex flex-col md:flex-row md:justify-between md:items-start mb-2',
  itemName: 'text-accent text-xl font-medium mb-1 md:mb-0 flex items-center gap-2 group',
  itemArrow: 'text-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1',
  itemLocation: 'text-accent-dim text-sm',
  itemDescription: 'text-accent-muted mb-2',
  itemTech: 'text-accent-dim text-sm',
};

const SectionExperience = ({ experience }) => {
  if (!experience.length) return null;

  return (
    <div id="experience" className={classes.wrapper}>
      <h2 className={classes.title}>Experience</h2>
      <div className={classes.list}>
        {experience.map((item) => (
          <div key={item.name} className={classes.item}>
            <div className={classes.itemHeader}>
              {item.link ? (
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${classes.itemName} hover:text-accent-muted transition-colors`}
                >
                  {item.name}
                  <span className={classes.itemArrow}>↗</span>
                </a>
              ) : (
                <h3 className={classes.itemName}>{item.name}</h3>
              )}
              {item.location && (
                <p className={classes.itemLocation}>{item.location}</p>
              )}
            </div>
            <p className={classes.itemDescription}>{item.description}</p>
            {item.techStack && (
              <p className={classes.itemTech}>{item.techStack}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionExperience;
