import Footer from '@/common/components/shared/footer';
import Header from '@/common/components/shared/header';
import { cn } from '@/common/lib/utils';
import ActiveSectionContextProvider from '@/common/stores/active-section';
import '@/common/styles/globals.css';
import { ModeToggle } from '@/common/theme/mode-toggler';
import { ThemeProvider } from '@/common/theme/theme-provider';
import type { Metadata } from 'next';
import { Montserrat as FontMontserrat } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'Moses Benjamin | Portfolio',
  description:
    'Experience Modern Web Developer. Built using TypeScript, Next.js 14, Framaer Motion and Tailwind CSS.',
};

const fontMontserrat = FontMontserrat({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          'relative flex items-center justify-center',
          fontMontserrat.className,
        )}
      >
        <div className="flex min-h-screen w-full flex-col">
          <ActiveSectionContextProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              {children}
              <Footer />
              <div className="fixed left-1 right-auto top-1 z-[99] sm:bottom-6 sm:left-6 sm:top-auto">
                <ModeToggle />
              </div>
              <Toaster position="top-right" />
            </ThemeProvider>
          </ActiveSectionContextProvider>
        </div>
      </body>
    </html>
  );
}
