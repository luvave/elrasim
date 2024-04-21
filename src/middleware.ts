import createMiddleware from 'next-intl/middleware';
import { Locales } from '@/config/LocalesConfig';

export default createMiddleware({
  // A list of all locales that are supported
  locales: Locales,

  // Used when no locale matches
  defaultLocale: 'cs'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(cs|en)/:path*']
};