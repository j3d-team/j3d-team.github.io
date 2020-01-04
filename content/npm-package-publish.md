---
title: "NPM 모듈 패키지 제작 및 배포"
author: "J1"
metaTitle: "NPM 모듈 패키지 제작 및 배포해보기"
metaDescription: "NPM 모듈 패키지 제작 및 배포 튜토리얼입니다."
---

![npm-logo](/npm-package-publish/npm-logo.png)
<br/>

회사에서 프론트엔드 업무를 맡으면 ReactJS나 VueJS 등과 같은 프론트엔드 프레임워크를 사용하여 UI 개발을 주로 하게 됩니다.  
회사에서는 여러 프로젝트가 진행되는데 공통으로 사용하는 UI 모듈들이 산발적으로 중복 개발되기도 합니다.  
이런 불상사를 막기 위해 사내 NPM Registry에 공통 UI 모듈을 등록하여 각 프로젝트에서 install 및 import하여 사용하면 좋을 것 같은 생각이 들었고 실제로 그렇게 관리하는 회사가 많습니다.  
그래서 NPM 모듈을 제작하고 배포하는 방법을 스터디하기로 마음 먹었고, 블로그에 스터디 내용을 작성해보기로 하였습니다.  
아래와 같은 순서로 스터디 및 정리해나가려고 합니다.  


1. 빠르게 샘플 모듈을 만들어 NPM 배포해보기
2. cross frontend framework를 지원하는 UI 모듈 만들기
3. 사내 NPM Registry 구축하기
4. 사내 NPM Registry에 공통 UI 모듈 배포 및 사용하기