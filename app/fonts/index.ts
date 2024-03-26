import localFont from "next/font/local";
import { Inter, Cormorant_Garamond, Jomolhari } from "next/font/google";

export const jomolhari = Jomolhari({
  weight: "400",
  variable: "--font-jomolhari",
  subsets: ["latin"],
});

export const sfPro = localFont({
  src: "./SF-Pro-Display-Medium.otf",
  variable: "--font-sf",
});

export const romanticLovely = localFont({
  src: "./Romantic-Lovely.ttf",
  variable: "--font-romantic-lovely",
});

export const noelan = localFont({
  src: "./noelan-script.otf",
  variable: "--font-noelan",
});

export const peristiwa = localFont({
  src: "./Peristiwa.otf",
  variable: "--font-peristiwa",
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: "300",
});
