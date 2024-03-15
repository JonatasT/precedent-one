"use client";
import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft([days, hours, minutes, seconds]);

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft([0]);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="absolute left-[599px] top-[567px] h-[142px] w-[634px] font-[jomolhari]">
      <div className="absolute left-0 top-0 h-[142px] w-[155px]">
        <div className="absolute left-[58px] top-[124px] whitespace-nowrap text-center text-[15px] font-medium leading-[normal] tracking-[1.00px] text-[#616161]">
          Dias
        </div>
        <div className="absolute left-0 top-0 whitespace-nowrap text-center text-[90px] font-normal leading-[109.8px] tracking-[0] text-black [font-family:'Jomolhari',Helvetica]">
          {timeLeft[0]}
        </div>
      </div>
      <div className="absolute left-[211px] top-0 h-[142px] w-[105px]">
        <div className="] absolute left-[27px] top-[124px] whitespace-nowrap text-center text-[15px] font-medium leading-[normal] tracking-[1.00px] text-[#616161]">
          Horas
        </div>
        <div className="absolute left-0 top-0 whitespace-nowrap text-center text-[90px] font-normal leading-[109.8px] tracking-[0] text-black [font-family:'Jomolhari',Helvetica]">
          {timeLeft[1]}
        </div>
      </div>
      <div className="absolute left-[372px] top-0 h-[142px] w-[105px]">
        <div className="] absolute left-[19px] top-[124px] whitespace-nowrap text-center text-[15px] font-medium leading-[normal] tracking-[1.00px] text-[#616161]">
          Minutos
        </div>
        <div className="absolute left-0 top-0 whitespace-nowrap text-center text-[90px] font-normal leading-[109.8px] tracking-[0] text-black [font-family:'Jomolhari',Helvetica]">
          {timeLeft[2]}
        </div>
      </div>
      <div className="absolute left-[533px] top-0 h-[142px] w-[105px]">
        <div className="] absolute left-[11px] top-[124px] whitespace-nowrap text-center text-[15px] font-medium leading-[normal] tracking-[1.00px] text-[#616161]">
          Segundos
        </div>
        <div className="absolute left-0 top-0 whitespace-nowrap text-center text-[90px] font-normal leading-[109.8px] tracking-[0] text-black [font-family:'Jomolhari',Helvetica]">
          {timeLeft[3]}
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
