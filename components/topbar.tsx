import { Clock, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export function TopBar() {
  return (
    <div className="w-full bg-primary text-white py-2">
      <div className="container">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <Link 
              href="tel:+557536167104"
              className="flex items-center gap-2 text-sm hover:text-gray-200 transition-colors"
            >
              <Phone className="w-4 h-4" />
              (75) 3616-7104
            </Link>
            <Link 
              href="https://goo.gl/maps/YOUR_MAP_LINK"
              target="_blank"
              className="hidden md:flex items-center gap-2 text-sm hover:text-gray-200 transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Av. João Durval Carneiro, 267
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <p className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4" />
              Seg-Sex: 07:00 - 19:00
            </p>
            <p className="hidden md:flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4" />
              Sáb: 08:00 - 12:00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}