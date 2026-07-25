import type { Metadata } from "next";
import "./globals.css";
import { resolveSeo } from "@/lib/seo/resolve";
import CallModal from "@/components/CallModal";
import JsonLd from "@/components/JsonLd";
import { getSchemasForPath } from "@/lib/seo/schema-resolution";

export async function generateMetadata(): Promise<Metadata> {
  const baseSeo = await resolveSeo('/');
  return {
    ...baseSeo,
    metadataBase: new URL('https://www.screwwood.in'),
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalSchemas = await getSchemasForPath('/');

  return (
    <html lang="en" className="h-full antialiased font-sans">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <JsonLd data={globalSchemas} />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-800 font-sans">
        {children}
        <CallModal />
      </body>
    </html>
  );
}
