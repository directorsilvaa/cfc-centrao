"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import Link from "next/link";

export function ContactButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Entre em contato</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Entre em contato</DialogTitle>
          <DialogDescription>Escolha uma das nossas unidades</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col md:flex-row items-center gap-6 text-center">
          <Link
            className="w-full md:w-1/2"
            target="_blank"
            href={
              "https://api.whatsapp.com/send/?phone=557536167104&text=Ol%C3%A1,%20Vim%20atrav%C3%A9s%20do%20site.%20Poderia%20me%20ajudar?&type=phone_number&app_absent=0"
            }
          >
            <div className="w-full max-h-[400px] p-8 bg-white shadow border hover:border-primary hover:text-primary transition-all cursor-pointer rounded-lg">
              <h4 className="text-xs opacity-80 font-semibold uppercase">
                UNIDADE AUTOESCOLA AVENIDA
              </h4>
              <h2 className="text-md font-bold my-4 max-w-[380px] text-center">
                Av. João Durval Carneiro, 267.
              </h2>
            </div>
          </Link>
          <Link
            className="w-full md:w-1/2"
            target="_blank"
            href={
              "https://api.whatsapp.com/send/?phone=557530229951&text=Ol%C3%A1,%20Vim%20atrav%C3%A9s%20do%20site.%20Poderia%20me%20ajudar?&type=phone_number&app_absent=0"
            }
          >
            <div className="w-full max-h-[400px] p-8 bg-white shadow border hover:border-primary hover:text-primary transition-all cursor-pointer rounded-lg">
              <h4 className="text-xs opacity-80 font-semibold uppercase">
                UNIDADE AUTOESCOLA AVENIDA
              </h4>
              <h2 className="text-md font-bold my-4 max-w-[380px] text-center">
                Av. Artêmia Pires, 4679A - Bairro Sim
              </h2>
            </div>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}
