import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const { pathname } = req.nextUrl;

  // Normalize path (remove trailing slash)
  const cleanPath = pathname.replace(/\/$/, "");

  // --- 1️⃣ Auto Redirect Logged-In Users ---
  if (
    token &&
    ["/login", "/register", "/forgot", "/verify"].includes(cleanPath)
  ) {
    return NextResponse.redirect(new URL("/auto", req.url));
  }

  // --- 2️⃣ Protect Private Routes ---
  const protectedRoutes = ["/home", "/creator", "/dev"];
  const isProtected = protectedRoutes.some((route) =>
    cleanPath.startsWith(route)
  );

  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/((?!_next/static|_next/image|favicon.ico|api).*)"],
};
