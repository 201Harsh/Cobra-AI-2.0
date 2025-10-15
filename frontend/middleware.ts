import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  const token = authHeader?.replace("Bearer ", "");

  const { pathname } = req.nextUrl;

  if (
    token &&
    ["/login", "/register", "/forgot", "/verify"].includes(pathname)
  ) {
    return NextResponse.redirect(new URL("/auto", req.url));
  }

  const protectedRoutes = ["/home", "/creator", "/dev"];
  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api).*)"],
};
