import type { Metadata } from "next";
import "./globals.css";
import { resolveSeo } from "@/lib/seo/resolve";
import CallModal from "@/components/CallModal";

export async function generateMetadata(): Promise<Metadata> {
  const baseSeo = await resolveSeo('/');
  return {
    ...baseSeo,
    metadataBase: new URL('https://www.screwwood.in'),
  };
}

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
