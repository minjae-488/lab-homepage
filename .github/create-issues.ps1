# GitHub Issues 자동 생성 스크립트

# Issue #1
gh issue create --title "Phase 1 - Next.js 프로젝트 초기 설정" --body @"
## 📋 작업 배경
학술 연구실 홈페이지 프로젝트의 기반을 구축하기 위해 Next.js 프로젝트 환경을 설정해야 합니다. TypeScript, Tailwind CSS, 테스트 환경(Vitest)을 포함한 개발 환경을 구축하여 이후 개발 작업의 기초를 마련합니다.

## 📝 작업 내용

### 1.1 Next.js 프로젝트 생성
- [ ] \`npx create-next-app@latest\` 실행
  - TypeScript: Yes
  - Tailwind CSS: Yes  
  - App Router: Yes
  - ESLint: Yes
  - src/ directory: Yes
- [ ] 불필요한 기본 파일 정리
- [ ] Git 확인 및 \`.gitignore\` 검증

### 1.2 테스트 환경 설정 (Vitest)
- [ ] Vitest 및 관련 패키지 설치
- [ ] \`vitest.config.ts\` 파일 생성
- [ ] \`package.json\`에 테스트 스크립트 추가

### 1.3 프로젝트 디렉토리 구조 설정
- [ ] \`src/app/\` 및 페이지 디렉토리 생성
- [ ] \`src/components/\` (layout, common, features)
- [ ] \`src/lib/\` (filters, sorters, search, statistics, utils)
- [ ] \`src/services/\`, \`src/repositories/\`
- [ ] \`src/types/\`, \`src/data/\`, \`src/styles/\`

### 1.4 추가 패키지 설치
- [ ] UI 라이브러리: \`lucide-react\`, \`class-variance-authority\`, \`clsx\`, \`tailwind-merge\`
- [ ] Shadcn UI 초기화 (선택)
- [ ] 날짜 라이브러리: \`date-fns\`

### 1.5 ESLint & Prettier 설정
- [ ] Prettier 설치 및 \`.prettierrc\` 생성
- [ ] \`.eslintrc.json\` 업데이트

## ✅ 인수 조건
- [ ] \`npm run dev\` 실행하여 개발 서버가 정상적으로 구동됨
- [ ] \`npm test\` 실행하여 테스트 환경이 동작함
- [ ] 모든 디렉토리 구조가 계획대로 생성됨
- [ ] 모든 패키지가 정상적으로 설치됨
- [ ] TypeScript 컴파일 에러 없음

## ⏱️ 예상 시간: 2-3시간
"@

Write-Host "✓ Issue #1 created" -ForegroundColor Green

# Issue #2
gh issue create --title "Phase 2 - TypeScript 타입 정의 및 데이터 레이어 구축" --body @"
## 📋 작업 배경
프로젝트 전반에서 사용할 TypeScript 타입을 정의하고, Mock 데이터를 생성하며, Repository Pattern을 적용한 데이터 접근 레이어를 구축합니다. 이는 SOLID 원칙과 TDD를 적용한 첫 번째 실전 작업입니다.

## 📝 작업 내용

### 2.1 TypeScript 타입 정의
- [ ] Publication 타입 (\`src/types/publication.ts\`)
- [ ] Member 타입 (\`src/types/member.ts\`)
- [ ] Research 타입 (\`src/types/research.ts\`)
- [ ] Professor 타입 (\`src/types/professor.ts\`)
- [ ] Contact 타입 (\`src/types/contact.ts\`)
- [ ] Barrel Export (\`src/types/index.ts\`)

### 2.2 Mock 데이터 생성
- [ ] \`src/data/publications.json\` (15-20개 논문)
- [ ] \`src/data/members.json\` (10-12명)
- [ ] \`src/data/research.json\` (5-6개 프로젝트)
- [ ] \`src/data/professor.json\`
- [ ] \`src/data/contact.json\`

### 2.3 Repository Layer 구현 (TDD)
- [ ] Publication Repository (테스트 먼저 작성)
- [ ] Member Repository (테스트 먼저 작성)
- [ ] Research Repository (테스트 먼저 작성)

## ✅ 인수 조건
- [ ] TypeScript 컴파일 에러 없음
- [ ] \`import { Publication } from '@/types'\` 가능
- [ ] 모든 JSON 파일이 유효하고 타입과 일치
- [ ] \`npm test\` 실행 시 모든 Repository 테스트 통과
- [ ] 테스트 커버리지 90% 이상

## ⏱️ 예상 시간: 2-3시간
"@

Write-Host "✓ Issue #2 created" -ForegroundColor Green

# Issue #3
gh issue create --title "Phase 3 - 코어 로직 구현 (필터링, 정렬, 검색)" --body @"
## 📋 작업 배경
Publication과 Member 데이터를 처리하기 위한 핵심 비즈니스 로직을 TDD와 SOLID 원칙(특히 Strategy Pattern)을 적용하여 구현합니다.

## 📝 작업 내용

### 3.1 필터링 로직 (Strategy Pattern)
- [ ] Publication Filters (테스트 먼저 작성)
- [ ] Member Filters (테스트 먼저 작성)

### 3.2 정렬 로직
- [ ] Publication Sorters (테스트 먼저 작성)
- [ ] Member Sorters (테스트 먼저 작성)

### 3.3 검색 로직
- [ ] Publication Search (테스트 먼저 작성)

### 3.4 통계 계산 로직
- [ ] Publication Statistics (테스트 먼저 작성)
- [ ] Member Statistics (테스트 먼저 작성)

### 3.5 유틸리티 함수
- [ ] 날짜 포맷터 + 테스트
- [ ] 문자열 유틸 + 테스트
- [ ] 검증 함수 + 테스트

## ✅ 인수 조건
- [ ] 필터 테스트 커버리지 95% 이상
- [ ] 정렬 테스트 커버리지 95% 이상
- [ ] 검색 테스트 커버리지 90% 이상
- [ ] 통계 테스트 커버리지 90% 이상
- [ ] 모든 함수가 순수 함수이며 부작용 없음
- [ ] SOLID 원칙 준수 (Strategy Pattern 적용)

## ⏱️ 예상 시간: 4-5시간
"@

Write-Host "✓ Issue #3 created" -ForegroundColor Green

# Issue #4
gh issue create --title "Phase 3 - Service Layer 구현" --body @"
## 📋 작업 배경
Repository와 비즈니스 로직(필터, 정렬, 검색, 통계)을 조합하여 상위 레벨의 Service Layer를 구축합니다. Dependency Injection을 적용하여 SOLID 원칙을 준수합니다.

## 📝 작업 내용

### Publication Service
- [ ] \`publicationService.test.ts\` 작성
- [ ] \`PublicationService\` 클래스 구현
- [ ] Dependency Injection 적용

### Member Service
- [ ] \`memberService.test.ts\` 작성
- [ ] \`MemberService\` 클래스 구현

### Research Service
- [ ] \`researchService.test.ts\` 작성
- [ ] \`ResearchService\` 클래스 구현

## ✅ 인수 조건
- [ ] Service Layer 테스트 커버리지 85% 이상
- [ ] \`npm test -- --coverage\` 전체 커버리지 확인
- [ ] Dependency Injection 올바르게 적용
- [ ] 인터페이스 기반 설계

## ⏱️ 예상 시간: 2-3시간
"@

Write-Host "✓ Issue #4 created" -ForegroundColor Green

# Issue #5
gh issue create --title "Phase 4 - 디자인 시스템 구축" --body @"
## 📋 작업 배경
일관된 UI/UX를 위해 Tailwind CSS 기반 디자인 시스템을 구축합니다.

## 📝 작업 내용

### 4.1 Tailwind CSS 설정
- [ ] 색상 팔레트 정의 (Primary, Secondary, Accent, Neutral)
- [ ] 폰트 설정 (Inter, Pretendard)
- [ ] Spacing, Border Radius 디자인 토큰

### 4.2 타이포그래피 시스템
- [ ] Google Fonts 연동 (\`next/font\`)
- [ ] 타이포그래피 클래스 정의

### 4.3 컴포넌트 스타일 가이드
- [ ] 버튼 스타일
- [ ] 카드 스타일
- [ ] 입력 필드 스타일
- [ ] 뱃지/태그 스타일

## ✅ 인수 조건
- [ ] 디자인 토큰 정상 적용
- [ ] 색상 대비 4.5:1 이상 (WCAG AA)
- [ ] 타이포그래피 일관성
- [ ] 반응형 breakpoints 정의

## ⏱️ 예상 시간: 3-4시간
"@

Write-Host "✓ Issue #5 created" -ForegroundColor Green

# Issue #6
gh issue create --title "Phase 5 - 레이아웃 및 공통 컴포넌트 개발" --body @"
## 📋 작업 배경
모든 페이지에서 공통으로 사용될 레이아웃 컴포넌트와 재사용 가능한 공통 컴포넌트를 개발합니다.

## 📝 작업 내용

### 5.1 레이아웃 컴포넌트
- [ ] Header (\`src/components/layout/Header.tsx\`)
- [ ] Navigation (\`src/components/layout/Navigation.tsx\`)
- [ ] Footer (\`src/components/layout/Footer.tsx\`)
- [ ] Root Layout (\`src/app/layout.tsx\`)

### 5.2 공통 컴포넌트
- [ ] Button (\`src/components/common/Button.tsx\`)
- [ ] Card (\`src/components/common/Card.tsx\`)
- [ ] Badge (\`src/components/common/Badge.tsx\`)
- [ ] Input (\`src/components/common/Input.tsx\`)
- [ ] Modal (\`src/components/common/Modal.tsx\`, 선택)

## ✅ 인수 조건
- [ ] 레이아웃이 모든 페이지에서 일관되게 표시
- [ ] 모든 컴포넌트가 재사용 가능
- [ ] 반응형 디자인 적용
- [ ] Accessibility 기본 요구사항 충족

## ⏱️ 예상 시간: 3-4시간
"@

Write-Host "✓ Issue #6 created" -ForegroundColor Green

# Issue #7
gh issue create --title "Phase 5 - Feature 컴포넌트 개발" --body @"
## 📋 작업 배경
Publications, Members, Research 페이지에서 사용할 Feature별 컴포넌트를 개발합니다.

## 📝 작업 내용

### Publication 관련 컴포넌트
- [ ] \`PublicationCard.tsx\`
- [ ] \`PublicationFilter.tsx\`
- [ ] \`PublicationSearch.tsx\`
- [ ] \`PublicationList.tsx\`

### Member 관련 컴포넌트
- [ ] \`MemberCard.tsx\`
- [ ] \`MemberGrid.tsx\`

### Research 관련 컴포넌트
- [ ] \`ResearchProjectCard.tsx\`
- [ ] \`ResearchGrid.tsx\`

### Statistics 관련 컴포넌트 (선택)
- [ ] \`StatsCard.tsx\`
- [ ] \`YearlyChart.tsx\`

## ✅ 인수 조건
- [ ] 각 컴포넌트가 독립적으로 동작
- [ ] 일관된 디자인 시스템 적용
- [ ] Props 타입 명확하게 정의
- [ ] 반응형 디자인 적용

## ⏱️ 예상 시간: 2-3시간
"@

Write-Host "✓ Issue #7 created" -ForegroundColor Green

# Issue #8
gh issue create --title "Phase 6 - Home 및 About 페이지 구현" --body @"
## 📋 작업 배경
사이트의 첫인상을 결정하는 Home 페이지와 교수님 소개 About 페이지를 구현합니다.

## 📝 작업 내용

### Home Page (\`src/app/page.tsx\`)
- [ ] Hero Section
- [ ] Statistics Section
- [ ] Featured Research
- [ ] Latest News (선택)
- [ ] Quick Links
- [ ] SEO 메타데이터 설정

### About Page (\`src/app/about/page.tsx\`)
- [ ] 교수님 프로필 섹션
- [ ] 학력 (Education)
- [ ] 경력 (Career)
- [ ] 수상 경력 (Awards)
- [ ] 연구 관심사
- [ ] SEO 메타데이터 설정

## ✅ 인수 조건
- [ ] Home 페이지가 매력적이고 정보 전달이 명확
- [ ] About 페이지가 전문적이고 읽기 쉬움
- [ ] 모든 섹션이 반응형으로 동작
- [ ] SEO 메타데이터 올바르게 설정

## ⏱️ 예상 시간: 3-4시간
"@

Write-Host "✓ Issue #8 created" -ForegroundColor Green

# Issue #9
gh issue create --title "Phase 6 - Research 및 Members 페이지 구현" --body @"
## 📋 작업 배경
연구 프로젝트와 연구실 멤버를 소개하는 페이지를 구현합니다.

## 📝 작업 내용

### Research Page (\`src/app/research/page.tsx\`)
- [ ] Research Areas
- [ ] Ongoing Projects
- [ ] Completed Projects
- [ ] Research Keywords (선택)
- [ ] SEO 메타데이터 설정

### Members Page (\`src/app/members/page.tsx\`)
- [ ] Service Layer 통합
- [ ] 역할별 섹션 (Professor, PhD, MS, Undergrad)
- [ ] 멤버 카드 그리드 레이아웃
- [ ] 멤버 클릭 시 상세 정보 모달
- [ ] Alumni Section (선택)
- [ ] SEO 메타데이터 설정

## ✅ 인수 조건
- [ ] 연구 내용이 시각적으로 잘 표현됨
- [ ] 멤버 정보가 깔끔하게 표시
- [ ] 반응형 디자인 적용
- [ ] Service Layer와 통합 확인

## ⏱️ 예상 시간: 3-4시간
"@

Write-Host "✓ Issue #9 created" -ForegroundColor Green

# Issue #10
gh issue create --title "Phase 6 - Publications 페이지 구현 (고급 기능)" --body @"
## 📋 작업 배경
프로젝트의 핵심 페이지인 Publications를 구현합니다. 필터링, 검색, 정렬 등 복잡한 클라이언트 인터랙션과 URL 상태 관리를 포함합니다.

## 📝 작업 내용

### 페이지 구조 및 데이터 로딩
- [ ] \`src/app/publications/page.tsx\` 생성
- [ ] PublicationService 통합
- [ ] useState로 상태 관리
- [ ] useEffect로 초기 데이터 로드

### 필터 상태 관리
- [ ] 연도 필터 state
- [ ] 유형 필터 state
- [ ] 검색어 state
- [ ] 정렬 옵션 state

### UI 구현
- [ ] 연도 선택 Dropdown
- [ ] 유형 선택 버튼 그룹
- [ ] 검색 Input (디바운싱 300ms)
- [ ] 정렬 Select
- [ ] Publication List 렌더링
- [ ] Statistics Section

### 로직 통합
- [ ] useMemo로 필터링된 결과 계산
- [ ] 필터 체인 적용

### URL 상태 관리
- [ ] useSearchParams 사용
- [ ] URL에서 필터 상태 읽기
- [ ] 필터 변경 시 URL 업데이트

## ✅ 인수 조건
- [ ] 필터 변경 시 즉시 반영
- [ ] 검색어 디바운싱 동작
- [ ] URL 공유 시 필터 상태 유지
- [ ] 모든 화면 크기에서 정상 동작
- [ ] SEO 메타데이터 설정

## ⏱️ 예상 시간: 4-5시간
"@

Write-Host "✓ Issue #10 created" -ForegroundColor Green

# Issue #11
gh issue create --title "Phase 6 - Contact 페이지 및 SEO 최적화" --body @"
## 📋 작업 배경
연락처 정보를 제공하는 Contact 페이지를 구현하고, 전체 사이트의 SEO를 최적화합니다.

## 📝 작업 내용

### Contact Page (\`src/app/contact/page.tsx\`)
- [ ] 연구실 주소
- [ ] 지도 임베드 (Google Maps 또는 Naver Maps)
- [ ] 이메일, 전화번호
- [ ] 오시는 길 안내
- [ ] SEO 메타데이터 설정

### SEO 최적화
- [ ] 각 페이지별 메타데이터 (title, description, keywords)
- [ ] openGraph 설정
- [ ] \`robots.txt\` 생성
- [ ] \`sitemap.xml\` 생성
- [ ] Structured Data (JSON-LD) 추가

## ✅ 인수 조건
- [ ] 위치 정보 명확하고 지도 정확함
- [ ] 모든 페이지에 적절한 메타데이터
- [ ] robots.txt와 sitemap.xml 접근 가능
- [ ] Google Search Console에서 구조화된 데이터 확인 가능

## ⏱️ 예상 시간: 2-3시간
"@

Write-Host "✓ Issue #11 created" -ForegroundColor Green

# Issue #12
gh issue create --title "Phase 7 - 성능 최적화" --body @"
## 📋 작업 배경
프로덕션 배포 전 사이트의 성능을 최적화하여 Lighthouse 점수 목표를 달성합니다.

## 📝 작업 내용

### 이미지 최적화
- [ ] 모든 \`<img>\` 태그를 \`next/image\`로 교체
- [ ] \`width\`, \`height\` 속성 명시
- [ ] \`alt\` 속성 의미있게 작성
- [ ] Above-the-fold 이미지에 \`priority\` 설정
- [ ] 이미지 압축 (WebP 포맷)
- [ ] \`sizes\` 속성 최적화

### 번들 최적화
- [ ] Code Splitting 확인
- [ ] Dynamic Import 적용
- [ ] Bundle Analyzer로 번들 크기 분석

### 폰트 최적화
- [ ] \`next/font\` 사용 확인
- [ ] \`font-display: swap\` 적용

## ✅ 인수 조건
- [ ] Lighthouse Performance Score 90점 이상
- [ ] 모든 이미지가 WebP로 제공
- [ ] CLS 점수 < 0.1
- [ ] 이미지 관련 경고 없음

## ⏱️ 예상 시간: 2-3시간
"@

Write-Host "✓ Issue #12 created" -ForegroundColor Green

# Issue #13
gh issue create --title "Phase 7 - 접근성 및 크로스 브라우저 테스트" --body @"
## 📋 작업 배경
웹 접근성(a11y) 표준을 준수하고 다양한 브라우저에서 정상 동작을 확인합니다.

## 📝 작업 내용

### 접근성 (Accessibility)
- [ ] 모든 버튼에 명확한 label
- [ ] Navigation에 \`role=\"navigation\"\`
- [ ] 모달에 \`role=\"dialog\"\`, \`aria-modal=\"true\"\`
- [ ] 폼 요소에 \`aria-label\`
- [ ] Tab 키로 모든 인터랙티브 요소 접근 가능
- [ ] Focus 스타일 명확하게 표시
- [ ] 색상 대비 WCAG AA 기준 충족

### 크로스 브라우저 테스트
- [ ] Chrome (최신)
- [ ] Firefox (최신)
- [ ] Safari (최신)
- [ ] Edge (최신)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

## ✅ 인수 조건
- [ ] Lighthouse Accessibility Score 95점 이상
- [ ] 모든 브라우저에서 정상 동작
- [ ] 키보드만으로 모든 기능 사용 가능
- [ ] 스크린 리더 호환

## ⏱️ 예상 시간: 2-3시간
"@

Write-Host "✓ Issue #13 created" -ForegroundColor Green

# Issue #14
gh issue create --title "Phase 7 - 프로덕션 빌드 및 Vercel 배포" --body @"
## 📋 작업 배경
프로젝트를 프로덕션 환경에 배포하고 최종 검증을 수행합니다.

## 📝 작업 내용

### 프로덕션 빌드 테스트
- [ ] \`npm run build\` 실행
- [ ] 빌드 에러 확인 및 수정
- [ ] \`npm start\`로 프로덕션 모드 실행
- [ ] Lighthouse 점수 확인 (Performance 90+, Accessibility 95+, SEO 95+)

### Vercel 배포
- [ ] Vercel 계정 생성/로그인
- [ ] GitHub 저장소 연결
- [ ] 프로젝트 import
- [ ] \`main\` 브랜치에 push하여 자동 배포
- [ ] 커스텀 도메인 설정 (선택)

### 배포 후 확인
- [ ] 모든 페이지 정상 동작 확인
- [ ] 링크 작동 확인
- [ ] SEO 메타데이터 확인
- [ ] Open Graph 이미지 확인

### 문서화
- [ ] \`README.md\` 업데이트
- [ ] 코드 주석 보완

## ✅ 인수 조건
- [ ] 프로덕션 빌드가 에러 없이 완료
- [ ] 사이트가 정상적으로 배포됨
- [ ] 모든 기능이 프로덕션에서 동작
- [ ] Lighthouse 점수 목표 달성
- [ ] README만 보고 프로젝트 실행 가능

## ⏱️ 예상 시간: 2-3시간
"@

Write-Host "✓ Issue #14 created" -ForegroundColor Green

Write-Host "`n================================================" -ForegroundColor Cyan
Write-Host "✅ 모든 GitHub Issues 생성 완료!" -ForegroundColor Green
Write-Host "================================================" -ForegroundColor Cyan
