---
title: "Github Action으로 Gatsby 블로그 배포하기"
author: "D1"
metaTitle: "Github Action으로 Gatsby 블로그 배포하기"
metaDescription: ""
---

# 문제의 시작

글 쓰는 스터디를 시작하고 [gatsbyJS](https://www.gatsbyjs.org/)를 팀 블로그 생성기로 골랐을 때는 [netlify](https://www.netlify.com/)로 블로그를 배포하려고 했었습니다.  
<br/>

가능한 빠르게 ~~의욕이 남아있을 때~~ 글을 쓸 수 있는 공간을 만들어야 했는데 개인 블로그를 gatsby+netlify로 만들어봐서 금방 만들 수 있었거든요.  
그 때, 누군가가 말했습니다.  

<br/>

> _그런데 netlify.com보단 github.io가 더 멋있는데._
>
> _맞아. Github Page로 배포하면 안되나?_

<br/>

(...)

<br/>

위와 같은 이유로 github pages로 배포하는 게 결정되었습니다.  
찾아보니 gatsby에서 이미 [github Page로 배포하는 방법](https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/)을 가이드하고 있었습니다. 간단하게 아래 3단계로 요약할 수 있었는데요,

1. gh-pages 패키지 설치
2. package.json의 script에 `"deploy": "gatsby build && gh-pages -d public -b master"` 추가
3. `npm run deploy`

<br/>

와, 정말 쉽잖아? 금방 적용할 수 있겠어요!

<br/>

# 문제

#### 그렇지 않았습니다.

<br/>

ㅠㅠ

<br/>

`npm run deploy`를 개인이 직접 실행해야 했습니다.  
처음에는 husky로 pre-push에 훅으로 걸었는데요, 빌드와 배포가 상당히 느린 편이라 매 푸시마다 기다리는 건 고통스러운 일이었습니다. 심지어 팀 블로그다보니 배포 과정이 겹칠 수 있었습니다. 열심히 글 쓰고 푸시하고 기다렸더니 내가 올린 글이 없는거죠.

<br />

무엇보다 글 쓰는 일 자체가 손도 많이 가고, 에너지 소비가 굉장히 많이 드는 일인데 거기에 추가로 뭔가에 신경쓰고 싶지 않았습니다. 결국 CI를 알아보게 되었고, 마침 Github Action을 써보고 싶었기 때문에 Github Action을 쓰기로 결정했습니다.

# 배포 설정

처음엔 어떻게 구현해야 하나 고민했었는데, 이미 marketplace에 왠만한 기능은 구현되어 올라와 있었습니다. 검색해보니 딱 원하는 액션이 이미 올라와 있어서 그 액션을 사용해서 구성했습니다. ([Github Pages](https://github.com/marketplace/actions/github-pages))

<br/>

![Github Pages](https://user-images.githubusercontent.com/17061350/71441565-4dd12400-2745-11ea-82bb-26c7d46accdb.png)

<br/>

위의 액션은 GITHUB_TOKEN과 Personal Access Token을 둘 다 넣어야 하는데요, Personal Access Token은 이 [링크](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)를 참고해서 생성해주세요.  
이후 블로그 레포지토리의 설정 > secrets 탭에서 추가하여 사용할 수 있습니다. yml 파일에 변수는 `${{ secrets.GITHUB_TOKEN }}`와 같은 방식으로 넣을 수 있습니다.

<br/>

![image](https://user-images.githubusercontent.com/17061350/71442092-c933d500-2747-11ea-8845-c1bc115156fc.png)

<br/>

그리고 `package.json`에 추가했던 deploy 명령어를 빼버리고 dev 브랜치에 머지되면 액션이 실행되도록 해서 아래처럼 구성했습니다.  

```yml
name: CI

on:
  push:
    branches:
      - dev

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v1
      - name: npm install
        run: npm install
      - name: build
        run: npm run build
      - name: GitHub Pages
        if: success()
        with:
          target_branch: master
          build_dir: public
        uses: crazy-max/ghaction-github-pages@v1.2.5
        env:
          GITHUB_TOKEN: "${{ secrets.GITHUB_TOKEN }}"
          GITHUB_PAT: ${{ secrets.GH_PAT }}
```  

<br />

테스트 푸시를 해보니 잘 배포되는 걸 확인할 수 있었습니다. 성공!


# 느낀 점

![image](https://user-images.githubusercontent.com/17061350/71445819-7581b580-2760-11ea-8d3d-0effdf657a8c.png)

<br />

Github Action을 직접 써보니 굉장히 쓰기 쉽고 직관적으로 구성되어 있어서 좋았습니다. 별 다른 설치없이 깃헙에서 바로 사용할 수 있는 것도 큰 장점이구요. 얼마나 복잡한 케이스까지 커버할 수 있을 지는 모르겠지만 이런 간단한 배포같은 경우엔 쉽게 설정할 수 있을 것 같습니다.

앞으로 토이 프로젝트할 때도 잘 이용할 수 있을 것 같습니다 :)
