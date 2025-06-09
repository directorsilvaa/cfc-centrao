"use client";

import { ReactTyped } from "react-typed";

export function TextAnimation() {
  return (
    <p className="text-md opacity-75 my-6 mx-auto max-w-[700px]">
      <ReactTyped
        strings={[
          "Prepare-se para a Liberdade: Aprenda a Dirigir com Segurança na Nossa Autoescola!",
          "Transforme-se em um Motorista Confiante e Seguro com Nossa Experiência e Dedicação ao Ensino de Direção.",
          "Segurança ao Volante: Transformando Novatos em Motoristas Confiáveis!",
        ]}
        typeSpeed={60}
        loop
      />
    </p>
  );
}
