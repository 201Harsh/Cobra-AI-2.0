import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const { pathname } = req.nextUrl;

  // --- 1️⃣ Auto Redirect Logged-In Users ---
  if (
    token &&
    ["/login", "/register", "/forgot", "/verify"].includes(pathname)
  ) {
    const dashboardUrl = new URL("/auto", req.url);
    return NextResponse.redirect(dashboardUrl);
  }

  // --- 2️⃣ Protect Private Routes ---
  const protectedRoutes = ["/home", "/creator", "/dev"];
  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtected && !token) {
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  // --- Default: Allow Request ---
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match everything except static assets
    "/((?!_next/static|_next/image|favicon.ico|api).*)",
  ],
};
