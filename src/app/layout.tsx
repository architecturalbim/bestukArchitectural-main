import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Best UK Architectural BIM Studios for Sustainable Building Design',
  description: 'Discover the best UK architectural BIM studios leading the way in sustainable building design through innovative, eco-friendly digital solutions.',
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
<meta name="google-site-verification" content="R5-G4Z02h_RxVS8TL7mvuj6GEC_mVch7EDWpk0UlGEc" />
  <link rel="canonical" href="https://bestukarchitectural.vercel.app/"/>
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
