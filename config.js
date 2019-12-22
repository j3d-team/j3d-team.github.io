const config = {
  gatsby: {
    pathPrefix: "/",
    siteUrl: "https://j3d-team.github.io",
    gaTrackingId: null
  },
  header: {
    logo: "",
    logoLink: "/",
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
    title: "J3D 개발 블로그",
    description: "J3D 개발 블로그입니다.",
    ogImage: null,
    docsLocation:
      "https://github.com/j3d-team/j3d-team.github.io/tree/origin/content",
    favicon:
      "https://j3d-team.github.io/static/logo-647815e78af964d695f5f9a14d12b958.png"
  },
  authors: {
    J1: {
      name: "J1",
      imageUrl:
        "https://user-images.githubusercontent.com/17061350/71318135-2cb3cd80-24d0-11ea-9752-ae1d2c0634b7.png",
      githubUrl: "https://github.com/jinkyung",
      email: "",
      description:
        "UX에 관심이 많은 프론트엔드 개발자입니다. 새로운 도전을 좋아합니다."
    },
    J2: {
      name: "J2",
      imageUrl:
        "https://user-images.githubusercontent.com/6037055/70845552-80506680-1e93-11ea-92fc-46bfcb88deb5.jpeg",
      githubUrl: "http://github.com/kji6252",
      email: "",
      description: "Java 백엔드 개발자입니다. 잘하는 사람이 되고 싶습니다."
    },
    J3: {
      name: "J3",
      imageUrl:
        "https://user-images.githubusercontent.com/17061350/71318134-2cb3cd80-24d0-11ea-8ed4-97baa8cb279b.jpg",
      githubUrl: "",
      email: "",
      description:
        "백엔드, 프론트엔드 가리지 않고 모두 관심많은 초절정미녀 개발자입니다~!"
    },
    D1: {
      name: "D1",
      imageUrl: "https://avatars3.githubusercontent.com/u/17061350?s=460&v=4",
      githubUrl: "https://github.com/ifmoon",
      email: "ifmoon.io@gmail.com",
      description:
        "안녕하세요, 넓고 얕게 공부한 프론트엔드 개발자입니다. 깊게 배우려고 노력중입니다 :)"
    }
  }
};

module.exports = config;
