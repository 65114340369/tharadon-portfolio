import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tharadon Labutda - Portfolio",
  description: "Web Developer - Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Tharadon Labutda - Portfolio",
    description: "Web Developer - Portfolio",
    images: [
      {
        url: "/favicon-2.png",
        width: 1200,
        height: 630,
        alt: "Tharadon Labutda",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
