module.exports = {
  siteMetadata: {
    title: `Huddle Landing Curved`,
    description: `Some crazy curved sections involved`,
    author: `Jakub Chrapek`,
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
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Huddle Landing Curved`,
        short_name: `Curved Huddle`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            variants: [`700`],
          },
          {
            family: `Open Sans`,
            variants: [`400`, `600`, `700`],
          },
        ],
      },
    },
  ],
}
