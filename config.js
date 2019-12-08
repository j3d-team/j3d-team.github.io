const config = {
  gatsby: {
    pathPrefix: "/",
    siteUrl: "https://j3d-team.github.io",
    gaTrackingId: null
  },
  header: {
    logo: "",
    logoLink: "https://j3d-team.github.io",
    title: "J3D Team Blog",
    githubUrl: "https://github.com/j3d-team/j3d-team.github.io",
    helpUrl: "",
    tweetText: "",
    links: [{ text: "", link: "" }],
    search: {
      enabled: false,
      indexName: "",
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY
    }
  },
  sidebar: {
    forcedNavOrder: ["/introduction", "/codeblock"],
    links: [],
    frontline: false,
    ignoreIndex: true
  },
  siteMetadata: {
    title: "J3D 팀 블로그",
    description: "입니다.",
    ogImage: null,
    docsLocation:
      "https://github.com/j3d-team/j3d-team.github.io/tree/origin/content",
    favicon: "https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg"
  }
};

module.exports = config;
