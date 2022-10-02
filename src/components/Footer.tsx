import { useTranslation } from "next-i18next";
import Image from "next/image";
import React from "react";
import LogoColor from "/public/images/logoColor.svg";

export function Footer() {
  const {t} = useTranslation("common");
  return (
    <div className=" bg-[#90d4c5] w-full flex justify-center">
      <div className="flex h-[355px] w-full flex-col items-center justify-evenly  md:max-w-sm ">
        <div className="flex w-full justify-center">
          <Image
            src="/images/logoColor.svg"
            width={170}
            height={33}
            alt="Logo"
          />
        </div>
        <div className="flex w-full justify-evenly text-darkDesaturatedCyan">
          <a href="#" className="text-lg w-1/3 text-center font-semibold ">
            {t("menu.about")}
          </a>
          <a href="#photograpy" className="text-lg w-1/3 text-center leading-5 font-semibold ">
            {t("menu.services")}
          </a>
          <a href="#" className="text-lg text-center w-1/3 font-semibold ">
            {t("menu.projects")}
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
    </div>
  );
}
