import Image from "next/image";
import React from "react";

interface TestimonialProps {
  name: string;
  description: string;
  imageUrl: string;
  role: string;
}

export function Testimonial({
  name,
  description,
  imageUrl,
  role,
}: TestimonialProps) {
  return (
    <div className="flex w-full flex-col items-center justify-center px-8">
      <Image
        src={imageUrl}
        alt={name}
        width={75}
        height={75}
        className="rounded-full"
      />
      <p className="my-8 text-center font-Barlow font-semibold text-veryDarkGrayishBlue">
        {description}
      </p>
      <p className="text-center font-Fraunces font-black">{name}</p>
      <p className="mt-2 text-center text-sm text-darkGrayishBlue">{role}</p>
    </div>
  );
}
