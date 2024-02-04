"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import { Session } from "next-auth";
import { MainNav } from "@/components/ui/main-nav";
import { usePathname } from "next/navigation"

export default function NavBar({ session }: { session: Session | null }) {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);
  const pathname = usePathname()

  return (
    <>
      <SignInModal />
      <div
        className={`fixed top-0 flex w-full justify-center ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-[6rem] w-full max-w-screen-xl items-center justify-between">
          
          <Link href="/" className="flex items-center font-display text-2xl">
            { pathname !== "/rsvp" ? 
              <Image
                src="/logo-ej.svg"
                alt="Precedent logo"
                width="77"
                height="43"
                className="mr-2 absolute"
              ></Image> 
            : ''
            }
          </Link>

          <MainNav/>
          
          <div>
            {session ? (
              <UserDropdown session={session} />
            ) : (
              /*<button
                className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                onClick={() => setShowSignInModal(true)}
              >
                Acessar
              </button>**/
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}
