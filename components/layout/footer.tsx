import Link from "next/link";
import Image from "next/image";
import { Leaf } from "../shared/icons";
import { CheckIcon } from "@radix-ui/react-icons";
import { InstagramLogoIcon } from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <>
      <footer className="w-full bg-footer-texture py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center">
            <Link href="/" className="flex items-center font-display text-2xl">
              <Image
                src="/logo-ej.svg"
                alt="Precedent logo"
                width="117"
                height="83"
              />
            </Link>

            <div className="mb-10 flex flex-col items-center justify-center py-16 text-lg transition-all duration-500 md:flex-col">
              <span className="mb-4 font-peristiwa text-5xl">
                Nosso para sempre
              </span>
              <p className="block text-center text-sm text-gray-500">
                começa a partir de agora...
              </p>
            </div>
            <Leaf className="mb-4 w-16" />
            <ul className="mb-10 flex flex-col items-center justify-center gap-[4rem] py-16 text-lg transition-all duration-500 md:flex-row md:gap-[12rem]">
              <li className="flex w-full flex-col items-center justify-center gap-1">
                <p className="text-md font-inter">Elisa Ávila</p>
                <span className="flex items-center gap-4">
                  <CheckIcon className="text-gray-400" />
                  <a
                    href="#"
                    className="font-inter text-[1rem] text-gray-500 hover:text-gray-900"
                  >
                    noiva@elisaejonatas.com.br
                  </a>
                  <CheckIcon className="text-gray-400" />
                </span>
              </li>
              <li className="flex w-full flex-col items-center justify-center gap-1">
                <p className="text-md font-inter">Jonatas Teixeira</p>
                <span className="flex items-center gap-4">
                  <CheckIcon className="text-gray-400" />
                  <a
                    href="#"
                    className="font-inter text-[1rem] text-gray-500 hover:text-gray-900"
                  >
                    noivo@elisaejonatas.com.br
                  </a>
                  <CheckIcon className="text-gray-400" />
                </span>
              </li>
              <li className="flex w-full flex-col items-center justify-center gap-1 ">
                <p className="text-md font-inter">Nos acompanhe</p>
                <span className="flex items-center gap-4">
                  <CheckIcon className="text-gray-400" />
                  {/*<a href="#" className="text-gray-500 hover:text-gray-900 font-inter"><InstagramLogoIcon/></a>*/}
                  <a
                    href="#"
                    className="font-inter text-[1rem] text-gray-500 hover:text-gray-900"
                  >
                    noiva@elisaejonatas.com.br
                  </a>
                  <CheckIcon className="text-gray-400" />
                </span>
              </li>
            </ul>
            <span className="block text-center text-sm text-gray-500">
              ©<span className="font-semibold">Elisa&Jonatas</span> 2024, Todos
              os Direitos Reservados.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
