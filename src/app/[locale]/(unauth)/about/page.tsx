import Section from '@/components/Section';
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';

interface Props {
  params: { locale: string }
}

export async function generateMetadata({ params: { locale }}: Props) {
  const t = await getTranslations({
    locale,
    namespace: 'About',
  });

  return {
    title: t('title'),
  };
}

export default function AboutUsPage() {
  const t = useTranslations('About');

  return (
    <Section title={t('whoAreWe')}>
      {t('franta')}
      <br/>
      {t('lukas')}
    </Section>
  );
}