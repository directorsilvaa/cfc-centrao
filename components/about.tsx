"use client";
import Image from "next/image";
import { Award, Users, Clock, Shield, Star, CheckCircle, TrendingUp, Heart, Target, Zap } from "lucide-react";
import { CountingNumberAnimation } from "./counting-number-animation";

export function About() {
  const achievements = [
    { icon: Users, value: "11.548+", label: "Alunos Formados", color: "from-blue-500 to-blue-600" },
    { icon: Award, value: "92%", label: "Taxa de Aprovação", color: "from-green-500 to-green-600" },
    { icon: Clock, value: "15", label: "Anos de Experiência", color: "from-purple-500 to-purple-600" },
    { icon: Shield, value: "100%", label: "Segurança Garantida", color: "from-red-500 to-red-600" }
  ];

  const values = [
    {
      icon: Target,
      title: "Missão",
      description: "Formar motoristas conscientes e preparados para o trânsito com excelência e responsabilidade.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Heart,
      title: "Valores",
      description: "Compromisso, segurança, qualidade e respeito são os pilares que guiam nossa atuação.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Zap,
      title: "Visão",
      description: "Ser referência em educação no trânsito, contribuindo para um futuro mais seguro.",
      color: "from-yellow-500 to-yellow-600"
    }
  ];

  const highlights = [
    "Instrutores altamente qualificados",
    "Metodologia de ensino comprovada",
    "Infraestrutura moderna e segura",
    "Atendimento personalizado",
    "Veículos novos e bem conservados",
    "Aprovação acima da média nacional"
  ];

  return (
    <div className="mt-28 container relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 rounded-3xl -mx-8 -my-8"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-full -translate-y-48 translate-x-48 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-500/10 to-indigo-500/10 rounded-full translate-y-32 -translate-x-32 blur-3xl"></div>

      <div className="relative z-10 p-8 lg:p-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20 mb-6">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Nossa História
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Nossa <span className="text-transparent bg-gradient-to-r from-primary to-blue-600 bg-clip-text">Trajetória</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Há mais de 15 anos transformando vidas através da educação no trânsito, 
            formando motoristas conscientes e preparados para enfrentar os desafios das estradas.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image Section */}
          <div className="order-2 lg:order-1 relative group">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white">
              <Image 
                src="/unidade.png" 
                width={600} 
                height={400} 
                alt="Auto Escola Avenida - Fachada" 
                className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay with Stats */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-black text-primary">15+</div>
                        <div className="text-xs text-gray-600">Anos</div>
                      </div>
                      <div>
                        <div className="text-2xl font-black text-primary">11K+</div>
                        <div className="text-xs text-gray-600">Alunos</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Achievement Badge */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl p-4 shadow-xl border-4 border-white">
              <div className="text-center">
                <Award className="w-8 h-8 mx-auto mb-2" />
                <div className="text-lg font-black">92%</div>
                <div className="text-xs">Aprovação</div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                Nossa Trajetória
              </h3>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-primary">Desde 2010</strong>, a Auto Escola Avenida tem sido o principal ponto de partida para aspirantes a motoristas que buscam dominar as estradas com segurança e confiança.
                </p>
                
                <p>
                  Localizada estrategicamente na movimentada Avenida Principal, nossa escola de direção tem sido a escolha confiável para inúmeros alunos que buscam não apenas obter suas carteiras de motorista, mas também adquirir as <strong className="text-primary">habilidades essenciais</strong> para se tornarem condutores responsáveis.
                </p>
                
                <p>
                  Nossa equipe altamente capacitada e experiente está comprometida em oferecer uma <strong className="text-primary">educação de qualidade</strong>, tanto teórica quanto prática. Desde aulas detalhadas sobre regras de trânsito até instruções precisas no volante, nossos instrutores estão aqui para orientar nossos alunos em cada passo do caminho.
                </p>
              </div>

              {/* Highlights List */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Nossos Princípios
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 h-full">
                    <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Nossos Resultados
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 text-center">
                    <div className={`w-14 h-14 bg-gradient-to-br ${achievement.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <div className={`text-2xl lg:text-3xl font-black text-transparent bg-gradient-to-r ${achievement.color} bg-clip-text mb-2`}>
                      {achievement.value.includes('+') ? (
                        <>
                          <CountingNumberAnimation 
                            targetNumber={parseInt(achievement.value.replace(/[^\d]/g, ''))} 
                            duration={2000} 
                          />
                          {achievement.value.includes('+') ? '+' : ''}
                          {achievement.value.includes('%') ? '%' : ''}
                        </>
                      ) : (
                        achievement.value
                      )}
                    </div>
                    <p className="text-sm font-medium text-gray-600">{achievement.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Commitment Section */}
        <div className="bg-gradient-to-r from-primary to-blue-600 rounded-3xl p-8 lg:p-12 text-white text-center">
          <TrendingUp className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Nosso Compromisso
          </h3>
          <p className="text-lg opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Na Auto Escola Avenida, não apenas preparamos nossos alunos para passar nos exames de direção, 
            mas também os capacitamos para se tornarem motoristas seguros e conscientes. Nossa abordagem 
            centrada no aluno garante que cada indivíduo receba a atenção personalizada de que precisa para prosperar.
          </p>
          <div className="inline-flex items-center gap-4 bg-white/20 backdrop-blur-sm px-8 py-4 rounded-2xl border border-white/30">
            <Star className="w-6 h-6 text-yellow-300" />
            <span className="font-bold text-lg">Taxa de aprovação acima da média nacional</span>
            <Star className="w-6 h-6 text-yellow-300" />
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-700 mb-6 font-medium">
            Junte-se a nós na Auto Escola Avenida e dê o primeiro passo rumo a uma jornada de direção segura e confiante.
          </p>
          <div className="inline-flex items-center gap-2 text-primary font-semibold">
            <Heart className="w-5 h-5" />
            <span>Transformando sonhos em realidade desde 2010</span>
            <Heart className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
}