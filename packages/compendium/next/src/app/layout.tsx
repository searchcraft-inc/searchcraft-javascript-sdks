import type { Metadata } from 'next';

import './globals.css';

import '@searchcraft/react-sdk/themes/hologram.css';

export const metadata: Metadata = {
  title: 'React SSR SDK',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
