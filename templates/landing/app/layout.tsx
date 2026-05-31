import "./globals.css";
import type { Metadata } from "next";
import { meta } from "../content";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
