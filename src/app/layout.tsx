import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bannerific',
  description: 'Crafting visual elegance, one banner at a time.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
<link rel="canonical" href="https://bestukarchitectural.vercel.app/"/>
<meta name="google-site-verification" content="R5-G4Z02h_RxVS8TL7mvuj6GEC_mVch7EDWpk0UlGEc" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
