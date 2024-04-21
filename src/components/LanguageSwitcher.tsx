'use client';

import { useLocale } from 'next-intl';

import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { LocalesConfig } from '@/config/LocalesConfig';
import { usePathname, useRouter } from '@/utils/i18n';
import globeIcon from '../../public/assets/globe.svg';

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleChange = (value: string) => {
    router.push(pathname, { locale: value });
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Image
          priority
          src={globeIcon}
          alt="Localization dropdown"
          className='w-9 h-9 pr-2'
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={locale} onValueChange={handleChange}>
          {LocalesConfig.locales.map((elt) => (
            <DropdownMenuRadioItem key={elt.id} value={elt.id}>
              {elt.name}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}