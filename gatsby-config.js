const path = require('path')

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, 'src', 'images')
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        background_color: '#232959',
        theme_color: '#232959',
        name: `Svadba Janka a Lukáš`,
        short_name: `Svadba JL`,
        start_url: `/`,
        display: `standalone`,
        icon: path.join(__dirname, 'src/images/postavicky-v-srdci-ico.svg')
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: path.join(__dirname, 'src', 'data')
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-styled-components',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ]
}
