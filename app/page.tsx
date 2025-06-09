import { Button } from "@/components/ui/button";
import { Units } from "@/components/units";
import { CountingNumberAnimation } from "@/components/counting-number-animation";
import { ClientsCount } from "@/components/clients-count";
import { Customers } from "@/components/customers";
import { Treinamento } from "@/components/treinamento";
import { MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="container min-h-[700px] lg:min-h-[600px] flex items-center">
        <div className="w-full max-w-4xl mx-auto hero-gradient rounded-2xl p-8 lg:p-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 text-center leading-tight">
            <span className="block hero-title-line1">Sua Jornada Para a</span>
            <span className="block hero-title-highlight text-primary">Primeira Habilitação</span>
          </h1>

          <p className="hero-subtitle text-lg md:text-xl text-gray-700 text-center mt-6 max-w-2xl mx-auto">
            Há mais de 15 anos formando motoristas conscientes e preparados para o trânsito.
          </p>

          <div className="hero-buttons flex justify-center mt-10">
            <Link
              href="https://api.whatsapp.com/send/?phone=557536167104&text=Ol%C3%A1,%20Vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20come%C3%A7ar%20minha%20jornada%20para%20tirar%20minha%20habilita%C3%A7%C3%A3o.%20Poderia%20me%20ajudar?&type=phone_number&app_absent=0"
              target="_blank"
              className="group"
            >
              <Button className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-2xl hover:shadow-primary/25 hover:scale-105 transition-all duration-300 border border-white/20">
                <MessageCircle className="w-6 h-6 mr-3" />
                Começar Minha Jornada
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Units />
      <ClientsCount />
      <Treinamento />
      <Customers />
    </main>
  );
}