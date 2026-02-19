import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const requestHeaders = new Headers(request.headers);
    // 현재 pathname을 헤더에 추가해서 서버 컴포넌트에서 읽을 수 있게 함
    requestHeaders.set('x-pathname', request.nextUrl.pathname);

    return NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });
}

export const config = {
    matcher: [
        // 모든 경로에 적용 (단, _next 내부 파일 제외)
        '/((?!_next/static|_next/image|favicon.ico).*)',
    ],
};
