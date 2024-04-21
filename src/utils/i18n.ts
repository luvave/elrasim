import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { Locales } from '@/config/LocalesConfig';

export const { usePathname, useRouter } = createSharedPathnamesNavigation({
  locales: Locales,
});