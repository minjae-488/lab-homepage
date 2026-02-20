import { draftMode } from 'next/headers'

export async function GET(request: Request) {
    draftMode().enable()
    const url = new URL(request.url)
    const redirect = url.searchParams.get('redirect') || '/'
    return new Response(null, {
        status: 307,
        headers: { Location: redirect },
    })
}
