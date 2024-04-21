import Link from 'next/link';
import { useTranslations } from 'next-intl';

import LanguageSwitcher from '@/components/LanguageSwitcher';
import { buttonVariants } from '@/components/ui/button';
import { AppLogo } from '@/components/AppLogo';
import { Section } from '@/components/Section';

export const Navbar = () => {
  const t = useTranslations('Navbar');

  return (
    <Section className='px-3 py-6'>
      <div className="flex items-center justify-between">
        <Link href="/"><AppLogo /></Link>

        <nav>
          <ul className="flex flex-row items-center gap-x-6 text-lg font-medium [&_li:hover]:opacity-100 [&_li]:opacity-60">
            <li>
              <Link href='/'>{t('links.about')}</Link>
            </li>
          </ul>
        </nav>

        <div>
          <ul className="flex flex-row items-center gap-x-4 text-lg font-medium [&_li:not(:last-child):hover]:opacity-100 [&_li:not(:last-child)]:opacity-60">
            <>
              <li>
                <LanguageSwitcher />
              </li>
              <li>
                <Link href='/sign-in'>{t('links.signIn')}</Link>
              </li>
              <li>
                <Link className={buttonVariants()} href='/sign-up'>
                  {t('links.signUp')}
                </Link>
              </li>
            </>
          </ul>
        </div>
      </div>
    </Section>
  );
};