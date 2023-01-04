// middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: ['/login/:path*', '/social/:path*','/register/:path*','/'],
};

export function middleware(request: NextRequest) {
  const jwt = request.cookies.get("token");



  if(!jwt){
    console.log('hola')
    if((request.nextUrl.pathname.startsWith('/login'))){
      return;
    }else if((request.nextUrl.pathname.startsWith('/register'))){
      return;
    }
     else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    
  }else{
    if((request.nextUrl.pathname.startsWith('/login'))){
      return NextResponse.redirect(new URL("/social", request.url));
    }else if((request.nextUrl.pathname.startsWith('/register'))){
      return NextResponse.redirect(new URL("/social", request.url));
    }
    else if((request.nextUrl.pathname.startsWith('/social'))){
      return;
    }     else {
      return NextResponse.redirect(new URL("/social", request.url));
    }
  }

  // Clone the request headers and set a new header
  // that will be sent to the server `header-for-the-server`
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("header-for-the-server", "hello server");

  // You can also set request headers in NextResponse.rewrite
  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  });

  // Set a new response header that you can inspect in the browser
  // `header-for-the-client`
  response.headers.set("header-for-the-client", "hello client");
  return response;
}
