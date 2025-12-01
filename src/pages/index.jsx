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
import SectionSkills from '../components/section-skills';
import SEO from '../components/seo';

const Index = ({ data }) => {
  const about = get(data, 'site.siteMetadata.about', false);
  const projects = get(data, 'site.siteMetadata.projects', false);
  const posts = data.allMarkdownRemark.edges;
  const experience = get(data, 'site.siteMetadata.experience', false);
  const activities = get(data, 'site.siteMetadata.activities', false);
  const skills = get(data, 'site.siteMetadata.skills', false);
  const noBlog = !posts || !posts.length;

  return (
    <Layout>
      <SEO />
      <Header metadata={data.site.siteMetadata} noBlog={noBlog} />
      <div className="md:flex md:flex-row">
        <div className="md:w-1/2 md:pr-4">
          {about && <SectionAbout about={about} />}
          {experience && experience.length && (
            <SectionExperience experience={experience} />
          )}
          {activities && activities.length && (
            <SectionActivities activities={activities} />
          )}
          {/* {skills && skills.length && <SectionSkills skills={skills} />} */}
          {/*!noBlog && <SectionBlog posts={posts} />*/}
        </div>
        <div className="md:w-1/2 md:pl-4">
          {projects && projects.length && <SectionProjects projects={projects} />}
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
        skills {
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
