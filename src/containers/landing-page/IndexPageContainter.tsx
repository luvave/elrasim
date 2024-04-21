'use client';

import { useTranslations } from 'next-intl';
import { useAuth } from '@clerk/nextjs';
import Section from '@/components/Section';
import dynamic from 'next/dynamic';


const ElrasimMap = dynamic(
  () => import('@/containers/ElrasimMap'),
  {
    loading: () => <p>A map is loading</p>,
    ssr: false
  }
)

export default function IndexPageContainer() {
  const t = useTranslations('Index');

    const { isSignedIn } = useAuth();

  return (
    <>
      {!isSignedIn &&
        <Section title={t('pleaseLogin')} description={t('pleaseLoginDescription')} />
      }
      {isSignedIn &&
        <ElrasimMap />
      }
    </>
  );
}