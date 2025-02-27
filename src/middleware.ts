import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: [
    '/',
    '/posts/:path*',
    '/profile',
    '/my_posts',
    '/sign_in',
    '/sign_up',
  ],
};

const notAuthRoutes = [
  '/sign_in',
  '/sign_up'
];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("token");
  
  if (notAuthRoutes.includes(pathname) && token) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  if (!token && !notAuthRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/sign_in', req.url));
  }

  return NextResponse.next();
}
