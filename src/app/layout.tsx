import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { getPayload } from 'payload';
import configPromise from '@/payload.config';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Screw Wood - Construction Company in Bangalore",
  description: "Innovative construction and interior solutions tailored to your vision.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const payload = await getPayload({ config: configPromise });
  let tracking: any = null;
  try {
    tracking = await payload.findGlobal({ slug: 'tracking' });
  } catch (error) {
    console.error("Error fetching tracking info", error);
  }

  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        
        {tracking?.googleAnalyticsId && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${tracking.googleAnalyticsId}`}></script>
            <script dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${tracking.googleAnalyticsId}');
              `
            }} />
          </>
        )}

        {tracking?.customHeadScripts && (
          <div dangerouslySetInnerHTML={{ __html: tracking.customHeadScripts }} />
        )}
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-800">{children}</body>
    </html>
  );
}
