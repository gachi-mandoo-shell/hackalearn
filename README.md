<div align="center">
  <h1>생생한국통</h1>
  <strong>언제 어디서든 게임하듯 즐겁게, 한국의 문화와 풍경을 생생하게</strong>
</div>

## About

### Service

> **생생 한국통**은 외국인들을 상대로 한국의 다양한 명소와 문화를 소개하는 서비스입니다.

서비스는 **카카오맵 로드뷰**를 이용합니다.

### 초기 기획의도

각 **명소**에 대해 **주어진 임무**를 **로드맵** 안에서 움직이며 **수행하는 게임 형식**으로 진행됩니다.

게임을 통해 한국에 대한 **간접적인 체험과 경험**을 제공하고,

주어진 임무를 해결한 보상으로 한국의 다양한 지역에서 사용할 수 있는 지역상품권을 보상으로 지급합니다.

이렇게 지급된 상품권을 외국인들이 직접 소비함으로써 **지역 시장 경제 활성화**를 기대해 볼 수 있습니다.

**간접적인 체험**에서 얻은 각 명소에 대한 **긍정적인 인식**이 **직접 방문과 경험**으로 이어질 수 있도록 하는 것이 **생생한국통 팀의 목표**입니다.

---

### 펜데믹 상황에 따른 기획의도

팬데믹 상황으로 인해 한국 여행이 힘들어진 요즘,

당장 **한국을 방문**할 수 없는 **외국인**들에게 **한국의 여러 명소를 소개**하고 **문화**를 알려

**팬데믹이 끝난 이후** 한국에 **직접 방문하고자 하는 마음**이 생기기를 바랍니다.

게임의 보상으로는 각 테마에 맞는 보상 또는 **한국에 대한 유용한 정보**를 제공하고 있습니다.

## How to play game

1. 원하는 명소를 선택하면 게임 소개 페이지로 이동합니다.
2. 테마와 줄거리, 난이도 등의 정보를 확인하고 게임을 시작합니다.
3. 게임이 시작되면 지도상에 존재하는 NPC 캐릭터가 어떤 일을 해야 하는지 설명하고 약도를 줍니다.
4. 약도와 설명을 따라서 맡은 임무를 수행합니다.
5. 약도를 다시 보고자 하면 오른쪽 상단의 약도 버튼을 클릭합니다.
6. 획득한 아이템을 보고자 하면 왼쪽 상단의 아이템 버튼을 클릭합니다.
7. 임무를 완수하여 게임이 끝나면 보상 혹은 유용한 정보를 확인할 수 있습니다.

## To-do

- [ ] 서울, 부산, 제주도 등 국내/외 지역 추가.
- [ ] 다양한 게임방식과 스토리, 컨텐츠 추가.
- [ ] 다국어(i18n) 서비스 지원 추가.
- [ ] 각 지역과 연계 후 보상 논의.
- [ ] 오브젝트 디자인 변경 및 현재 위치 표시 기능 추가.

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

---

### Etc

개발하기 위해 추가로 구현한 것들...

- [react-kakao-maps-sdk](https://github.com/JaeSeoKim/react-kakao-maps-sdk)
- [kakao.maps.d.ts](https://github.com/JaeSeoKim/kakao.maps.d.ts)
