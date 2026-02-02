# GitHub Pages 배포 가이드

## 🚀 자동 배포 설정 완료!

이제 `main` 브랜치에 코드를 push하면 자동으로 GitHub Pages에 배포됩니다.

## 📋 다음 단계

### 1. GitHub Repository 설정

1. GitHub에서 저장소 페이지로 이동
2. **Settings** → **Pages** 클릭
3. **Source** 섹션에서:
   - Source: **GitHub Actions** 선택

### 2. 코드 Push

```bash
git add .
git commit -m "Add GitHub Pages deployment"
git push origin main
```

### 3. 배포 확인

- **Actions** 탭에서 배포 진행 상황 확인
- 완료되면 다음 URL에서 접속 가능:
  - `https://[your-username].github.io/lab-homepage`

## 🔧 설정 내역

- **next.config.ts**: Static export 설정 추가
- **GitHub Actions**: 자동 배포 워크플로우 생성
- **배포 트리거**: main 브랜치 push 또는 수동 실행

## 📝 참고사항

- 이미지 최적화는 비활성화됨 (static export 제약)
- basePath는 `/lab-homepage`로 설정 (저장소 이름)
- 배포는 약 2-3분 소요

## 🔄 수동 배포

GitHub에서 **Actions** 탭 → **Deploy to GitHub Pages** → **Run workflow**
