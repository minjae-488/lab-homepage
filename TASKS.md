# 연구실 홈페이지 - 상세 작업 목록
## Detailed Task List (더 세분화된 버전)

> **참고**: 이 문서는 TASKS.md를 더욱 세분화한 버전입니다.  
> 더 세밀한 진행 상황 추적이 필요한 경우 이 문서를 사용하세요.

---

## Phase 1.3: 프로젝트 디렉토리 구조 설정 (세분화)

### 1.3.1 루트 디렉토리 생성
- [ ] `src/` 디렉토리 생성

### 1.3.2 App Router 디렉토리
- [ ] `src/app/` 생성
- [ ] `src/app/about/` 생성
- [ ] `src/app/research/` 생성
- [ ] `src/app/members/` 생성
- [ ] `src/app/publications/` 생성
- [ ] `src/app/contact/` 생성

### 1.3.3 컴포넌트 디렉토리
- [ ] `src/components/` 생성
- [ ] `src/components/layout/` 생성
- [ ] `src/components/common/` 생성
- [ ] `src/components/features/` 생성

### 1.3.4 코어 로직 디렉토리
- [ ] `src/lib/` 생성
- [ ] `src/lib/filters/` 생성
- [ ] `src/lib/sorters/` 생성
- [ ] `src/lib/search/` 생성 (추가)
- [ ] `src/lib/statistics/` 생성 (추가)
- [ ] `src/lib/utils/` 생성

### 1.3.5 비즈니스 레이어 디렉토리
- [ ] `src/services/` 생성
- [ ] `src/repositories/` 생성

### 1.3.6 데이터 및 타입 디렉토리
- [ ] `src/types/` 생성
- [ ] `src/data/` 생성

### 1.3.7 스타일 디렉토리
- [ ] `src/styles/` 생성

### 1.3.8 디렉토리 초기화
- [ ] 각 디렉토리에 `.gitkeep` 또는 `README.md` 생성

**체크포인트**: 모든 디렉토리가 생성되었는지 확인

---

## Phase 2.1: TypeScript 타입 정의 (세분화)

### 2.1.1 Publication 타입
- [ ] `src/types/publication.ts` 파일 생성
- [ ] `PublicationType` enum 정의
  ```typescript
  enum PublicationType {
    Journal = 'journal',
    Conference = 'conference',
    Workshop = 'workshop'
  }
  ```
- [ ] `Publication` 인터페이스 작성
  - [ ] 기본 속성 (id, title, authors, year, type)
  - [ ] 선택 속성 (journal, conference, doi, link, abstract, keywords)
- [ ] `PublicationFilter` 타입 정의
  ```typescript
  type PublicationFilter = {
    year?: number;
    type?: PublicationType;
    keyword?: string;
  }
  ```
- [ ] `PublicationSortOrder` 타입 정의
- [ ] 타입 export 확인

### 2.1.2 Member 타입
- [ ] `src/types/member.ts` 파일 생성
- [ ] `MemberRole` enum 정의
  ```typescript
  enum MemberRole {
    PI = 'PI',
    Postdoc = 'Postdoc',
    PhD = 'PhD',
    MS = 'MS',
    Undergrad = 'Undergrad'
  }
  ```
- [ ] `Member` 인터페이스 작성
  - [ ] 기본 속성 (id, name, role, email, imageUrl)
  - [ ] 선택 속성 (degree, researchInterest, website, linkedin, bio)
- [ ] `MemberFilter` 타입 정의
- [ ] 타입 export 확인

### 2.1.3 Research 타입
- [ ] `src/types/research.ts` 파일 생성
- [ ] `ProjectStatus` enum 정의
  ```typescript
  enum ProjectStatus {
    Ongoing = 'ongoing',
    Completed = 'completed'
  }
  ```
- [ ] `ResearchProject` 인터페이스 작성
  - [ ] 기본 속성 (id, title, description, status)
  - [ ] 선택 속성 (imageUrl, startDate, endDate, fundingAgency, keywords)
- [ ] 타입 export 확인

### 2.1.4 Professor 타입
- [ ] `src/types/professor.ts` 파일 생성
- [ ] `Education` 타입 정의
- [ ] `Career` 타입 정의
- [ ] `Award` 타입 정의
- [ ] `Professor` 인터페이스 작성
- [ ] 타입 export 확인

### 2.1.5 Contact 타입
- [ ] `src/types/contact.ts` 파일 생성
- [ ] `Address` 타입 정의
- [ ] `MapCoordinates` 타입 정의
- [ ] `ContactInfo` 인터페이스 작성
- [ ] 타입 export 확인

### 2.1.6 타입 통합
- [ ] `src/types/index.ts` 생성
- [ ] 모든 타입 re-export
- [ ] barrel export 패턴 적용

**체크포인트**: 
- [ ] TypeScript 컴파일 에러 없음
- [ ] 다른 파일에서 `import { Publication } from '@/types'` 가능

---

## Phase 2.2: Mock 데이터 생성 (세분화)

### 2.2.1 Publications Mock 데이터
- [ ] `src/data/publications.json` 파일 생성
- [ ] Journal 논문 작성
  - [ ] Journal 논문 1 (2025년, AI 관련)
  - [ ] Journal 논문 2 (2024년)
  - [ ] Journal 논문 3 (2024년)
  - [ ] Journal 논문 4 (2023년)
  - [ ] Journal 논문 5 (2023년)
  - [ ] Journal 논문 6 (2022년)
  - [ ] Journal 논문 7 (2022년)
  - [ ] Journal 논문 8 (2021년)
- [ ] Conference 논문 작성
  - [ ] Conference 논문 1 (2025년, Top-tier)
  - [ ] Conference 논문 2 (2024년)
  - [ ] Conference 논문 3 (2024년)
  - [ ] Conference 논문 4 (2023년)
  - [ ] Conference 논문 5 (2023년)
  - [ ] Conference 논문 6 (2022년)
- [ ] Workshop 논문 작성
  - [ ] Workshop 논문 1 (2024년)
  - [ ] Workshop 논문 2 (2023년)
- [ ] JSON 유효성 검증
- [ ] 타입스크립트 타입과 일치 확인

### 2.2.2 Members Mock 데이터
- [ ] `src/data/members.json` 파일 생성
- [ ] Professor 데이터 작성 (1명)
- [ ] PhD Students 데이터 작성
  - [ ] PhD Student 1 (4년차)
  - [ ] PhD Student 2 (3년차)
  - [ ] PhD Student 3 (2년차)
- [ ] MS Students 데이터 작성
  - [ ] MS Student 1 (2년차)
  - [ ] MS Student 2 (2년차)
  - [ ] MS Student 3 (1년차)
  - [ ] MS Student 4 (1년차)
- [ ] Undergrad Students 데이터 작성
  - [ ] Undergrad 1
  - [ ] Undergrad 2
- [ ] JSON 유효성 검증
- [ ] 프로필 이미지 placeholder URL 설정

### 2.2.3 Research Projects Mock 데이터
- [ ] `src/data/research.json` 파일 생성
- [ ] Ongoing Projects 작성
  - [ ] Project 1 (AI Healthcare)
  - [ ] Project 2 (NLP)
  - [ ] Project 3 (Computer Vision)
- [ ] Completed Projects 작성
  - [ ] Project 4 (완료됨, 2023)
  - [ ] Project 5 (완료됨, 2022)
- [ ] JSON 유효성 검증

### 2.2.4 Professor Mock 데이터
- [ ] `src/data/professor.json` 파일 생성
- [ ] 기본 정보 작성 (name, title, email)
- [ ] 인사말 작성 (greeting)
- [ ] 학력 데이터 작성 (3-4개)
- [ ] 경력 데이터 작성 (4-5개)
- [ ] 수상 경력 작성 (3-5개)
- [ ] 연구 관심사 작성
- [ ] JSON 유효성 검증

### 2.2.5 Contact Mock 데이터
- [ ] `src/data/contact.json` 파일 생성
- [ ] 연구실 주소 작성
- [ ] 지도 좌표 설정 (Google Maps)
- [ ] 이메일, 전화번호 작성
- [ ] JSON 유효성 검증

**체크포인트**: 
- [ ] 모든 JSON 파일이 유효한 형식
- [ ] Node.js에서 `require()` 또는 `import`로 로드 가능
- [ ] 타입스크립트 타입 정의와 일치

---

## Phase 5.1.1: Header 컴포넌트 (세분화)

### 5.1.1.1 Header 파일 생성 및 기본 구조
- [ ] `src/components/layout/Header.tsx` 파일 생성
- [ ] 기본 컴포넌트 구조 작성
- [ ] TypeScript 인터페이스 정의 (HeaderProps)

### 5.1.1.2 Logo 구현
- [ ] Logo 이미지 또는 텍스트 추가
- [ ] Logo 클릭 시 홈으로 이동
- [ ] Logo 호버 효과

### 5.1.1.3 Desktop Navigation
- [ ] Navigation 메뉴 링크 배열 생성
- [ ] 가로 메뉴 레이아웃 구현
- [ ] 각 메뉴 항목 렌더링
- [ ] Active 링크 스타일 적용 (usePathname 사용)
- [ ] Hover 효과 추가

### 5.1.1.4 Mobile Menu Button
- [ ] Hamburger 아이콘 추가 (Lucide React)
- [ ] 모바일 메뉴 열기/닫기 상태 관리
- [ ] 버튼 클릭 이벤트 핸들러
- [ ] md 브레이크포인트에서 버튼 숨김/표시

### 5.1.1.5 반응형 디자인
- [ ] 데스크탑 레이아웃 (≥768px)
- [ ] 모바일 레이아웃 (<768px)
- [ ] 타블렛 레이아웃 (768-1024px)

### 5.1.1.6 스타일링
- [ ] 고정 위치 (sticky header)
- [ ] 배경색 및 투명도
- [ ] 그림자 효과
- [ ] Z-index 설정

**체크포인트**: 
- [ ] 모든 화면 크기에서 Header 정상 표시
- [ ] Navigation 링크 클릭 시 페이지 이동
- [ ] Mobile Menu Button 동작 확인

---

## Phase 6.5: Publications 페이지 (세분화)

### 6.5.1 페이지 파일 생성 및 기본 구조
- [ ] `src/app/publications/page.tsx` 파일 생성
- [ ] Client Component로 설정 (`'use client'`)
- [ ] 기본 레이아웃 구조 작성

### 6.5.2 데이터 로딩
- [ ] PublicationService import
- [ ] useState로 publications 상태 관리
- [ ] useEffect로 초기 데이터 로드
- [ ] Loading 상태 관리
- [ ] Error 상태 처리

### 6.5.3 필터 상태 관리
- [ ] 연도 필터 state (`selectedYear`)
- [ ] 유형 필터 state (`selectedType`)
- [ ] 검색어 state (`searchQuery`)
- [ ] 정렬 옵션 state (`sortOrder`)

### 6.5.4 필터링 UI 구현
- [ ] 연도 선택 Dropdown 컴포넌트
  - [ ] 고유 연도 목록 추출
  - [ ] 선택 이벤트 핸들러
- [ ] 유형 선택 버튼 그룹
  - [ ] All / Journal / Conference / Workshop
  - [ ] 활성 상태 표시

### 6.5.5 검색 UI 구현
- [ ] 검색 Input 컴포넌트
- [ ] 검색어 입력 디바운싱 (300ms)
- [ ] 검색 아이콘 추가
- [ ] 검색어 클리어 버튼

### 6.5.6 정렬 UI 구현
- [ ] 정렬 옵션 Select 또는 Radio
  - [ ] 최신순
  - [ ] 과거순
  - [ ] 제목순

### 6.5.7 필터/검색/정렬 로직 통합
- [ ] useMemo로 필터링된 결과 계산
- [ ] 필터 체인 적용 (연도 → 유형 → 검색어)
- [ ] 정렬 적용

### 6.5.8 Publication List 렌더링
- [ ] 필터링된 논문 목록 표시
- [ ] PublicationCard 컴포넌트 사용
- [ ] 연도별 그룹핑 (옵션)
- [ ] 결과 없음 메시지

### 6.5.9 Statistics Section
- [ ] 총 논문 수 표시
- [ ] 필터링된 논문 수 표시
- [ ] 연도별 분포 차트 (선택)

### 6.5.10 URL 쿼리 파라미터 연동
- [ ] useSearchParams 사용
- [ ] URL에서 필터 상태 읽기
- [ ] 필터 변경 시 URL 업데이트
- [ ] useRouter로 URL 조작

### 6.5.11 SEO 메타데이터
- [ ] metadata export 작성
- [ ] title, description 설정
- [ ] keywords 설정
- [ ] openGraph 설정

### 6.5.12 반응형 디자인
- [ ] 모바일 레이아웃
- [ ] 태블릿 레이아웃
- [ ] 데스크탑 레이아웃
- [ ] 필터 UI 모바일 적응형 (Drawer 또는 Accordion)

**체크포인트**: 
- [ ] 필터 변경 시 즉시 반영
- [ ] 검색어 입력 시 디바운싱 동작
- [ ] URL 공유 시 필터 상태 유지
- [ ] 모든 화면 크기에서 정상 동작

---

## Phase 7.1.1: 이미지 최적화 (세분화)

### 7.1.1.1 이미지 컴포넌트 교체
- [ ] 모든 `<img>` 태그를 `<Image>`로 교체
  - [ ] Header의 Logo 이미지
  - [ ] Home 페이지 Hero 이미지
  - [ ] Member 프로필 이미지
  - [ ] Research 프로젝트 이미지

### 7.1.1.2 이미지 속성 최적화
- [ ] `width`, `height` 속성 명시 (모든 이미지)
- [ ] `alt` 속성 의미있게 작성
- [ ] Above-the-fold 이미지에 `priority` 설정
- [ ] Below-the-fold 이미지 lazy loading 확인

### 7.1.1.3 이미지 포맷 변환
- [ ] PNG/JPG → WebP 변환
- [ ] 이미지 압축 (TinyPNG 또는 ImageOptim)
- [ ] Retina 디스플레이 대응 (2x 이미지)

### 7.1.1.4 responsive images 설정
- [ ] `sizes` 속성 최적화
  ```typescript
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  ```
- [ ] 다양한 breakpoint에서 이미지 크기 확인

### 7.1.1.5 이미지 로딩 성능 확인
- [ ] Chrome DevTools Network 탭에서 확인
- [ ] 이미지 용량 확인 (각 이미지 < 200KB)
- [ ] Cumulative Layout Shift (CLS) 점수 확인

**체크포인트**: 
- [ ] Lighthouse Performance 이미지 관련 경고 없음
- [ ] 모든 이미지가 WebP로 제공
- [ ] CLS 점수 < 0.1

---

## 추가 세분화가 필요한 섹션 (요약)

다음 섹션들도 위와 같이 추가로 세분화할 수 있습니다:

- **Phase 3.1.1**: Publication Filters - 각 필터 클래스 구현을 개별 항목으로
- **Phase 3.6.1**: Publication Service - 각 메서드 구현을 개별 항목으로
- **Phase 4.1**: Tailwind CSS 설정 - 색상/폰트/스페이싱 각각 분리
- **Phase 5.2**: 공통 컴포넌트 - Button, Card 등 각 variant별로 분리
- **Phase 6.1**: Home Page - 각 섹션별 개별 항목으로
- **Phase 7.2**: Accessibility - ARIA 속성을 컴포넌트별로 분리

---

## 📋 세분화 수준 선택 가이드

### ⚡ TASKS.md 사용 (권장)
**언제**: 
- 일반적인 프로젝트 진행
- 큰 그림 파악이 중요할 때
- 팀 협업 시 전체 진행도 공유

**장점**: 
- 읽기 쉽고 관리 용이
- 전체 Phase 별 진행도 한눈에 파악

### 🔍 TASKS_DETAILED.md 사용
**언제**: 
- 매우 세밀한 추적이 필요할 때
- 혼자서 단계별로 진행할 때
- 학습 목적으로 모든 단계를 이해하고 싶을 때

**장점**: 
- 작은 성취감을 자주 느낄 수 있음
- 놓치는 부분 최소화
- 중간에 중단해도 정확한 재개 가능

---

**권장사항**: **TASKS.md를 메인으로 사용**하고, 특정 Phase가 복잡하다고 느껴질 때만 TASKS_DETAILED.md의 해당 섹션을 참고하세요.
