"use client";
import React, { useState } from "react";
import { Container } from "@/components/Container";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

export const CtaMaps = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs
      .send(
        "service_bzz7748", // Substitua pelo seu service_id
        "template_1md8uhg", // Substitua pelo seu template_id
        {
          from_name: formData.email,
          to_name: "julioc.developer@gmail.com",
          message: formData.message,
        },
        "kmAVQaHdZIbtP98vP" // Substitua pelo seu user_id
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Mensagem enviada com sucesso!");
        },
        (error) => {
          console.log(error.text);
          toast.error("Ocorreu um erro ao enviar a mensagem.");
        }
      );

    setFormData({
      email: "",
      message: "",
    });
  };

  return (
    <Container>
      <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.9838355226807!2d-38.961140400000005!3d-12.249373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x714378eac259919%3A0xc952715f67ad0978!2sR.%20Alo%C3%ADsio%20Rezende%2C%20143%20-%20Queimadinha%2C%20Feira%20de%20Santana%20-%20BA%2C%2044001-112!5e0!3m2!1spt-BR!2sbr!4v1720384083347!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            loading="lazy"
          ></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Envie sua mensagem
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Preencha os dados e mande sua mensagem de contato.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Seu E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg"
              >
                Enviar
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-3">
              Responderemos em até 24 horas.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
};
