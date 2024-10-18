import dynamic from "next/dynamic";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writir v1.0",
  description: "Writir is a product of Computir AI Suite",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const AppLayoutWithNoSSR = dynamic(
    () => import("@/components/Layout/AppLayout"),
    { ssr: false }
  );

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AppLayoutWithNoSSR>{children}</AppLayoutWithNoSSR>
      </body>
    </html>
  );
}
