import { draftMode } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

// 미리보기 종료: Draft mode 비활성화 + 모든 페이지 캐시 즉시 갱신
// → Publish된 최신 콘텐츠가 바로 표시됨
export async function GET() {
    draftMode().disable()
    revalidatePath('/', 'layout')
    redirect('/')
}
