import type { NextPage } from "next";
import Head from "next/head";
import { Activity, ArrowDown } from "phosphor-react";
import Arrow from "/public/images/mobile/arrow.svg";
import Transform from "/public/images/mobile/image-transform.jpg";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <main className="min-h-screen w-full">
      <Head>
        <title>Frontend Mentor | Sunnyside agency landing page</title>
        <meta
          name="description"
          content="Frontend Mentor | Sunnyside agency landing page"
        />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <div className="flex h-screen w-full flex-col items-center justify-center bg-image-header-mob bg-cover bg-top bg-no-repeat md:bg-image-header-desk md:bg-center">
        <h1 className="mb-18 -mt-18 text-center font-Fraunces text-6xl font-bold tracking-widest text-white md:text-8xl">
          We are creatives
        </h1>
        <div className="mt-20">
          <Image src={Arrow} alt="Arrow" />
        </div>
      </div>
      <section
        id="transform"
        className="flex flex-col md:w-full md:flex-row-reverse"
      >
        <div className="md:w-1/2">
          <Image src={Transform} alt="Transform" />
        </div>
        <div className="flex flex-col items-center justify-center gap-10 p-10 md:w-1/2 md:items-start md:px-40">
          <h3 className="text-center font-Fraunces text-3xl font-black md:text-left md:text-4xl">
            Transform your brand
          </h3>
          <p className="text-center font-Barlow md:text-left">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <p className="font-Fraunces text-lg font-[900] uppercase tracking-wider text-DarkDesaturatedCyan border-b-4 leading-3 border-yellow-200">
            Learn more
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
