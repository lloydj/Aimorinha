module.exports = {
  siteMetadata: {
    title: "Aimorinha",
    desc: "Le premier Beauty Hub du Cameroun"
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "iijduejfrgjv",
        accessToken:
          "c7f04ee9910527e7de9fd7d7057d8282d27986d2fa9d1434748ebec94ab9c542"
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "img",
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "img",
        path: `${__dirname}/static/assets`
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-transformer-remark"
  ]
};

// pathPrefix: "/levelupgatsby",
