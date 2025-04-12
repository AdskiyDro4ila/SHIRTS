import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import { Montserrat as FontHeading } from 'next/font/google';
import './globals.css';
import { Providers } from '@/contexts/Providers';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieConsent from '../components/common/CookieConsent';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontHeading = FontHeading({
  subsets: ['latin'],
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: 'Design Democracy - Community-Driven T-Shirt Designs',
  description: 'Vote on designs, create your own, and wear the community\'s best t-shirt designs.',
  keywords: 't-shirts, design, community, voting, fashion, custom apparel',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.variable} ${fontHeading.variable} font-sans min-h-screen flex flex-col`}>
        <Providers>
          <div className="fixed inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)]" />
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <CookieConsent />
        </Providers>
      </body>
    </html>
  );
} 