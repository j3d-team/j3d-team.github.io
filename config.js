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
      imageUrl: "https://avatars3.githubusercontent.com/u/17061350?s=460&v=4",
      githubUrl: "https://github.com/ifmoon",
      description: "넓고 얕게 배운 초보 프론트엔드 개발자입니다."
    }
  }
};

module.exports = config;
