---
title: "Github Action으로 Gatsby 블로그 배포하기"
author: "D1"
metaTitle: "Github Action으로 Gatsby 블로그 배포하기"
metaDescription: ""
---


# 시작

정적 웹 생성기로 GatsbyJS를 골랐음. 주력 프레임워크가 리액트인 사람이 3명 있고 모두 GraphQL에 관심이 있어서 겸사 겸사...
github pages로 배포하기로 함.

# 문제

`npm run deploy`를 사람이 손으로 실행해줘야 함.  

처음에는 husky pre-push에 훅으로 걸었지만, 팀 블로그다보니 gh-pages 배포 과정이 겹칠 수 있음 + 느림
글 쓰는 것 자체가 손이 많이 가는 일인데 또 뭔가 신경쓰고 싶지 않음

# 배포 설정
## Github Action이란?


## Github Personal Token
