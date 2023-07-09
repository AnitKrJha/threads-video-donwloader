import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import Form from "@/components/Form";
import Footer from "@/components/Footer";
const space = Space_Grotesk({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="bg-gradient-to-r from-rose-100 to-teal-100 min-h-[100dvh] pt-24 px-4">
        <Image
          src={"/Icon.png"}
          width={100}
          height={100}
          alt="threads logos"
          className="m-auto text-center -mt-6 mix-blend-multiply"
        />
        <div
          className={`container max-w-5xl py-3 ${space.className}  px-5 m-auto flex flex-col justify-center`}
        >
          <h1
            className={`text-5xl md:text-6xl text-center  text-slate-900 font-bold`}
          >
            Threads Video Downloader
          </h1>
          <h2 className="my-4 text-gray-600 text-2xl text-center">
            Download Videos from Threads in different qualities
          </h2>
          <Form />
        </div>
        <div className="h-px my-4 bg-black"></div>
        <h2 className={`text-center text-4xl font-medium ${space.className}`}>
          How to Download video using, Thread Video Downloader
        </h2>

        <div
          className={` rounded-lg shadow p-6 ${space.className} m-auto text-center`}
        >
          <h2 className="text-2xl font-semibold mb-4">
            Step 1: Open the Thread You Want to Share
          </h2>

          <p className="mb-4">Launch the Threads app on your device.</p>
          <p className="mb-4">
            Navigate to the thread containing the video you wish to download.
          </p>
          <p className="mb-8">
            Locate the specific message or post with the video you want to save.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Step 2: Click on the Share Button
          </h2>
          <Image
            src="/threadApp.jpeg"
            width={250}
            height={300}
            alt="thread video downloader"
            className="m-auto"
          />
          <p className="mb-4">
            Within the Threads app, find the share button associated with the
            video you want to download.
          </p>
          <p className="mb-8">
            The share button is typically represented by an icon with an arrow
            pointing upwards.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Step 3: Click on the Copy Link Button
          </h2>
          <Image
            className="m-auto"
            src="/copyLink.jpeg"
            width={250}
            height={300}
            alt="thread video downloader"
          />
          <p className="mb-4">
            After clicking the share button, a list of sharing options will
            appear.
          </p>
          <p className="mb-4">Look for the "Copy Link" option and tap on it.</p>
          <p className="mb-8">
            This action will copy the link of the video to your device's
            clipboard.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Step 4: Visit www.threads-video-downloader.anit.dev
          </h2>
          <Image
            className="m-auto"
            src="/browser.jpeg"
            width={250}
            height={300}
            alt="thread video downloader"
          />

          <p className="mb-4">Open your preferred web browser.</p>
          <p className="mb-4">
            In the address bar, type www.threads-video-downloader.anit.dev.
          </p>
          <p className="mb-8">
            You will be redirected to the download website, which provides video
            downloading services.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Step 5: Paste the URL in the Input Box
          </h2>
          <Image
            className="m-auto"
            src="/paste.jpeg"
            width={250}
            height={300}
            alt="thread video downloader"
          />
          <p className="mb-4">
            On the download website, locate the input box designated for pasting
            URLs or links.
          </p>
          <p className="mb-4">Click inside the input box to activate it.</p>
          <p className="mb-4">
            Paste the copied video link from the clipboard into the input box.
          </p>
          <p className="mb-8">
            (To paste, press Ctrl+V on Windows or Command+V on Mac.)
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Step 6: Click on Generate Link
          </h2>
          <Image
            className="m-auto"
            src="/clickongenerate.png"
            width={250}
            height={300}
            alt="thread video downloader"
          />
          <p className="mb-4">
            After pasting the URL, click on the "Download" button located next
            to the input box.
          </p>
          <p className="mb-8">
            The website will initiate the download process and start retrieving
            the video from Threads.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Step 7: Load and Prepare the Video
          </h2>
          <p className="mb-4">
            Once the download process is complete, the website will load and
            prepare the video file.
          </p>
          <p className="mb-8">
            This step may take a few moments depending on the video's size and
            your internet connection speed.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Step 8: Click on the Go To Video
          </h2>
          <Image
            className="m-auto"
            src="/clickongotovideo.png"
            width={250}
            height={300}
            alt="thread video downloader"
          />
          <p className="mb-4">
            Once the video is loaded, locate the three dots or ellipsis icon
            usually found near the video player controls.
          </p>
          <Image
            className="m-auto"
            src="/download.png"
            width={250}
            height={300}
            alt="thread video downloader"
          />
          <p className="mb-4">
            Click on the three dots to reveal a menu of options.
          </p>
          <p className="mb-8">From the menu, select the "Download" option.</p>

          <p className="text-center text-gray-500">
            Congratulations! You have successfully downloaded the Threads video
            to your device. You can now enjoy watching it offline anytime and
            anywhere.
          </p>
          <p className="text-center text-gray-500">
            Note: Please ensure compliance with copyright laws and the terms of
            service of Threads and the video content creators.
          </p>
        </div>
        <Footer />
      </main>
    </>
  );
}
