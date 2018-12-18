module.exports = {
  pathPrefix: "/kubecon2018jobs",
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: "./static/favicon.png",
      }
    }
  ],
}
