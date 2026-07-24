import type { Metadata } from "next";
import "./globals.css";
import { SITE_URL } from '@/lib/site';
import CallModal from "@/components/CallModal";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Screw Wood - Construction Company in Bangalore",
    template: "%s | Screw Wood",
  },
  description: "Innovative construction and interior solutions tailored to your vision.",
  openGraph: {
    siteName: "Screw Wood",
    type: "website",
    locale: "en_IN",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased font-sans">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-800 font-sans">
        {children}
        <CallModal />
      </body>
    </html>
  );
}
