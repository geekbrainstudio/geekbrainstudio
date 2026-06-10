import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Geek Brain Studio — Small Ideas. Real Products.",
  description:
    "Independent developer creating simple, focused software products that help people solve specific problems more efficiently.",
  metadataBase: new URL("https://geekbrainstudio.com"),
  openGraph: {
    title: "Geek Brain Studio — Small Ideas. Real Products.",
    description:
      "Independent developer creating simple, focused software products that help people solve specific problems more efficiently.",
    url: "https://geekbrainstudio.com",
    siteName: "Geek Brain Studio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Geek Brain Studio — Small Ideas. Real Products.",
    description:
      "Independent developer creating simple, focused software products.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-white text-black">
        {children}
      </body>
    </html>
  );
}
