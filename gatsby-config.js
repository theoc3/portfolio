module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://theoc.dev`,
    // Your Name
    name: 'Theo Chen',
    // Main Site Title
    title: `Theo Chen | Research Assistant @ BU SLA, Computer Science & Japanese`,
    // Description that goes under your name in main bio
    description: `Boston University Senior Studying Computer Science & Japanese`,
    // Optional: Twitter account handle
    //author: `@theoc3`,
    // Optional: Github account URL
    github: `https://github.com/theoc3`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/theo-chen-08bb12224/`,
    // Optional: itch.io account URL
    itchio: `https://itch.io/profile/talcgames`,
    // Content of the About Me section
    about: `Hi! I'm Theo, and I'm passionate about how we can use technology to enhance our ability to learn languages! <br/>
    
    I'm currently rearching the application of technology like large language models to assist language learning as a Research Assistant at the Boston University Second Language Acquisition Lab. <br/>
    
    I was the former President of the Boston University Japanese Student Association, and recently studying abroad in Kyoto, Japan at Doshisha University with Columbia University's KCJS Program.
    `,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'AI vs Human Text Classifier',
        description:
          'A Machine Learning Model that classifies whether or not text is AI generated or written by a person.',
        link: 'https://github.com/theoc3/cs365-proj',
        techStack: 'Python, PyTorch, Tensorflow, scikit-learn, HuggingFace Transformers, NumPy, pandas, Matplotlib, GitHub'
      },    
      {
        name: 'Japanese Handwriting Rater',
        description:
          'A script that rates Japanese kana handwriting using EasyOCR library and a custom machine learning model trained on generated handwriting images.',
        link: 'https://github.com/theoc3/handwriting-rating',
        techStack: 'Python, PyTorch, NumPy, pandas, scikit-learn, Matplotlib, EasyOCR, OpenCV, GitHub'
      },
      {
        name: 'Kyoudai Matching Program',
        description:
          'A program that extracts csv files with a Python script to generate an input for a C++ program that uses a bipartite graph and a max-cost min-flow algorithm to match “bigs” and “littles" for the BUJSA Kyoudai program.',
        link: 'https://github.com/schuyler1007/bujsa',
        techStack: 'Python, C++, NumPy, GitHub'
      },
      {
        name: 'Stationery Blog',
        description:
          'A blog created with the Next.js framework displaying blog posts and reviews of stationery written in Markdown.',
        link: 'https://theosbungu.com',
        techStack: 'React, Next.js, JavaScript, Tailwind CSS, Markdown, HTML, Vercel, GitHub'
      },
      {
        name: 'Spark Bytes MVP Demo Website',
        description:
          'A MVP website hosting user generated posts for food leftovers at BU events with user authentication via OAuth 2.0 and Prisma interactions with a PostgreSQL database using Express.js API access. Worked in a simulated scrum team of 4, with 3 sprints total.',
        link: 'https://spark-bytes-demo.vercel.app/',
        techStack: 'React, Express.js, Next.js, TypeScript, Tailwind CSS, OAuth 2.0, Prisma, PostgreSQL, Vercel, Railway, GitHub'
      },
      {
        name: 'Space News Website',
        description:
          'A website that displays the latest news about space using React and a public Space News API.',
        link: 'https://cs392-space-news-project.vercel.app/',
        techStack: 'React, JavaScript, Tailwind CSS, HTML, Vercel, GitHub'
      },
      {
        name: 'Japanese Study Program',
        description:
          'A Python program for memorizing the Japanese writing systems of Hiragana and Katakana that adjusts its difficulty based on the user’s familiarity with each character as they answer correctly or incorrectly, keeping track of response time and accuracy.',
        link: 'https://github.com/theoc3/JapanesePractice',
        techStack: 'Python, NumPy, GitHub'
      },
      {
        name: 'Scale to Shoot',
        description:
          'A 2D Unity game developed in 24 hours for the annual GMTK Game Jam. The theme of “Scale" is interpreted as shooting enemies of varying sizes with shots that need to match the size of the enemies.',
        link: 'https://itch.io/jam/gmtk-2024/rate/2903129',
        techStack: 'Unity 2D, C#, WebGL, Adobe Photoshop, Adobe Illustrator'
      },
      {
        name: 'Rig the Dice',
        description:
          'A 3D Unity game developed in 48 hours for the annual GMTK Game Jam. The theme of “Roll of the Dice” is interpreted as rigging dice so that they have the desired outcome for a basic gambling game.',
        link: 'https://itch.io/jam/gmtk-jam-2022/rate/1623138',
        techStack: 'Unity 3D, C#, WebGL, Blender, Adobe Photoshop, Adobe Illustrator'
      },
      {
        name: 'Color Theory',
        description:
          'A 2D Unity game developed in 48 hours for the annual GMTK Game Jam. The theme of “Joined Together” is interpreted as both joining together primary colors to create secondary colors and combining the player with same colored enemies to score.',
        link: 'https://itch.io/jam/gmtk-2021/rate/1081834',
        techStack: 'Unity 2D, C#, WebGL, Adobe Photoshop, Adobe Illustrator'
      }
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Boston University Second Language Acquisition Lab',
        description: 'Research Assistant: January 2025 - Current',
        link: 'https://www.bu.edu/wheelock/profile/kathy-minhye-kim/',
        techStack: 'Gorilla, TypeScript, R',
        location: 'Boston, MA, U.S.A. (On-Site)'
      },
      {
        name: 'GitStart (YC19)',
        description: 'Software Engineering Intern: May 2024 - August 2024',
        link: 'https://gitstart.com/',
        techStack: 'React, Node.js, TypeScript, GraphQL, Elixir, Tailwind CSS, HTML, SQL, GitHub, Docker ',
        location: 'San Francisco, CA, U.S.A. (Remote)'
      },
      {
        name: 'Timewitch Inc.',
        description: 'Software Engineering Intern: December 2023 - January 2024',
        link: 'https://timewitch.jp/',
        techStack: 'React, Node.js, Express.js, TypeScript, Tailwind CSS, HTMl, SQL, Prisma, Redis, Zod, Microsoft Azure, GitHub',
        location: 'Tokyo, Japan (Remote)'
      },
      {
        name: 'Cardinal Blue Software, Inc.',
        description: 'Product Operations Intern: June 2017 - July 2017',
        link: 'https://picc.co/',
        techStack: 'Python, Adobe Photoshop, Adobe Illustrator, Adobe Premiere Pro, Microsoft Excel',
        location: 'Taipei, Taiwan (On-Site)'
      },
    ],
    activities: [
      {
        name: 'Boston University Japanese Student Association',
        description: 'Senior Advisor: May 2024 - Current | (President 23 - 24, Secretary 22 - 23)',
        link: 'https://www.instagram.com/thebujsa',
        location: 'Boston, MA, U.S.A. (On-Site)'
      }
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Programming Languages',
        description:
          'Python, HTML, CSS, Javascript, Typescript, SQL, R, C, C#, C++, Java, Git, Assembly, Bash',
      },
      {
        name: 'Web Development',
        description: 'React, Node.js, Next.js, Express.js, Prisma, Redis, MongoDB, Zod, GraphQL, Elixir, Tailwind, OAuth 2.0, PostgreSQL, Vercel, Railway, Azure',
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
