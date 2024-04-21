import createMiddleware from 'next-intl/middleware';
import { Locales } from '@/config/LocalesConfig';
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const i18nMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: Locales,

  // Used when no locale matches
  defaultLocale: 'cs'
});

const isProtectedRoute = createRouteMatcher([
  'someProtectedRoute/(.*)',
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();

  return i18nMiddleware(req);
});

export const config = {
  matcher: [
    '/((?!.*\\..*|_next).*)', // Don't run middleware on static files
    '/', // Run middleware on index page
    '/(api|trpc)(.*)'], // Run middleware on API routes
};