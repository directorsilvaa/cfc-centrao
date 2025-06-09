"use client";
import { FeatureCard } from "./features/feature-card";
import { GraduationCap, Car, Bike, Bus, Truck, RefreshCw, BookOpen, Users, Award, CheckCircle, ArrowRight, Sparkles } from "lucide-react";

interface IComponentProps {
  hiddenTitle?: boolean;
}

const servicesData = [
  {
    id: "categoria-a",
    imageUrl: "/carro.svg",
    icon: Bike,
    title: "Categoria A - Moto",
    subtitle: "Habilitação para Motocicletas",
    description: "A obtenção da licença na categoria 'A' concede ao indivíduo o direito de conduzir automóveis de duas ou três rodas, equipados ou não com sidecar.",
    modalDescription: "A categoria 'A' na autoescola permite aos futuros condutores a habilidade de pilotar veículos motorizados de duas ou três rodas, independentemente de terem ou não um carro lateral acoplado. Essa categoria inclui motocicletas, motonetas, ciclomotores e triciclos. Para obter a habilitação na categoria 'A', os alunos passam por um treinamento prático e teórico, aprendendo técnicas de condução segura, manobras e regras de trânsito específicas para esses tipos de veículos.",
    features: ["Motocicletas até 125cc", "Triciclos motorizados", "Ciclomotores", "Motonetas"],
    duration: "45 dias",
    price: "A partir de R$ 1.200",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    id: "categoria-b",
    imageUrl: "/moto.svg",
    icon: Car,
    title: "Categoria B - Carro",
    subtitle: "Habilitação para Automóveis",
    description: "A autorização na categoria 'B' concede ao indivíduo a permissão de operar automóveis com quatro rodas, com espaço para até oito ocupantes.",
    modalDescription: "A categoria 'B' na autoescola permite aos futuros condutores a habilidade de dirigir veículos de quatro rodas com capacidade para até oito passageiros. Isso inclui carros de passeio, SUVs e vans, desde que não excedam esse limite de passageiros. Para obter a habilitação na categoria 'B', os alunos passam por um treinamento prático e teórico, onde aprendem técnicas de direção segura, manobras, além de conhecerem as regras de trânsito aplicáveis a esse tipo de veículo.",
    features: ["Carros de passeio", "SUVs pequenos", "Vans até 8 lugares", "Veículos até 3.500kg"],
    duration: "60 dias",
    price: "A partir de R$ 1.800",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200"
  },
  {
    id: "categoria-ab",
    imageUrl: "/aeb.svg",
    icon: GraduationCap,
    title: "Categoria A/B - Carro/Moto",
    subtitle: "Habilitação Completa",
    description: "A obtenção da licença nas categorias 'A' e 'B' concede ao indivíduo o direito de conduzir tanto automóveis quanto motocicletas.",
    modalDescription: "A categoria 'A' na autoescola permite aos futuros condutores a habilidade de pilotar veículos motorizados de duas ou três rodas, independentemente de terem ou não um carro lateral acoplado. Essa categoria inclui motocicletas, motonetas, ciclomotores e triciclos. Para obter a habilitação na categoria 'A', os alunos passam por um treinamento prático e teórico, aprendendo técnicas de condução segura, manobras e regras de trânsito específicas para esses tipos de veículos. A autorização na categoria 'B' concede ao indivíduo a permissão de operar automóveis com quatro rodas, com espaço para até oito ocupantes.",
    features: ["Todos os veículos Cat. A", "Todos os veículos Cat. B", "Máxima flexibilidade", "Melhor custo-benefício"],
    duration: "75 dias",
    price: "A partir de R$ 2.500",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200"
  },
  {
    id: "categoria-d",
    imageUrl: "/d.svg",
    icon: Bus,
    title: "Categoria D - Ônibus",
    subtitle: "Transporte de Passageiros",
    description: "A licença na categoria 'D' autoriza o indivíduo a conduzir veículos empregados no transporte de passageiros, com capacidade para mais de oito assentos.",
    modalDescription: "A categoria 'D' na autoescola habilita os condutores a operarem veículos utilizados no transporte de passageiros, com capacidade para mais de oito lugares. Isso inclui ônibus, micro-ônibus e vans de grande porte. Para obter a habilitação na categoria 'D', os candidatos devem passar por um treinamento teórico e prático abrangente, focado em técnicas avançadas de direção, segurança viária, manobras específicas e conhecimento aprofundado das leis de trânsito relacionadas ao transporte de passageiros.",
    features: ["Ônibus urbanos", "Micro-ônibus", "Vans de transporte", "Veículos de turismo"],
    duration: "90 dias",
    price: "A partir de R$ 3.200",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200"
  },
  {
    id: "categoria-e",
    imageUrl: "/carreta.svg",
    icon: Truck,
    title: "Categoria E - Carreta",
    subtitle: "Veículos Articulados",
    description: "A licença na categoria 'E' autoriza o indivíduo a conduzir veículos articulados e combinações de veículos para transporte de carga.",
    modalDescription: "A categoria 'E' na autoescola habilita os condutores a operarem veículos articulados e combinações de veículos utilizados no transporte de carga. Isso inclui carretas, reboques e semi-reboques. Para obter a habilitação na categoria 'E', os candidatos devem passar por um treinamento teórico e prático especializado, focado em técnicas avançadas de direção, segurança viária, manobras complexas e conhecimento aprofundado das leis de trânsito relacionadas ao transporte de carga pesada.",
    features: ["Carretas articuladas", "Caminhões com reboque", "Semi-reboques", "Transporte de carga pesada"],
    duration: "120 dias",
    price: "A partir de R$ 4.500",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200"
  },
  {
    id: "renovacao-ab",
    imageUrl: "/cnh.svg",
    icon: RefreshCw,
    title: "Renovação da CNH A/B",
    subtitle: "Renovação Simples",
    description: "A renovação da Carteira Nacional de Habilitação (CNH) pode ser efetuada tanto antes quanto depois do término do prazo de validade.",
    modalDescription: "A renovação da Carteira Nacional de Habilitação (CNH) nas categorias A e B pode ser realizada tanto antes quanto após o término do prazo de validade. Os motoristas têm um prazo adicional de até 30 dias após o vencimento para efetuar a renovação sem incorrer em penalidades. Durante o processo de renovação, os condutores passam por uma avaliação médica e psicológica, além de serem atualizados sobre as normas de trânsito e eventuais mudanças na legislação. Após a conclusão dessas etapas, uma nova CNH é emitida, garantindo que os motoristas estejam aptos a continuar dirigindo com segurança.",
    features: ["Exames médicos", "Avaliação psicológica", "Atualização legislativa", "Processo simplificado"],
    duration: "15 dias",
    price: "A partir de R$ 350",
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200"
  },
  {
    id: "renovacao-cde",
    imageUrl: "/cnh.svg",
    icon: RefreshCw,
    title: "Renovação da CNH C/D/E",
    subtitle: "Renovação Profissional",
    description: "A renovação da CNH para categorias profissionais com exigências específicas e exames complementares.",
    modalDescription: "A renovação da Carteira Nacional de Habilitação (CNH) nas categorias C, D e E é um procedimento fundamental para condutores que operam veículos de grande porte. Assim como nas demais categorias, a renovação pode ser realizada antes ou após o término do prazo de validade, tendo o condutor um período de até 30 dias após o vencimento para efetuar a renovação sem incorrer em penalidades. Durante o processo de renovação, os condutores passam por uma avaliação médica e psicológica, além de serem atualizados sobre as normas de trânsito e eventuais mudanças na legislação aplicável às categorias C, D e E. Após a conclusão dessas etapas, uma nova CNH é emitida, garantindo que os motoristas estejam aptos a continuar conduzindo veículos de grande porte com responsabilidade e segurança.",
    features: ["Exame toxicológico", "Avaliação psicotécnica", "Curso de atualização", "Certificação profissional"],
    duration: "30 dias",
    price: "A partir de R$ 650",
    color: "from-teal-500 to-teal-600",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200"
  },
  {
    id: "reciclagem",
    imageUrl: "/cnh.svg",
    icon: BookOpen,
    title: "Curso de Reciclagem",
    subtitle: "Recuperação da CNH",
    description: "Trata-se de uma medida punitiva imposta pelo Detran aos motoristas que cometem infrações no tráfego.",
    modalDescription: "O curso de reciclagem é uma medida educativa e punitiva imposta pelo Departamento Estadual de Trânsito (Detran) aos motoristas que cometem infrações graves no trânsito e têm sua permissão para dirigir suspensa. Este curso tem como objetivo reeducar os condutores sobre as normas de trânsito, segurança viária e direção defensiva. Durante o curso, os participantes revisam conceitos fundamentais sobre legislação de trânsito, primeiros socorros, direção defensiva e cidadania no trânsito. Após a conclusão bem-sucedida do curso, o motorista pode recuperar sua habilitação e voltar a dirigir legalmente.",
    features: ["Legislação de trânsito", "Direção defensiva", "Primeiros socorros", "Cidadania no trânsito"],
    duration: "30 horas",
    price: "A partir de R$ 280",
    color: "from-yellow-500 to-yellow-600",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200"
  }
];

export function Features({ hiddenTitle }: IComponentProps) {
  return (
    <div className="w-full mt-28 container relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 rounded-3xl -mx-8 -my-8"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-full -translate-y-48 translate-x-48 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-500/10 to-indigo-500/10 rounded-full translate-y-32 -translate-x-32 blur-3xl"></div>

      <div className="relative z-10 p-8 lg:p-16">
        {/* Section Header */}
        {!hiddenTitle && (
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20 mb-6">
              <GraduationCap className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Nossos Serviços
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Conheça Nossos <span className="text-transparent bg-gradient-to-r from-primary to-blue-600 bg-clip-text">Serviços</span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Oferecemos uma gama completa de serviços para sua habilitação, desde a primeira CNH até renovações e cursos especializados.
            </p>
          </div>
        )}

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="group">
                <FeatureCard
                  imageURl={service.imageUrl}
                  title={service.title}
                  description={service.description}
                  modalDescription={service.modalDescription}
                  onClick={() => {}}
                  // Pass additional props for enhanced UI
                  icon={IconComponent}
                  subtitle={service.subtitle}
                  features={service.features}
                  duration={service.duration}
                  price={service.price}
                  color={service.color}
                  bgColor={service.bgColor}
                  borderColor={service.borderColor}
                />
              </div>
            );
          })}
        </div>

        {/* Statistics Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-white/50 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Por que escolher nossos serviços?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Números que comprovam nossa excelência e compromisso com o sucesso dos nossos alunos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-black text-blue-600 mb-2">11.548+</div>
              <p className="text-sm font-medium text-gray-700">Alunos Formados</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border border-green-200">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-black text-green-600 mb-2">92%</div>
              <p className="text-sm font-medium text-gray-700">Taxa de Aprovação</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border border-purple-200">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-black text-purple-600 mb-2">15+</div>
              <p className="text-sm font-medium text-gray-700">Anos de Experiência</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl border border-orange-200">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-black text-orange-600 mb-2">100%</div>
              <p className="text-sm font-medium text-gray-700">Satisfação Garantida</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary to-blue-600 rounded-3xl p-8 lg:p-12 text-white">
          <GraduationCap className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Pronto para começar sua jornada?
          </h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra qual serviço é ideal para você. 
            Nossa equipe está pronta para te ajudar a conquistar sua habilitação!
          </p>
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-8 py-4 rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-300 cursor-pointer">
            <span className="font-bold text-lg">Fale conosco agora</span>
            <ArrowRight className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}