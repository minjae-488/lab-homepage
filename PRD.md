# 연구실 홈페이지 - Product Requirements Document (PRD)

## 📋 문서 정보
- **문서 버전**: v1.0
- **작성일**: 2026-01-29
- **프로젝트명**: [교수님 성함 또는 연구실명] 연구실 공식 홈페이지

---

## 1. 프로젝트 개요 (Project Overview)

### 1.1 프로젝트 목표
연구실의 전문성을 효과적으로 시각화하고, 연구 성과(논문)를 체계적으로 아카이빙하며, 잠재적인 연구원(학생)들에게 명확한 정보를 제공하는 프로페셔널한 웹사이트를 구축합니다.

### 1.2 핵심 가치 제안
- **학술적 전문성**: 연구실의 학술적 성과와 연구 역량을 명확하게 전달
- **정보 접근성**: 논문, 연구 분야, 멤버 정보를 쉽게 탐색 가능
- **브랜딩**: 연구실의 정체성과 비전을 시각적으로 표현

### 1.3 핵심 키워드
`Academic` · `Professional` · `Minimalist` · `Data-driven`

---

## 2. 타겟 사용자 (Target Audience)

### 2.1 주요 사용자 페르소나

#### 페르소나 1: 대학원 진학 희망자
- **니즈**: 연구 분야 확인, 연구실 분위기 파악, 교수님 연구 방향 이해
- **사용 시나리오**: 연구 주제 탐색 → 논문 목록 확인 → 멤버 소개 확인 → 컨택

#### 페르소나 2: 동료 연구자
- **니즈**: 최신 발표 논문 확인, 협업 기회 탐색, 연구 동향 파악
- **사용 시나리오**: Publications 페이지 방문 → 특정 논문 검색 → 논문 다운로드/링크 이동

#### 페르소나 3: 학계/산업계 관계자
- **니즈**: 연구실 역량 평가, 진행 중인 프로젝트 확인, 협력 가능성 검토
- **사용 시나리오**: Research 페이지 확인 → About 교수님 정보 확인 → Contact

---

## 3. 사이트 구조 (Sitemap)

```
┌─────────────────────────────────────────────────┐
│                    Navigation                    │
├─────────────────────────────────────────────────┤
│ Home │ About │ Research │ Members │ Publications │ Contact │
└─────────────────────────────────────────────────┘
```

### 3.1 페이지별 상세 구성

#### 🏠 Home
**목적**: 첫인상 형성 및 핵심 정보 전달

**필수 구성 요소**:
- Hero Section: 연구실 비전 슬로건 및 대표 이미지
- Latest News: 최신 공지사항 (3-5개)
- Featured Research: 대표 연구 프로젝트 (2-3개)
- Statistics: 연구실 주요 지표 (논문 수, 멤버 수, 프로젝트 수)
- Quick Links: 주요 페이지로의 빠른 이동

#### 👤 About (Professor)
**목적**: 교수님 소개 및 학술적 배경 전달

**필수 구성 요소**:
- 교수님 인사말
- 프로필 사진
- 학력 (Education)
- 경력 (Career)
- 수상 경력 (Awards & Honors)
- 주요 연구 관심사 (Research Interests)

#### 🔬 Research
**목적**: 연구실의 연구 분야 및 진행 중인 프로젝트 소개

**필수 구성 요소**:
- Research Areas: 주요 연구 분야 (카드 형식, 3-5개)
- Ongoing Projects: 현재 진행 중인 프로젝트 리스트
  - 프로젝트명
  - 설명
  - 상태 (Ongoing/Completed)
  - 관련 이미지
- Research Keywords: 연구 키워드 클라우드 또는 태그

#### 👥 Members
**목적**: 연구실 구성원 소개 및 연락 정보 제공

**필수 구성 요소**:
- 역할별 분류:
  - Principal Investigator (교수님)
  - Post-doctoral Researchers
  - Ph.D. Students
  - M.S. Students
  - Undergraduate Interns
- 멤버 카드 (각 구성원):
  - 사진
  - 이름
  - 역할/학위
  - 연구 주제
  - 이메일
  - 개인 웹사이트/LinkedIn (선택)
- Alumni Section (선택)

#### 📚 Publications
**목적**: 연구 성과 아카이빙 및 검색 제공

**필수 구성 요소**:
- Filter & Sort 기능:
  - 연도별 정렬
  - 유형별 필터 (Journal / Conference / Workshop)
  - 키워드 검색
- Publication List:
  - 논문 제목
  - 저자 목록
  - Journal/Conference 명
  - 발표 연도
  - DOI/링크
  - 다운로드 링크 (선택)
- Publication Statistics:
  - 총 논문 수
  - 연도별 발표 건수 차트
  - 주요 저널/컨퍼런스 분포

#### 📧 Contact
**목적**: 연구실 위치 및 연락 정보 제공

**필수 구성 요소**:
- 연구실 주소
- 지도 (Google Maps 또는 Naver Maps 임베드)
- 이메일 주소
- 전화번호
- Contact Form (선택)
- 오시는 길 안내

---

## 4. 기술 스택 (Tech Stack)

### 4.1 Frontend Framework
- **Next.js 14+** (App Router)
- **TypeScript**: 타입 안정성 및 코드 품질 향상

### 4.2 Styling
- **Tailwind CSS**: 유틸리티 기반 스타일링
- **Lucide React**: 아이콘 라이브러리

### 4.3 UI Components
- **Shadcn UI**: 학술적이고 깔끔한 컴포넌트 시스템
- 커스터마이징 가능한 재사용 가능 컴포넌트

### 4.4 Data Management
- **JSON 기반 Mock Data**: 초기 개발 및 프로토타입
- **향후 확장 가능성**:
  - CMS (Contentful, Sanity) 연동
  - Database (PostgreSQL, MongoDB) 연동
  - Admin Dashboard 구축

### 4.5 Deployment
- **Vercel** (권장): Next.js 최적화 배포
- **GitHub Pages** (대안): 정적 사이트 호스팅

---

## 5. 핵심 기능 요구사항 (Functional Requirements)

### 5.1 반응형 디자인 (Responsive Design)
**우선순위**: 🔴 HIGH

**요구사항**:
- 모바일 (< 768px), 태블릿 (768px - 1024px), 데스크탑 (> 1024px) 대응
- 모든 페이지에서 일관된 레이아웃 유지
- 터치 인터랙션 최적화 (모바일)

**검증 기준**:
- Chrome DevTools 반응형 모드 테스트 통과
- 실제 기기 테스트 (iPhone, iPad, Android) 통과

---

### 5.2 Publication 필터링 및 검색
**우선순위**: 🔴 HIGH

**요구사항**:
- **연도별 정렬**: 최신순/과거순
- **유형별 필터**: Journal, Conference, Workshop
- **키워드 검색**: 제목, 저자, 저널명 검색
- **퍼머링크**: 특정 논문으로 직접 링크 가능

**기술 구현**:
- Client-side filtering (빠른 응답)
- URL 쿼리 파라미터로 현재 필터 상태 저장
- 검색 결과 하이라이팅

---

### 5.3 Member 상세 정보 모달
**우선순위**: 🟡 MEDIUM

**요구사항**:
- 멤버 카드 클릭 시 모달 또는 확장 카드 표시
- 모달 내용:
  - 확대된 프로필 사진
  - 상세 연구 주제
  - 개인 웹사이트/LinkedIn 링크
  - 이메일 복사 기능

**UX 고려사항**:
- 부드러운 애니메이션 전환
- 모달 외부 클릭 시 닫기
- ESC 키로 닫기

---

### 5.4 SEO 최적화
**우선순위**: 🔴 HIGH

**요구사항**:
- **메타 태그**: 각 페이지별 고유한 title, description, keywords
- **Open Graph 태그**: 소셜 미디어 공유 시 미리보기 최적화
- **Sitemap.xml**: 검색 엔진 크롤링 지원
- **robots.txt**: 크롤링 정책 설정
- **Structured Data (JSON-LD)**: 학술 논문, 인물 정보 구조화

**목표**:
- 구글 검색 "연구실명" 키워드로 상위 3위 내 노출
- Core Web Vitals 점수 90점 이상

---

### 5.5 다국어 지원 (선택)
**우선순위**: 🟢 LOW (Phase 2)

**요구사항**:
- 한국어/영어 전환
- Next.js i18n 또는 next-intl 활용

---

### 5.6 애니메이션 및 인터랙션
**우선순위**: 🟡 MEDIUM

**요구사항**:
- 페이지 전환 애니메이션
- 스크롤 기반 Fade-in 효과
- Hover 효과 (카드, 버튼)
- Loading 상태 표시

**기술 구현**:
- Framer Motion 또는 Tailwind CSS 애니메이션
- Intersection Observer API

---

## 6. 데이터 스키마 (Data Schema)

### 6.1 Publication Schema

```typescript
interface Publication {
  id: string;                    // 고유 식별자 (예: "pub-001")
  title: string;                 // 논문 제목
  authors: string[];             // 저자 목록 (순서 중요)
  journal?: string;              // 저널명 (Journal 논문인 경우)
  conference?: string;           // 컨퍼런스명 (Conference 논문인 경우)
  year: number;                  // 발표 연도
  type: 'journal' | 'conference' | 'workshop'; // 논문 유형
  doi?: string;                  // DOI
  link?: string;                 // 논문 링크 (PDF, 외부 사이트)
  abstract?: string;             // 초록 (선택)
  keywords?: string[];           // 키워드 (선택)
  citations?: number;            // 인용 수 (선택)
}
```

**예시 데이터**:
```json
{
  "id": "pub-001",
  "title": "Deep Learning Approaches for Sentiment Analysis in Social Media",
  "authors": ["김철수", "이영희", "박민수"],
  "conference": "ACL 2025",
  "year": 2025,
  "type": "conference",
  "doi": "10.18653/v1/2025.acl-long.123",
  "link": "https://example.com/paper.pdf",
  "keywords": ["NLP", "Deep Learning", "Sentiment Analysis"]
}
```

---

### 6.2 Member Schema

```typescript
interface Member {
  id: string;                    // 고유 식별자 (예: "member-001")
  name: string;                  // 이름
  role: 'PI' | 'Postdoc' | 'PhD' | 'MS' | 'Undergrad'; // 역할
  degree?: string;               // 학위 (예: "Ph.D. Candidate")
  researchInterest: string[];    // 연구 관심사
  email: string;                 // 이메일
  imageUrl: string;              // 프로필 이미지 URL
  website?: string;              // 개인 웹사이트 (선택)
  linkedin?: string;             // LinkedIn 프로필 (선택)
  joinDate?: string;             // 연구실 합류일 (선택)
  bio?: string;                  // 간단한 소개 (선택)
}
```

**예시 데이터**:
```json
{
  "id": "member-001",
  "name": "김영수",
  "role": "PhD",
  "degree": "Ph.D. Candidate (3rd year)",
  "researchInterest": ["Natural Language Processing", "Machine Learning", "Information Retrieval"],
  "email": "youngsu.kim@university.ac.kr",
  "imageUrl": "/images/members/youngsu-kim.jpg",
  "website": "https://youngsuk.im",
  "linkedin": "https://linkedin.com/in/youngsu-kim"
}
```

---

### 6.3 Research Project Schema

```typescript
interface ResearchProject {
  id: string;                    // 고유 식별자 (예: "research-001")
  title: string;                 // 프로젝트 제목
  description: string;           // 프로젝트 설명
  imageUrl?: string;             // 대표 이미지 URL
  status: 'ongoing' | 'completed'; // 프로젝트 상태
  startDate?: string;            // 시작일 (YYYY-MM)
  endDate?: string;              // 종료일 (YYYY-MM, ongoing이면 null)
  fundingAgency?: string;        // 연구비 지원 기관 (선택)
  keywords?: string[];           // 키워드 (선택)
  relatedPublications?: string[]; // 관련 논문 ID 배열 (선택)
}
```

**예시 데이터**:
```json
{
  "id": "research-001",
  "title": "AI-driven Healthcare Diagnostic System",
  "description": "This project aims to develop an AI system that can assist doctors in diagnosing diseases using medical imaging data.",
  "imageUrl": "/images/research/healthcare-ai.jpg",
  "status": "ongoing",
  "startDate": "2024-03",
  "fundingAgency": "National Research Foundation of Korea",
  "keywords": ["AI", "Healthcare", "Medical Imaging"],
  "relatedPublications": ["pub-005", "pub-012"]
}
```

---

### 6.4 Professor (About) Schema

```typescript
interface Professor {
  name: string;                  // 이름
  title: string;                 // 직함 (예: "Professor")
  department: string;            // 소속 학과
  university: string;            // 소속 대학
  email: string;                 // 이메일
  phone?: string;                // 전화번호 (선택)
  imageUrl: string;              // 프로필 사진 URL
  greeting: string;              // 인사말 (여러 문단 가능)
  education: Array<{
    degree: string;              // 학위 (예: "Ph.D.")
    major: string;               // 전공
    university: string;          // 대학명
    year: number;                // 졸업 연도
  }>;
  career: Array<{
    position: string;            // 직위
    institution: string;         // 기관명
    startYear: number;           // 시작 연도
    endYear?: number;            // 종료 연도 (현재 직위면 null)
  }>;
  awards: Array<{
    title: string;               // 수상명
    organization: string;        // 수여 기관
    year: number;                // 수상 연도
  }>;
  researchInterests: string[];   // 연구 관심사
}
```

---

### 6.5 Contact Schema

```typescript
interface ContactInfo {
  labName: string;               // 연구실 명
  address: {
    building: string;            // 건물명
    room: string;                // 호실
    street: string;              // 도로명 주소
    city: string;                // 도시
    postalCode: string;          // 우편번호
    country: string;             // 국가
  };
  phone: string;                 // 전화번호
  email: string;                 // 대표 이메일
  mapCoordinates?: {
    lat: number;                 // 위도
    lng: number;                 // 경도
  };
}
```

---

## 7. 비기능 요구사항 (Non-Functional Requirements)

### 7.1 Performance
- **페이지 로딩 시간**: 초기 로딩 < 2초
- **이미지 최적화**: WebP 포맷, Lazy Loading
- **Code Splitting**: 페이지별 번들 분리

### 7.2 Accessibility (A11y)
- **WCAG 2.1 Level AA** 준수
- 키보드 네비게이션 지원
- 스크린 리더 호환
- Contrast Ratio 4.5:1 이상

### 7.3 Security
- HTTPS 적용
- 이메일 주소 bot protection (선택)

### 7.4 Browser Support
- Chrome (최신 2개 버전)
- Firefox (최신 2개 버전)
- Safari (최신 2개 버전)
- Edge (최신 2개 버전)

---

## 8. 디자인 가이드라인

### 8.1 디자인 원칙
1. **학술적 전문성 (Academic Professionalism)**
   - 깔끔하고 정돈된 레이아웃
   - 과도한 장식 지양
   - 신뢰감을 주는 타이포그래피

2. **정보 우선 (Information-First)**
   - 콘텐츠가 중심
   - 명확한 정보 계층 구조
   - 효율적인 네비게이션

3. **미니멀리즘 (Minimalism)**
   - 여백의 적극적 활용
   - 필수 요소만 포함
   - 시각적 잡음 최소화

### 8.2 컬러 팔레트 (예시)
```
Primary: #1E40AF (Blue - 신뢰, 학술)
Secondary: #059669 (Green - 성장, 연구)
Accent: #DC2626 (Red - 강조)
Neutral: #6B7280 (Gray - 텍스트)
Background: #F9FAFB (Light Gray)
```

### 8.3 타이포그래피
- **제목**: Inter, Pretendard (한글)
- **본문**: Inter, Pretendard (한글)
- **코드**: Fira Code, Jetbrains Mono

---

## 9. 개발 로드맵

### Phase 1: MVP (4주)
- [x] 프로젝트 세팅 (Next.js, Tailwind, TypeScript)
- [ ] 기본 레이아웃 및 네비게이션
- [ ] Home, About, Contact 페이지 구현
- [ ] Mock데이터 생성
- [ ] 반응형 디자인 적용

### Phase 2: Core Features (3주)
- [ ] Research 페이지 구현
- [ ] Members 페이지 구현
- [ ] Publications 페이지 구현
- [ ] 필터링 및 검색 기능
- [ ] SEO 최적화

### Phase 3: Polish & Deploy (1주)
- [ ] 애니메이션 추가
- [ ] 성능 최적화
- [ ] Cross-browser 테스트
- [ ] 배포 (Vercel)

### Phase 4: Enhancement (추후)
- [ ] CMS 연동
- [ ] Admin Dashboard
- [ ] 다국어 지원
- [ ] Analytics 연동

---

## 10. 성공 지표 (Success Metrics)

### 10.1 기술적 지표
- Lighthouse Performance Score ≥ 90
- Lighthouse Accessibility Score ≥ 95
- Core Web Vitals 통과

### 10.2 비즈니스 지표
- 월간 방문자 수 (Google Analytics)
- 평균 세션 시간 > 2분
- Bounce Rate < 50%
- Contact Form 제출 수 (구현 시)

---

## 11. 리스크 및 대응 방안

| 리스크 | 영향도 | 대응 방안 |
|--------|--------|-----------|
| 콘텐츠 업데이트 어려움 | High | CMS 도입 검토 (Phase 4) |
| 논문 데이터 관리 복잡도 | Medium | 초기에는 JSON, 추후 DB 마이그레이션 |
| 모바일 UX 복잡도 | Medium | Mobile-first 디자인 적용 |
| SEO 최적화 미흡 | Medium | Next.js SSR/SSG 활용 |

---

## 12. 참고 자료

### 12.1 벤치마킹 사이트
- MIT CSAIL: https://www.csail.mit.edu/
- Stanford AI Lab: https://ai.stanford.edu/
- Berkeley AI Research: https://bair.berkeley.edu/

### 12.2 기술 문서
- Next.js Documentation: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Shadcn UI: https://ui.shadcn.com/

---

## 부록: Mock Data 생성 가이드

### A1. Publications Mock Data (10-15개)
- 최근 5년간 논문 위주
- Journal/Conference 균형 있게 배치
- 실제와 유사한 제목 및 저자명 사용

### A2. Members Mock Data (8-12명)
- 각 역할별 2-3명씩 배치
- 다양한 연구 관심사 표현
- 프로필 이미지는 Placeholder 사용

### A3. Research Projects Mock Data (4-6개)
- Ongoing: 2-3개
- Completed: 2-3개
- 실제 연구 트렌드 반영

---

**문서 승인**:
- 작성자: Antigravity AI Agent
- 검토자: [교수님 성함]
- 승인일: [날짜]

---

*본 문서는 프로젝트 초기 단계에서 작성되었으며, 개발 진행에 따라 지속적으로 업데이트됩니다.*
