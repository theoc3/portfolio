import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const classes = {
  wrapper: 'px-6 md:px-12 py-16 max-w-7xl mx-auto',
  title: 'text-accent text-3xl md:text-4xl font-bold mb-12',
  grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8',
  projectCard: 'group cursor-pointer',
  projectImage: 'w-full aspect-[4/3] bg-dark-lighter mb-4 overflow-hidden rounded-sm relative',
  projectImageOverlay: 'absolute inset-0 bg-accent opacity-0 group-hover:opacity-40 transition-opacity duration-300',
  projectPlaceholder: 'w-full h-full flex items-center justify-center text-accent-dim text-6xl font-light',
  projectTitle: 'text-accent text-lg font-medium mb-1 group-hover:text-accent-muted transition-colors flex items-center gap-2',
  projectArrow: 'text-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1',
  projectDescription: 'text-accent-muted text-sm mb-2',
  projectTech: 'text-accent-dim text-xs',
  gatsbyImage: 'w-full h-full object-cover object-top',
};

const SectionProjects = ({ projects, images = [] }) => {
  if (!projects.length) return null;

  const getProjectImage = (imageName) => {
    if (!imageName) return null;
    const imageNode = images.find(({ node }) => node.name === imageName.replace(/\.[^/.]+$/, ''));
    return imageNode ? getImage(imageNode.node) : null;
  };

  return (
    <div id="projects" className={classes.wrapper}>
      <h2 className={classes.title}>Selected Projects</h2>
      <div className={classes.grid}>
        {projects.map((project, index) => {
          const image = getProjectImage(project.image);
          return (
          <a
            key={project.name}
            href={project.link || '#'}
            target={project.link ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className={classes.projectCard}
          >
            <div className={classes.projectImage}>
              {image ? (
                <>
                  <GatsbyImage 
                    image={image} 
                    alt={project.name} 
                    className={classes.gatsbyImage}
                    imgStyle={{ objectPosition: 'top' }}
                  />
                  <div className={classes.projectImageOverlay} />
                </>
              ) : (
                <div className={classes.projectPlaceholder}>
                  {index + 1}
                </div>
              )}
            </div>
            <h3 className={classes.projectTitle}>
              {project.name}
              <span className={classes.projectArrow}>↗</span>
            </h3>
            <p className={classes.projectDescription}>{project.description}</p>
            {project.techStack && (
              <p className={classes.projectTech}>{project.techStack}</p>
            )}
          </a>
          );
        })}
      </div>
    </div>
  );
};

export default SectionProjects;
