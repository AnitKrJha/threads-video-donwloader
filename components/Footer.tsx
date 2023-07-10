import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="w-full px-4 max-w-6xl py-4 border-t-4 flex justify-between m-auto text-sm gap-6">
      <div className="withlove text-center">
        With ❣️ by{" "}
        <a
          href="https://linkedin.com/in/anitjha"
          className="font-bold underline"
          target="_blank"
        >
          Anit Jha
        </a>
      </div>
      <div className="links flex gap-2 text-xs font-bold text-left">
        <Link href="/" className="hover:underline text-left">
          Home
        </Link>
        <Link href="./privacy-policy" className="hover:underline">
          Privacy Policy
        </Link>
        <Link
          href="./terms-and-conditions"
          className="hover:underline text-left"
        >
          Terms and Conditions
        </Link>
      </div>

      {/* <Link ></Link> */}
    </div>
  );
};

export default Footer;
