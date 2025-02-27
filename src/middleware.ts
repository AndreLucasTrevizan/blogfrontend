import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: [
    '/',
    '/posts/:path*',
    '/profile',
    '/my_posts',
    '/sign_in',
    '/sign_up'
  ],
}

const authRoutes = [
  '/',
  '/posts/:path*',
  '/profile',
  '/my_posts',
];

const notAuthRoutes = [
  '/sign_in',
  '/sign_up'
]
 
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token");

  if (authRoutes.some((route) => pathname.startsWith(route)) && !token) {
    return NextResponse.redirect(new URL('/sign_in', request.url));
  }
  
  if (notAuthRoutes.some((route) => pathname.startsWith(route)) && token) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}
