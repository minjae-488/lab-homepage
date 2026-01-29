# Test-Driven Development (TDD) Rule

## 📋 규칙 개요
이 프로젝트에서 **UI를 제외한 모든 코어 로직**은 Test-Driven Development (TDD) 방식으로 개발해야 합니다.

---

## ✅ TDD 적용 대상

### 필수 적용 영역
- **데이터 처리 로직**
  - 논문 필터링 (연도별, 유형별)
  - 논문 검색 (키워드 기반)
  - 멤버 정렬 및 필터링
  - 데이터 변환 및 포매팅

- **비즈니스 로직**
  - 논문 통계 계산 (연도별 발표 건수, 유형별 분포)
  - 멤버 역할별 그룹핑
  - 연구 프로젝트 상태 관리
  - URL 생성 및 파싱 (필터 쿼리 파라미터)

- **유틸리티 함수**
  - 날짜 포맷팅
  - 문자열 처리
  - 검증 함수 (이메일, URL 등)
  - 정렬 함수

- **API/Data Layer**
  - 데이터 fetching 함수
  - 데이터 캐싱 로직
  - API 응답 처리

---

## ❌ TDD 적용 제외 대상

### UI 컴포넌트
- React 컴포넌트 렌더링
- 스타일링 (Tailwind CSS)
- 애니메이션 효과
- 레이아웃 구성

**이유**: UI는 시각적 확인이 필요하며, 테스트 작성 비용이 높고 ROI가 낮음

---

## 🔄 TDD 프로세스

### 1. Red: 실패하는 테스트 작성
```typescript
// Example: 논문 필터링 함수 테스트
describe('filterPublicationsByYear', () => {
  it('should filter publications by specific year', () => {
    const publications = [
      { id: '1', title: 'Paper A', year: 2024 },
      { id: '2', title: 'Paper B', year: 2023 },
    ];
    
    const result = filterPublicationsByYear(publications, 2024);
    
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe('1');
  });
});
```

### 2. Green: 테스트를 통과하는 최소한의 코드 작성
```typescript
export function filterPublicationsByYear(
  publications: Publication[],
  year: number
): Publication[] {
  return publications.filter(pub => pub.year === year);
}
```

### 3. Refactor: 코드 개선 및 리팩토링
```typescript
export function filterPublicationsByYear(
  publications: Publication[],
  year: number
): Publication[] {
  if (!publications || !Array.isArray(publications)) {
    return [];
  }
  
  return publications.filter(pub => pub.year === year);
}
```

---

## 📁 테스트 파일 구조

```
src/
├── lib/
│   ├── publications.ts           # 논문 관련 로직
│   ├── publications.test.ts      # 논문 테스트
│   ├── members.ts                # 멤버 관련 로직
│   ├── members.test.ts           # 멤버 테스트
│   ├── utils/
│   │   ├── filters.ts            # 필터링 유틸리티
│   │   ├── filters.test.ts       # 필터링 테스트
│   │   ├── formatters.ts         # 포맷팅 유틸리티
│   │   └── formatters.test.ts    # 포맷팅 테스트
├── services/
│   ├── publicationService.ts     # 논문 서비스
│   └── publicationService.test.ts
└── components/                    # UI 컴포넌트 (TDD 제외)
```

---

## 🧪 테스트 작성 가이드라인

### 1. 테스트 네이밍 규칙
```typescript
describe('[함수명 또는 모듈명]', () => {
  it('should [기대되는 동작]', () => {
    // 테스트 코드
  });
  
  it('should [특정 조건]일 때 [기대되는 동작]', () => {
    // 테스트 코드
  });
});
```

### 2. AAA 패턴 사용
```typescript
it('should return empty array when input is null', () => {
  // Arrange: 테스트 준비
  const input = null;
  
  // Act: 함수 실행
  const result = filterPublications(input);
  
  // Assert: 결과 검증
  expect(result).toEqual([]);
});
```

### 3. Edge Cases 테스트
- **빈 배열**: `[]`
- **null/undefined**: 예외 처리 확인
- **경계값**: 최소값, 최대값
- **특수 문자**: 검색어, 문자열 처리

### 4. 테스트 커버리지 목표
- **Core Logic**: **90% 이상**
- **Utils**: **95% 이상**
- **Services**: **85% 이상**

---

## 🛠️ 테스트 도구

### Testing Framework
```json
{
  "vitest": "최신 버전",
  "@testing-library/react": "React 컴포넌트 테스트 (필요시)",
  "@vitest/ui": "테스트 UI"
}
```

### 테스트 실행 명령어
```bash
# 모든 테스트 실행
npm test

# Watch 모드
npm test -- --watch

# 커버리지 확인
npm test -- --coverage

# 특정 파일만 테스트
npm test -- publications.test.ts
```

---

## 📊 테스트 체크리스트

코드를 작성하기 전, 다음 질문에 답하세요:

- [ ] 이 함수는 UI 컴포넌트인가? → **No → TDD 적용**
- [ ] 이 함수는 순수 함수인가? → **Yes → TDD 적용**
- [ ] 이 함수는 비즈니스 로직을 포함하는가? → **Yes → TDD 적용**
- [ ] 이 함수는 외부 API를 호출하는가? → **Yes → Mock 사용하여 TDD 적용**
- [ ] 이 함수는 복잡한 로직을 가지고 있는가? → **Yes → 더욱 세밀한 TDD 적용**

---

## 🚫 금지 사항

### 1. 테스트 없이 코어 로직 작성 금지
```typescript
// ❌ 잘못된 예
export function searchPublications(pubs: Publication[], query: string) {
  return pubs.filter(p => p.title.includes(query));
}
// 테스트 없이 바로 구현
```

```typescript
// ✅ 올바른 예
// 1. 먼저 테스트 작성
describe('searchPublications', () => {
  it('should find publications by title', () => {
    const pubs = [{ title: 'Deep Learning' }, { title: 'NLP' }];
    expect(searchPublications(pubs, 'Deep')).toHaveLength(1);
  });
});

// 2. 그 다음 구현
export function searchPublications(pubs: Publication[], query: string) {
  return pubs.filter(p => p.title.includes(query));
}
```

### 2. 테스트를 나중에 작성하는 것 금지
TDD는 **Test-FIRST** Development입니다. 코드를 먼저 작성하고 테스트를 나중에 추가하는 것은 TDD가 아닙니다.

### 3. 100% 커버리지를 위한 무의미한 테스트 금지
커버리지는 수단이지 목적이 아닙니다. 의미 있는 테스트에 집중하세요.

---

## 💡 TDD의 이점

1. **버그 조기 발견**: 개발 단계에서 버그를 발견하여 수정 비용 절감
2. **리팩토링 자신감**: 테스트가 있으면 코드 변경 시 안전함
3. **문서화 효과**: 테스트 코드가 함수 사용법을 설명
4. **설계 개선**: 테스트 가능한 코드를 작성하면 자연스럽게 좋은 설계가 됨
5. **협업 용이**: 새로운 팀원이 테스트를 보고 코드 이해 가능

---

## 🎯 실전 예제

### 예제 1: 논문 필터링 함수

```typescript
// publications.test.ts
import { describe, it, expect } from 'vitest';
import { filterPublicationsByType, filterPublicationsByYear } from './publications';

describe('Publication Filters', () => {
  const mockPublications: Publication[] = [
    { id: '1', title: 'Paper A', year: 2024, type: 'journal' },
    { id: '2', title: 'Paper B', year: 2024, type: 'conference' },
    { id: '3', title: 'Paper C', year: 2023, type: 'journal' },
  ];

  describe('filterPublicationsByType', () => {
    it('should filter publications by journal type', () => {
      const result = filterPublicationsByType(mockPublications, 'journal');
      expect(result).toHaveLength(2);
      expect(result.every(p => p.type === 'journal')).toBe(true);
    });

    it('should filter publications by conference type', () => {
      const result = filterPublicationsByType(mockPublications, 'conference');
      expect(result).toHaveLength(1);
      expect(result[0].id).toBe('2');
    });

    it('should return empty array for unknown type', () => {
      const result = filterPublicationsByType(mockPublications, 'workshop' as any);
      expect(result).toHaveLength(0);
    });

    it('should return empty array when input is empty', () => {
      const result = filterPublicationsByType([], 'journal');
      expect(result).toHaveLength(0);
    });
  });

  describe('filterPublicationsByYear', () => {
    it('should filter publications by year 2024', () => {
      const result = filterPublicationsByYear(mockPublications, 2024);
      expect(result).toHaveLength(2);
    });

    it('should return empty array for non-existent year', () => {
      const result = filterPublicationsByYear(mockPublications, 2020);
      expect(result).toHaveLength(0);
    });
  });
});
```

```typescript
// publications.ts
export type PublicationType = 'journal' | 'conference' | 'workshop';

export interface Publication {
  id: string;
  title: string;
  year: number;
  type: PublicationType;
}

export function filterPublicationsByType(
  publications: Publication[],
  type: PublicationType
): Publication[] {
  if (!publications || !Array.isArray(publications)) {
    return [];
  }
  
  return publications.filter(pub => pub.type === type);
}

export function filterPublicationsByYear(
  publications: Publication[],
  year: number
): Publication[] {
  if (!publications || !Array.isArray(publications)) {
    return [];
  }
  
  return publications.filter(pub => pub.year === year);
}
```

---

## 📚 참고 자료

- [Vitest Documentation](https://vitest.dev/)
- [Testing Best Practices](https://github.com/goldbergyoni/javascript-testing-best-practices)
- [TDD by Example - Kent Beck](https://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530)

---

**이 규칙은 프로젝트의 코드 품질을 보장하기 위한 필수 규칙입니다.**
**모든 Pull Request는 테스트 통과를 필수 조건으로 합니다.**
