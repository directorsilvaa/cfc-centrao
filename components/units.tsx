"use client";

import { MapPin, PhoneIcon, Clock, Camera, X } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import Image from "next/image";

interface UnitData {
  id: string;
  title: string;
  address: string;
  description: string;
  mapLink: string;
  whatsappLink: string;
  backgroundImage: string;
  photos: string[];
}

const unitsData: UnitData[] = [
  {
    id: "artemia",
    title: "UNIDADE AUTOESCOLA AVENIDA",
    address: "Av. Artêmia Pires, 4679A - Bairro Sim",
    description: "Nossa unidade no Bairro Sim oferece estrutura completa para sua formação",
    mapLink: "https://www.google.com/maps/place/Autoescola+Avenida+SIM/@-12.2466515,-38.9261701,17z/data=!3m1!4b1!4m6!3m5!1s0x71439e0c7b5bf65:0x74e4ae800344fcf6!8m2!3d-12.2466568!4d-38.9235952!16s%2Fg%2F11sj9qn3c_?entry=ttu",
    whatsappLink: "https://api.whatsapp.com/send/?phone=557530229951&text=Ol%C3%A1,%20Vim%20atrav%C3%A9s%20do%20site.%20Poderia%20me%20ajudar?&type=phone_number&app_absent=0",
    backgroundImage: "bg-unit02",
    photos: ["/unidade-02.png", "/treinamento.jpg", "/01.jpeg", "/02.jpeg"]
  },
  {
    id: "joao-durval",
    title: "SEDE AUTOESCOLA AVENIDA",
    address: "Av. João Durval Carneiro, 267",
    description: "Nossa sede principal com toda infraestrutura e tradição de 14 anos",
    mapLink: "https://www.google.com/maps/place/Auto+Escola+Avenida/@-12.2765379,-38.960756,17z/data=!3m1!4b1!4m6!3m5!1s0x71437ae26f3f699:0x62800563bc88080f!8m2!3d-12.2765432!4d-38.9561426!16s%2Fg%2F11c1ww436y?entry=ttu",
    whatsappLink: "https://api.whatsapp.com/send/?phone=557536167104&text=Ol%C3%A1,%20Vim%20atrav%C3%A9s%20do%20site.%20Poderia%20me%20ajudar?&type=phone_number&app_absent=0",
    backgroundImage: "bg-unit02new",
    photos: ["/banner02.jpg", "/unidade.png", "/treinamento.jpeg", "/03.jpeg"]
  },
  {
    id: "feira-x",
    title: "AUTOESCOLA AVENIDA",
    address: "Rua. B 105 FEIRA X",
    description: "Nossa nova unidade já está funcionando para melhor atendê-los",
    mapLink: "https://www.google.com/maps/search/Rua+B+105+Feira+X",
    whatsappLink: "https://api.whatsapp.com/send/?phone=557536167104&text=Ol%C3%A1,%20Vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20saber%20sobre%20a%20unidade%20da%20Feira%20X.%20Poderia%20me%20ajudar?&type=phone_number&app_absent=0",
    backgroundImage: "bg-breve",
    photos: ["/breve.png", "/unidade-01.png", "/treinamento.jpg", "/02.jpeg"]
  }
];

export function Units() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  useEffect(() => {
    const checkOperatingHours = () => {
      const now = new Date();
      const currentDay = now.getDay();
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
      const currentTime = currentHour * 60 + currentMinute;

      if (currentDay === 0) {
        setIsOpen(false);
      } else if (currentDay >= 1 && currentDay <= 5) {
        const openTime = 8 * 60;
        const closeTime = 19 * 60;
        setIsOpen(currentTime >= openTime && currentTime < closeTime);
      } else if (currentDay === 6) {
        const openTime = 8 * 60;
        const closeTime = 12 * 60;
        setIsOpen(currentTime >= openTime && currentTime < closeTime);
      }
    };

    checkOperatingHours();
    const interval = setInterval(checkOperatingHours, 60000);
    return () => clearInterval(interval);
  }, []);

  const getOperatingStatus = () => {
    return isOpen ? {
      text: "ABERTO",
      bgColor: "bg-green-500/90",
      textColor: "text-white"
    } : {
      text: "FECHADO",
      bgColor: "bg-red-500/90",
      textColor: "text-white"
    };
  };

  const status = getOperatingStatus();

  const UnitCard = ({ unit }: { unit: UnitData }) => (
    <div className="w-full lg:w-1/3 space-y-6">
      {/* Photo Section */}
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20 rounded-xl z-10 group-hover:from-black/80 group-hover:via-black/40 group-hover:to-black/30 transition-all duration-300"></div>
        <div className={`w-full h-[300px] rounded-xl ${unit.backgroundImage} bg-cover bg-center relative z-20 flex items-center justify-center`}>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-white/90 hover:bg-white text-black rounded-full px-6 py-3 shadow-lg backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-all duration-300">
                <Camera className="w-5 h-5 mr-2" />
                Ver fotos da unidade
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold">{unit.title}</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-h-[70vh] overflow-y-auto p-4">
                {unit.photos.map((photo, index) => (
                  <div 
                    key={index} 
                    className="relative aspect-square cursor-pointer group/photo"
                    onClick={() => setSelectedPhoto(photo)}
                  >
                    <Image
                      src={photo}
                      alt={`${unit.title} - Foto ${index + 1}`}
                      fill
                      className="object-cover rounded-lg group-hover/photo:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/photo:bg-black/20 transition-all duration-300 rounded-lg flex items-center justify-center">
                      <Camera className="w-6 h-6 text-white opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Information Card */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
        <div className="space-y-4">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <h4 className="text-xs font-semibold uppercase text-primary tracking-wider">
              {unit.title}
            </h4>
          </div>
          
          <h2 className="text-xl font-bold text-gray-900 leading-tight">
            {unit.address}
          </h2>
          
          <div className={`inline-flex items-center gap-2 px-3 py-1 ${status.bgColor} ${status.textColor} text-xs font-bold rounded-full`}>
            <Clock className="w-3 h-3" />
            {status.text}
          </div>
          
          <p className="text-gray-600 text-sm leading-relaxed">
            {unit.description}
          </p>
          
          <div className="text-gray-500 text-xs space-y-1 bg-gray-50 p-3 rounded-lg">
            <p className="font-medium">Horário de Funcionamento:</p>
            <p>Seg-Sex: 08:00 - 19:00</p>
            <p>Sáb: 08:00 - 12:00</p>
            <p>Dom: Fechado</p>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <Link
              target="_blank"
              href={unit.mapLink}
              className="group/btn flex-1"
            >
              <Button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg h-12 group-hover/btn:scale-105 transition-all duration-300">
                <MapPin className="w-4 h-4 mr-2" />
                Ver no Mapa
              </Button>
            </Link>
            <Link
              target="_blank"
              href={unit.whatsappLink}
              className="group/btn flex-1"
            >
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white rounded-lg h-12 group-hover/btn:scale-105 transition-all duration-300">
                <PhoneIcon className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="w-full container">
        <div className="flex flex-col lg:flex-row items-start gap-8">
          {unitsData.map((unit) => (
            <UnitCard key={unit.id} unit={unit} />
          ))}
        </div>
      </div>

      {/* Full Screen Photo Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <Button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full w-10 h-10 p-0"
            >
              <X className="w-5 h-5" />
            </Button>
            <Image
              src={selectedPhoto}
              alt="Foto ampliada"
              width={800}
              height={600}
              className="object-contain max-h-[90vh] rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}