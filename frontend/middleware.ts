import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token =
    req.cookies.get("token")?.value || req.headers.get("token")?.split(" ")[1];

  // Redirect to login if token missing
  if (!token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dev/:path*", "/creator/:path*"],
};
