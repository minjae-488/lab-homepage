## 📋 작업 배경
학술 연구실 홈페이지 프로젝트의 기반을 구축하기 위해 Next.js 프로젝트 환경을 설정해야 합니다. TypeScript, Tailwind CSS, 테스트 환경(Vitest)을 포함한 개발 환경을 구축하여 이후 개발 작업의 기초를 마련합니다.

## 📝 작업 내용

### 1.1 Next.js 프로젝트 생성
- [ ] `npx create-next-app@latest` 실행
  - TypeScript: Yes
  - Tailwind CSS: Yes  
  - App Router: Yes
  - ESLint: Yes
  - src/ directory: Yes
- [ ] 불필요한 기본 파일 정리
- [ ] Git 확인 및 `.gitignore` 검증

### 1.2 테스트 환경 설정 (Vitest)
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

### 1.3 프로젝트 디렉토리 구조 설정
- [ ] `src/app/` 및 페이지 디렉토리 생성
- [ ] `src/components/` (layout, common, features)
- [ ] `src/lib/` (filters, sorters, search, statistics, utils)
- [ ] `src/services/`, `src/repositories/`
- [ ] `src/types/`, `src/data/`, `src/styles/`

### 1.4 추가 패키지 설치
- [ ] UI 라이브러리: `lucide-react`, `class-variance-authority`, `clsx`, `tailwind-merge`
- [ ] Shadcn UI 초기화 (선택)
- [ ] 날짜 라이브러리: `date-fns`

### 1.5 ESLint & Prettier 설정
- [ ] Prettier 설치 및 `.prettierrc` 생성
- [ ] `.eslintrc.json` 업데이트
- [ ] VSCode settings 설정 (auto-format on save)

## ✅ 인수 조건 (Acceptance Criteria)
- [ ] `npm run dev` 실행하여 개발 서버가 정상적으로 구동됨
- [ ] `npm test` 실행하여 테스트 환경이 동작함
- [ ] 모든 디렉토리 구조가 계획대로 생성됨
- [ ] 모든 패키지가 정상적으로 설치됨
- [ ] 코드 포맷팅이 저장 시 자동으로 적용됨
- [ ] TypeScript 컴파일 에러 없음

## ⏱️ 예상 시간
2-3시간
