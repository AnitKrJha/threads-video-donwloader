import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thread Video Downloader - Download Videos Easily",
  description:
    "Threads Video Downloader allows you to easily download videos from various platforms. Start downloading your favorite videos now!",
  keywords:
    "threads video downloader, download videos, social media video downloader",
  openGraph: {
    title: "Thread Video Downloader - Download Videos Easily",
    description:
      "Threads Video Downloader allows you to easily download videos from various platforms. Start downloading your favorite videos now!",
    url: "https://threads-video-downloader.anit.dev",
    siteName: "Threads Video Downloader",
    images: [
      {
        url: "https://threads-video-downloader.anit.dev/clickongenerate.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://threads-video-downloader.anit.dev/clickongenerate.png",
        width: 1800,
        height: 1600,
        alt: "Thread Video Downloader",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thread Video Downloader - Download Videos Easily",
    description:
      "Threads Video Downloader allows you to easily download videos from various platforms. Start downloading your favorite videos now!",
    site: "@_AnitJha",
    creator: "@_AnitJha",
    images: [
      {
        url: "https://threads-video-downloader.anit.dev/clickongenerate.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://threads-video-downloader.anit.dev/clickongenerate.png",
        width: 1800,
        height: 1600,
        alt: "Thread Video Downloader",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          " bg-gradient-to-r from-rose-100 to-teal-100 min-h-[100dvh]"
        }
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
