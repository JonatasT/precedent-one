import Card from "@/components/home/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { DEPLOY_URL } from "@/lib/constants";
import { Github, Wedding } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import { Section } from "@radix-ui/themes";
import { Gallery } from "@/components/home/section-gallery";

import ResumeBox from "@/components/home/resume-box";
import dynamic from "next/dynamic";
import { SectionSuppliers } from "@/components/home/section-suppliers";
import Marquee from "@/components/home/marquee";
import { SectionAbout } from "@/components/home/section-about";
import { SectionLocation } from "@/components/home/section-location";
import { SectionInfo } from "@/components/home/section-info";

export default async function Home() {
  return (
    <>
      <div className="relative mt-[-40rem] box-border flex w-full flex-col items-center justify-start gap-[1.938rem_0rem] overflow-hidden bg-white pb-[6.75rem] pl-[4.5rem] pr-[3.063rem] pt-[1rem] tracking-[normal] mq675:box-border mq675:gap-[3.938rem_0rem] mq675:pl-[2.25rem] mq675:pr-[1.5rem] mq450:gap-[2rem_0rem]">
        <div className="relative bottom-[-38.375rem] right-[-28.975rem] flex max-w-[471px] flex-col">
          <div className="w-full">
            <div className="max-md:flex-col max-md:gap-0 flex gap-5">
              <div className="max-md:ml-0 max-md:w-full z-40 mr-[-2rem] flex w-[30%] flex-col">
                <img
                  loading="lazy"
                  src="/ornament-hero-3.svg"
                  className="aspect-[0.84] w-[138px] max-w-full shrink-0"
                />
              </div>
              <div className="max-md:w-full flex w-[70%] flex-col">
                <img
                  loading="lazy"
                  src="/photo-hero-2.png"
                  className="mt-14 aspect-[0.82] w-full grow"
                />
              </div>
            </div>
          </div>
          <img
            loading="lazy"
            src="/ornament-hero-4.svg"
            className="mt-20 aspect-[1.52] w-44 max-w-full self-end"
          />
        </div>

        <div className="box-border flex w-[46.438rem] max-w-full shrink-0 flex-row items-start justify-start py-[0.6rem] pl-[0rem] pr-[1.438rem]">
          <ResumeBox />
        </div>
      </div>
      <div className="w-full pt-[4rem]">
        <div className="flex w-full flex-col">
          <Marquee />
          <div className="h-screen w-full">
            <SectionAbout />
          </div>
          <div className="h-screen w-full">
            <SectionSuppliers />
          </div>
          <div className="mb-[12rem] mt-[10rem] h-screen w-full">
            <SectionLocation />
          </div>
          <div className="mb-40 w-full">
            <SectionInfo />
          </div>
        </div>
      </div>
      {/*<Gallery/>*/}
    </>
  );
}
