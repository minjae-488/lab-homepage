import { draftMode } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { type NextRequest } from 'next/server'

// 미리보기 종료: Draft mode 비활성화 + ISR 캐시 즉시 갱신
export async function GET(request: NextRequest) {
    draftMode().disable()

    // Publish된 최신 콘텐츠가 즉시 표시되도록 모든 페이지 캐시 무효화
    revalidatePath('/', 'layout')

    // 이전 페이지로 돌아가거나 홈으로 리다이렉트
    const referer = request.headers.get('referer') || '/'
    const redirectTo = referer.includes('/api/') ? '/' : referer

    return new Response(null, {
        status: 307,
        headers: { Location: redirectTo },
    })
}
