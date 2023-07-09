import React from "react";

type Props = {};

export const metadata = {
  title: "Terms and conditions - Thread Video Downloader",
  description:
    "Threads Video Downloader allows you to easily download videos from various platforms. Start downloading your favorite videos now!",
  keywords:
    "threads video downloader, download videos, social media video downloader",
  openGraph: {
    title: "Terms and conditions - Thread Video Downloader",
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
    title: "Terms and conditions - Thread Video Downloader",
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

const page = (props: Props) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-6">
        Terms and Conditions
      </h1>

      <div className="bg-white rounded-lg shadow p-6">
        <p className="mb-4">
          By using Threads Video Downloader, you agree to comply with these
          Terms and Conditions, as well as any applicable laws and regulations.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
        <p className="mb-4">
          All intellectual property rights, including trademarks, logos, and
          content, associated with Threads Video Downloader are the property of
          their respective owners.
        </p>
        <p className="mb-8">
          You may not reproduce, distribute, modify, or create derivative works
          without explicit permission.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Prohibited Activities</h2>
        <p className="mb-4">
          You agree not to use Threads Video Downloader for any illegal or
          unauthorized purpose.
        </p>
        <p className="mb-4">
          You are responsible for ensuring that the videos you download using
          our service comply with copyright laws and the terms of service of the
          respective platforms.
        </p>
        <p className="mb-8">
          We are not liable for any misuse or unauthorized use of the service.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
        <p className="mb-4">
          Threads Video Downloader is provided "as is," without any warranties
          or guarantees.
        </p>
        <p className="mb-4">
          We are not liable for any damages, direct or indirect, arising from
          the use or inability to use our service.
        </p>
        <p className="mb-8">
          You assume all responsibility and risk for using Threads Video
          Downloader.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Modification of Terms</h2>
        <p className="mb-8">
          We reserve the right to modify these Terms and Conditions at any time
          without prior notice.
        </p>

        <p className="text-center text-gray-500">
          If you have any questions or concerns about our Terms and Conditions,
          please contact us.
        </p>
      </div>
    </div>
  );
};

export default page;
