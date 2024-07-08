"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import avenidaJoao from "../../public/img/centrao/logo1.png";
import avenidaSim from "../../public/img/centrao/logo2.png";
import logoDominio from "../../public/img/centrao/logo3.png";
import logoFarol from "../../public/img/centrao/logo4.png";
import logoFeirense from "../../public/img/centrao/logo5.png";
import logoHabilitar from "../../public/img/centrao/logo6.png";
import logo7 from "../../public/img/centrao/logo7.png";
import logo8 from "../../public/img/centrao/logo8.png";
import logo9 from "../../public/img/centrao/logo9.png";
import logo10 from "../../public/img/centrao/logo10.png";
import logo11 from "../../public/img/centrao/logo11.png";
import logo12 from "../../public/img/centrao/logo12.png";
import logo13 from "../../public/img/centrao/logo13.png";
import logo14 from "../../public/img/centrao/logo14.png";
import logo15 from "../../public/img/centrao/logo15.png";
import logo16 from "../../public/img/centrao/logo16.png";
import logo17 from "../../public/img/centrao/logo17.png";
import logo18 from "../../public/img/centrao/logo18.png";
import logo19 from "../../public/img/centrao/logo19.png";
import logo20 from "../../public/img/centrao/logo20.png";
import logo21 from "../../public/img/centrao/logo21.png";

const logos = [
  { src: avenidaJoao, width: 170, height: 100, alt: "Escola Avenida João" },
  { src: avenidaSim, width: 130, height: 100, alt: "Escola Avenida Sim" },
  { src: logoDominio, width: 80, height: 100, alt: "Logo Domínio" },
  { src: logoFarol, width: 140, height: 100, alt: "Logo Farol" },
  { src: logoFeirense, width: 80, height: 100, alt: "Logo Feirense" },
  { src: logoHabilitar, width: 100, height: 100, alt: "Logo Habilitar" },
  { src: logo7, width: 100, height: 100, alt: "Logo Habilitar" },
  { src: logo8, width: 100, height: 100, alt: "Logo Habilitar" },
  { src: logo9, width: 100, height: 100, alt: "Logo Habilitar" },
  { src: logo10, width: 100, height: 100, alt: "Logo Habilitar" },
  { src: logo11, width: 100, height: 100, alt: "Logo Habilitar" },
  { src: logo12, width: 100, height: 100, alt: "Logo Habilitar" },
  { src: logo13, width: 100, height: 100, alt: "Logo Habilitar" },
  { src: logo14, width: 100, height: 100, alt: "Logo Habilitar" },
  { src: logo15, width: 100, height: 100, alt: "Logo Habilitar" },
  { src: logo16, width: 100, height: 100, alt: "Logo Habilitar" },
  { src: logo17, width: 100, height: 100, alt: "Logo Habilitar" },
  { src: logo18, width: 100, height: 100, alt: "Logo Habilitar" },
  { src: logo19, width: 100, height: 100, alt: "Logo Habilitar" },
  { src: logo20, width: 100, height: 100, alt: "Logo Habilitar" },
  { src: logo21, width: 100, height: 100, alt: "Logo Habilitar" },
];

const LogoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getDisplayedLogos = () => {
    if (isMobile) {
      return [logos[currentIndex]];
    }

    const end = currentIndex + 5;
    if (end <= logos.length) {
      return logos.slice(currentIndex, end);
    } else {
      return logos.slice(currentIndex).concat(logos.slice(0, end - logos.length));
    }
  };

  const displayedLogos = getDisplayedLogos();

  return (
    <div className="flex flex-col justify-center items-center p-5">
      <h2 className="text-2xl font-bold text-gray-800">
        Empresas{" "}
        <span className="bg-yellow-500 text-black px-1">Parceiras</span>
      </h2>
      <div className="w-full mt-10 overflow-hidden relative">
        <div
          className="flex justify-center items-center gap-5 transition-transform duration-500 ease-in-out"
          // style={{
          //   transform: `translateX(-${(currentIndex * (isMobile ? 100 : 20))}%)`,
          //   width: `${isMobile ? 100 : 500}%`,
          // }}
        >
          {displayedLogos.map((logo, index) => (
            <div
              key={index}
              className="p-3 rounded-lg min-w-[5%] flex-shrink-0 flex justify-center items-center"
            >
              <Image
                src={logo.src}
                width={logo.width}
                height={logo.height}
                alt={logo.alt}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
