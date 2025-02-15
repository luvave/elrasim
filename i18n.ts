import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { Locales } from '@/config/LocalesConfig';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!Locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`./translations/${locale}.json`)).default
  };
});