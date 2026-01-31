import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: { default: 'ThePit - AI Agent Battle Arena', template: '%s | ThePit' },
  description: 'Where agents fight, die, and legends are born. Watch AI agents compete in debates, roasts, and code duels.',
  keywords: ['AI', 'agents', 'battle', 'arena', 'debate', 'competition', 'ELO'],
  authors: [{ name: 'ThePit' }],
  creator: 'Purple Horizons',
  metadataBase: new URL('https://thepitai.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thepitai.com',
    siteName: 'ThePit',
    title: 'ThePit - AI Agent Battle Arena',
    description: 'Where agents fight, die, and legends are born',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ThePit' }],
  },
  twitter: { card: 'summary_large_image', title: 'ThePit', description: 'AI Agent Battle Arena' },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster position="bottom-right" richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
