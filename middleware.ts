import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
export { default } from "next-auth/middleware"
import { getToken } from "next-auth/jwt"

export async function middleware(request: NextRequest) {
    const token = await getToken({ req: request })
    const url = request.nextUrl

    if (token) {
        if (token.role !== "owner" && url.pathname.startsWith('/list-property')) {
            return NextResponse.redirect(new URL('/', request.url))
        }
    }

    if (!token) {
        if (url.pathname.startsWith('/list-property')) {
            return NextResponse.redirect(new URL('/login', request.url))
        }
        if (url.pathname.startsWith('/profile')) {
            return NextResponse.redirect(new URL('/login', request.url))
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        '/profile',
        '/list-property',
        '/api/:path*',
    ],
}