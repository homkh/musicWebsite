import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  return NextResponse.redirect(new URL('/home', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about/:path*',
}

/*
Here are the basic router for redirect on the next js middleware files;
headers from next.config.js
redirects from next.config.js
Middleware (rewrites, redirects, etc.)
beforeFiles (rewrites) from next.config.js
Filesystem routes (public/, _next/static/, pages/, app/, etc.)
afterFiles (rewrites) from next.config.js
Dynamic Routes (/blog/[slug])
fallback (rewrites) from next.config.js
*/