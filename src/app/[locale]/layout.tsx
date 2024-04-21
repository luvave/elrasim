import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../../css/globals.css';
import { NextIntlClientProvider, useMessages } from 'next-intl';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png'
    },
    {
      rel: 'icon',
      url: '/favicon.ico'
    }
  ]
};

export default function RootLayout({
   children,
   params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {

  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
        >
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
