import React from "react";
import Image from "next/image";

interface SectionProps {
  imageUrl: string;
  alt: string;
  title: string;
  description: string;
  linkUrl: string;
  linkTitle: string;
  reverse?: boolean;
}

export function Section({
  imageUrl,
  linkUrl,
  alt,
  title,
  description,
  linkTitle,
  reverse,
}: SectionProps) {
  return (
    <section
      id="transform"
      className={`flex flex-col md:w-full ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="md:w-1/2">
        <Image src={imageUrl} alt={alt} />
      </div>
      <div className="flex flex-col items-center justify-center gap-10 p-10 md:w-1/2 md:items-start md:px-40">
        <h3 className="text-center font-Fraunces text-3xl font-black md:text-left md:text-4xl">
          {title}
        </h3>
        <p className="text-center font-Barlow md:text-left">{description}</p>
        <a
          href={linkUrl}
          className="border-b-4 border-yellow-200 font-Fraunces text-lg font-[900] uppercase leading-3 tracking-wider text-DarkDesaturatedCyan"
        >
          {linkTitle}
        </a>
      </div>
    </section>
  );
}
