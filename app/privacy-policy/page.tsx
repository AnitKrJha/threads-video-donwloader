import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-6">Privacy Policy</h1>

      <div className="bg-white rounded-lg shadow p-6">
        <p className="mb-4">
          At Threads Video Downloader, we value your privacy and are committed
          to protecting your personal information.
        </p>
        <p className="mb-4">
          This Privacy Policy outlines how we collect, use, and safeguard the
          data you provide when using our Threads Video Downloader service.
        </p>
        <p className="mb-8">
          Please read this Privacy Policy carefully to understand our practices
          regarding your personal data.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Information Collection</h2>
        <p className="mb-4">
          We may collect personal information such as your name, email address,
          or any other details you voluntarily provide when using our Threads
          Video Downloader service.
        </p>
        <p className="mb-8">
          We may also collect non-personal information such as browser type, IP
          address, and usage data to improve our services and enhance user
          experience.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Data Usage</h2>
        <p className="mb-4">
          We use the information collected to provide and improve our Threads
          Video Downloader service, customize your user experience, and
          communicate with you.
        </p>
        <p className="mb-4">
          We do not sell, trade, or transfer your personal information to third
          parties without your consent, except when required by law.
        </p>
        <p className="mb-8">
          We are committed to ensuring that your information is secure and have
          implemented appropriate measures to protect it.
        </p>

        <h2 className="text-2xl font-semibold mb-4">External Links</h2>
        <p className="mb-4">
          Our website may contain links to external sites that are not operated
          by us. We are not responsible for the privacy practices or content of
          those sites.
        </p>
        <p className="mb-8">
          We recommend reviewing their privacy policies when visiting external
          links.
        </p>

        <p className="text-center text-gray-500">
          If you have any questions or concerns about our Privacy Policy, please
          contact us.
        </p>
      </div>
    </div>
  );
};

export default page;
