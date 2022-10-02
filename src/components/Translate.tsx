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
  
  return (
    <div className="fixed top-20 right-4 z-10 md:top-28 md:right-10">
      <button className=" group flex items-center justify-center">
        <div className=" flex max-w-0 rounded-md items-center justify-center overflow-hidden shadow -mt-2 gap-2 transition-all duration-500 group-hover:max-w-sm group-hover:bg-white group-hover:px-2">
          {router.locales?.filter((locale) => locale !== router.locale)
          .map((locale, index) => (
            <Link href={'/'} locale={locale} key={index}>
              <a className="text-black font-bold">
                {/* <Image src={changeLanguage()} alt={locale} width={30} height={30} /> */}
                {locale}
              </a>
            </Link>
          ))}
          {/* <Image
            src={France}
            alt="Français"
            width={30}
            height={30}
          />
          <Image
            src={Portugal}
            alt="Portugues"
            width={30}
            height={30}
          />
          <Image
            src={Spain}
            alt="Spanish"
            width={30}
            height={30}
          /> */}
        </div>
        <div className="h-10 w-10 overflow-hidden">
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
