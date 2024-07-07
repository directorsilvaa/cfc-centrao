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

const ServicesContent = () => {
  return (
    <div className="flex flex-col justify-center items-center p-5">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
        Nossos <span className="bg-yellow-500 text-black px-1">Servicos</span>
      </h2>
      <p className="text-sm text-gray-800 py-2">
        Nosso centro de formação de condutores oferece uma variedade de serviços
        para atender às necessidades de todos os motoristas.{" "}
      </p>
      <div className="w-full mt-10 overflow-hidden relative">
        <div className="flex flex-wrap flex-row -mx-4 text-center">
          <div
            className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
            // style="visibility: visible; animation-duration: 1s; animation-name: fadeInUp;"
          >
            <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
              <div className="inline-block text-gray-900 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                Aulas Teóricas de Primeira Habilitação
              </h3>
              <p className="text-gray-500">
                Nossas aulas teóricas para a primeira habilitação são projetadas
                para preparar novos condutores com todo o conhecimento
                necessário para uma condução segura e responsável.
              </p>
            </div>
          </div>
          <div
            className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".1s"
            // style="visibility: visible; animation-duration: 1s; animation-delay: 0.1s; animation-name: fadeInUp;"
          >
            <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
              <div className="inline-block text-gray-900 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  fill="currentColor"
                  className="bi bi-chat-square-dots"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path>
                  <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                Curso de Renovação
              </h3>
              <p className="text-gray-500">
                Para aqueles que precisam renovar sua Carteira Nacional de
                Habilitação (CNH), oferecemos um curso de renovação completo.
              </p>
            </div>
          </div>
          <div
            className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".3s"
            // style="visibility: visible; animation-duration: 1s; animation-delay: 0.3s; animation-name: fadeInUp;"
          >
            <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
              <div className="inline-block text-gray-900 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  fill="currentColor"
                  className="bi bi-badge-ad"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.7 11l.47-1.542h2.004L6.644 11h1.261L5.901 5.001H4.513L2.5 11h1.2zm1.503-4.852l.734 2.426H4.416l.734-2.426h.053zm4.759.128c-1.059 0-1.753.765-1.753 2.043v.695c0 1.279.685 2.043 1.74 2.043.677 0 1.222-.33 1.367-.804h.057V11h1.138V4.685h-1.16v2.36h-.053c-.18-.475-.68-.77-1.336-.77zm.387.923c.58 0 1.002.44 1.002 1.138v.602c0 .76-.396 1.2-.984 1.2-.598 0-.972-.449-.972-1.248v-.453c0-.795.37-1.24.954-1.24z"></path>
                  <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"></path>
                </svg>
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                Aulas de Reciclagem
              </h3>
              <p className="text-gray-500">
                Motoristas que precisam passar por um processo de reciclagem
                também encontram em nosso centro o suporte necessário.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesContent;
