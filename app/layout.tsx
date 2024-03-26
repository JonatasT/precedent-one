import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import {
  sfPro,
  inter,
  cormorant,
  romanticLovely,
  noelan,
  peristiwa,
  jomolhari,
} from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import { usePathname } from "next/navigation";
import { SoundTrigger } from "@/components/shared/sound-trigger";
import animationData from "@/components/shared/lotties/loading-animation.json";

export const metadata = {
  title: "Elisa & Jonatas",
  description: "Bem-vindos ao nosso site de casamento!",
  metadataBase: new URL("https://www.elisaejonatas.com.br"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={cx(
          sfPro.variable,
          inter.variable,
          cormorant.variable,
          romanticLovely.variable,
          noelan.variable,
          peristiwa.variable,
        )}
      >
        <div className={cx("fixed z-[-1] h-screen w-full")} />
        <Suspense fallback="...">
          <Nav />
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
          <Suspense fallback={<div></div>}>{children}</Suspense>
        </main>
        <div className="fixed bottom-10 left-10 right-0">
          <SoundTrigger />
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
