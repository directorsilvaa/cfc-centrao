"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import avenidaJoao from "../../public/img/brands/logo-joao.png";
import avenidaSim from "../../public/img/brands/logo-sim.png";
import logoDominio from "../../public/img/brands/logo-dominio.png";
import logoFarol from "../../public/img/brands/logo-farol.png";
import logoFeirense from "../../public/img/brands/logo-feirense.jpg";
import logoHabilitar from "../../public/img/brands/logo-habilitar.jpg";

const logos = [
  {
    src: avenidaJoao,
    width: 170,
    height: 100,
    alt: "Escola Avenida João",
  },
  {
    src: avenidaSim,
    width: 130,
    height: 100,
    alt: "Escola Avenida Sim",
  },
  {
    src: logoDominio,
    width: 80,
    height: 100,
    alt: "Logo Domínio",
  },
  { src: logoFarol, width: 140, height: 100, alt: "Logo Farol" },
  {
    src: logoFeirense,
    width: 80,
    height: 100,
    alt: "Logo Feirense",
  },
  {
    src: logoHabilitar,
    width: 90,
    height: 100,
    alt: "Logo Habilitar",
  },
];

const LogoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Defina o breakpoint para considerar como mobile
    };

    handleResize(); // Verifique o tamanho da tela no primeiro render
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (logos.length > 5) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
      }, 3000); // Altere o tempo conforme necessário (3000ms = 3 segundos)

      return () => clearInterval(interval);
    }
  }, []);

  const displayedLogos = isMobile
    ? [logos[currentIndex]]
    : logos.slice(currentIndex, currentIndex + 5).concat(
        logos.slice(0, Math.max(0, (currentIndex + 5) - logos.length))
      );

  const translateXPercentage = isMobile ? 100 : (100 / 5);

  return (
    <div className="flex flex-col justify-center items-center p-5">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
        Empresas{" "}
        <span className="bg-yellow-500 text-black px-1">Parceiras</span>
      </h2>
      <div className="w-full mt-10 overflow-hidden relative">
        <div
          className="flex justify-center gap-5 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * translateXPercentage}%)`,
          }}
        >
          {displayedLogos.map((logo, index) => (
            <div key={index} className="bg-gray-100 p-3 rounded-lg shadow-lg min-w-[20%] flex-shrink-0">
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
