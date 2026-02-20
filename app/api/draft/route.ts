import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

// Studio의 Presentation Tool이 미리보기 시작 시 호출
// → Draft mode 쿠키 설정 → 초안 콘텐츠 표시 모드 활성화
export async function GET() {
    draftMode().enable()
    redirect('/')
}
