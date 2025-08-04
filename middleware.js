// middleware.js at project root

import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  console.log("🛡️  middleware hit:", pathname);

  if (pathname.startsWith("/dashboard/list/employees")) {
    console.log("🛡️  protecting this path:", pathname);
    // (we’ll fill in auth logic next)
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/list/employees/:path*"],
};
