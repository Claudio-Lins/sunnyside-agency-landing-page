import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { testimonials } from "../../data/testimonials";
import { Footer } from "../components/Footer";
import Gallery from "../components/Gallery";
import { Testimonial } from "../components/Testimonial";
import StandDesk from "/public/images/desktop/image-stand-out.jpg";
import TransformDesk from "/public/images/desktop/image-transform.jpg";
import Arrow from "/public/images/mobile/arrow.svg";
import StandMob from "/public/images/mobile/image-stand-out.jpg";
import TransformMob from "/public/images/mobile/image-transform.jpg";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import clientTestimonials from '../../data/testimonials.json'

const Home: NextPage = () => {
  const { locale, locales, asPath } = useRouter();
  const {t} = useTranslation("common");
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
          {t("title")}
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
            {t("transform.title")}
          </h3>
          <p className="text-center font-Barlow md:text-left">
           {t("transform.description")}
          </p>
          <p className="text-DarkDesaturatedCyan border-b-[6px] border-yellow border-opacity-50 font-Fraunces text-lg font-[900] uppercase leading-3 tracking-wider">
            {t("transform.learnMore")}
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
            {t("stand.title")}
          </h3>
          <p className="text-center font-Barlow md:text-left">
            {t("stand.description")}
          </p>
          <p className="text-DarkDesaturatedCyan border-b-[6px] border-softRed border-opacity-50 font-Fraunces text-lg font-[900] uppercase leading-3 tracking-wider">
            {t("stand.learnMore")}
          </p>
        </div>
      </section>
      <section className="-mt-2 flex flex-col md:flex-row">
        <div
          id="graphic-design"
          className="flex h-[600px] w-full flex-col items-center justify-end gap-10 bg-image-graphic-design-mob bg-cover bg-center bg-no-repeat p-10 md:w-1/2 md:items-start md:bg-image-graphic-design-desk md:px-28"
        >
          <h3 className="w-full text-center font-Fraunces text-3xl font-black text-veryDarkDesaturatedBlue md:text-4xl">
            {t("graphicDesign.title")}
          </h3>
          <p className="w-full text-center font-Barlow">
            {t("graphicDesign.description")}
          </p>
        </div>
        <div
          id="photograpy"
          className="flex h-[600px] w-full flex-col items-center justify-end gap-10 bg-image-photography-mob bg-cover bg-center bg-no-repeat p-10 md:w-1/2 md:items-start md:bg-image-photography-desk md:px-28"
        >
          <h3 className="w-full text-center font-Fraunces text-3xl font-black text-veryDarkDesaturatedBlue md:text-4xl">
            {t("photography.title")}
          </h3>
          <p className="w-full text-center font-Barlow">
            {t("photography.description")}
          </p>
        </div>
      </section>
      <section className="flex w-full flex-col items-center justify-center gap-14 py-14 md:h-[770px]">
        <h3 className="text-center font-Fraunces text-2xl uppercase text-darkGrayishBlue">
          {t("testimonials.title")}
        </h3>
        <div className=" flex w-full flex-col items-center justify-center gap-10 md:flex-row md:items-center ">
          {clientTestimonials.testimonials
            .filter(p => p.locale === locale)
            .map((testimonial, index) => (
              <Testimonial key={index} {...testimonial}              />
            ))}
          {/* {testimonials.map((testimonial: any, i) => (
            <Testimonial key={testimonial.id} 
            imageUrl={testimonial.imageUrl}
            name={testimonial.name}
            description={testimonial.description}
            role={testimonial.role}
            />
          ))} */}
        </div>
      </section>
      <Gallery />
      <Footer />
    </main>
  );
};

export const getStaticProps: GetStaticProps = async ({locale})  =>{
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common"])),
    }
  }
}

export default Home;
