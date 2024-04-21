import { getTranslations } from 'next-intl/server';
import Section from '@/components/Section';
import { useTranslations } from 'next-intl';
import { SignedIn, SignedOut } from '@clerk/nextjs';
import dynamic from 'next/dynamic';

interface Props {
  params: { locale: string }
}

export async function generateMetadata({ params: { locale }}: Props) {
  const t = await getTranslations({
    locale,
    namespace: 'Index',
  });

  return {
    title: t('title'),
  };
}

const ElrasimMap = dynamic(
  () => import('@/containers/ElrasimMap'),
  {
    loading: () => <p>A map is loading</p>,
    ssr: false
  }
)

export default function IndexPage() {
  const t = useTranslations('Index');

  return (
    <>
      <SignedOut>
        <Section title={t('pleaseLogin')} description={t('pleaseLoginDescription')} />
      </SignedOut>
      <SignedIn>
        <ElrasimMap />
      </SignedIn>
    </>
  );
}