<div align="center">
  <h1>생생한국통</h1>
  <strong>언제 어디서든 게임하듯 즐겁게, 한국의 문화와 풍경을 생생하게</strong>
</div>

## About

<!-- TODO: 서비스 설명 추가 될 부분 -->

## Build or Development

### requirements

https://developers.kakao.com/product/map 에서 Kakao-map 을 동작시킬 도메인 (ex. http://localhost:3000, https://<RANDOM_NAME>.azurestaticapps.net 등)을 등록하여 `JavaScript 키` 를 발급 받아야 합니다.

### install dependency

```bash
npm install
```

### setup environment

```
// .env.local
REACT_APP_KAKAOMAP_API_KEY=카카오에서 발급 받은 JAVASCRIPT API KEY
```

### build

```bash
npm run build
```

### serve

```bash
npm install -g serve
// serve가 없는 경우에만
serve -s build
```

### development server

```bash
npm run dev
```

## Deploy

1. 현재 Repo를 fork 를 진행

2. Microsoft Azure 에서 새로운 정적 웹앱 프로젝트 생성
   - 배포 세부 정보를 **기타** 로 설정
3. 생성된 정적 웹앱 페이지에서 **배포 토큰 관리** 항목으로 들어가 배포 토큰 확인
4. fork 된 Repo의 Settings으로 이동
5. Actions secrets으로 이동하여 **Repository secrets** 에서 아래의 항목 추가
   - `AZURE_STATIC_WEB_APPS_API_TOKEN_GRAY_TREE_0E5A77A00` 에 발급 받은 배포토큰으로 설정
   - `REACT_APP_KAKAOMAP_API_KEY` 에 카카오에서 발급 받은 JAVASCRIPT API KEY로 설정
6. Github Action으로 들어가서 fork 된 repo의 Action 활성화
7. 현재 github action repo deploy trigger가 `master push` 또는 mater에 대한 PR 이므로 간단한 readme.md 수정하여 **PUSH** 이벤트 발생
8. workflows 작업 로그에서 작업이 완료되면 만든 정적웹앱의 URL로 접근!
