import createMiddleware from 'next-intl/middleware';
import { Locales } from '@/config/LocalesConfig';
import { authMiddleware, redirectToSignIn } from '@clerk/nextjs/server';
import { NextRequest } from 'next/server';

const i18nMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: Locales,

  // Used when no locale matches
  defaultLocale: 'cs'
});

export default authMiddleware({
  beforeAuth: (req) => i18nMiddleware(req),

  publicRoutes: (req: NextRequest) =>
    !req.nextUrl.pathname.includes('/map'),

  afterAuth(auth, req) {
    // Handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }
    return undefined;
  },
})

export const config = {
  matcher: [
    '/((?!.*\\..*|_next).*)', // Don't run middleware on static files
    '/', // Run middleware on index page
    '/(api|trpc)(.*)'], // Run middleware on API routes
};