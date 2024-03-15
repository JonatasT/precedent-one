"use client";
import React, { useEffect } from "react";
import { RippleWater } from "@/components/shared/ripple-water/ripple-water"; // Ajuste o caminho conforme necessário

export function Ripple() {
  useEffect(() => {
    const rippleWater = new RippleWater();
    // Certifique-se de limpar se necessário
    return () => {
      // Limpeza aqui
      if (rippleWater && typeof rippleWater.dispose === "function") {
        rippleWater.dispose();
      }
    };
  }, []); // Dependências vazias para executar apenas uma vez após a montagem

  return <div id="webGLApp"></div>;
}
