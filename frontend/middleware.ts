import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const { pathname } = req.nextUrl;

  // --- 1️⃣ Auto Redirect Logged-In Users ---
  if (
    token &&
    ["/", "/login", "/register", "/forgot", "/verify"].includes(pathname)
  ) {
    const dashboardUrl = new URL("/auto", req.url);
    const res = NextResponse.redirect(dashboardUrl);
    res.headers.set("Cache-Control", "no-store");
    return res;
  }

  // --- 2️⃣ Protect Private Routes ---
  const protectedRoutes = ["/home", "/creator", "/dev"];
  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtected && !token) {
    const loginUrl = new URL("/", req.url);
    const res = NextResponse.redirect(loginUrl);
    res.headers.set("Cache-Control", "no-store");
    return res;
  }

  // --- Default: Allow Request ---
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/((?!_next/static|_next/image|favicon.ico|api).*)"],
  runtime: "experimental-edge",
};
