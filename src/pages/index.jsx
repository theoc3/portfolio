import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';

import SidebarNav from '../components/sidebar-nav';
import Hero from '../components/hero';
import Layout from '../components/layout';
import SectionAbout from '../components/section-about';
import SectionExperience from '../components/section-experience';
import SectionProjects from '../components/section-projects';
import Seo from '../components/seo';

const Index = ({ data }) => {
  const about = get(data, 'site.siteMetadata.about', false);
  const projects = get(data, 'site.siteMetadata.projects', false);
  const experience = get(data, 'site.siteMetadata.experience', false);
  const images = get(data, 'allFile.edges', []);

  return (
    <Layout>
      <Seo />
      <SidebarNav metadata={data.site.siteMetadata} />
      <Hero metadata={data.site.siteMetadata} />
      {about && <SectionAbout about={about} />}
      {projects && projects.length && <SectionProjects projects={projects} images={images} />}
      {experience && experience.length && <SectionExperience experience={experience} />}
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
          image
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
    allFile(filter: { sourceInstanceName: { eq: "images" }, extension: { regex: "/(jpg|jpeg|png|gif|webp)/" } }) {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData(width: 700, quality: 80, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
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
