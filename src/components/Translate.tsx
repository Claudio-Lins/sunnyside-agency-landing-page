import Image from "next/image";
import React from "react";
import Britain from "/public/flags/icons8-great-britain-100.png";
import France from "/public/flags/icons8-france-100.png";
import Portugal from "/public/flags/icons8-portugal-100.png";
import Spain from "/public/flags/icons8-spain-100.png";
import { useRouter } from "next/router";
import Link from "next/link";

export function Translate() {
  const router = useRouter();

  function currentLanguage() {
    switch (router.locale) {
      case "en":
        return Britain;
      case "fr":
        return France;
      case "es":
        return Spain;
      case "pt":
        return Portugal;
      default:
        return Britain;
    }
  }

  function flag(name: any) {
    switch (name) {
      case "en":
        return Britain;
      case "fr":
        return France;
      case "es":
        return Spain;
      case "pt":
        return Portugal;
      default:
        return Britain;
    }
  }

  return (
    <div className="fixed top-20 right-4 z-10 md:top-28 md:right-10">
      <button className=" group flex items-center justify-center">
        <div className="flex max-w-0 gap-x-2 overflow-hidden rounded-md transition-all duration-500 group-hover:max-w-sm ">
          {router.locales
            ?.filter((locale) => locale !== router.locale)
            .map((locale, index) => (
              <Link href={"/"} locale={locale} key={index}>
                <a className="flex flex-col font-bold text-black">
                  <Image
                    src={flag(locale)}
                    alt={locale}
                    width={30}
                    height={30}
                    className={` grayscale hover:grayscale-0`}
                  />
                  <span className="text-xs">{locale}</span>
                </a>
              </Link>
            ))}
        </div>
        <div className="h-12 w-12 overflow-hidden">
          <Image
            src={currentLanguage()}
            alt={router.locale}
            width={30}
            height={30}
          />
        </div>
      </button>
    </div>
  );
}
