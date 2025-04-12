import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Providers } from '@/contexts/Providers';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieConsent from '../components/common/CookieConsent';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Design Democracy - Community-Driven T-Shirt Designs',
  description: 'Vote on designs, create your own, and wear the community\'s best t-shirt designs.',
  keywords: 't-shirts, design, community, voting, fashion, custom apparel',
  authors: [{ name: 'Design Democracy Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://designdemocracy.com',
    title: 'Design Democracy - Community-Driven T-Shirt Designs',
    description: 'Vote on designs, create your own, and wear the community\'s best t-shirt designs.',
    siteName: 'Design Democracy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Design Democracy - Community-Driven T-Shirt Designs',
    description: 'Vote on designs, create your own, and wear the community\'s best t-shirt designs.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}>
        <Providers>
          {/* Background pattern */}
          <div className="fixed inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)]" />
          
          {/* Main layout */}
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              <div className="container">
                {children}
              </div>
            </main>
            <Footer />
          </div>
          
          {/* Overlay elements */}
          <CookieConsent />
        </Providers>
      </body>
    </html>
  );
}
