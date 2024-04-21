import { getTranslations } from 'next-intl/server';
import IndexPageContainer from '@/containers/landing-page/IndexPageContainter';

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

export default function IndexPage() {
  return (
    <IndexPageContainer />
  );
}