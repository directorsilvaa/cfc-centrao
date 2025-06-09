"use client";

import { useState } from "react";
import { Play, Users, Star, Quote, ChevronLeft, ChevronRight, Award, Heart, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

interface VideoData {
  id: string;
  title: string;
  description: string;
  embedId: string;
  studentName: string;
  category: string;
  thumbnail: string;
  testimonial: string;
  rating: number;
}

const videosData: VideoData[] = [
  {
    id: "1",
    title: "Aprovação na Primeira Tentativa",
    description: "Depoimento emocionante de aprovação",
    embedId: "-8G_wlQNnSQ",
    studentName: "João",
    category: "Categoria B",
    thumbnail: "https://img.youtube.com/vi/-8G_wlQNnSQ/maxresdefault.jpg",
    testimonial: "A Auto Escola Avenida me deu toda confiança que eu precisava. Passei de primeira!",
    rating: 5
  },
  {
    id: "2",
    title: "Superando o Medo de Dirigir",
    description: "História inspiradora de superação",
    embedId: "O1vrtQ24L1U",
    studentName: "Gilmar",
    category: "Categoria A",
    thumbnail: "https://img.youtube.com/vi/O1vrtQ24L1U/maxresdefault.jpg",
    testimonial: "Os instrutores são muito pacientes e me ajudaram a superar meus medos.",
    rating: 5
  },
  {
    id: "3",
    title: "Realização de um Sonho",
    description: "Conquista da primeira habilitação",
    embedId: "-8G_wlQNnSQ",
    studentName: "João",
    category: "Categoria AB",
    thumbnail: "https://img.youtube.com/vi/-8G_wlQNnSQ/maxresdefault.jpg",
    testimonial: "Sempre sonhei em ter minha carteira. Aqui realizei esse sonho com segurança!",
    rating: 5
  }
];

const successStats = [
  { icon: Users, value: "11.548+", label: "Alunos Formados", color: "from-blue-500 to-blue-600" },
  { icon: Award, value: "92%", label: "Taxa de Aprovação", color: "from-green-500 to-green-600" },
  { icon: Star, value: "4.9", label: "Avaliação Média", color: "from-yellow-500 to-yellow-600" },
  { icon: Heart, value: "98%", label: "Recomendação", color: "from-red-500 to-red-600" }
];

export function Customers() {
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % videosData.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + videosData.length) % videosData.length);
  };

  return (
    <div className="container mt-28 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 rounded-3xl"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-full -translate-y-48 translate-x-48 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-500/10 to-indigo-500/10 rounded-full translate-y-32 -translate-x-32 blur-3xl"></div>

      <div className="relative z-10 p-8 lg:p-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20 mb-6">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Nossos Alunos
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Histórias de <span className="text-transparent bg-gradient-to-r from-primary to-blue-600 bg-clip-text">Sucesso</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conheça as experiências reais dos nossos alunos e veja como transformamos sonhos em realidade através da educação no trânsito.
          </p>
        </div>

        {/* Success Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {successStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="group">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className={`text-2xl lg:text-3xl font-black text-transparent bg-gradient-to-r ${stat.color} bg-clip-text mb-1`}>
                    {stat.value}
                  </div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Testimonial */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-white/50 mb-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Depoimento em Destaque</h3>
                <p className="text-gray-600">Experiência real dos nossos alunos</p>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button
                onClick={prevTestimonial}
                variant="outline"
                size="sm"
                className="rounded-full w-10 h-10 p-0 border-gray-300 hover:border-primary hover:text-primary"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                onClick={nextTestimonial}
                variant="outline"
                size="sm"
                className="rounded-full w-10 h-10 p-0 border-gray-300 hover:border-primary hover:text-primary"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <blockquote className="text-xl lg:text-2xl font-medium text-gray-800 leading-relaxed mb-6 italic">
                "{videosData[currentTestimonial].testimonial}"
              </blockquote>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white font-bold">
                  {videosData[currentTestimonial].studentName.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{videosData[currentTestimonial].studentName}</h4>
                  <p className="text-sm text-gray-600">{videosData[currentTestimonial].category}</p>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-6">
                {[...Array(videosData[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <Button
                onClick={() => setSelectedVideo(videosData[currentTestimonial])}
                className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white rounded-xl px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                Assistir Depoimento
              </Button>
            </div>

            <div className="relative group cursor-pointer" onClick={() => setSelectedVideo(videosData[currentTestimonial])}>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src={videosData[currentTestimonial].thumbnail}
                  alt={videosData[currentTestimonial].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Play className="w-6 h-6 text-primary ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Gallery */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-8">
            Mais Depoimentos dos Nossos Alunos
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videosData.map((video, index) => (
              <div key={video.id} className="group">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-white/50 hover:shadow-xl hover:scale-105 transition-all duration-300">
                  {/* Video Thumbnail */}
                  <div 
                    className="relative aspect-video cursor-pointer overflow-hidden"
                    onClick={() => setSelectedVideo(video)}
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Play className="w-5 h-5 text-primary ml-0.5" />
                      </div>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                      {video.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h4 className="font-bold text-gray-900 mb-2 line-clamp-2">{video.title}</h4>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{video.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          {video.studentName.charAt(0)}
                        </div>
                        <span className="text-sm font-medium text-gray-700">{video.studentName}</span>
                      </div>
                      
                      <div className="flex items-center gap-1">
                        {[...Array(video.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary to-blue-600 rounded-3xl p-8 lg:p-12 text-white">
          <TrendingUp className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Seja o Próximo Sucesso!
          </h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Junte-se aos milhares de alunos que já conquistaram sua habilitação conosco. 
            Sua história de sucesso pode ser a próxima!
          </p>
          <Button className="bg-white text-primary hover:bg-gray-100 rounded-xl px-8 py-3 font-bold shadow-lg hover:shadow-xl transition-all duration-300">
            Começar Minha Jornada
          </Button>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0">
            <DialogHeader className="p-6 pb-0">
              <DialogTitle className="text-xl font-bold">{selectedVideo.title}</DialogTitle>
            </DialogHeader>
            <div className="aspect-video">
              <iframe
                title={selectedVideo.title}
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo.embedId}?autoplay=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-b-lg"
              ></iframe>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}