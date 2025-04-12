import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import CookieConsent from '../components/common/CookieConsent';
import { Providers } from '../contexts/Providers';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#4F46E5',
};

export const metadata: Metadata = {
  title: 'Design Democracy - T-Shirt E-Commerce',
  description: 'A community-driven t-shirt platform where you can vote on designs and get early access to popular items.',
  keywords: 't-shirt, design, voting, community, fashion, print-on-demand',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
            <CookieConsent />
          </div>
        </Providers>
      </body>
    </html>
  );
} 