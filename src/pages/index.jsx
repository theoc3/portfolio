import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SectionAbout from '../components/section-about';
import SectionBlog from '../components/section-blog';
import SectionExperience from '../components/section-experience';
import SectionActivities from '../components/section-activities';
import SectionProjects from '../components/section-projects';
import SectionLanguages from '../components/section-languages';
import SEO from '../components/seo';

const Index = ({ data }) => {
  const about = get(data, 'site.siteMetadata.about', false);
  const projects = get(data, 'site.siteMetadata.projects', false);
  const posts = data.allMarkdownRemark.edges;
  const experience = get(data, 'site.siteMetadata.experience', false);
  const activities = get(data, 'site.siteMetadata.activities', false);
  const languages = get(data, 'site.siteMetadata.languages', false);
  const noBlog = !posts || !posts.length;

  return (
    <Layout>
      <SEO />
      <div className="animate-slide-in-down" style={{ animationDelay: '300ms' }}>
        <Header metadata={data.site.siteMetadata} noBlog={noBlog} />
      </div>
      <div className="md:flex md:flex-row">
        <div className="md:w-1/2 md:pr-4">
          {about && (
            <div className="animate-slide-in-left" style={{ animationDelay: '500ms' }}>
              <SectionAbout about={about} />
            </div>
          )}
          {experience && experience.length && (
            <div className="animate-slide-in-left" style={{ animationDelay: '700ms' }}>
              <SectionExperience experience={experience} />
            </div>
          )}
          {activities && activities.length && (
            <div className="animate-slide-in-left" style={{ animationDelay: '1100ms' }}>
              <SectionActivities activities={activities} />
            </div>
          )}
          {languages && languages.length && (
            <div className="animate-slide-in-left" style={{ animationDelay: '1300ms' }}>
              <SectionLanguages languages={languages} />
            </div>
          )}
          {/*!noBlog && <SectionBlog posts={posts} />*/}
        </div>
        <div className="md:w-1/2 md:pl-4">
          {projects && projects.length && (
            <div className="animate-slide-in-right" style={{ animationDelay: '900ms' }}>
              <SectionProjects projects={projects} />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
        about
        author
        github
        linkedin
        
        projects {
          name
          description
          link
          techStack
          location
        }
        experience {
          name
          description
          link
          techStack
          location
        }
        activities {
          name
          description
          link
          location
        }
        languages {
          name
          description
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
