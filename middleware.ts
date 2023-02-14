// middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { QueryLogin } from "./utils/Queries/User/LoginQueries";
import { ErrorNotification } from "./utils/SweetLibrary/ErrorNotification";
import use from "react";
import { getDataProfileGraphql } from "./utils/Queries/User/Gets/GetGraphql.DataProfile";
import { CONFIG } from "./utils/Config/host";
import { returnToken } from "./utils/Token/ReturnToken";

export const config = {
  matcher: ["/login/:path*", "/social/:path*", "/register/:path*", "/"],
};

export async function middleware(request: NextRequest) {
  const jwt = request.cookies.get("token");

  if (!jwt) {
    if (request.nextUrl.pathname.startsWith("/login")) {
      return;
    } else if (request.nextUrl.pathname.startsWith("/register")) {
      return;
    } else if (request.nextUrl.pathname.startsWith("/home")) {
      return;
    } else if (request.nextUrl.pathname.startsWith("/")) {
      return NextResponse.redirect(new URL("/home", request.url));
    }
  } else {
    if (request.nextUrl.pathname.startsWith("/login")) {
      return NextResponse.redirect(new URL("/social", request.url));
    } else if (request.nextUrl.pathname.startsWith("/register")) {
      return NextResponse.redirect(new URL("/social", request.url));
    } else if (request.nextUrl.pathname.startsWith("/social")) {
      if (request.nextUrl.pathname.startsWith("/social/profile")) {
        //Validación de usuario valido
        const partsUrl = request.nextUrl.pathname.split("/");
        console.log(partsUrl[partsUrl.length - 1]);
        const response = await getDataProfileGraphql(
          partsUrl[partsUrl.length - 1]
        );

        if (response["data"] == null) {
          //ErrorNotification.errorNotificationLogin("lo lamentamos no hay un usuario con esas credenciales");
          return NextResponse.redirect(new URL("/social", request.url));
        }
        // termina Validación de usuario valido
      }
    } else if (request.nextUrl.pathname.startsWith("/")) {
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
