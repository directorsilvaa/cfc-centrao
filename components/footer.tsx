import { Clock } from "lucide-react";
import { ContactButton } from "./contact-button";
import Link from "next/link";

export function Footer() {
  return (
    <div className="w-full mt-20 bg-zinc-900 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1">
            <h2 className="uppercase text-white font-bold text-md">
              Localização
            </h2>
            <div className="space-y-3 mt-4">
              <Link
                href={
                  "https://www.google.com/maps/place/Auto+Escola+Avenida/@-12.2765379,-38.960756,17z/data=!3m1!4b1!4m6!3m5!1s0x71437ae26f3f699:0x62800563bc88080f!8m2!3d-12.2765432!4d-38.9561426!16s%2Fg%2F11c1ww436y?entry=ttu"
                }
                target="_blank"
                className="flex items-center gap-2 text-white opacity-70"
              >
                Av. João Durval Carneiro, 267.
              </Link>
              <Link
                href={
                  "https://www.google.com/maps/place/Autoescola+Avenida+SIM/@-12.2466515,-38.9261701,17z/data=!3m1!4b1!4m6!3m5!1s0x71439e0c7b5bf65:0x74e4ae800344fcf6!8m2!3d-12.2466568!4d-38.9235952!16s%2Fg%2F11sj9qn3c_?entry=ttu"
                }
                target="_blank"
                className="flex items-center gap-2 text-white opacity-70"
              >
                Av. Artêmia Pires, 4679A - Bairro Sim
              </Link>
            </div>
          </div>
          <div className="col-span-1">
            <h2 className="uppercase text-white font-bold text-md">Contato</h2>
            <div className="mt-4">
              <ContactButton />
            </div>
          </div>
          <div className="col-span-1">
            <h2 className="uppercase text-white font-bold text-md">
              Atendimento
            </h2>
            <div className="space-y-3">
              <p className="mt-4 text-white opacity-70">
                Atendemos presencialmente e via Whatsapp nos seguintes horários:
              </p>
              <p className="flex items-center gap-2 text-white opacity-70">
                <Clock /> Segunda à Sexta: 8:00 - 19:00
              </p>
              <p className="flex items-center gap-2 text-white opacity-70">
                <Clock />
                Sábados: 8:00 - 12:00
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <h2 className="uppercase text-white font-bold text-md">
              Mapa do site
            </h2>
            <div className="space-y-3 mt-4">
              <Link
                href={"/"}
                className="flex items-center gap-2 text-white opacity-70"
              >
                
              </Link>
              <Link
                href={"/sobre"}
                className="flex items-center gap-2 text-white opacity-70"
              >
                Quem somos
              </Link>
              <Link
                href={"/servicos"}
                className="flex items-center gap-2 text-white opacity-70"
              >
                Serviços
              </Link>
              <Link
                href={"/duvidas"}
                className="flex items-center gap-2 text-white opacity-70"
              >
                Dúvidas
              </Link>
            </div>
          </div>
          <div className="col-span-1">
            <h2 className="uppercase text-white font-bold text-md">Legal</h2>
            <div className="space-y-3 mt-4">
              <Link
                href={"/sobre"}
                className="flex items-center gap-2 text-white opacity-70"
              >
                Politica de Privacidade
              </Link>
              <Link
                href={"/sobre"}
                className="flex items-center gap-2 text-white opacity-70"
              >
                Termos & Condições
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-zinc-800  mt-4 py-4">
          <p className="text-xs text-center text-white opacity-70">
            2010 - 2024 &copy; Auto Escola Avenida™ 
            CNPJ- 11.949.273/0001-01 .
            Todos os Direitos Reservados by <a href="https://introti.com.br" className="no-underline text-red cursor-pointer text-bold">IntroTI</a>
          </p>
        </div>
      </div>
    </div>
  );
}
