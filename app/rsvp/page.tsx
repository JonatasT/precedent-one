import {
  Website,
  Gift,
  Location,
  Rsvp as RsvpIcon,
} from "@/components/shared/icons";
import Letter from "@/components/rsvp/letter";
import Frame from "@/components/rsvp/frame";
import Image from "next/image";

export default async function Rsvp() {
  return (
    <div className="z-10 w-full max-w-xl px-5 xl:px-0">
      {/*
    <a
        href=""
        target="_blank"
        rel="noreferrer"
        className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
    >
        <Wedding className="h-5 w-5 text-[#1d9bf0]" />
        <p className="text-sm font-semibold text-[#1d9bf0]">RSVP - E&J</p>
    </a>
    */}

      <div
        className="mx-auto mb-[-10rem] mr-[-6rem] mt-[2rem] flex animate-fade-up items-center justify-end space-x-5 opacity-0"
        style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
      >
        <Frame className={"w-52 rotate-180"} />
      </div>

      <div
        className="mx-auto mb-[6rem] mt-[2rem] flex animate-fade-up items-center justify-center space-x-5 opacity-0"
        style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
      >
        <Image
          src="/logo-ej.svg"
          alt="Precedent logo"
          width="107"
          height="73"
          className="mr-2 mt-8 flex items-center justify-center"
        />
      </div>
      <p
        className="text-black-400 md:text-l mb-[3.2rem] mt-6 animate-fade-up text-center tracking-wider opacity-0 [text-wrap:balance]"
        style={{
          animationDelay: "0.25s",
          animationFillMode: "forwards",
          fontFamily: "cormorant",
        }}
      >
        “Pois onde estiver o amor, ali estará também o nosso coração.” Lc. 12:34
      </p>
      <div
        className="mx-auto mb-[4rem] mt-8 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
        style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
      >
        <Letter className="rounded-lg" />
      </div>

      <div className="flex animate-fade-up flex-col items-center justify-center font-[comorant]">
        <div className="text-center font-[comorant] text-sm tracking-[0.3rem]">
          SETEMBRO
        </div>
        <div className="mt-1 flex">
          <span className="border-[1px] border-transparent border-b-gold border-t-gold pl-8 pr-8 text-xl leading-10">
            SÁB
          </span>
          <span
            className="ml-3 mr-3 text-4xl text-gold"
            style={{ fontFamily: "cormorant" }}
          >
            07
          </span>
          <span className="border-[1px] border-transparent border-b-gold border-t-gold pl-8 pr-8 text-xl leading-10">
            16h40
          </span>
        </div>
        <div className="mt-2 flex pr-[10px] text-sm font-semibold tracking-[0.2rem]">
          2024
        </div>
      </div>

      <div className="mx-auto mb-[6rem] mt-[2rem] flex animate-fade-up items-center justify-center space-x-10">
        <a
          href=""
          target="_blank"
          rel="noreferrer"
          className="animate-fade-u mb-5 flex max-w-fit items-center justify-center overflow-hidden rounded-full bg-gold px-2 py-2 transition-colors hover:bg-blue-200"
        >
          <Website className="rounded-full text-white" />
        </a>
        <a
          href=""
          target="_blank"
          rel="noreferrer"
          className="mb-5 flex max-w-fit animate-fade-up items-center justify-center overflow-hidden rounded-full bg-gold px-2 py-2 transition-colors hover:bg-blue-200"
        >
          <Gift className="rounded-full text-white" />
        </a>
        <a
          href=""
          target="_blank"
          rel="noreferrer"
          className="mb-5 flex max-w-fit animate-fade-up items-center justify-center overflow-hidden rounded-full bg-gold px-2 py-2 transition-colors hover:bg-blue-200"
        >
          <Location className="rounded-full text-white" />
        </a>
        <a
          href=""
          target="_blank"
          rel="noreferrer"
          className="mb-5 flex max-w-fit animate-fade-up items-center justify-center overflow-hidden rounded-full bg-gold px-2 py-2 transition-colors hover:bg-blue-200"
        >
          <RsvpIcon className="rounded-full text-white" />
        </a>
      </div>

      <div
        className="mx-auto mb-[-6rem] ml-[-6rem] mt-[-12rem] flex animate-fade-up items-center justify-start space-x-5 opacity-0"
        style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
      >
        <Frame className={"w-52 rotate-0 text-gold"} />
      </div>
    </div>
  );
}
