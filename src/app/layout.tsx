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

const title = 'PhotoGallery | Explore. Admire. Repeat.'
const description = 'Explore a curated collection of stunning photos from around the world. PhotoGallery brings visual inspiration to your screen—one snapshot at a time.'

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    images: [
      'https://photogallery.functionbasket.com/logo.png',
    ],
    url: 'https://photogallery.functionbasket.com',
  },
  twitter: {
    card: 'summary',
    title: title,
    description: description,
    images: [
      'https://photogallery.functionbasket.com/logo.png',
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
