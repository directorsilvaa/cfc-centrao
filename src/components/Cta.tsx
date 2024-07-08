import React from "react";
import { Container } from "@/components/Container";

export const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full gap-5 mx-auto text-white bg-gradient-to-r from-yellow-500 to-yellow-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl shadow-lg">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Precisando falar com um atendente?
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Clique no botão para um atendimento rápido
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="https://wa.me/7536148088" // Substitua pelo número do WhatsApp real
            target="_blank"
            rel="noopener"
            className="inline-flex items-center py-3 mx-auto text-lg font-medium text-center text-white bg-green-600 rounded-md px-7 lg:px-10 lg:py-5 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
              />
            </svg>
            Falar com atendente
          </a>
        </div>
      </div>
    </Container>
  );
};
