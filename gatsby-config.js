module.exports = {
  siteMetadata: {
    title: `Young Sun | Front End Engineer`,
    description: `Young Sun is a passionate front end engineer who is dedicated to building modern & highly scalable web apps.`,
    siteUrl: `https://ysun.me/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-preact`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        short_name: "Young Sun",
        name: "Young Sun Portfolio",
        start_url: "/",
        background_color: "#0a192f",
        theme_color: "#0a192f",
        display: "minimal-ui",
        icon: "src/images/sun.png",
        theme_color_in_head: false,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/`,
        name: "content",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/hero`,
        name: "hero",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/about`,
        name: "about",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/work`,
        name: "work",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/projects`,
        name: "projects",
      },
    },
    {
      resolve: `gatsby-styled-components-dark-mode`,
      options: {
        light: require(`${__dirname}/src/styles/theme.js`).lightTheme,
        dark: require(`${__dirname}/src/styles/theme.js`).darkTheme,
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow noopener noreferrer",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-151013820-3",
      },
    },
    `gatsby-plugin-offline`,
  ],
}
