"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronRight, Camera, MapPin, Shield, Users, Clock, Award, CheckCircle, Star, Play } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export function Treinamento() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const trainingImages = [
    { src: "/treinamento.jpg", title: "Área de Treinamento Principal", description: "Espaço amplo para práticas de direção" },
    { src: "/02.jpeg", title: "Pista de Treinamento", description: "Circuito completo para aprendizado" },
    { src: "/01.jpeg", title: "Estrutura Moderna", description: "Instalações de primeira qualidade" },
    { src: "/03.jpeg", title: "Área de Descanso", description: "Conforto para nossos alunos" }
  ];

  const facilities = [
    { icon: Shield, title: "Segurança 24h", description: "Monitoramento completo" },
    { icon: Users, title: "Instrutores Qualificados", description: "Profissionais experientes" },
    { icon: MapPin, title: "Localização Estratégica", description: "Fácil acesso" },
    { icon: Award, title: "Certificação Detran", description: "Aprovado pelos órgãos competentes" }
  ];

  const features = [
    "Pista similar ao exame do DETRAN",
    "Sanitários e bebedouros",
    "Área de descanso climatizada",
    "Estacionamento gratuito",
    "Vigilância 24 horas",
    "Veículos modernos e seguros"
  ];

  return (
    <div className="w-full mt-24 relative overflow-hidden">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
      <div className="absolute inset-0 bg-[url('/street.svg')] opacity-5"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-full -translate-x-48 -translate-y-48 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500/20 to-indigo-500/20 rounded-full translate-x-48 translate-y-48 blur-3xl"></div>

      <div className="relative z-10 container py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 mb-6">
            <Camera className="w-5 h-5 text-white" />
            <span className="text-sm font-semibold text-white uppercase tracking-wider">
              Nossa Infraestrutura
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Centro de <span className="text-transparent bg-gradient-to-r from-primary to-blue-400 bg-clip-text">Treinamento</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Nosso espaço de formação é reservado de forma exclusiva para os estudantes da Avenida, 
            oferecendo um ambiente propício e seguro para as sessões de treinamento com toda infraestrutura necessária.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {facilities.map((facility, index) => {
            const IconComponent = facility.icon;
            return (
              <div key={index} className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{facility.title}</h3>
                  <p className="text-gray-300 text-sm">{facility.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Features List */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            O que oferecemos no nosso centro
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 group">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-200 group-hover:text-white transition-colors duration-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {trainingImages.map((image, index) => (
            <div key={index} className="group relative">
              <div className="relative h-[300px] overflow-hidden rounded-2xl border-2 border-white/20 group-hover:border-white/40 transition-all duration-300">
                <Image
                  src={image.src}
                  width={400}
                  height={300}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-white font-bold text-sm mb-1">{image.title}</h4>
                  <p className="text-gray-300 text-xs">{image.description}</p>
                </div>

                {/* View Button */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    onClick={() => setSelectedImage(image.src)}
                    className="bg-white/20 hover:bg-white/30 text-white rounded-full w-10 h-10 p-0 backdrop-blur-sm border border-white/30"
                  >
                    <Camera className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-2xl hover:shadow-primary/25 hover:scale-105 transition-all duration-300 border border-white/20">
                <Camera className="w-5 h-5 mr-3" />
                Ver Todas as Fotos
                <ChevronRight className="w-5 h-5 ml-3" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-center">
                  Galeria do Centro de Treinamento
                </DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[70vh] overflow-y-auto p-4">
                {trainingImages.map((image, index) => (
                  <div 
                    key={index} 
                    className="relative aspect-video cursor-pointer group/photo overflow-hidden rounded-lg"
                    onClick={() => setSelectedImage(image.src)}
                  >
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-cover group-hover/photo:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/photo:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <Play className="w-8 h-8 text-white opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                      <h4 className="text-white font-semibold text-sm">{image.title}</h4>
                      <p className="text-gray-300 text-xs">{image.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Statistics Bar */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <div className="text-3xl font-black text-white mb-2">100%</div>
            <p className="text-gray-300 text-sm">Segurança Garantida</p>
          </div>
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <div className="text-3xl font-black text-white mb-2">24h</div>
            <p className="text-gray-300 text-sm">Monitoramento</p>
          </div>
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <div className="text-3xl font-black text-white mb-2">15+</div>
            <p className="text-gray-300 text-sm">Anos de Experiência</p>
          </div>
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-300 text-sm">Avaliação dos Alunos</p>
          </div>
        </div>
      </div>

      {/* Full Screen Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-full">
            <Button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full w-12 h-12 p-0 backdrop-blur-sm"
            >
              ✕
            </Button>
            <Image
              src={selectedImage}
              alt="Foto ampliada"
              width={1000}
              height={700}
              className="object-contain max-h-[90vh] rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}