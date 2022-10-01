import Image from "next/image";
import React from "react";
import LogoColor from "/public/images/logoColor.svg";

export function Footer() {
  return (
    <div className="flex h-[355px] w-full flex-col items-center justify-evenly bg-[#90d4c5]">
      <div className="flex w-full justify-center">
        <Image src="/images/logoColor.svg" width={170} height={33} alt="Logo" />
      </div>
      <div className="flex w-full justify-evenly gap-2 text-darkDesaturatedCyan">
        <a href="#" className="text-xl font-semibold ">
          About
        </a>
        <a href="#photograpy" className="text-xl font-semibold ">
          Services
        </a>
        <a href="#" className="text-xl font-semibold ">
          Projects
        </a>
      </div>
      <div className="flex w-full justify-center gap-7 text-darkDesaturatedCyan">
        <a href="#" className="text-xl font-semibold ">
          <Image
            src="/images/icon-facebook.svg"
            width={20}
            height={20}
            alt="Logo twitter"
          />
        </a>
        <a href="#" className="text-xl font-semibold ">
          <Image
            src="/images/icon-instagram.svg"
            width={20}
            height={20}
            alt="Logo twitter"
          />
        </a>
        <a href="#" className="text-xl font-semibold ">
          <Image
            src="/images/icon-twitter.svg"
            width={20}
            height={17}
            alt="Logo twitter"
          />
        </a>
        <a href="#" className="text-xl font-semibold ">
          <Image
            src="/images/icon-pinterest.svg"
            width={20}
            height={20}
            alt="Logo twitter"
          />
        </a>
      </div>
    </div>
  );
}
