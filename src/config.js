export default {
  siteTitle: "KubeCon2018Jobs",
  siteTitleShort: "KubeCon Seattle 2018 Jobs", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Jobs listing from the Seattle KubeCon 2018 jobs board", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://gitumarkk.github.io/kubecon2018jobs/", // Domain of your website without pathPrefix.
  repository: "https://github.com/gitumarkk/kubecon2018jobs",
  repositoryUsername: "gitumarkk",
  repositoryUsernameUrl: "https://github.com/gitumarkk",
  pathPrefix: "/kubecon2018jobs", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "Jobs listing from the Seattle KubeCon 2018 jobs board", // Website description used for RSS feeds/meta description tag.
  // siteRss: "/rss.xml", // Path to the RSS file.
  siteGATrackingID: "", // Tracking code ID for google analytics.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Mark G", // Username to display in the author segment.
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    ".", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/Vagr9K/gatsby-material-starter",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/Vagr9K",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:vagr9k@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2018. Gitumarkk" // Copyright string for the footer of the website and RSS feed.
}
