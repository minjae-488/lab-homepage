# Sanity CMS 설정 가이드

현재 프로젝트에 **Sanity CMS**가 통합되었습니다. 다음 단계를 따라 설정을 완료해주세요.

## 1. Sanity 프로젝트 생성
1. [Sanity 관리자 페이지](https://www.sanity.io/manage)에 접속하여 로그인합니다.
2. **"Create new project"** 버튼을 클릭하여 새 프로젝트를 만듭니다.
3. 프로젝트 이름(예: `lab-homepage`)을 입력하고 생성합니다.

## 2. Project ID 확인 및 환경 변수 설정
1. 생성된 프로젝트의 대시보드에서 **Project ID**를 복사합니다.
2. 프로젝트 루트 폴더에 `.env.local` 파일을 생성합니다.
3. 아래 내용을 복사하여 붙여넣고 `your_project_id_here` 부분을 실제 Project ID로 변경합니다.

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-02-10
```

## 3. CORS 설정 (중요!)
1. Sanity 관리자 페이지에서 **API** 탭으로 이동합니다.
2. **CORS Origins** 섹션에서 **Add CORS Origin** 버튼을 클릭합니다.
3. 다음 주소들을 추가하고 **Allow credentials**를 체크합니다:
   - `http://localhost:3000` (로컬 개발용)
   - `https://your-github-username.github.io` (나중에 배포할 주소)

## 4. CMS 접속 및 콘텐츠 관리
1. 개발 서버를 실행합니다: `npm run dev`
2. 브라우저에서 `http://localhost:3000/studio`로 접속합니다.
3. Sanity 계정으로 로그인하면 관리자 페이지가 나타납니다.
4. Member(구성원), Publication(논문), News(소식) 메뉴에서 데이터를 추가할 수 있습니다.

## 5. (나중에) 실제 페이지에 데이터 표시하기
현재는 데이터를 입력하는 관리자 페이지(`studio`)만 연동되어 있습니다.
입력한 데이터를 실제 홈페이지(`app/page.tsx` 등)에 보여주려면, `groq` 쿼리를 사용하여 데이터를 불러와야 합니다. 

예시:
```typescript
import { client } from '@/lib/sanity/client';
import { urlFor } from '@/lib/sanity/image';

const members = await client.fetch(`*[_type == "member"] | order(order asc)`);
```
