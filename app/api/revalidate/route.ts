import { revalidatePath } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'

// Sanity Webhook: 콘텐츠가 Publish될 때 호출됨 → ISR 캐시 즉시 초기화
// POST https://lab-homepage-beryl.vercel.app/api/revalidate?secret=WEBHOOK_SECRET
export async function POST(request: NextRequest) {
    const secret = request.nextUrl.searchParams.get('secret')

    // Webhook 시크릿 검증
    if (secret !== process.env.SANITY_WEBHOOK_SECRET) {
        return NextResponse.json(
            { message: 'Invalid secret' },
            { status: 401 }
        )
    }

    try {
        // 모든 페이지의 ISR 캐시를 즉시 무효화
        revalidatePath('/', 'layout')

        console.log('[Revalidate] All pages revalidated at', new Date().toISOString())

        return NextResponse.json({
            revalidated: true,
            now: Date.now(),
        })
    } catch (err) {
        return NextResponse.json(
            { message: 'Error revalidating', error: String(err) },
            { status: 500 }
        )
    }
}
