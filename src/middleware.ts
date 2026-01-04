import { NextRequest, NextResponse } from "next/server";

export default function middleware (req: NextRequest) {
    const pathname = req.nextUrl.pathname
    if (pathname === '/') {
        return NextResponse.redirect(new URL('/your-info', req.url))
    }
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}