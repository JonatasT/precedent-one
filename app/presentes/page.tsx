"use client";
import React from "react";

import { DEPLOY_URL } from "@/lib/constants";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import { nFormatter } from "@/lib/utils";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Wedding } from "@/components/shared/icons";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
//import { Grid } from "@/components/presentes/grid";

import Autoplay from "embla-carousel-autoplay";
import { romanticLovely } from "../fonts";
import cx from "classnames";
import { Grid, Box, Section, Flex } from "@radix-ui/themes";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import {
  ProductsCollection,
  ProductsGrid,
} from "@/components/presentes/products";
import { Divider } from "@/components/shared/divider";

export default async function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <>
      <div className="static mt-[-1rem]">
        <Section size="3">
          <Carousel
            plugins={[plugin.current]}
            className="w-[76rem] animate-fade-up"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="h-[536px] p-1">
                    <Card className="bg-[url('/carousel-1.png')] bg-auto">
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </Section>
      </div>

      <Section
        className="mx-auto w-full max-w-screen-xl animate-fade-up px-4 py-8 sm:px-6 sm:py-12 lg:px-8"
        style={{ animationDelay: "1s", animationFillMode: "forwards" }}
      >
        <header className=" justify-content text-center">
          <div>
            <h1 className="font-regular mt-10 inline-block scroll-m-20 text-4xl leading-8 tracking-tight lg:text-4xl">
              <div className="mb-2 flex">
                Nossa lista
                <Wedding className="flex h-5 w-5 fill-[#ffc857]" />
              </div>
              <span className="ml-10 font-[romanticLovely] lg:text-5xl">
                {" "}
                de presentes.
              </span>
            </h1>
          </div>

          <div>
            <h2 className="mt-10 scroll-m-20 text-xl font-bold text-gray-900 sm:text-3xl"></h2>

            <p className="mx-auto mt-4 max-w-md text-gray-500">
              A jornada do para sempre começa aqui. Descubra presentes que
              traduzem nossos sonhos compartilhados e celebre conosco cada
              momento único
            </p>
          </div>
        </header>
      </Section>

      <Divider />

      <Section
        size="3"
        className="flex-start  w-full max-w-screen-xl animate-fade-up"
      >
        <ProductsGrid />
      </Section>
      <Section size="3" className="flex-start animate-fade-up">
        <ProductsCollection />
      </Section>
    </>
  );
}
