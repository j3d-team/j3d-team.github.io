---
title: "샘플 모듈 패키지 NPM 배포해보기"
author: "J1"
metaTitle: "샘플 모듈 패키지 NPM 배포해보기"
metaDescription: "샘플 모듈 패키지를 만들어 빠르게 NPM 배포해보기"
---

# 사전 준비

- Git 설치 (https://git-scm.com/downloads)
- GitHub 계정 생성 (https://github.com/)
- NodeJS 설치 (https://nodejs.org/ko/download/)
- NPM 계정 생성 (https://www.npmjs.com/)


# GitHub Repository 생성 및 Clone  

[GitHub](https://github.com/) 에 가입한 후, New Repository를 생성합니다.  
![github-new-repository](/npm-package-publish/github-new-repository.png)
<br/>

적절한 Repository 이름과 Description, 공개여부, README 파일, .gitignore 파일, LICENSE 파일을 설정한 후, `Create repository` 버튼을 선택합니다.
![github-new-repository-setting](/npm-package-publish/github-new-repository2.png)
<br/>

새로운 Repository가 생성되었습니다! 이제 이 Repository를 로컬에 clone하여 봅시다. `Clone or download` 버튼을 선택 후, 복사 아이콘을 선택합니다.
![github-clone](/npm-package-publish/github-repository-clone.png)
<br/>

터미널을 실행하여, 원하는 디렉토리 위치로 이동 후, 아래와 같이 복사된 GitHub 주소를 입력하여 clone 합니다.
```bash
$ git clone https://github.com/jinkyung/j3d-npm-sample.git
``` 
<br/><br/>

# NPM 프로젝트 설정

이제 클론된 프로젝트 디렉토리 위치로 이동 후, 아래 명령어를 실행한 후, 일단 Is this OK? 문구가 나올 때까지 `Enter` 키를 눌러줍니다.
```bash
$ npm init
```
![npm-init](/npm-package-publish/npm-init.png)


### package.json 설정

코드 에디터로 해당 프로젝트의 `package.json` 파일을 열어 NPM 모듈 패키지 설정을 수정해봅시다.  
아래는 default로 설정된 `package.json` 내용입니다.
```json
{
  "name": "j3d-npm-sample",
  "version": "1.0.0",
  "description": "NPM sample package publish test",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/jinkyung/j3d-npm-sample.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/jinkyung/j3d-npm-sample/issues"
  },
  "homepage": "https://github.com/jinkyung/j3d-npm-sample#readme"
}
```
<br/>

NPM에 등록될 **author** 정보를 아래와 같이 자신의 정보로 수정해봅시다.
```json
{
  "author": {
    "name": "J1",
    "email": "jinkyungj@gmail.com",
    "url": "https://j3d-team.github.io"
  }
}
```
<br/>

NPM에 검색 키워드로 등록될 **keywords** 정보를 아래와 같이 추가해봅시다.
```json
{
   "keywords": [
    "J3D",
    "tutorial",
    "NPM",
    "module",
    "package",
    "publish"
  ]
}
```
<br/>

패키지 사용을 허용하는 방법과 제한 사항을 알 수 있는 **license**를 지정합시다.  
default로 `ISC`로 지정되었으나 우리는 GitHub에서 repository를 생성할 때 `MIT` 라이센스를 선택하였으니 수정합니다. (참고로 `ISC`와 `MIT` 라이센스 내용은 거의 동일 - 무료 소프트웨어 - 하다고 합니다.)
```json
{
   "license": "MIT"
}
```
<br/>

패키지가 의존성으로 설치될 때 같이 포함될 파일(디렉터리)들의 배열인 **files**를 지정합시다.  
(생략하면 자동 제외로 설정된 파일을 제외한 모든 파일이 포함됩니다.)
```json
{
  "files": [
    "dist"
  ]
}
```
<br/>

가장 중요한 프로그램의 기본 진입 점(entry point)인 **main**를 지정합시다.  
default로 `index.js`로 지정되었으나 원하는 위치의 소스로 재설정합니다.
패키지의 이름이 `j3d-npm-sample`이고, 사용자가 `require('j3d-npm-sample')` or `import 'j3d-npm-sample'`를 사용하면 진입 점의 **main** 모듈에서 exports한 object가 반환(return)됩니다.
```json
{
  "main": "dist/j3dSampleModule.js"
}
```
<br/>

최종으로 완성된 `package.json`은 아래와 같습니다.

```json
{
  "name": "j3d-npm-sample",
  "version": "1.0.0",
  "description": "NPM sample package publish test",
  "main": "dist/j3dSampleModule.js",
  "files": [
    "dist"
  ],
  "repository": {
    "type": "git",
    "url": "git+https://github.com/jinkyung/j3d-npm-sample.git"
  },
  "author": {
    "name": "J1",
    "email": "jinkyungj@gmail.com",
    "url": "https://j3d-team.github.io"
  },
  "keywords": [
    "J3D",
    "tutorial",
    "NPM",
    "module",
    "package",
    "publish"
  ],
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/jinkyung/j3d-npm-sample/issues"
  },
  "homepage": "https://github.com/jinkyung/j3d-npm-sample#readme"
}
```
<br/><br/>

### README.md 수정

README 에서 작성된 내용은 GitHub Repository 메인 화면과 배포된 NPM 패키지 사이트 메인 화면에 보여지기 때문에 적절한 내용으로 수정합니다.
![npm-readme](/npm-package-publish/npm-readme.png)

# 모듈 코드 작성

위의 `package.json`에서 설정한 **main** 모듈 파일을 생성하여 아래와 같이 샘플 모듈 코드를 작성해봅시다.
```javascript
// dist/j3dSampleModule.js

var j3dSampleModule = {
    sayHello: function () {
        console.log('hello NPM!');
    }
}

module.exports = j3dSampleModule;
```
<br/><br/>

# GitHub에 Push

지금까지 작성한 소스 코드를 **git commit 및 push** 합니다.  
그런데 GitHub에서 Repository를 생성할 때 `.gitignore` 파일 생성 옵션에서 `Node`를 선택하였더니 default로 `dist` 폴더가 git ignore 되고 있네요.  
우리는 `dist` 폴더에 소스 코드를 작성하였으니, `.gitignore` 에서 `dist` 부분을 삭제해준 후 git commit 및 push 해줍시다.
<br/><br/>

# NPM 배포

샘플 모듈도 만들었으니 이제 NPM에 배포해봅시다.  
먼저 프로젝트 디렉토리 위치에서 아래 명령어를 실행하여 자신의 NPM 계정에 로그인합니다.
```bash
$ npm adduser
``` 
![npm-adduser](/npm-package-publish/npm-adduser.png)

아래 명령어를 입력하여 NPM에 배포합니다.
```bash
$ npm publish
```
![npm-publish](/npm-package-publish/npm-publish.png)

NPM 사이트에서 배포된 패키지 모듈 이름으로 검색하여 이동하면 아래와 같이 잘 배포된 것을 확인할 수 있습니다.
![npm-result](/npm-package-publish/npm-result.png)
<br/>

# NPM 패키지 설치하여 사용해보기

이제 새로운 프로젝트에서 아래 명령어를 입력하여 위에서 배포한 NPM 패키지를 설치합니다.
```bash
$ npm i j3d-npm-sample
```

아래처럼 설치한 패키지 모듈을 import하여 해당 모듈의 `sayHello` 메소드를 실행하면 console에 `hello NPM!`이 찍히는 것을 볼 수 있습니다.

```javascript
var npmSample = require('j3d-npm-sample');
npmSample.sayHello();
```
![npm-use](/npm-package-publish/npm-use.png)

<br/><br/>
끝!