import { NextResponse } from "next/server";

export function middleware(request) {
   // Pass through all standard requests normally
   return NextResponse.next();
}

// This matcher tells Next.js exactly what paths to ignore
export const config = {
   matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico, favicon.png, sitemap.xml, robots.txt (metadata/static assets)
       */
      "/((?!api|_next/static|_next/image|favicon.ico|favicon.png|sitemap.xml|robots.txt).*)",
   ],
};
