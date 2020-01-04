---
title: "샘플 모듈 NPM 배포해보기"
author: "J1"
metaTitle: "샘플 모듈 NPM 배포해보기"
metaDescription: "샘플 패키지(모듈)를 만들어 빠르게 NPM 배포해보기"
---

# 사전 준비

- Git 설치 (https://git-scm.com/downloads)
- Github 계정 생성 (https://github.com/)
- NodeJS 설치 (https://nodejs.org/ko/download/)
- NPM 계정 생성 (https://www.npmjs.com/)


# Github Repository 만들기  

![github-new-repository](/npm-package-publish/github-new-repository.png)

[Github](https://github.com/) 에 가입하여 New Repository를 생성합니다.  
제가 sample NPM 모듈 배포를 위해 생성한 Repository는 [여기](https://github.com/jinkyung/npm-sample) 입니다.  
  

# 로컬에서 프로젝트 생성 및 Git 연동

프로젝트 디렉토리 생성하여 해당 디렉토리 이동 후
```bash
$ git init
$ git remote add origin ${github repository address}
``` 
  
# NPM 프로젝트 설정

```bash
$ npm init
```

### package.json 설정

```json
{
  "name": "j3d-npm-sample",
  "version": "1.0.1",
  "description": "npm sample package create and publish tutorial by J3D",
  "keywords": [
    "npm",
    "NPM",
    "module",
    "package",
    "publish",
    "tutorial",
    "j3d",
    "J3D"
  ],
  "homepage": "https://j3d-team.github.io",
  "bugs": {
    "url": "https://github.com/jinkyung/npm-sample/issues",
    "email": "jinkyungj@gmail.com"
  },
  "author": {
    "name": "J1",
    "email": "jinkyungj@gmail.com",
    "url": "https://j3d-team.github.io"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/jinkyung/npm-sample.git"
  },
  "files": [
    "dist"
  ],
  "main": "dist/j3dSampleModule.js",
  "license": "MIT"
}
```

# 모듈 코드 작성

```javascript
// dist/j3dSampleModule.js

var j3dSampleModule = {
    sayHello: function () {
        console.log('hello NPM!');
    }
}

module.exports = j3dSampleModule;
```

# NPM 배포
```bash
$ npm adduser
``` 

```bash
$ npm publish
```

https://www.npmjs.com/package/j3d-npm-sample

# NPM 임포트 하여 사용해보기
```bash
$ npm i j3d-npm-sample
```

```javascript
var npmSample = require('j3d-npm-sample');
npmSample.sayHello();
```
