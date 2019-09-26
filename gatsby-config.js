const ru = require("./src/locales/ru.json")
const en = require("./src/locales/en.json")

module.exports = {
  siteMetadata: {},
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/images/`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        lang: "ru",
        name: ru.meta.title,
        description: ru.meta.description,
        short_name: "mpd_group",
        start_url: "/",
        background_color: "#eeeeee",
        theme_color: "#d65947",
        display: "standalone",
        icon: "src/images/icon.png",
        localize: [
          {
            start_url: `/en/`,
            lang: `en`,
            name: en.meta.title,
            description: en.meta.description,
          },
        ],

      },
    },
    `gatsby-plugin-offline`,
  ],
}
