import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const DEV_ONLY_PATHS = ["/buttons", "/docs"];

function isDevOnlyPath(pathname: string): boolean {
  return DEV_ONLY_PATHS.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`),
  );
}

function isAdminPath(pathname: string): boolean {
  return pathname.startsWith("/admin") || pathname.startsWith("/api/admin");
}

function hasValidAdminAuth(request: NextRequest): boolean {
  const secret = process.env.ADMIN_SECRET?.trim();
  if (!secret) return false;

  const authHeader = request.headers.get("authorization");
  if (!authHeader?.startsWith("Basic ")) return false;

  const encoded = authHeader.slice("Basic ".length);
  try {
    const decoded = atob(encoded);
    const separator = decoded.indexOf(":");
    if (separator === -1) return false;
    const password = decoded.slice(separator + 1);
    return password === secret;
  } catch {
    return false;
  }
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isProd = process.env.NODE_ENV === "production";

  if (isProd && isDevOnlyPath(pathname)) {
    return NextResponse.rewrite(new URL("/not-found", request.url));
  }

  if (isAdminPath(pathname)) {
    if (!process.env.ADMIN_SECRET?.trim()) {
      return new NextResponse("Admin access is not configured.", { status: 503 });
    }

    if (!hasValidAdminAuth(request)) {
      return new NextResponse("Authentication required.", {
        status: 401,
        headers: { "WWW-Authenticate": 'Basic realm="Neeladhri Admin"' },
      });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*", "/buttons", "/buttons/:path*", "/docs", "/docs/:path*"],
};
