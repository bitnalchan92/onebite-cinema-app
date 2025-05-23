## ☘️ 인프런 이정환 강사님 Next.js 한입챌린지 5기 참가하면서 공부한 Repo

- Page Router 학습 후 App Router 버전으로 다시 작성해보는 과정

> [Page Router 버전 repo](https://github.com/bitnalchan92/onebite_cinema)
> 
> [Page Router 버전 vercel 배포 페이지](https://onebite-cinema-lime.vercel.app/)

## ✏️ history

### 작성할 페이지들 App Router 적용 및 레이아웃 파일 추가 [🚀](https://github.com/bitnalchan92/onebite-cinema-app/commit/cc2a8f0e36838883a4ded4aac8b94e6c3c3a02cd)

- /
- /search?q=
- /movie

### 서치바 컴포넌트 만들기 [🚀](https://github.com/bitnalchan92/onebite-cinema-app/commit/f512f823fabcae61cf9d34aaa52437efc15bd1a7)

- 서치바 레이아웃 컴포넌트에 서치바 컴포넌트를 자식으로 추가
- searchbar.tsx 작성

### 한입-씨네마 UI 구현하기 [🚀](https://github.com/bitnalchan92/onebite-cinema-app/commit/d6e709274fdc29e94116a536bae3e865f8cbf774)

- 더미데이터 설정하기 ( src/dummy.json )
- 데이터 타입 정의하기 ( src/types.ts ) 
- 인덱스 페이지 UI 구현
- 서치 페이지 UI 구현
- 상세 페이지 UI 구현

### 데이터 페칭과 캐시 적용까지 [🚀](https://github.com/bitnalchan92/onebite-cinema-app/commit/7662410a261ad2fa59c8c20bf5aa0fb40f82a666)

- fetch 함수 추가
- 데이터 캐싱처리하기

### 풀라우트 캐시 적용하기 [🚀](https://github.com/bitnalchan92/onebite-cinema-app/commit/d126dac2106d1450bf007fdf9e862002455cbf0d)

- search page를 제외하고 모든 페이지를 static page로 설정
- 동적 경로를 갖는 movie page는 아래 내용 충족하도록 
  - 빌드 타임에 존재하는 모든 영화의 상세 페이지를 생성하도록...
  - 빌드 타임에 생성하지 못한 페이지에 대해서는 404를 return하도록...

### search 페이지에 스트리밍 적용하기 [🚀](https://github.com/bitnalchan92/onebite-cinema-app/commit/0092964d4c68c9fc8bcdab260c2290845ddbafc7)

- 검색어 입력 후 검색시 레이아웃을 제외한 페이지 컴포넌트에 Loading이 출력되도록

### 컴포넌트별로 스트리밍 적용하기(with Suspense) & 에러핸들링 적용하기 [🚀](https://github.com/bitnalchan92/onebite-cinema-app/commit/cce9d5bbf0eb4317496b007b29bc3b95b8452ee8)

- 인덱스 페이지의 추천영화 & 모든영화에 스트리밍 적용 ( + 스켈레톤 )
- 서치페이지에 스트리밍 적용
- error.tsx 추가

### server action을 활용한 리뷰 조회 & 추가 기능 구현 [🚀](https://github.com/bitnalchan92/onebite-cinema-app/commit/13969aa10304f494351ac65c791f02018938cee5)

- /movie/[id] 페이지에 리뷰 조회 및 추가 기능 구현하기

### 리뷰 추가 기능 구현 & 리뷰 삭제 기능 구현 [🚀](https://github.com/bitnalchan92/onebite-cinema-app/commit/13969aa10304f494351ac65c791f02018938cee5)

- 리뷰 추가 & 삭제시 로딩 상태를 관리할수 있도록 구현 (로딩UI가 렌더링 되도록)
- 로딩중(진행중)에는 중복 제출(submit)을 방지
- 새로고침 하지 않아도 등록된 리뷰를 볼수 있어야하고 삭제도 마찬가지

### 영화페이지의 인터셉팅 모달 구현 [🚀](https://github.com/bitnalchan92/onebite-cinema-app/commit/d5019fc5a2b3e6f8931019cb6e3ac8c31e83c0aa)

- 영화페이지의 CSR방식으로 접근시 페이지가 모달창으로 열리도록 구현
- 주소 직접 입력 및 새로고침등으로 영화 페이지의 초기접속시 전제 페이지로 열리도록 구현

