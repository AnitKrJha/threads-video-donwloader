import { FileIcon, GitHubLogoIcon, GlobeIcon } from "@radix-ui/react-icons";
import { Space_Grotesk } from "next/font/google";
import React from "react";

type Props = {};

const space = Space_Grotesk({ subsets: ["latin"] });

const Header = (props: Props) => {
  return (
    <div className="flex justify-between h-14 items-center gap-3 px-2 bg-blend-multiply bg-gray-300">
      <div className={`${space.className} sm:text-xl text-base`}>
        Anit Kr. Jha
      </div>
      <div className="links flex gap-2 justify-end items-center text-sm sm:text-base">
        <a
          href="https://blog.anit.dev"
          target="_blank"
          className={`${space.className} hover:underline flex gap-1 items-center text-sm sm:text-base`}
        >
          <FileIcon />
          Blog
        </a>
        <a
          href="https://github.com/anitkrjha"
          target="_blank"
          className={`${space.className} hover:underline flex gap-1 items-center text-sm sm:text-base`}
        >
          <GitHubLogoIcon />
          Github
        </a>
        <a
          href="https://anit.dev"
          target="_blank"
          className={`${space.className} hover:underline flex gap-1 items-center text-sm sm:text-base`}
        >
          <GlobeIcon />
          Web
        </a>
      </div>
    </div>
  );
};

export default Header;
