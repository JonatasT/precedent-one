"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export function SoundTrigger() {
  return (
    <motion.div
      style={{
        width: 130,
        height: 130,
        borderRadius: 100,
        backgroundColor: "transparent",
      }}
      animate={{ rotate: 360 }}
      transition={{ ease: "linear", duration: 7, repeat: Infinity }}
    >
      <div className="fixed relative left-0 right-0 top-0 items-start justify-start tracking-[normal]">
        <Image
          className="bottom-[0px] left-[0px] right-[0px] top-[0px] !m-[0] overflow-hidden"
          alt=""
          src="/bg-sound-trigger.svg"
          width={130}
          height={130}
        />
      </div>
    </motion.div>
  );
}
