# Vercel 배포 가이드

## 🚀 Vercel로 쉽게 배포하기

GitHub Pages보다 더 빠르고 강력한 Vercel을 사용하여 배포하는 방법입니다.

### 1단계: GitHub에 코드 푸시 (이미 완료됨)
현재 코드가 GitHub 저장소(`minjae-488/lab-homepage`)에 최신 상태로 올라가 있어야 합니다.

```bash
git add .
git commit -m "chore: update config for Vercel deployment"
git push origin master
```

### 2단계: Vercel 프로젝트 생성

1. [Vercel](https://vercel.com) 사이트에 접속하여 로그인합니다. (GitHub 아이디로 로그인 추천)
2. 대시보드에서 **"Add New..."** -> **"Project"** 클릭
3. **Import Git Repository** 목록에서 `lab-homepage` 저장소를 찾아 **Import** 버튼 클릭

### 3단계: 환경 변수 설정 (중요!)

**Configure Project** 화면에서 **Environment Variables** 섹션을 펼치고 다음 값을 추가합니다:

| Key | Value |
|-----|-------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | `73iofnnm` |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` |
| `NEXT_PUBLIC_SANITY_API_VERSION` | `2024-02-10` |

> **참고**: `projectId`는 코드에 하드코딩된 fallback이 있지만, 환경 변수로 넣어주는 것이 안전합니다.

### 4단계: 배포 시작

설정이 완료되면 **Deploy** 버튼을 클릭합니다.
Vercel이 자동으로 빌드하고 배포를 시작합니다. (약 1분 소요)

### 5단계: Sanity CORS 설정 추가 (필수)

배포가 완료되면 Vercel에서 제공하는 도메인(예: `lab-homepage.vercel.app`)이 생성됩니다.
이 도메인에서 데이터를 불러올 수 있도록 터미널에서 다음 명령어를 실행해주세요:

```bash
# 예시: npx sanity cors add https://your-project-name.vercel.app
npx sanity cors add [Vercel에서 받은 도메인 주소]
```

이제 웹사이트가 Vercel을 통해 전 세계에 빠르게 배포되었습니다! 🎉
