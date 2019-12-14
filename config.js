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
    forcedNavOrder: ["/npm-module", "/codeblock"],
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
  },
  authors: {
    J1: {
      name: "J1",
      imageUrl: "https://dummyimage.com/300x300/ffffff/69c2c7.jpg&text=J1",
      githubUrl: "",
      description: ":)"
    },
    J2: {
      name: "J2",
      imageUrl: "https://dummyimage.com/300x300/ffffff/69c2c7.jpg&text=J2",
      githubUrl: "",
      description: ":)"
    },
    J3: {
      name: "J3",
      imageUrl: "https://dummyimage.com/300x300/ffffff/69c2c7.jpg&text=J3",
      githubUrl: "",
      description: ":)"
    },
    D1: {
      name: "D1",
      imageUrl: "https://dummyimage.com/300x300/ffffff/69c2c7.jpg&text=D1",
      githubUrl: "https://github.com/ifmoon",
      description: "ㅎ.ㅎ"
    }
  }
};

module.exports = config;
