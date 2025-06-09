import {
  BookCheck,
  BookText,
  CarFront,
  CheckCircle,
  FilePenLine,
  Heart,
  NotepadTextDashed,
  ExternalLink,
  ArrowRight,
  TrendingUp,
  Award,
  Users,
  Calendar,
} from "lucide-react";
import { CountingNumberAnimation } from "./counting-number-animation";
import Link from "next/link";

export function ClientsCount() {
  const informationCards = [
    {
      icon: NotepadTextDashed,
      title: "Código de Trânsito Brasileiro",
      description: "Consulte as leis e regulamentações de trânsito",
      link: "https://www.planalto.gov.br/ccivil_03/leis/l9503.htm",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      hoverColor: "hover:border-blue-400"
    },
    {
      icon: BookText,
      title: "Detran - BA",
      description: "Portal oficial do Detran da Bahia",
      link: "https://www.detran.ba.gov.br/",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      hoverColor: "hover:border-green-400"
    },
    {
      icon: FilePenLine,
      title: "Cadastro Gov.br",
      description: "Acesse sua conta no portal do governo",
      link: "https://www.gov.br/pt-br",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      hoverColor: "hover:border-purple-400"
    },
    {
      icon: CheckCircle,
      title: "Consultar Resultado Exame",
      description: "Verifique o resultado dos seus exames",
      link: "https://www.detran.ba.gov.br/servicos/consultar-resultado-de-exame",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      hoverColor: "hover:border-orange-400"
    },
    {
      icon: Heart,
      title: "Exames Médicos",
      description: "Informações sobre exames de saúde",
      link: "https://www.detran.ba.gov.br/servicos/exames-medicos",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      hoverColor: "hover:border-red-400"
    },
    {
      icon: BookCheck,
      title: "Simulado Detran",
      description: "Pratique para o exame teórico",
      link: "https://www.detran.ba.gov.br/simulado",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      hoverColor: "hover:border-indigo-400"
    }
  ];

  return (
    <div className="mt-28 container">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-block">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Informações Úteis
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full"></div>
        </div>
        <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
          Acesse rapidamente os principais portais e serviços relacionados à sua habilitação
        </p>
      </div>

      {/* Information Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {informationCards.map((card, index) => {
          const IconComponent = card.icon;
          return (
            <Link
              key={index}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className={`
                relative overflow-hidden rounded-2xl border-2 ${card.borderColor} ${card.hoverColor} 
                ${card.bgColor} p-6 transition-all duration-300 hover:shadow-xl hover:scale-105
                hover:-translate-y-1 cursor-pointer
              `}>
                {/* Background Gradient Effect */}
                <div className={`
                  absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${card.color} 
                  opacity-10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 
                  transition-transform duration-500
                `}></div>
                
                {/* Icon */}
                <div className={`
                  inline-flex items-center justify-center w-14 h-14 rounded-xl 
                  bg-gradient-to-br ${card.color} text-white mb-4 group-hover:scale-110 
                  transition-transform duration-300 shadow-lg
                `}>
                  <IconComponent className="w-7 h-7" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {card.description}
                  </p>
                  
                  {/* Action Indicator */}
                  <div className="flex items-center text-sm font-semibold text-gray-700 group-hover:text-gray-900">
                    <span>Acessar</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    <ExternalLink className="w-3 h-3 ml-1 opacity-60" />
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/50 transition-all duration-300"></div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Enhanced Statistics Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-blue-50 to-indigo-100 rounded-3xl"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 rounded-full translate-y-24 -translate-x-24"></div>
        
        <div className="relative z-10 p-8 lg:p-16">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20 mb-6">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Nossos Resultados
              </span>
            </div>
            <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
              Estatísticas de Aprovação
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Números que comprovam nossa excelência e compromisso com o sucesso dos nossos alunos
            </p>
          </div>
          
          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Main Success Rate */}
            <div className="lg:col-span-2 group">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Taxa de Aprovação</h4>
                    <p className="text-sm text-gray-600">Primeira tentativa</p>
                  </div>
                </div>
                <div className="text-5xl lg:text-6xl font-black text-transparent bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text mb-2">
                  <CountingNumberAnimation targetNumber={92} duration={2500} />%
                </div>
                <p className="text-gray-600 text-sm">
                  Dos nossos alunos são aprovados já na primeira tentativa
                </p>
                <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full w-[92%] transition-all duration-1000 delay-500"></div>
                </div>
              </div>
            </div>

            {/* General Success Rate */}
            <div className="group">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/50 group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-sm font-bold text-gray-900">Taxa Geral</h4>
                </div>
                <div className="text-3xl lg:text-4xl font-black text-transparent bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text mb-2">
                  <CountingNumberAnimation targetNumber={87} duration={2000} />%
                </div>
                <p className="text-gray-600 text-xs">
                  Aprovação geral em todos os exames
                </p>
              </div>
            </div>

            {/* Experience Years */}
            <div className="group">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/50 group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-sm font-bold text-gray-900">Experiência</h4>
                </div>
                <div className="text-3xl lg:text-4xl font-black text-transparent bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text mb-2">
                  <CountingNumberAnimation targetNumber={15} duration={1500} />
                </div>
                <p className="text-gray-600 text-xs">
                  Anos formando motoristas
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50">
              <div className="text-2xl font-black text-primary mb-2">
                <CountingNumberAnimation targetNumber={11548} duration={3000} />+
              </div>
              <p className="text-sm font-medium text-gray-700">Alunos Formados</p>
            </div>
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50">
              <div className="text-2xl font-black text-primary mb-2">
                <CountingNumberAnimation targetNumber={3} duration={1000} />
              </div>
              <p className="text-sm font-medium text-gray-700">Unidades Ativas</p>
            </div>
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50">
              <div className="text-2xl font-black text-primary mb-2">
                <CountingNumberAnimation targetNumber={98} duration={2000} />%
              </div>
              <p className="text-sm font-medium text-gray-700">Satisfação dos Clientes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}