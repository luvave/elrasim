import { getTranslations } from 'next-intl/server';
import { Navbar } from '@/containers/NavBar';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('title'),
  };
}

export default function IndexPage() {
  return (
    <>
      <Navbar />
    </>
  );
}