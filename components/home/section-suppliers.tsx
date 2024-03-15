import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Ripple } from "@/components/shared/ripple-water/index";

export function SectionSuppliers() {
  return (
    <div className="flex w-full flex-row justify-center bg-white">
      <div className="relative h-[832px] w-[1280px] bg-white">
        <Image
          className="absolute left-[128px] top-[119px] h-[593px] w-[512px]"
          alt="Left side"
          src="/slider-image.png"
          width={593}
          height={512}
        />
        <div className="absolute left-[734px] top-[83px] h-[698px] w-[473px]">
          <div className="all-[unset] absolute left-0 top-[664px] box-border h-[34px] w-[135px]">
            <div className="h-[34px] w-[137px]">
              <Button variant={"outline-second"} className="w-[9rem]">
                Veja o mapa
              </Button>
            </div>
          </div>
          <div className="absolute left-0 top-[177px] whitespace-nowrap text-center text-[15px] font-medium leading-[normal] tracking-[1.00px] text-[#616161] [font-family:'Inter-Medium',Helvetica]">
            Localização romântica
          </div>
          <p className="absolute left-0 top-[349px] w-[449px] text-[16px] font-medium leading-[22.7px] tracking-[0] text-[#7e7e7e] [font-family:'Inter-Medium',Helvetica]">
            Nosso local de casamento é um sonho que se tornou realidade. O
            VarandasPark é um espaço muito agradável para o momento mais feliz
            de nossas vidas. O local em si é uma bela combinação de charme
            rústico e elegância moderna.
            <br />
            <br />
            Além disso, o local possui salão de festas com varandas, recepção
            coberta e boate, em ambiente anexo ao salão principal e possui
            também estacionamento interno para todos os convidados. A área de
            cerimônia ao ar livre oferece um cenário natural e romântico para
            trocarmos nossos votos.
          </p>
          <p className="absolute left-0 top-[212px] w-[465px] text-[40px] font-normal leading-[48.8px] tracking-[0] text-black [font-family:'Jomolhari-Regular',Helvetica]">
            Nosso sonho é um casamento ao ar livre
          </p>
          <div className="absolute -left-px -top-px text-center text-[130px] font-normal leading-[normal] tracking-[0] text-transparent [-webkit-text-stroke:1px_#dbdbdb] [font-family:'Iowan_Old_Style-Titling',Helvetica]">
            01
          </div>
        </div>
      </div>
    </div>
  );
}
