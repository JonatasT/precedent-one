import React from "react";
import CountdownTimer from "./countdownTimer";

export function SectionAbout() {
  const targetDate = new Date("2024-09-07T00:00:00");

  return (
    <div className="flex w-full flex-row justify-center bg-white">
      <div className="relative h-[832px] w-[1280px] bg-white">
        <div className="absolute left-[408px] top-[228px] h-[287px] w-[471px]">
          <div className="] absolute left-[125px] top-0 whitespace-nowrap text-center text-[15px] font-medium leading-[normal] tracking-[1.00px] text-[#616161]">
            Entrando no Para sempre
          </div>
          <p className="] absolute left-0 top-[172px] w-[449px] text-center text-[16px] font-medium leading-[22.7px] tracking-[0] text-[#7e7e7e]">
            Junto com suas famílias, Elisa e Jonatas convidam vocês a participar
            da celebração do amor deles ao trocarem votos e, diante de Deus se
            tornarem um só. Será uma noite de alegria, amor e risos ao iniciarem
            essa nova jornada.
          </p>
          <p className="absolute left-0 top-[35px] w-[465px] text-center text-[40px] font-normal leading-[48.8px] tracking-[0] text-black [font-family:'Jomolhari-Regular',Helvetica]">
            Juntem-se a nós celebrando o nosso amor
          </p>
        </div>

        <CountdownTimer targetDate={targetDate} />

        <img
          className="absolute left-[325px] top-[622px] h-[210px] w-[274px]"
          alt="Ornament"
          src="ornament-3.svg"
        />
        <img
          className="absolute left-[1125px] top-[25px] h-[122px] w-[86px]"
          alt="Ornament"
          src="ornament-2.svg"
        />
        <img
          className="absolute left-[146px] top-[156px] h-[78px] w-[104px]"
          alt="Ornament"
          src="ornament-1.svg"
        />
      </div>
    </div>
  );
}
