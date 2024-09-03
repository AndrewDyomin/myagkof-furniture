import { NextResponse } from 'next/server';

export const config = {
  matcher: ['/account', '/create-model', '/orders'],
}

export function middleware(request) {
  const isLoggedIn = request.cookies.get('isLoggedIn');

  if (!isLoggedIn || isLoggedIn.value === 'false') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}