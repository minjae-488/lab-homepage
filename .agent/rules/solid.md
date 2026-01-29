# SOLID Principles Rule

## 📋 규칙 개요
이 프로젝트의 모든 코드는 **SOLID 원칙**을 준수하여 작성되어야 합니다. SOLID 원칙은 유지보수 가능하고 확장 가능한 소프트웨어를 설계하기 위한 5가지 핵심 원칙입니다.

---

## 🏗️ SOLID 원칙 개요

```
S - Single Responsibility Principle (단일 책임 원칙)
O - Open/Closed Principle (개방-폐쇄 원칙)
L - Liskov Substitution Principle (리스코프 치환 원칙)
I - Interface Segregation Principle (인터페이스 분리 원칙)
D - Dependency Inversion Principle (의존성 역전 원칙)
```

---

## 1️⃣ Single Responsibility Principle (SRP)
**단일 책임 원칙: 클래스/함수/모듈은 단 하나의 책임만 가져야 한다**

### ❌ 잘못된 예시
```typescript
// 하나의 서비스가 너무 많은 책임을 가짐
class PublicationManager {
  fetchPublications() { /* API 호출 */ }
  filterByYear(year: number) { /* 필터링 */ }
  sortByTitle() { /* 정렬 */ }
  exportToCSV() { /* CSV 변환 */ }
  sendEmail(pub: Publication) { /* 이메일 전송 */ }
  calculateStatistics() { /* 통계 계산 */ }
}
```

### ✅ 올바른 예시
```typescript
// 각 클래스가 하나의 책임만 가짐
class PublicationRepository {
  async fetchPublications(): Promise<Publication[]> {
    // API 호출 책임만
    const response = await fetch('/api/publications');
    return response.json();
  }
}

class PublicationFilter {
  filterByYear(publications: Publication[], year: number): Publication[] {
    // 필터링 책임만
    return publications.filter(pub => pub.year === year);
  }
  
  filterByType(publications: Publication[], type: PublicationType): Publication[] {
    return publications.filter(pub => pub.type === type);
  }
}

class PublicationSorter {
  sortByTitle(publications: Publication[]): Publication[] {
    // 정렬 책임만
    return [...publications].sort((a, b) => a.title.localeCompare(b.title));
  }
  
  sortByYear(publications: Publication[], order: 'asc' | 'desc' = 'desc'): Publication[] {
    return [...publications].sort((a, b) => 
      order === 'desc' ? b.year - a.year : a.year - b.year
    );
  }
}

class PublicationExporter {
  toCSV(publications: Publication[]): string {
    // CSV 변환 책임만
    const headers = 'ID,Title,Year,Type\n';
    const rows = publications.map(p => 
      `${p.id},${p.title},${p.year},${p.type}`
    ).join('\n');
    return headers + rows;
  }
}

class PublicationStatistics {
  calculateYearlyDistribution(publications: Publication[]): Record<number, number> {
    // 통계 계산 책임만
    return publications.reduce((acc, pub) => {
      acc[pub.year] = (acc[pub.year] || 0) + 1;
      return acc;
    }, {} as Record<number, number>);
  }
}
```

### 📝 SRP 체크리스트
- [ ] 이 클래스/함수를 변경해야 하는 이유가 하나뿐인가?
- [ ] 이름이 역할을 명확하게 표현하는가?
- [ ] 함수가 50줄 이상인가? (리팩토링 고려)
- [ ] 클래스가 5개 이상의 public 메서드를 가지는가? (분리 고려)

---

## 2️⃣ Open/Closed Principle (OCP)
**개방-폐쇄 원칙: 확장에는 열려있고, 수정에는 닫혀있어야 한다**

### ❌ 잘못된 예시
```typescript
// 새로운 필터 타입을 추가할 때마다 코드를 수정해야 함
function filterPublications(
  publications: Publication[],
  filterType: string,
  value: any
): Publication[] {
  if (filterType === 'year') {
    return publications.filter(p => p.year === value);
  } else if (filterType === 'type') {
    return publications.filter(p => p.type === value);
  } else if (filterType === 'author') {
    return publications.filter(p => p.authors.includes(value));
  }
  // 새로운 필터 추가 시 여기를 계속 수정...
  return publications;
}
```

### ✅ 올바른 예시
```typescript
// 전략 패턴을 사용하여 확장에 열려있고 수정에 닫혀있음
interface PublicationFilterStrategy {
  filter(publications: Publication[]): Publication[];
}

class YearFilter implements PublicationFilterStrategy {
  constructor(private year: number) {}
  
  filter(publications: Publication[]): Publication[] {
    return publications.filter(p => p.year === this.year);
  }
}

class TypeFilter implements PublicationFilterStrategy {
  constructor(private type: PublicationType) {}
  
  filter(publications: Publication[]): Publication[] {
    return publications.filter(p => p.type === this.type);
  }
}

class AuthorFilter implements PublicationFilterStrategy {
  constructor(private authorName: string) {}
  
  filter(publications: Publication[]): Publication[] {
    return publications.filter(p => 
      p.authors.some(author => author.includes(this.authorName))
    );
  }
}

// 새로운 필터를 추가해도 기존 코드를 수정하지 않음
class KeywordFilter implements PublicationFilterStrategy {
  constructor(private keyword: string) {}
  
  filter(publications: Publication[]): Publication[] {
    return publications.filter(p => 
      p.title.toLowerCase().includes(this.keyword.toLowerCase())
    );
  }
}

class PublicationFilterService {
  applyFilter(
    publications: Publication[],
    filter: PublicationFilterStrategy
  ): Publication[] {
    return filter.filter(publications);
  }
  
  applyMultipleFilters(
    publications: Publication[],
    filters: PublicationFilterStrategy[]
  ): Publication[] {
    return filters.reduce(
      (filtered, filter) => filter.filter(filtered),
      publications
    );
  }
}
```

### 📝 OCP 체크리스트
- [ ] 새로운 기능을 추가할 때 기존 코드를 수정하지 않는가?
- [ ] 인터페이스나 추상 클래스를 사용하여 확장 지점을 제공하는가?
- [ ] 조건문(if/else, switch)이 과도하게 사용되지 않는가?

---

## 3️⃣ Liskov Substitution Principle (LSP)
**리스코프 치환 원칙: 자식 클래스는 부모 클래스를 대체할 수 있어야 한다**

### ❌ 잘못된 예시
```typescript
class DataFetcher {
  async fetch(): Promise<any[]> {
    const response = await fetch('/api/data');
    return response.json();
  }
}

class CachedDataFetcher extends DataFetcher {
  async fetch(): Promise<any[]> {
    // LSP 위반: 부모 클래스와 다른 동작 (캐시가 없으면 에러)
    const cached = localStorage.getItem('cache');
    if (!cached) {
      throw new Error('Cache not found!'); // 부모 클래스는 에러를 던지지 않음
    }
    return JSON.parse(cached);
  }
}
```

### ✅ 올바른 예시
```typescript
interface DataSource {
  fetch(): Promise<any[]>;
}

class ApiDataSource implements DataSource {
  async fetch(): Promise<any[]> {
    const response = await fetch('/api/data');
    return response.json();
  }
}

class CachedDataSource implements DataSource {
  constructor(private fallback: DataSource) {}
  
  async fetch(): Promise<any[]> {
    // 부모와 동일한 계약: 항상 데이터를 반환 (에러 없음)
    const cached = localStorage.getItem('cache');
    if (cached) {
      return JSON.parse(cached);
    }
    
    // 캐시가 없으면 fallback 사용
    const data = await this.fallback.fetch();
    localStorage.setItem('cache', JSON.stringify(data));
    return data;
  }
}

// 어떤 구현체를 사용하든 동일하게 동작
const apiSource: DataSource = new ApiDataSource();
const cachedSource: DataSource = new CachedDataSource(apiSource);

// 둘 다 같은 방식으로 사용 가능
const data1 = await apiSource.fetch();
const data2 = await cachedSource.fetch();
```

### 📝 LSP 체크리스트
- [ ] 자식 클래스가 부모 클래스의 계약(contract)을 위반하지 않는가?
- [ ] 자식 클래스에서 예외적인 동작이나 제약이 추가되지 않았는가?
- [ ] 부모 타입으로 선언된 변수에 자식 인스턴스를 할당해도 정상 동작하는가?

---

## 4️⃣ Interface Segregation Principle (ISP)
**인터페이스 분리 원칙: 클라이언트는 자신이 사용하지 않는 메서드에 의존하지 않아야 한다**

### ❌ 잘못된 예시
```typescript
// 너무 큰 인터페이스: 모든 구현체가 모든 메서드를 구현해야 함
interface DataManager {
  fetch(): Promise<any[]>;
  save(data: any): Promise<void>;
  delete(id: string): Promise<void>;
  export(): string;
  import(data: string): void;
  validate(): boolean;
  cache(): void;
}

// ReadOnlyDataManager는 save, delete가 필요 없지만 구현해야 함
class ReadOnlyDataManager implements DataManager {
  async fetch(): Promise<any[]> { /* 구현 */ return []; }
  
  // 사용하지 않지만 구현해야 함
  async save(data: any): Promise<void> {
    throw new Error('Not supported');
  }
  
  async delete(id: string): Promise<void> {
    throw new Error('Not supported');
  }
  
  export(): string { /* 구현 */ return ''; }
  import(data: string): void { /* 구현 */ }
  validate(): boolean { /* 구현 */ return true; }
  cache(): void { /* 구현 */ }
}
```

### ✅ 올바른 예시
```typescript
// 인터페이스를 작은 단위로 분리
interface Readable {
  fetch(): Promise<any[]>;
}

interface Writable {
  save(data: any): Promise<void>;
  delete(id: string): Promise<void>;
}

interface Exportable {
  export(): string;
}

interface Importable {
  import(data: string): void;
}

interface Validatable {
  validate(): boolean;
}

interface Cacheable {
  cache(): void;
}

// 필요한 인터페이스만 구현
class ReadOnlyPublicationService implements Readable, Exportable {
  async fetch(): Promise<Publication[]> {
    const response = await fetch('/api/publications');
    return response.json();
  }
  
  export(): string {
    // CSV export 구현
    return '';
  }
}

// 모든 기능이 필요한 경우 여러 인터페이스 조합
class FullPublicationService 
  implements Readable, Writable, Exportable, Importable, Cacheable {
  async fetch(): Promise<Publication[]> { /* 구현 */ return []; }
  async save(data: Publication): Promise<void> { /* 구현 */ }
  async delete(id: string): Promise<void> { /* 구현 */ }
  export(): string { /* 구현 */ return ''; }
  import(data: string): void { /* 구현 */ }
  cache(): void { /* 구현 */ }
}
```

### 📝 ISP 체크리스트
- [ ] 인터페이스가 5개 이상의 메서드를 가지는가? (분리 고려)
- [ ] 구현 클래스가 인터페이스의 일부 메서드만 사용하는가?
- [ ] "Not supported" 예외를 던지는 메서드가 있는가?

---

## 5️⃣ Dependency Inversion Principle (DIP)
**의존성 역전 원칙: 고수준 모듈은 저수준 모듈에 의존하지 않아야 한다. 둘 다 추상화에 의존해야 한다**

### ❌ 잘못된 예시
```typescript
// 고수준 모듈이 저수준 구체 클래스에 직접 의존
class PublicationService {
  private repository: ConcretePublicationRepository; // 구체 클래스에 의존
  
  constructor() {
    this.repository = new ConcretePublicationRepository(); // 직접 생성
  }
  
  async getPublications(): Promise<Publication[]> {
    return this.repository.findAll();
  }
}

class ConcretePublicationRepository {
  async findAll(): Promise<Publication[]> {
    const response = await fetch('/api/publications');
    return response.json();
  }
}
```

### ✅ 올바른 예시
```typescript
// 추상화(인터페이스)에 의존
interface IPublicationRepository {
  findAll(): Promise<Publication[]>;
  findById(id: string): Promise<Publication | null>;
  findByYear(year: number): Promise<Publication[]>;
}

// 고수준 모듈: 인터페이스에 의존
class PublicationService {
  constructor(private repository: IPublicationRepository) {} // 의존성 주입
  
  async getPublications(): Promise<Publication[]> {
    return this.repository.findAll();
  }
  
  async getPublicationsByYear(year: number): Promise<Publication[]> {
    return this.repository.findByYear(year);
  }
}

// 저수준 모듈 1: API 기반 구현
class ApiPublicationRepository implements IPublicationRepository {
  async findAll(): Promise<Publication[]> {
    const response = await fetch('/api/publications');
    return response.json();
  }
  
  async findById(id: string): Promise<Publication | null> {
    const response = await fetch(`/api/publications/${id}`);
    return response.json();
  }
  
  async findByYear(year: number): Promise<Publication[]> {
    const all = await this.findAll();
    return all.filter(p => p.year === year);
  }
}

// 저수준 모듈 2: 로컬 JSON 기반 구현
class LocalPublicationRepository implements IPublicationRepository {
  constructor(private data: Publication[]) {}
  
  async findAll(): Promise<Publication[]> {
    return this.data;
  }
  
  async findById(id: string): Promise<Publication | null> {
    return this.data.find(p => p.id === id) || null;
  }
  
  async findByYear(year: number): Promise<Publication[]> {
    return this.data.filter(p => p.year === year);
  }
}

// 사용 예시: 구현을 쉽게 교체 가능
const apiRepo = new ApiPublicationRepository();
const service1 = new PublicationService(apiRepo);

const localData = [...]; // JSON 데이터
const localRepo = new LocalPublicationRepository(localData);
const service2 = new PublicationService(localRepo);
```

### 📝 DIP 체크리스트
- [ ] 클래스가 구체 클래스를 직접 인스턴스화하는가? (의존성 주입 고려)
- [ ] 생성자에서 `new` 키워드를 사용하는가?
- [ ] 인터페이스나 추상 클래스를 통해 의존성을 받는가?
- [ ] 의존성을 외부에서 주입받는가? (Dependency Injection)

---

## 🎯 프로젝트 적용 예시

### 연구실 홈페이지에서의 SOLID 적용

```typescript
// ============================================
// 1. SRP: 각 책임을 명확히 분리
// ============================================

// Repository Layer: 데이터 접근 책임
interface IPublicationRepository {
  findAll(): Promise<Publication[]>;
  findByYear(year: number): Promise<Publication[]>;
}

interface IMemberRepository {
  findAll(): Promise<Member[]>;
  findByRole(role: MemberRole): Promise<Member[]>;
}

// Service Layer: 비즈니스 로직 책임
class PublicationStatisticsService {
  calculateYearlyDistribution(publications: Publication[]): YearlyStats {
    // 통계 계산 로직
  }
  
  calculateTypeDistribution(publications: Publication[]): TypeStats {
    // 유형별 분포 계산
  }
}

// ============================================
// 2. OCP: 필터 전략 패턴으로 확장성 확보
// ============================================

interface FilterStrategy<T> {
  filter(items: T[]): T[];
}

class CompositeFilter<T> implements FilterStrategy<T> {
  constructor(private filters: FilterStrategy<T>[]) {}
  
  filter(items: T[]): T[] {
    return this.filters.reduce(
      (filtered, filter) => filter.filter(filtered),
      items
    );
  }
}

// ============================================
// 3. LSP: 모든 Repository 구현체는 교체 가능
// ============================================

class ApiPublicationRepository implements IPublicationRepository {
  async findAll(): Promise<Publication[]> { /* API 호출 */ return []; }
  async findByYear(year: number): Promise<Publication[]> { return []; }
}

class MockPublicationRepository implements IPublicationRepository {
  constructor(private mockData: Publication[]) {}
  
  async findAll(): Promise<Publication[]> {
    return this.mockData;
  }
  
  async findByYear(year: number): Promise<Publication[]> {
    return this.mockData.filter(p => p.year === year);
  }
}

// 어떤 구현체를 사용하든 동일하게 동작
function useRepository(repo: IPublicationRepository) {
  const pubs = await repo.findAll();
  const recent = await repo.findByYear(2024);
}

// ============================================
// 4. ISP: 필요한 인터페이스만 구현
// ============================================

interface Searchable {
  search(query: string): Promise<Publication[]>;
}

interface Sortable {
  sort(order: SortOrder): Publication[];
}

interface Paginatable {
  paginate(page: number, pageSize: number): Publication[];
}

class BasicPublicationService implements Searchable {
  constructor(private repo: IPublicationRepository) {}
  
  async search(query: string): Promise<Publication[]> {
    const all = await this.repo.findAll();
    return all.filter(p => p.title.includes(query));
  }
}

class AdvancedPublicationService 
  implements Searchable, Sortable, Paginatable {
  // 세 가지 인터페이스 모두 구현
}

// ============================================
// 5. DIP: 의존성 주입을 통한 느슨한 결합
// ============================================

class PublicationPageController {
  constructor(
    private repository: IPublicationRepository,
    private filterService: FilterService,
    private statsService: PublicationStatisticsService
  ) {}
  
  async getFilteredPublications(filters: FilterCriteria) {
    const all = await this.repository.findAll();
    const filtered = this.filterService.apply(all, filters);
    const stats = this.statsService.calculateYearlyDistribution(filtered);
    
    return { publications: filtered, stats };
  }
}

// Dependency Injection Container (간단한 예시)
class Container {
  static createPublicationController(): PublicationPageController {
    const repository = new ApiPublicationRepository();
    const filterService = new FilterService();
    const statsService = new PublicationStatisticsService();
    
    return new PublicationPageController(
      repository,
      filterService,
      statsService
    );
  }
}
```

---

## 🚫 안티패턴 (피해야 할 패턴)

### 1. God Object (신 객체)
```typescript
// ❌ 모든 것을 다 하는 거대한 클래스
class LabHomepageManager {
  getPublications() {}
  getMembers() {}
  getResearch() {}
  sendEmail() {}
  generateReport() {}
  handleAuth() {}
  // ... 100개의 메서드
}
```

### 2. Tight Coupling (강한 결합)
```typescript
// ❌ 클래스 내부에서 직접 생성
class Service {
  private repo = new ConcreteRepository(); // 교체 불가능
}

// ✅ 의존성 주입
class Service {
  constructor(private repo: IRepository) {} // 교체 가능
}
```

### 3. Magic Numbers/Strings
```typescript
// ❌
if (publication.type === 'journal') {}

// ✅
enum PublicationType {
  Journal = 'journal',
  Conference = 'conference'
}
if (publication.type === PublicationType.Journal) {}
```

---

## 📊 SOLID 준수 체크리스트

코드 리뷰 시 다음 항목을 확인하세요:

### Single Responsibility
- [ ] 각 클래스/함수가 하나의 명확한 책임을 가지는가?
- [ ] 함수 이름이 역할을 정확히 표현하는가?
- [ ] 함수가 50줄 이하인가?

### Open/Closed
- [ ] 새로운 기능 추가 시 기존 코드를 수정하지 않는가?
- [ ] 전략 패턴이나 인터페이스를 활용하는가?

### Liskov Substitution
- [ ] 자식 클래스가 부모 클래스를 완전히 대체 가능한가?
- [ ] 예외적인 동작이 없는가?

### Interface Segregation
- [ ] 인터페이스가 과도하게 크지 않은가?
- [ ] 구현 클래스가 사용하지 않는 메서드를 구현하지 않는가?

### Dependency Inversion
- [ ] 구체 클래스가 아닌 인터페이스에 의존하는가?
- [ ] 의존성 주입을 사용하는가?
- [ ] 생성자에서 `new`를 사용하지 않는가?

---

## 🎓 학습 자료

- [SOLID Principles in TypeScript](https://khalilstemmler.com/articles/solid-principles/solid-typescript/)
- [Clean Code: A Handbook of Agile Software Craftsmanship - Robert C. Martin](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)
- [Design Patterns: Elements of Reusable Object-Oriented Software](https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612)

---

**SOLID 원칙은 코드의 유지보수성, 확장성, 테스트 용이성을 보장합니다.**
**모든 코드 리뷰와 Pull Request는 SOLID 원칙 준수 여부를 확인합니다.**
