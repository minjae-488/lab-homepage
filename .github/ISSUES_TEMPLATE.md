# GitHub Issues - 프로젝트 작업 목록

이 문서는 GitHub Issues로 등록할 작업 목록입니다.

---

## Issue #1: Phase 1 - Next.js 프로젝트 초기 설정

### 📋 작업 배경
학술 연구실 홈페이지 프로젝트의 기반을 구축하기 위해 Next.js 프로젝트 환경을 설정해야 합니다. TypeScript, Tailwind CSS, 테스트 환경(Vitest)을 포함한 개발 환경을 구축하여 이후 개발 작업의 기초를 마련합니다.

### 📝 작업 내용

#### 1.1 Next.js 프로젝트 생성
- [ ] `npx create-next-app@latest` 실행
  - TypeScript: Yes
  - Tailwind CSS: Yes  
  - App Router: Yes
  - ESLint: Yes
  - src/ directory: Yes
- [ ] 불필요한 기본 파일 정리
- [ ] Git 확인 및 `.gitignore` 검증

#### 1.2 테스트 환경 설정 (Vitest)
- [ ] Vitest 및 관련 패키지 설치
  ```bash
  npm install -D vitest @vitest/ui @testing-library/react @testing-library/jest-dom jsdom
  ```
- [ ] `vitest.config.ts` 파일 생성
- [ ] `package.json`에 테스트 스크립트 추가
  - `"test": "vitest"`
  - `"test:ui": "vitest --ui"`
  - `"test:coverage": "vitest --coverage"`
- [ ] 샘플 테스트 파일 작성 및 실행 확인

#### 1.3 프로젝트 디렉토리 구조 설정
- [ ] `src/app/` 및 페이지 디렉토리 생성
- [ ] `src/components/` (layout, common, features)
- [ ] `src/lib/` (filters, sorters, search, statistics, utils)
- [ ] `src/services/`, `src/repositories/`
- [ ] `src/types/`, `src/data/`, `src/styles/`

#### 1.4 추가 패키지 설치
- [ ] UI 라이브러리: `lucide-react`, `class-variance-authority`, `clsx`, `tailwind-merge`
- [ ] Shadcn UI 초기화 (선택)
- [ ] 날짜 라이브러리: `date-fns`

#### 1.5 ESLint & Prettier 설정
- [ ] Prettier 설치 및 `.prettierrc` 생성
- [ ] `.eslintrc.json` 업데이트
- [ ] VSCode settings 설정 (auto-format on save)

### ✅ 인수 조건 (Acceptance Criteria)
- [ ] `npm run dev` 실행하여 개발 서버가 정상적으로 구동됨
- [ ] `npm test` 실행하여 테스트 환경이 동작함
- [ ] 모든 디렉토리 구조가 계획대로 생성됨
- [ ] 모든 패키지가 정상적으로 설치됨
- [ ] 코드 포맷팅이 저장 시 자동으로 적용됨
- [ ] TypeScript 컴파일 에러 없음

### 🏷️ Labels
`Phase 1`, `setup`, `infrastructure`

### ⏱️ 예상 시간
2-3시간

---

## Issue #2: Phase 2 - TypeScript 타입 정의 및 데이터 레이어 구축

### 📋 작업 배경
프로젝트 전반에서 사용할 TypeScript 타입을 정의하고, Mock 데이터를 생성하며, Repository Pattern을 적용한 데이터 접근 레이어를 구축합니다. 이는 SOLID 원칙과 TDD를 적용한 첫 번째 실전 작업입니다.

### 📝 작업 내용

#### 2.1 TypeScript 타입 정의
**Publication 타입** (`src/types/publication.ts`)
- [ ] `PublicationType` enum 정의
- [ ] `Publication` 인터페이스 작성 (기본 + 선택 속성)
- [ ] `PublicationFilter`, `PublicationSortOrder` 타입 정의

**Member 타입** (`src/types/member.ts`)
- [ ] `MemberRole` enum 정의
- [ ] `Member` 인터페이스 작성
- [ ] `MemberFilter` 타입 정의

**Research 타입** (`src/types/research.ts`)
- [ ] `ProjectStatus` enum 정의
- [ ] `ResearchProject` 인터페이스 작성

**Professor 타입** (`src/types/professor.ts`)
- [ ] `Education`, `Career`, `Award` 타입 정의
- [ ] `Professor` 인터페이스 작성

**Contact 타입** (`src/types/contact.ts`)
- [ ] `Address`, `MapCoordinates` 타입 정의
- [ ] `ContactInfo` 인터페이스 작성

**Barrel Export** (`src/types/index.ts`)
- [ ] 모든 타입 re-export

#### 2.2 Mock 데이터 생성
- [ ] `src/data/publications.json` (15-20개 논문: Journal 8-10개, Conference 6-8개, Workshop 2-3개)
- [ ] `src/data/members.json` (10-12명: Professor 1, PhD 3-4, MS 4-5, Undergrad 2-3)
- [ ] `src/data/research.json` (5-6개: Ongoing 3개, Completed 2-3개)
- [ ] `src/data/professor.json` (약력, 학력, 경력, 수상)
- [ ] `src/data/contact.json` (주소, 좌표, 연락처)
- [ ] JSON 유효성 및 타입 일치 검증

#### 2.3 Repository Layer 구현 (TDD)
**Publication Repository**
- [ ] **TDD**: `publicationRepository.test.ts` 작성 (findAll, findById, findByYear, findByType)
- [ ] **구현**: `IPublicationRepository` 인터페이스 정의
- [ ] **구현**: `JsonPublicationRepository` 구현
- [ ] 모든 테스트 통과 확인

**Member Repository**
- [ ] **TDD**: `memberRepository.test.ts` 작성
- [ ] **구현**: `IMemberRepository` 인터페이스 및 구현체
- [ ] 모든 테스트 통과 확인

**Research Repository**
- [ ] **TDD**: `researchRepository.test.ts` 작성
- [ ] **구현**: `IResearchRepository` 인터페이스 및 구현체
- [ ] 모든 테스트 통과 확인

### ✅ 인수 조건
- [ ] TypeScript 컴파일 에러 없음
- [ ] 다른 파일에서 `import { Publication } from '@/types'` 가능
- [ ] 모든 JSON 파일이 유효하고 import 가능
- [ ] 타입스크립트 타입과 JSON 데이터가 일치
- [ ] `npm test` 실행 시 모든 Repository 테스트 통과
- [ ] 테스트 커버리지 90% 이상

### 🏷️ Labels
`Phase 2`, `types`, `data`, `TDD`

### ⏱️ 예상 시간
2-3시간

---

## Issue #3: Phase 3 - 코어 로직 구현 (필터링, 정렬, 검색)

### 📋 작업 배경
Publication과 Member 데이터를 처리하기 위한 핵심 비즈니스 로직을 TDD와 SOLID 원칙(특히 Strategy Pattern)을 적용하여 구현합니다. 이 로직들은 UI 컴포넌트에서 재사용됩니다.

### 📝 작업 내용

#### 3.1 필터링 로직 (Strategy Pattern)
**Publication Filters** (`src/lib/filters/publicationFilters.ts`)
- [ ] **TDD**: 테스트 작성 (YearFilter, TypeFilter, AuthorFilter, KeywordFilter, CompositeFilter)
- [ ] **구현**: `FilterStrategy<T>` 인터페이스 정의
- [ ] **구현**: 각 필터 클래스 구현
- [ ] **구현**: `CompositeFilter` (여러 필터 조합)
- [ ] 테스트 통과 확인

**Member Filters** (`src/lib/filters/memberFilters.ts`)
- [ ] **TDD**: 테스트 작성 (RoleFilter, ResearchInterestFilter)
- [ ] **구현**: 각 필터 클래스 구현
- [ ] 테스트 통과 확인

#### 3.2 정렬 로직
**Publication Sorters** (`src/lib/sorters/publicationSorters.ts`)
- [ ] **TDD**: 테스트 작성 (sortByYear, sortByTitle, sortByFirstAuthor)
- [ ] **구현**: 각 정렬 함수 구현 (순수 함수)
- [ ] 테스트 통과 확인

**Member Sorters** (`src/lib/sorters/memberSorters.ts`)
- [ ] **TDD**: 테스트 작성
- [ ] **구현**: 정렬 함수 구현
- [ ] 테스트 통과 확인

#### 3.3 검색 로직
**Publication Search** (`src/lib/search/publicationSearch.ts`)
- [ ] **TDD**: 테스트 작성 (searchByTitle, searchByAuthor, searchByKeyword, 대소문자 무시, 특수문자 처리)
- [ ] **구현**: 검색 함수 구현
- [ ] 테스트 통과 확인

#### 3.4 통계 계산 로직
**Publication Statistics** (`src/lib/statistics/publicationStats.ts`)
- [ ] **TDD**: 테스트 작성 (calculateYearlyDistribution, calculateTypeDistribution, calculateTotalCount, getRecentPublications)
- [ ] **구현**: 통계 함수 구현
- [ ] 테스트 통과 확인

**Member Statistics** (`src/lib/statistics/memberStats.ts`)
- [ ] **TDD**: 테스트 작성 (groupByRole, countByRole)
- [ ] **구현**: 통계 함수 구현
- [ ] 테스트 통과 확인

#### 3.5 유틸리티 함수
- [ ] **날짜 포맷터**: `dateFormatter.ts` + 테스트
- [ ] **문자열 유틸**: `stringUtils.ts` + 테스트 (truncate, slugify, highlightKeyword)
- [ ] **검증 함수**: `validators.ts` + 테스트 (isValidEmail, isValidUrl, isValidDOI)

### ✅ 인수 조건
- [ ] 필터 테스트 커버리지 95% 이상
- [ ] 정렬 테스트 커버리지 95% 이상
- [ ] 검색 테스트 커버리지 90% 이상
- [ ] 통계 테스트 커버리지 90% 이상
- [ ] 유틸리티 테스트 커버리지 95% 이상
- [ ] 모든 함수가 순수 함수이며 부작용 없음
- [ ] SOLID 원칙 준수 (Strategy Pattern 적용)

### 🏷️ Labels
`Phase 3`, `core-logic`, `TDD`, `SOLID`

### ⏱️ 예상 시간
4-5시간

---

## Issue #4: Phase 3 - Service Layer 구현

### 📋 작업 배경
Repository와 비즈니스 로직(필터, 정렬, 검색, 통계)을 조합하여 상위 레벨의 Service Layer를 구축합니다. Dependency Injection을 적용하여 SOLID 원칙을 준수합니다.

### 📝 작업 내용

#### Publication Service
**TDD** (`src/services/publicationService.test.ts`)
- [ ] `getAll()` 테스트
- [ ] `getFilteredAndSorted(filters)` 테스트
- [ ] `search(query)` 테스트
- [ ] `getStatistics()` 테스트

**구현** (`src/services/publicationService.ts`)
- [ ] `PublicationService` 클래스 작성
- [ ] Dependency Injection 적용 (Repository, Filter, Sorter, Search 주입)
- [ ] 각 메서드 구현
- [ ] 테스트 통과 확인

#### Member Service
- [ ] **TDD**: `memberService.test.ts` 작성
- [ ] **구현**: `MemberService` 클래스 작성
- [ ] Dependency Injection 적용
- [ ] 테스트 통과 확인

#### Research Service
- [ ] **TDD**: `researchService.test.ts` 작성
- [ ] **구현**: `ResearchService` 클래스 작성
- [ ] 테스트 통과 확인

### ✅ 인수 조건
- [ ] Service Layer 테스트 커버리지 85% 이상
- [ ] 전체 코어 로직 테스트 통과
- [ ] `npm test -- --coverage` 실행하여 전체 커버리지 확인
- [ ] Dependency Injection이 올바르게 적용됨
- [ ] 인터페이스 기반 설계로 유연한 구현체 교체 가능

### 🏷️ Labels
`Phase 3`, `service-layer`, `TDD`, `SOLID`

### ⏱️ 예상 시간
2-3시간

---

## Issue #5: Phase 4 - 디자인 시스템 구축

### 📋 작업 배경
일관된 UI/UX를 위해 Tailwind CSS 기반 디자인 시스템을 구축합니다. 색상 팔레트, 타이포그래피, 컴포넌트 스타일 가이드를 정의하여 이후 컴포넌트 개발의 기준을 마련합니다.

### 📝 작업 내용

#### 4.1 Tailwind CSS 설정
**`tailwind.config.ts` 커스터마이징**
- [ ] 색상 팔레트 정의
  - Primary (Blue계열)
  - Secondary (Green계열)
  - Accent (Red계열)
  - Neutral (Gray계열)
  - Academic 테마 색상
- [ ] 폰트 설정 (Inter, Pretendard)
- [ ] Spacing, Border Radius 등 디자인 토큰 정의

**`src/styles/globals.css` 작성**
- [ ] CSS 변수 정의
- [ ] Base styles
- [ ] Custom utilities

#### 4.2 타이포그래피 시스템
- [ ] Google Fonts 연동 (`next/font`)
  - Inter (영문)
  - Pretendard (한글)
- [ ] 타이포그래피 클래스 정의
  - Heading (h1-h6)
  - Body (large, base, small)
  - Caption, Label

#### 4.3 컴포넌트 스타일 가이드
- [ ] 버튼 스타일 정의 (Primary, Secondary, Ghost)
- [ ] 카드 스타일 정의
- [ ] 입력 필드 스타일 정의
- [ ] 뱃지/태그 스타일 정의

### ✅ 인수 조건
- [ ] 디자인 토큰이 정상적으로 적용됨
- [ ] 타이포그래피가 일관되게 적용됨
- [ ] 색상 대비(Contrast Ratio) 4.5:1 이상 (WCAG AA)
- [ ] 반응형 breakpoints 정의됨

### 🏷️ Labels
`Phase 4`, `design-system`, `UI`

### ⏱️ 예상 시간
3-4시간

---

## Issue #6: Phase 5 - 레이아웃 및 공통 컴포넌트 개발

### 📋 작업 배경
모든 페이지에서 공통으로 사용될 레이아웃 컴포넌트(Header, Footer)와 재사용 가능한 공통 컴포넌트(Button, Card, Badge 등)를 개발합니다.

### 📝 작업 내용

#### 5.1 레이아웃 컴포넌트

**Header** (`src/components/layout/Header.tsx`)
- [ ] Logo 추가
- [ ] Desktop Navigation 구현
- [ ] Mobile Menu Button 구현
- [ ] 반응형 디자인 적용

**Navigation** (`src/components/layout/Navigation.tsx`)
- [ ] Desktop Navigation (Horizontal)
- [ ] Mobile Navigation (Drawer/Sidebar)
- [ ] Active link 표시
- [ ] Accessibility (키보드 네비게이션, ARIA)

**Footer** (`src/components/layout/Footer.tsx`)
- [ ] Copyright
- [ ] SNS Links
- [ ] Quick Links

**Root Layout** (`src/app/layout.tsx`)
- [ ] Header, Footer 통합
- [ ] 메타데이터 설정

#### 5.2 공통 컴포넌트

**Button** (`src/components/common/Button.tsx`)
- [ ] Variants: primary, secondary, ghost
- [ ] Sizes: sm, md, lg
- [ ] Loading state

**Card** (`src/components/common/Card.tsx`)
- [ ] 기본 카드 스타일
- [ ] Hover 효과
- [ ] 그림자 및 Border

**Badge** (`src/components/common/Badge.tsx`)
- [ ] 색상 variants

**Input** (`src/components/common/Input.tsx`)
- [ ] Text input
- [ ] Search input (with icon)

**Modal** (`src/components/common/Modal.tsx`, 선택)
- [ ] 멤버 상세 정보용 모달

### ✅ 인수 조건
- [ ] 레이아웃이 모든 페이지에서 일관되게 표시됨
- [ ] 모든 컴포넌트가 재사용 가능하고 일관된 스타일 적용
- [ ] 반응형 디자인이 모든 화면 크기에서 동작
- [ ] Accessibility 기본 요구사항 충족 (ARIA, 키보드 네비게이션)

### 🏷️ Labels
`Phase 5`, `components`, `UI`

### ⏱️ 예상 시간
3-4시간

---

## Issue #7: Phase 5 - Feature 컴포넌트 개발

### 📋 작업 배경
Publications, Members, Research 페이지에서 사용할 Feature별 컴포넌트를 개발합니다.

### 📝 작업 내용

#### Publication 관련 컴포넌트
- [ ] `PublicationCard.tsx`: 논문 카드 (제목, 저자, 저널/컨퍼런스, 연도, 타입 뱃지, 링크)
- [ ] `PublicationFilter.tsx`: 필터 UI (연도, 유형 선택)
- [ ] `PublicationSearch.tsx`: 검색 UI
- [ ] `PublicationList.tsx`: 논문 리스트 (연도별 그룹핑, 정렬)

#### Member 관련 컴포넌트
- [ ] `MemberCard.tsx`: 멤버 카드 (프로필 이미지, 이름, 역할, 연구 관심사, 이메일)
- [ ] `MemberGrid.tsx`: 멤버 그리드 (역할별 섹션)

#### Research 관련 컴포넌트
- [ ] `ResearchProjectCard.tsx`: 연구 프로젝트 카드 (제목, 설명, 이미지, 상태 뱃지)
- [ ] `ResearchGrid.tsx`: 연구 프로젝트 그리드

#### Statistics 관련 컴포넌트 (선택)
- [ ] `StatsCard.tsx`: 통계 카드 (아이콘 + 숫자 + 레이블)
- [ ] `YearlyChart.tsx`: 연도별 논문 수 차트 (Chart.js 또는 Recharts)

### ✅ 인수 조건
- [ ] 각 컴포넌트가 독립적으로 동작
- [ ] 일관된 디자인 시스템 적용
- [ ] Props 타입이 명확하게 정의됨
- [ ] 반응형 디자인 적용

### 🏷️ Labels
`Phase 5`, `components`, `features`

### ⏱️ 예상 시간
2-3시간

---

## Issue #8: Phase 6 - Home 및 About 페이지 구현

### 📋 작업 배경
사이트의 첫인상을 결정하는 Home 페이지와 교수님 소개 About 페이지를 구현합니다.

### 📝 작업 내용

#### Home Page (`src/app/page.tsx`)
- [ ] Hero Section (연구실 슬로건, 대표 이미지)
- [ ] Statistics Section (논문 수, 멤버 수, 프로젝트 수)
- [ ] Featured Research (최근 연구 2-3개)
- [ ] Latest News (공지사항 3개, 선택)
- [ ] Quick Links
- [ ] 반응형 디자인 적용
- [ ] SEO 메타데이터 설정

#### About Page (`src/app/about/page.tsx`)
- [ ] 교수님 프로필 섹션 (사진, 인사말)
- [ ] 학력 (Education)
- [ ] 경력 (Career)
- [ ] 수상 경력 (Awards)
- [ ] 연구 관심사
- [ ] 타임라인 스타일 적용
- [ ] SEO 메타데이터 설정

### ✅ 인수 조건
- [ ] Home 페이지가 매력적이고 정보 전달이 명확
- [ ] About 페이지가 전문적이고 읽기 쉬움
- [ ] 모든 섹션이 반응형으로 동작
- [ ] SEO 메타데이터가 올바르게 설정됨

### 🏷️ Labels
`Phase 6`, `pages`, `Home`, `About`

### ⏱️ 예상 시간
3-4시간

---

## Issue #9: Phase 6 - Research 및 Members 페이지 구현

### 📋 작업 배경
연구 프로젝트와 연구실 멤버를 소개하는 페이지를 구현합니다.

### 📝 작업 내용

#### Research Page (`src/app/research/page.tsx`)
- [ ] Research Areas (3-5개 주요 연구 분야)
- [ ] Ongoing Projects
- [ ] Completed Projects
- [ ] Research Keywords (태그 클라우드, 선택)
- [ ] 프로젝트 카드 레이아웃
- [ ] SEO 메타데이터 설정

#### Members Page (`src/app/members/page.tsx`)
- [ ] Service Layer 통합 (`MemberService.getAll()`)
- [ ] 역할별 섹션 (Professor, PhD, MS, Undergrad)
- [ ] 멤버 카드 그리드 레이아웃
- [ ] 멤버 클릭 시 상세 정보 모달
- [ ] Alumni Section (선택)
- [ ] SEO 메타데이터 설정

### ✅ 인수 조건
- [ ] 연구 내용이 시각적으로 잘 표현됨
- [ ] 멤버 정보가 깔끔하게 표시되고 상호작용 가능
- [ ] 반응형 디자인 적용
- [ ] Service Layer와 통합 확인

### 🏷️ Labels
`Phase 6`, `pages`, `Research`, `Members`

### ⏱️ 예상 시간
3-4시간

---

## Issue #10: Phase 6 - Publications 페이지 구현 (고급 기능)

### 📋 작업 배경
프로젝트의 핵심 페이지인 Publications를 구현합니다. 필터링, 검색, 정렬 등 복잡한 클라이언트 인터랙션과 URL 상태 관리를 포함합니다.

### 📝 작업 내용

#### 페이지 구조 및 데이터 로딩
- [ ] `src/app/publications/page.tsx` 생성 (Client Component)
- [ ] PublicationService 통합
- [ ] useState로 상태 관리 (publications, loading, error)
- [ ] useEffect로 초기 데이터 로드

#### 필터 상태 관리
- [ ] 연도 필터 state
- [ ] 유형 필터 state
- [ ] 검색어 state
- [ ] 정렬 옵션 state

#### UI 구현
- [ ] 연도 선택 Dropdown
- [ ] 유형 선택 버튼 그룹 (All/Journal/Conference/Workshop)
- [ ] 검색 Input (디바운싱 300ms)
- [ ] 정렬 Select (최신순/과거순/제목순)
- [ ] Publication List 렌더링
- [ ] Statistics Section

#### 로직 통합
- [ ] useMemo로 필터링된 결과 계산
- [ ] 필터 체인 적용 (연도 → 유형 → 검색어 → 정렬)

#### URL 상태 관리
- [ ] useSearchParams 사용
- [ ] URL에서 필터 상태 읽기
- [ ] 필터 변경 시 URL 업데이트
- [ ] 예: `/publications?year=2024&type=journal&q=deep+learning`

#### SEO 및 반응형
- [ ] metadata export 작성
- [ ] 반응형 디자인 (모바일 필터 UI는 Drawer 또는 Accordion)

### ✅ 인수 조건
- [ ] 필터 변경 시 즉시 반영
- [ ] 검색어 입력 시 디바운싱 동작
- [ ] URL 공유 시 필터 상태 유지
- [ ] 모든 화면 크기에서 정상 동작
- [ ] Service Layer와 통합 확인
- [ ] SEO 메타데이터 설정

### 🏷️ Labels
`Phase 6`, `pages`, `Publications`, `high-priority`

### ⏱️ 예상 시간
4-5시간

---

## Issue #11: Phase 6 - Contact 페이지 및 SEO 최적화

### 📋 작업 배경
연락처 정보를 제공하는 Contact 페이지를 구현하고, 전체 사이트의 SEO를 최적화합니다.

### 📝 작업 내용

#### Contact Page (`src/app/contact/page.tsx`)
- [ ] 연구실 주소
- [ ] 지도 임베드 (Google Maps 또는 Naver Maps iframe)
- [ ] 이메일, 전화번호
- [ ] 오시는 길 안내
- [ ] Contact Form (선택, Phase 2에서 구현 가능)
- [ ] SEO 메타데이터 설정

#### SEO 최적화
**각 페이지별 메타데이터**
- [ ] title, description, keywords 설정
- [ ] openGraph 설정 (소셜 미디어 공유)

**사이트 전체 SEO**
- [ ] `robots.txt` 생성
- [ ] `sitemap.xml` 생성 (Next.js sitemap.ts)
- [ ] Structured Data (JSON-LD) 추가
  - Organization schema
  - Person schema (교수님)
  - ScholarlyArticle schema (논문)

### ✅ 인수 조건
- [ ] 위치 정보가 명확하고 지도가 정확함
- [ ] 모든 페이지에 적절한 메타데이터 설정
- [ ] Google Search Console에서 구조화된 데이터 확인 가능
- [ ] robots.txt와 sitemap.xml 접근 가능

### 🏷️ Labels
`Phase 6`, `pages`, `Contact`, `SEO`

### ⏱️ 예상 시간
2-3시간

---

## Issue #12: Phase 7 - 성능 최적화

### 📋 작업 배경
프로덕션 배포 전 사이트의 성능을 최적화하여 Lighthouse 점수 목표를 달성합니다.

### 📝 작업 내용

#### 이미지 최적화
- [ ] 모든 `<img>` 태그를 `next/image`로 교체
- [ ] `width`, `height` 속성 명시
- [ ] `alt` 속성 의미있게 작성
- [ ] Above-the-fold 이미지에 `priority` 설정
- [ ] 이미지 압축 (WebP 포맷)
- [ ] Lazy Loading 확인
- [ ] `sizes` 속성 최적화

#### 번들 최적화
- [ ] Code Splitting 확인
- [ ] Dynamic Import 적용 (무거운 컴포넌트)
- [ ] Tree Shaking 확인
- [ ] Bundle Analyzer로 번들 크기 분석

#### 폰트 최적화
- [ ] `next/font` 사용 확인
- [ ] `font-display: swap` 적용
- [ ] 필요한 글리프만 로드

### ✅ 인수 조건
- [ ] Lighthouse Performance Score 90점 이상
- [ ] 모든 이미지가 WebP로 제공
- [ ] CLS 점수 < 0.1
- [ ] 이미지 관련 경고 없음

### 🏷️ Labels
`Phase 7`, `optimization`, `performance`

### ⏱️ 예상 시간
2-3시간

---

## Issue #13: Phase 7 - 접근성 및 크로스 브라우저 테스트

### 📋 작업 배경
웹 접근성(a11y) 표준을 준수하고 다양한 브라우저에서 정상 동작을 확인합니다.

### 📝 작업 내용

#### 접근성 (Accessibility)
**ARIA 속성 추가**
- [ ] 모든 버튼에 명확한 label
- [ ] Navigation에 `role="navigation"`
- [ ] 모달에 `role="dialog"`, `aria-modal="true"`
- [ ] 폼 요소에 `aria-label` 또는 `<label>` 태그

**키보드 네비게이션**
- [ ] Tab 키로 모든 인터랙티브 요소 접근 가능
- [ ] Focus 스타일 명확하게 표시
- [ ] Esc 키로 모달 닫기

**색상 대비**
- [ ] WCAG AA 기준 충족 (4.5:1)
- [ ] Contrast Checker로 확인

#### 크로스 브라우저 테스트
- [ ] Chrome (최신)
- [ ] Firefox (최신)
- [ ] Safari (최신)
- [ ] Edge (최신)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### ✅ 인수 조건
- [ ] Lighthouse Accessibility Score 95점 이상
- [ ] 모든 브라우저에서 정상 동작
- [ ] 키보드만으로 모든 기능 사용 가능
- [ ] 스크린 리더 호환

### 🏷️ Labels
`Phase 7`, `accessibility`, `testing`

### ⏱️ 예상 시간
2-3시간

---

## Issue #14: Phase 7 - 프로덕션 빌드 및 Vercel 배포

### 📋 작업 배경
프로젝트를 프로덕션 환경에 배포하고 최종 검증을 수행합니다.

### 📝 작업 내용

#### 프로덕션 빌드 테스트
- [ ] `npm run build` 실행
- [ ] 빌드 에러 확인 및 수정
- [ ] `npm start`로 프로덕션 모드 실행
- [ ] 모든 페이지 동작 확인
- [ ] Lighthouse 점수 확인
  - Performance: 90+
  - Accessibility: 95+
  - Best Practices: 90+
  - SEO: 95+

#### Vercel 배포
**Vercel 설정**
- [ ] Vercel 계정 생성/로그인
- [ ] GitHub 저장소 연결
- [ ] 프로젝트 import
- [ ] 환경 변수 설정 (필요 시)

**배포 실행**
- [ ] `main` 브랜치에 push
- [ ] Vercel 자동 배포 확인
- [ ] 배포 URL 확인
- [ ] 커스텀 도메인 설정 (선택)

**배포 후 확인**
- [ ] 모든 페이지 정상 동작 확인
- [ ] 링크 작동 확인
- [ ] SEO 메타데이터 확인 (View Page Source)
- [ ] Open Graph 이미지 확인 (소셜 미디어 공유 테스트)

#### 문서화
- [ ] `README.md` 업데이트 (설치, 개발, 배포 방법)
- [ ] `CONTRIBUTING.md` 작성 (선택)
- [ ] 코드 주석 보완

### ✅ 인수 조건
- [ ] 프로덕션 빌드가 에러 없이 완료
- [ ] 사이트가 정상적으로 배포됨
- [ ] 모든 기능이 프로덕션에서 동작
- [ ] Lighthouse 점수 목표 달성
- [ ] 새로운 개발자가 README만 보고 프로젝트 실행 가능

### 🏷️ Labels
`Phase 7`, `deployment`, `production`, `high-priority`

### ⏱️ 예상 시간
2-3시간

---

## 📊 이슈 등록 우선순위

1. **Issue #1**: Phase 1 - 프로젝트 초기 설정 (최우선)
2. **Issue #2**: Phase 2 - 타입 및 데이터 레이어
3. **Issue #3**: Phase 3 - 코어 로직 (필터, 정렬, 검색)
4. **Issue #4**: Phase 3 - Service Layer
5. **Issue #5**: Phase 4 - 디자인 시스템
6. **Issue #6**: Phase 5 - 레이아웃 및 공통 컴포넌트
7. **Issue #7**: Phase 5 - Feature 컴포넌트
8. **Issue #8**: Phase 6 - Home 및 About 페이지
9. **Issue #9**: Phase 6 - Research 및 Members 페이지
10. **Issue #10**: Phase 6 - Publications 페이지 (고급 기능)
11. **Issue #11**: Phase 6 - Contact 및 SEO
12. **Issue #12**: Phase 7 - 성능 최적화
13. **Issue #13**: Phase 7 - 접근성 및 테스트
14. **Issue #14**: Phase 7 - 프로덕션 배포

---

## 🤖 GitHub Issues 자동 생성 스크립트

이슈를 자동으로 생성하려면 다음 스크립트를 사용하세요:

```bash
# GitHub CLI로 이슈 생성 (예시)
gh issue create --title "Phase 1 - Next.js 프로젝트 초기 설정" \
  --body-file .github/issues/issue-01.md \
  --label "Phase 1,setup,infrastructure"
```

또는 GitHub 웹 UI에서 수동으로 이슈를 생성할 수 있습니다.
