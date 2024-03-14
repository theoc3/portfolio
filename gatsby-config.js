module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://theoc.dev`,
    // Your Name
    name: 'Theo Chen',
    // Main Site Title
    title: `Theo Chen | Computer Science & Japanese @ BU`,
    // Description that goes under your name in main bio
    description: `President of BUJSA, 3rd-Year at Boston University studying Computer Science and Japanese`,
    // Optional: Twitter account handle
    //author: `@theoc3`,
    // Optional: Github account URL
    github: `https://github.com/theoc3`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/theo-chen-08bb12224/`,
    // Content of the About Me section
    about: `Hi, I'm Theo, a 3rd-year Majoring in Computer Science and Minoring in Japanese at BU. I'm most experienced in full-stack development, and I'm also interested in the overlap between linguistics and CS. However, I'll always have a soft spot for game development. Check out the links to some of my Projects below!`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'AI vs Human Text Classifier',
        description:
          'A Machine Learning Model that classifies whether or not text is AI generated or written by a person.',
        link: 'https://github.com/theoc3/cs365-proj',
      },    
      {
        name: 'Japanese Handwriting Rater',
        description:
          'A script that rates Japanese kana handwriting using EasyOCR library and a custom machine learning model trained on generated handwriting images.',
        link: 'https://github.com/theoc3/handwriting-rating',
      },
      {
        name: 'Kyoudai Matching Program',
        description:
          'A program that extracts csv files with a Python script to generate an input for a C++ program that uses a bipartite graph and a max-cost min-flow algorithm to match “bigs” and “littles" for the BUJSA Kyoudai program.',
        link: 'https://github.com/schuyler1007/bujsa',
      },
      {
        name: 'Stationery Blog',
        description:
          'A blog created with the Next.js framework displaying blog posts and reviews of stationery written in Markdown.',
        link: 'https://theosbungu.com',
      },
      {
        name: 'Spark Bytes MVP Demo Website',
        description:
          'A MVP website hosting user generated posts for food leftovers at BU events with user authentication via OAuth 2.0 and Prisma interactions with a PostgreSQL database using Express.js API access. Worked in a simulated scrum team of 4, with 3 sprints total.',
        link: 'https://spark-bytes-demo.vercel.app/'
      },
      {
        name: 'Space News Website',
        description:
          'A website that displays the latest news about space using React and a public Space News API.',
        link: 'https://cs392-space-news-project.vercel.app/'
      },
      {
        name: 'Japanese Study Program',
        description:
          'A Python program for memorizing the Japanese writing systems of Hiragana and Katakana that adjusts its difficulty based on the user’s familiarity with each character as they answer correctly or incorrectly, keeping track of response time and accuracy.',
        link: 'https://github.com/theoc3/JapanesePractice'
      },
      {
        name: 'Rig the Dice',
        description:
          'A 3D Unity game developed in 48 hours for the annual GMTK Game Jam. The theme of “Roll of the Dice” is interpreted as rigging dice so that they have the desired outcome for a basic gambling game.',
        link: 'https://itch.io/jam/gmtk-jam-2022/rate/1623138'
      },
      {
        name: 'Color Theory',
        description:
          'A 2D Unity game developed in 48 hours for the annual GMTK Game Jam. The theme of “Joined Together” is interpreted as both joining together primary colors to create secondary colors and combining the player with same colored enemies to score.',
        link: 'https://itch.io/jam/gmtk-2021/rate/1081834'
      }
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Boston University Japanese Student Association',
        description: 'President: June 2023 - Present, Secretary: June 2022 - May 2023, Underclassmen Representative: January 2022 - May 2022',
        link: 'https://www.instagram.com/thebujsa'
      },
      {
        name: 'Timewitch Inc.',
        description: 'Full-Stack Developer Intern: December 2023 - January 2024',
        link: 'https://timewitch.jp/',
      },
      {
        name: 'Cardinal Blue Software, Inc.',
        description: 'Product Operations Intern: June 2017 - July 2017',
        link: 'https://picc.co/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Programming Languages',
        description:
          'Python, C, C#, C++, Java, Git, Assembly, Bash, HTML, CSS, Javascript, Typescript, SQL',
      },
      {
        name: 'Web Development',
        description: 'React, Node.js, Next.js, Express.js, Prisma, Redis, Zod, Tailwind, OAuth 2.0, PostgreSQL, Vercel, Railway, Azure',
      },
      {
        name: 'Machine Learning/Data Science',
        description:
          'NumPy, pandas, scikit-learn, PyTorch, TensorFlow, Matplotlib, EasyOCR',
      },
      {
        name: 'Software/Tools',
        description: 
          'Unity 2D/3D, Vim, Emacs, Docker, VSCode, Spyder, Adobe Suite, Microsoft Suite, Google Suite, Logic Pro, Blender',
      }
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
