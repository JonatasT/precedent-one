import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FunctionComponent } from "react";
import { MapLocation } from "./section-location";

const ResumeBox: FunctionComponent = () => {
  return (
    <div className="flex max-w-full flex-1 flex-col items-center justify-start gap-[1.75rem_0rem] text-center font-inter text-[0.875rem] text-darkgray">
      <div className="flex max-w-full flex-col items-center justify-start gap-[0.538rem_0rem] self-stretch mq750:gap-[0.938rem_0rem]">
        <Image
          className="relative mb-20 mt-10 shrink-0 rotate-270 overflow-hidden object-contain"
          loading="lazy"
          alt=""
          src="/leaf.svg"
          width={48}
          height={113.008}
        />
        <div className="flex max-w-full flex-col items-center justify-start gap-[1rem_0rem] self-stretch">
          <div className="relative z-[1] self-stretch capitalize [text-shadow:4px_3px_5.7px_#fff]">
            O Para sempre começa agora
          </div>
          <div className="box-border flex max-w-full flex-row items-start justify-start py-[0rem] pl-[0rem] pr-[0.563rem] font-kaisei-decol text-[4.25rem] text-black">
            <div className="relative flex max-w-full flex-row items-start justify-start">
              <div className="absolute right-[460px] top-[-50px] h-[488px] w-[438px]">
                <div className="relative top-[24px] h-[464px] w-[417px]">
                  <Image
                    className="absolute left-[28px] top-[15px] h-[390px] w-[319px] object-cover"
                    alt=""
                    src="/photo-hero-1.png"
                    width={319}
                    height={390}
                  />
                  <Image
                    className="absolute left-[241px] top-0 h-[162px] w-[176px]"
                    alt=""
                    src="/ornament-hero-2.svg"
                    width={176}
                    height={162}
                  />
                  <Image
                    className="absolute left-0 top-[354px] h-[110px] w-[145px]"
                    alt=""
                    src="/ornament-hero-1.svg"
                    width={145}
                    height={110}
                  />
                </div>
              </div>

              <h1 className="font-inherit relative z-[1] m-0 text-inherit font-normal capitalize mq750:text-[3.375rem] mq450:text-[2.563rem]">
                <p className="m-0">{`Elisa Ávila & `}</p>
                <p className="m-0">Jonatas Teixeira</p>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="box-border flex max-w-full flex-row items-start justify-start px-[0rem] pb-[0.813rem] pt-[0rem] text-[1rem] text-dimgray">
        <div className="relative z-[1] flex w-[45rem] max-w-full shrink-0 items-center justify-center [text-shadow:4px_3px_5.7px_#fff]">
          Bem-vindos ao nosso site de casamento! Estamos muito felizes por
          compartilhar nosso dia especial com vocês. Juntem-se a nós nessa
          jornada enquanto nos preparamos para dizer `&apos;`sim`&apos;` e
          embarcar em um novo capítulo de nossas vidas juntos.
        </div>
      </div>
      <div className="flex flex-row items-center justify-center">
        <Button variant={"outline-second"} className="z-40 w-[9rem]">
          Casamento
        </Button>
      </div>
    </div>
  );
};

export default ResumeBox;
