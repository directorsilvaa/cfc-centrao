"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { ContactButton } from "./contact-button";

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className="w-full mt-4 lg:mt-0">
      {isOpen && (
        <div className="py-8 fixed w-screen h-screen bg-white top-0 left-0 z-30">
          <div className="container flex items-center justify-between">
            <Image
              onClick={() => {
                router.push("/");
                setIsOpen(false);
              }}
              src={"/brand.png"}
              width={130}
              height={80}
              alt="Logo"
            />
            <Button onClick={() => setIsOpen(false)} variant={"ghost"}>
              <XIcon />
            </Button>
          </div>
          <div className="container py-10">
            <ul className="flex flex-col items-center gap-10">
              <li
                onClick={() => {
                  router.push("/");
                  setIsOpen(false);
                }}
                className={`cursor-pointer hover:text-primary after:w-6 after:h-1 ${
                  pathname === "/" ? "after:bg-primary" : "after:bg-transparent"
                } transition-all after:rounded-full after:mx-auto after:block`}
              >
             inicio
              </li>
              <li
                onClick={() => {
                  router.push("/sobre");
                  setIsOpen(false);
                }}
                className={`cursor-pointer hover:text-primary after:w-6 after:h-1 ${
                  pathname === "/sobre"
                    ? "after:bg-primary"
                    : "after:bg-transparent"
                } transition-all after:rounded-full after:mx-auto after:block`}
              >
                Sobre
              </li>
              <li
                onClick={() => {
                  router.push("/servicos");
                  setIsOpen(false);
                }}
                className={`cursor-pointer hover:text-primary after:w-6 after:h-1 ${
                  pathname === "/servicos"
                    ? "after:bg-primary"
                    : "after:bg-transparent"
                } transition-all after:rounded-full after:mx-auto after:block`}
              >
                Serviços
              </li>
              <li
                onClick={() => {
                  router.push("/duvidas");
                  setIsOpen(false);
                }}
                className={`cursor-pointer hover:text-primary after:w-6 after:h-1 ${
                  pathname === "/duvidas"
                    ? "after:bg-primary"
                    : "after:bg-transparent"
                } transition-all after:rounded-full after:mx-auto after:block`}
              >
                Dúvidas
              </li>
              <ContactButton />
            </ul>
          </div>
        </div>
      )}
      <div className="flex container lg:hidden items-center justify-between">
        <Image
          onClick={() => router.push("/")}
          src={"/brand.png"}
          width={130}
          height={80}
          alt="Logo"
        />
        <Button onClick={() => setIsOpen(true)} variant={"ghost"}>
          <MenuIcon />
        </Button>
      </div>
      <div className="hidden lg:block container">
        <div className="flex items-center justify-between py-5">
          <div className="flex items-center gap-16">
            <Image
              onClick={() => router.push("/")}
              src={"/brand.png"}
              width={130}
              height={80}
              alt="Logo"
            />
            <ul className="flex items-center gap-10">
              <li
                onClick={() => {
                  setIsOpen(false);
                  router.push("/");
                }}
                className={`cursor-pointer hover:text-primary after:w-6 after:h-1 ${
                  pathname === "/" ? "after:bg-primary" : "after:bg-transparent"
                } transition-all after:rounded-full after:mx-auto after:block`}
              >
                inicio
              </li>
              <li
                onClick={() => {
                  setIsOpen(false);
                  router.push("/sobre");
                }}
                className={`cursor-pointer hover:text-primary after:w-6 after:h-1 ${
                  pathname === "/sobre"
                    ? "after:bg-primary"
                    : "after:bg-transparent"
                } transition-all after:rounded-full after:mx-auto after:block`}
              >
                Sobre
              </li>
              <li
                onClick={() => {
                  setIsOpen(false);
                  router.push("/servicos");
                }}
                className={`cursor-pointer hover:text-primary after:w-6 after:h-1 ${
                  pathname === "/servicos"
                    ? "after:bg-primary"
                    : "after:bg-transparent"
                } transition-all after:rounded-full after:mx-auto after:block`}
              >
                Serviços
              </li>
              <li
                onClick={() => {
                  setIsOpen(false);
                  router.push("/duvidas");
                }}
                className={`cursor-pointer hover:text-primary after:w-6 after:h-1 ${
                  pathname === "/duvidas"
                    ? "after:bg-primary"
                    : "after:bg-transparent"
                } transition-all after:rounded-full after:mx-auto after:block`}
              >
                Dúvidas
              </li>
            </ul>
          </div>

          <div>
            <ContactButton />
          </div>
        </div>
      </div>
    </nav>
  );
}
