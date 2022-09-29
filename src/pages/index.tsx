import type { NextPage } from "next";
import Head from "next/head";
import { Activity, ArrowDown } from "phosphor-react";
import Arrow from "/public/images/mobile/arrow.svg";
import TransformMob from "/public/images/mobile/image-transform.jpg";
import TransformDesk from "/public/images/desktop/image-transform.jpg";
import StandMob from "/public/images/mobile/image-stand-out.jpg";
import StandDesk from "/public/images/desktop/image-stand-out.jpg";
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
      <div className="flex h-screen w-full flex-col items-center bg-image-header-mob bg-cover bg-top bg-no-repeat pt-64 md:bg-image-header-desk md:bg-center md:pt-32">
        <h1 className="mb-18 text-center font-Fraunces text-6xl font-bold tracking-widest text-white md:text-8xl">
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
        <div className="md:hidden md:w-1/2">
          <Image src={TransformMob} alt="Transform" />
        </div>
        <div className="hidden md:block md:w-1/2">
          <Image src={TransformDesk} alt="Transform" />
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
          <p className="text-DarkDesaturatedCyan border-b-[6px] border-yellow border-opacity-50 font-Fraunces text-lg font-[900] uppercase leading-3 tracking-wider">
            Learn more
          </p>
        </div>
      </section>
      <section id="stand" className="-mt-2 flex flex-col md:w-full md:flex-row">
        <div className="md:hidden md:w-1/2">
          <Image src={StandMob} alt="Transform" />
        </div>
        <div className="hidden md:block md:w-1/2">
          <Image src={StandDesk} alt="Transform" />
        </div>
        <div className="flex flex-col items-center justify-center gap-10 p-10 md:w-1/2 md:items-start md:px-40">
          <h3 className="text-center font-Fraunces text-3xl font-black md:text-left md:text-4xl">
            Stand out to the right audience
          </h3>
          <p className="text-center font-Barlow md:text-left">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <p className="text-DarkDesaturatedCyan border-b-[6px] border-softRed border-opacity-50 font-Fraunces text-lg font-[900] uppercase leading-3 tracking-wider">
            Learn more
          </p>
        </div>
      </section>
      <section className="-mt-2 flex flex-col md:flex-row">
        <div className="flex h-[600px] w-full flex-col items-center justify-end gap-10 bg-image-graphic-design-mob bg-cover bg-center bg-no-repeat p-10 md:w-1/2 md:items-start md:bg-image-graphic-design-desk md:px-28">
          <h3 className="w-full text-center font-Fraunces text-3xl font-black text-veryDarkDesaturatedBlue md:text-4xl">
            Graphic design
          </h3>
          <p className="w-full text-center font-Barlow">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
        <div className="flex h-[600px] w-full flex-col items-center justify-end gap-10 bg-image-photography-mob bg-cover bg-center bg-no-repeat p-10 md:w-1/2 md:items-start md:bg-image-photography-desk md:px-28">
          <h3 className="w-full text-center font-Fraunces text-3xl font-black text-veryDarkDesaturatedBlue md:text-4xl">
            Photography
          </h3>
          <p className="w-full text-center font-Barlow">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
