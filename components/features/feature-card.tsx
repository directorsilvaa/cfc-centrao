"use client";
import { ChevronRight, Clock, DollarSign, CheckCircle, Star, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import Image from "next/image";
import { DivideIcon as LucideIcon } from "lucide-react";

interface IComponentProps {
  imageURl: string;
  title: string;
  description: string;
  modalDescription: string;
  onClick: () => void;
  // Enhanced props for better UI
  icon?: LucideIcon;
  subtitle?: string;
  features?: string[];
  duration?: string;
  price?: string;
  color?: string;
  bgColor?: string;
  borderColor?: string;
}

export function FeatureCard({
  imageURl,
  title,
  description,
  modalDescription,
  icon: IconComponent,
  subtitle,
  features = [],
  duration,
  price,
  color = "from-primary to-blue-600",
  bgColor = "bg-gray-50",
  borderColor = "border-gray-200"
}: IComponentProps) {
  return (
    <div className="group h-full">
      <div className={`
        relative overflow-hidden rounded-3xl border-2 ${borderColor} ${bgColor} 
        hover:border-primary/40 hover:shadow-2xl hover:scale-105 hover:-translate-y-2
        transition-all duration-500 h-full flex flex-col
      `}>
        {/* Background Gradient Effect */}
        <div className={`
          absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${color} 
          opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 
          transition-transform duration-700
        `}></div>

        {/* Header Section */}
        <div className="relative z-10 p-6 pb-4">
          <div className="flex items-start gap-4 mb-4">
            {/* Icon */}
            {IconComponent && (
              <div className={`
                w-16 h-16 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center 
                shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300
              `}>
                <IconComponent className="w-8 h-8 text-white" />
              </div>
            )}

            {/* Service Image */}
            <div className="flex-1">
              <div className="relative w-20 h-20 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Image 
                  src={imageURl} 
                  width={80} 
                  height={80} 
                  alt={title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Title and Subtitle */}
          <div className="text-center mb-4">
            {subtitle && (
              <div className={`inline-block px-3 py-1 bg-gradient-to-r ${color} text-white text-xs font-semibold rounded-full mb-2`}>
                {subtitle}
              </div>
            )}
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
              {title}
            </h3>
          </div>

          {/* Price and Duration */}
          {(price || duration) && (
            <div className="flex items-center justify-center gap-4 mb-4">
              {price && (
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <DollarSign className="w-4 h-4" />
                  <span className="font-semibold">{price}</span>
                </div>
              )}
              {duration && (
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span className="font-semibold">{duration}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="relative z-10 px-6 flex-1 flex flex-col">
          {/* Description */}
          <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
            {description}
          </p>

          {/* Features List */}
          {features.length > 0 && (
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-800 mb-3">Inclui:</h4>
              <div className="space-y-2">
                {features.slice(0, 3).map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className={`w-5 h-5 bg-gradient-to-br ${color} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-xs text-gray-600">{feature}</span>
                  </div>
                ))}
                {features.length > 3 && (
                  <div className="text-xs text-gray-500 italic">
                    +{features.length - 3} outros benefícios
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Action Button */}
          <div className="mt-auto">
            <Dialog>
              <DialogTrigger asChild>
                <Button className={`
                  w-full bg-gradient-to-r ${color} hover:opacity-90 text-white rounded-xl 
                  py-3 font-bold shadow-lg hover:shadow-xl transition-all duration-300 
                  group-hover:scale-105
                `}>
                  <span>Ver detalhes</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </DialogTrigger>

              <DialogContent className="max-w-2xl max-h-[90vh] overflow-hidden">
                <DialogHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    {IconComponent && (
                      <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    )}
                    <div>
                      <DialogTitle className="text-2xl font-bold text-gray-900">{title}</DialogTitle>
                      {subtitle && (
                        <p className="text-gray-600 text-sm">{subtitle}</p>
                      )}
                    </div>
                  </div>

                  {/* Price and Duration in Modal */}
                  {(price || duration) && (
                    <div className="flex items-center gap-6 mb-4 p-4 bg-gray-50 rounded-xl">
                      {price && (
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-5 h-5 text-gray-600" />
                          <div>
                            <p className="text-sm text-gray-600">Preço</p>
                            <p className="font-bold text-gray-900">{price}</p>
                          </div>
                        </div>
                      )}
                      {duration && (
                        <div className="flex items-center gap-2">
                          <Clock className="w-5 h-5 text-gray-600" />
                          <div>
                            <p className="text-sm text-gray-600">Duração</p>
                            <p className="font-bold text-gray-900">{duration}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </DialogHeader>

                <div className="max-h-[60vh] overflow-y-auto space-y-6">
                  {/* Description */}
                  <DialogDescription className="text-gray-700 leading-relaxed text-base">
                    {modalDescription}
                  </DialogDescription>

                  {/* Complete Features List */}
                  {features.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-500" />
                        O que está incluso:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                            <div className={`w-6 h-6 bg-gradient-to-br ${color} rounded-full flex items-center justify-center flex-shrink-0`}>
                              <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-sm font-medium text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Call to Action */}
                  <div className={`p-6 bg-gradient-to-r ${color} rounded-xl text-white text-center`}>
                    <h4 className="text-lg font-bold mb-2">Interessado neste serviço?</h4>
                    <p className="text-sm opacity-90 mb-4">
                      Entre em contato conosco para mais informações e agendamento
                    </p>
                    <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-lg px-6 py-2">
                      Falar com especialista
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Hover Effect Border */}
        <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/50 transition-all duration-300 pointer-events-none"></div>
      </div>
    </div>
  );
}