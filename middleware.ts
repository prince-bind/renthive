import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // ✅ Skip API & Next internals
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const isAuthPage = pathname === "/login" || pathname === "/register";

  /* 1️⃣ AUTH PAGES */
  if (isAuthPage) {
    if (!token) return NextResponse.next();

    if (token.role === "OWNER")
      return NextResponse.redirect(new URL("/owner/dashboard", req.url));

    if (token.role === "STUDENT")
      return NextResponse.redirect(new URL("/search", req.url));

    if (token.role === "ADMIN")
      return NextResponse.redirect(new URL("/admin", req.url));
  }

  /* 2️⃣ OWNER ROUTES */
  if (pathname.startsWith("/owner")) {
    if (!token)
      return NextResponse.redirect(new URL("/login", req.url));

    if (token.role !== "OWNER")
      return NextResponse.redirect(new URL("/unauthorized", req.url));

    if (
      !token.isVerified &&
      pathname !== "/owner/verification-pending"
    ) {
      return NextResponse.redirect(
        new URL("/owner/verification-pending", req.url)
      );
    }
  }

  /* 3️⃣ STUDENT ROUTES */
  if (pathname.startsWith("/student")) {
    if (!token)
      return NextResponse.redirect(new URL("/login", req.url));

    if (token.role !== "STUDENT")
      return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  /* 4️⃣ ADMIN ROUTES */
  if (pathname.startsWith("/admin")) {
    if (!token)
      return NextResponse.redirect(new URL("/login", req.url));

    if (token.role !== "ADMIN")
      return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  return NextResponse.next();
}

/* ----------------------------------------
   3️⃣ MATCHER (IMPORTANT)
-----------------------------------------*/
export const config = {
  matcher: [
    "/login",
    "/register",
    "/owner/:path*",
    "/student/:path*",
    "/admin/:path*",
  ],
};
