module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://theoc.dev`,
    // Your Name
    name: 'Theo Chen',
    // Main Site Title
    title: `Theo Chen | Research Applications Developer @ BU Precision Brain Health Initiative`,
    // Description that goes under your name in main bio
    description: `Research Applications Developer @ Boston University Precision Brain Health Initiative
    \n
    B.A. in Computer Science & Minor in Japanese from Boston University`,
    // Optional: Twitter account handle
    //author: `@theoc3`,
    // Optional: Github account URL
    github: `https://github.com/theoc3`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/theo-chen-08bb12224/`,
    // Optional: itch.io account URL
    itchio: `https://itch.io/profile/talcgames`,
    // Content of the About Me section
    about: `
    I'm currently working as a developer at the Precision Brain Health Initiative at the BU Chobanian & Avedisian School of Medicine. Our projects largely focus on research into the integration of digital technologies in brain health monitoring, especially pertaining to the early identification of signs of Alzheimer's. <br/>

    I'm a recent BU alum who majored in Computer Science with a minor in Japanese. I was the former President of the Boston University Japanese Student Association, and recently studied abroad in Kyoto, Japan at Doshisha University with Columbia University's KCJS Program.<br/>

    My biggest passion is in the intersection of computer science and its use in scientific research, most prevelantly linguistics throughout my undergrad. Additionaly, I'm planning on pursuing a master's in bioinformatics while I work with the goal of adapting my existing computer science skills to benefit research in health and medicine that will directly benefit people's lives.

    `,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Japanese Verb Classifier',
        description:
          'A research paper on using a BiLSTM model to classify the verbs in Japanese sentences by their tense/voice',
        link: 'https://github.com/theoc3/jp-verb-classifier',
        image: 'jp-classification',
        techStack: 'Python, PyTorch, NumPy, pandas, spacy, MeCab'
      },
      {
        name: 'AI vs Human Text Classifier',
        description:
          'A research paper on using a logistic regression model to classify whether or not text is AI generated or written by a person.',
        link: 'https://github.com/theoc3/cs365-proj',
        image: 'llm-paper',
        techStack: 'Python, PyTorch, Tensorflow, scikit-learn, NumPy, pandas'
      },  
      {
        name: 'Kyoudai Matching Program',
        description:
          'A website that extracts data from csv files, using a bipartite graph and a max-cost min-flow algorithm to match "bigs" and "littles" for the BUJSA Kyoudai program.',
        link: 'https://github.com/schuyler1007/bujsa',
        image: 'kyoudai',
        techStack: 'Python, NumPy, C++, React'
      },  
      {
        name: 'Japanese Handwriting Rater',
        description:
          'A script that rates Japanese kana handwriting using the EasyOCR library and a model trained on generated handwriting images.',
        link: 'https://github.com/theoc3/handwriting-rating',
        image: 'handwriting',
        techStack: 'Python, PyTorch, NumPy, pandas, scikit-learn, EasyOCR'
      },
      // {
      //   name: 'Stationery Blog',
      //   description:
      //     'A markdown based blog page for stationery reviews',
      //   link: 'https://theosbungu.com',
      //   techStack: 'React, Next'
      // },
      // {
      //   name: 'Space News Website',
      //   description:
      //     'A website that displays the latest news about space from a public Space News API.',
      //   link: 'https://cs392-space-news-project.vercel.app/',
      //   techStack: 'React'
      // },
      // {
      //   name: 'Japanese Study Program',
      //   description:
      //     "A Python program for memorizing the Japanese writing systems of Hiragana and Katakana that adjusts its difficulty based on the user's familiarity with each character as they answer correctly or incorrectly, keeping track of response time and accuracy.",
      //   link: 'https://github.com/theoc3/JapanesePractice',
      //   techStack: 'Python, NumPy'
      // },
      {
        name: 'Scale to Shoot',
        description:
          'A 2D Unity game developed in 24 hours for the annual GMTK Game Jam. The theme of "Scale" is interpreted as shooting enemies of varying sizes with shots that need to match the size of the enemies.',
        link: 'https://itch.io/jam/gmtk-2024/rate/2903129',
        image: 'scale-to-shoot',
        techStack: 'Unity 2D, C# Adobe Photoshop, Adobe Illustrator'
      },
      {
        name: 'Rig the Dice',
        description:
          'A 3D Unity game developed in 48 hours for the annual GMTK Game Jam. The theme of "Roll of the Dice" is interpreted as rigging dice so that they have the desired outcome for a basic gambling game.',
        link: 'https://itch.io/jam/gmtk-jam-2022/rate/1623138',
        image: 'rig-the-dice',
        techStack: 'Unity 3D, C# Blender, Adobe Photoshop, Adobe Illustrator'
      },
      {
        name: 'Color Theory',
        description:
          'A 2D Unity game developed in 48 hours for the annual GMTK Game Jam. The theme of "Joined Together" is interpreted as both joining together primary colors to create secondary colors and combining the player with same colored enemies to score.',
        link: 'https://itch.io/jam/gmtk-2021/rate/1081834',
        image: 'color-theory',
        techStack: 'Unity 2D, C# Adobe Photoshop, Adobe Illustrator'
      }
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'BU Precision Brain Health Initiative',
        description: 'Research Applications Developer: November 2025 - Current',
        link: 'https://www.bumc.bu.edu/pbhi/',
        techStack: 'Python',
        location: 'Boston, MA, U.S.A. (On-Site)'
      },
      {
        name: 'BU Second Language Acquisition Lab',
        description: 'Research Assistant: January 2025 - Current',
        link: 'https://www.bu.edu/wheelock/profile/kathy-minhye-kim/',
        techStack: 'Gorilla, TypeScript, R',
        location: 'Boston, MA, U.S.A. (On-Site)'
      },
      {
        name: 'GitStart (YC19)',
        description: 'Software Engineering Intern: May 2024 - August 2024',
        link: 'https://gitstart.com/',
        techStack: 'React, Node, GraphQL, SQL, Docker',
        location: 'San Francisco, CA, U.S.A. (Remote)'
      },
      {
        name: 'Timewitch Inc.',
        description: 'Software Engineering Intern: December 2023 - January 2024',
        link: 'https://timewitch.jp/',
        techStack: 'React, Node, Express, SQL, Azure',
        location: 'Tokyo, Japan (Remote)'
      },
      {
        name: 'Cardinal Blue Software, Inc.',
        description: 'Product Operations Intern: June 2017 - July 2017',
        link: 'https://picc.co/',
        techStack: 'Python, Adobe Photoshop, Adobe Illustrator, Adobe Premiere Pro',
        location: 'Taipei, Taiwan (On-Site)'
      },
    ],
    activities: [
      {
        name: 'Boston University Japanese Student Association',
        description: 'Senior Advisor: May 2024 - May 2025 | (President 23 - 24, Secretary 22 - 23)',
        link: 'https://www.instagram.com/thebujsa',
        location: 'Boston, MA, U.S.A. (On-Site)'
      }
    ],
    // Optional: List your languages, they must have `name` and `description`.
    languages: [
      {
        name: 'English',
        description:
          'Native Speaking/Listening, Native Reading/Writing',
      },
      {
        name: 'Mandarin Chinese (Traditional)',
        description: 'Native Speaking/Listening, Intermediate Reading/Writing',
      },
      {
        name: 'Japanese',
        description:
          'Conversational Speaking/Listening, Intermediate Reading/Writing',
      }
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `{
              allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
                nodes {
                  excerpt
                  html
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    date
                  }
                }
              }
            }`,
            output: "/rss.xml",
            title: "Theo Chen's Portfolio RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["YOUR_TRACKING_ID"],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Theo Chen`,
        short_name: `Theo Chen`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};