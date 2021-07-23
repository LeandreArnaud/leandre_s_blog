module.exports = {
  siteMetadata: {
    title: "leandre_s_blog",
  },
  plugins: [
    // scroll parallax:
    `gatsby-plugin-sass`,
    // images:
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: 'src/images/icon.jpg'
      },
    },
  ]
};
