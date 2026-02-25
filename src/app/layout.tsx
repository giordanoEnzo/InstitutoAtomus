import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import CookieBanner from '@/components/CookieBanner';
import NavbarMain from '@/components/NavbarMain';
import AnalyticsTracker from '@/components/AnalyticsTracker';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'ATOMUS | Instituto de Desenvolvimento Empresarial',
  description: 'Onde falta estrutura, nasce o caos. Onde existe direção, nasce a liderança. A ATOMUS constrói essa direção.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${poppins.variable}`}>
        <NavbarMain />
        <AnalyticsTracker />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
