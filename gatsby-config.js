module.exports = {
  siteMetadata: {
    title: `Paul Rand`,
    description: `Paul Rand was an American art director and graphic designer, best known for his corporate logo designs, including the logos for IBM, UPS, Enron, Morningstar, Inc., Westinghouse, ABC, and NeXT. He was one of the first American commercial artists to embrace and practice the Swiss Style of graphic design.`,
    author: `JeeJee`,
    keywords: `Paul Rand`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
