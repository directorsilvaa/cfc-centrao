"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Search, MessageCircle, Phone, Clock, CheckCircle, ArrowRight, Sparkles, Users, Award } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const faqData = [
  {
    id: "item-1",
    category: "Idade e Requisitos",
    question: "POSSO TIRAR MINHA HABILITAÇÃO COM MENOS DE 18 ANOS?",
    answer: "Não, conforme o Código de Trânsito Brasileiro, para tirar a carteira de habilitação, o candidato tem que ser maior de 18 anos, saber ler e escrever e possuir documento de identificação (RG) e CPF.",
    icon: Users,
    color: "from-blue-500 to-blue-600"
  },
  {
    id: "item-2",
    category: "Prazos",
    question: "QUANTO TEMPO DEMORA PARA TIRAR A PRIMEIRA HABILITAÇÃO?",
    answer: "O prazo estimado é de 60 dias, caso o candidato seja aprovado em todos os exames logo nas primeiras tentativas. Mas isto pode variar de acordo com a disponibilidade do aluno, agenda de aula prática do CFC e agenda de exames do Detran.",
    icon: Clock,
    color: "from-green-500 to-green-600"
  },
  {
    id: "item-3",
    category: "Prazos",
    question: "INICIEI MEU PROCESSO DE 1º HABILITAÇÃO, TENHO QUANTO TEMPO PRA TIRAR MINHA CNH?",
    answer: "Após a data da abertura, o candidato terá um (1) ano para concluir seu processo de habilitação. Se não concluir nesse prazo, o candidato poderá abrir um novo serviço e reiniciar o processo de habilitação, com possibilidade de aproveitamento de algumas etapas, como aulas teóricas e práticas já concluídas.",
    icon: Clock,
    color: "from-green-500 to-green-600"
  },
  {
    id: "item-4",
    category: "Aulas Práticas",
    question: "EU JÁ SEI DIRIGIR/PILOTAR, PRECISO FAZER TODAS AS AULAS?",
    answer: "Sim, precisará fazer todas as aulas práticas. O Conselho Nacional de Trânsito (Contran) exige que todos os candidatos, mesmo aqueles já sabem pilotar e dirigir, cumpram a carga horária mínima de aulas práticas. No caso, 20 horas/aulas de cada categoria para o processo de 1ª habilitação ou 15 horas/aulas para o processo de adição.",
    icon: CheckCircle,
    color: "from-purple-500 to-purple-600"
  },
  {
    id: "item-5",
    category: "CNH Definitiva",
    question: "QUANDO TERMINAR O PRAZO DA CARTEIRA PROVISÓRIA, AGUARDO EM CASA A NOVA CARTEIRA?",
    answer: "Quando finalizar o prazo de 01 (um) ano de carteira provisória, o candidato deverá solicitar a CNH definitiva pelo site sacdigital.ba.gov.br ou procurar, presencialmente, a unidade do SAC ou o Detran de sua cidade e apresentar os seguintes documentos: CNH provisória, documento de identificação com foto e comprovante de residência atualizado, assim como, deverá pagar uma taxa para a emissão do documento. Após esses processos, deverá aguardar o prazo, em média, de 30 dias para a nova CNH chegar no local onde houve o requerimento.",
    icon: Award,
    color: "from-orange-500 to-orange-600"
  },
  {
    id: "item-6",
    category: "Aulas Práticas",
    question: "QUANTO TEMPO ESPERO PARA DAR INÍCIO AS AULAS PRÁTICAS APÓS O EXAME TEÓRICO?",
    answer: "Não existe um tempo determinado para dar início as aulas práticas. Após liberação do resultado pela DETRAN, o candidato deverá comparecer pessoalmente na autoescola para fazer a programação das aulas.",
    icon: CheckCircle,
    color: "from-purple-500 to-purple-600"
  },
  {
    id: "item-7",
    category: "Reprovação",
    question: "O QUE ACONTECE SE EU REPROVAR EM ALGUM EXAME?",
    answer: "Em caso de reprovação no exame teórico ou prático, o candidato poderá solicitar a remarcação na autoescola, mediante o pagamento da taxa de remarcação. Vale salientar que o candidato terá direito as remarcações até finalizar o prazo de validade do laudo. Em relação a remarcação do exame médico e psicoteste, as solicitações deverão ser feitas na clínica de origem.",
    icon: MessageCircle,
    color: "from-red-500 to-red-600"
  },
  {
    id: "item-8",
    category: "Reciclagem",
    question: "O QUE ACONTECE COM QUEM NÃO FAZ O CURSO DE RECICLAGEM?",
    answer: "Segundo o parágrafo 2° do artigo nº 261 do CTB: \"§ 2º Quando ocorrer a suspensão do direito de dirigir, a Carteira Nacional de Habilitação será devolvida a seu titular imediatamente após cumprida a penalidade e o curso de reciclagem.\" Dessa forma, o motorista que não fizer ou não passar no curso não estará apto a recuperar a sua CNH. Ou seja, o seu direito de dirigir continuará suspenso. Caso a pessoa não faça o curso de reciclagem e continue dirigindo, poderá perder a sua carteira de motorista de modo definitivo.",
    icon: MessageCircle,
    color: "from-red-500 to-red-600"
  },
  {
    id: "item-9",
    category: "Transferência",
    question: "TIREI A CNH EM UM ESTADO E AGORA ESTOU MORANDO EM OUTRO. COMO FAÇO PARA RENOVAR A HABILITAÇÃO?",
    answer: "O primeiro passo é procurar o Detran de seu novo endereço, levar os documentos originais e as cópias da CNH, do RG, do CPF, junto com o comprovante da nova residência. Lá você irá solicitar o serviço de transferência. É importante lembrar que será cobrada uma taxa por essa alteração.",
    icon: ArrowRight,
    color: "from-indigo-500 to-indigo-600"
  },
  {
    id: "item-10",
    category: "Idade e Requisitos",
    question: "EXISTE IDADE MÁXIMA PARA PODER DIRIGIR?",
    answer: "Para tirar a CNH, as pessoas precisam ter a idade mínima de 18 anos, mas não existe idade máxima. Independente de quantos anos você tem, mesmo já idoso, poderá continuar dirigindo, porém, a condição para renovação muda.",
    icon: Users,
    color: "from-blue-500 to-blue-600"
  },
  {
    id: "item-11",
    category: "Exames Médicos",
    question: "POSSO ESCOLHER A CLÍNICA PARA FAZER OS EXAMES DE SAÚDE?",
    answer: "Não, o sistema do DETRAN usa o método de sorteio para evitar \"fraudes\" na realização dos exames, então quando abrimos seu processo ele é automaticamente vinculado a uma clínica, e não tem a opção de alterá-la.",
    icon: HelpCircle,
    color: "from-teal-500 to-teal-600"
  },
  {
    id: "item-12",
    category: "Exames Médicos",
    question: "EU USO ÓCULOS, MAS MEU GRAU NÃO É MUITO ALTO, POSSO FAZER O EXAME DE SAÚDE SEM ELE?",
    answer: "Pode. Você tem o direito de tentar fazer o exame de vista sem os óculos, mas caso você não consiga enxergar, precisa estar com os óculos para tentar fazer com o mesmo. Se não levar os óculos e não conseguir ler o que o médico pede, você terá que pagar uma nova taxa para refazer.",
    icon: HelpCircle,
    color: "from-teal-500 to-teal-600"
  },
  {
    id: "item-13",
    category: "Renovação",
    question: "PARA RENOVAR A CNH PRECISA FAZER EXAME PSICOTESTE?",
    answer: "Cidadãos que exerçam atividades remuneradas que envolvam transporte, ou seja, motoristas de ônibus, taxistas, motoristas de Uber, motoristas de caminhão etc. precisam, sim, realizar o exame psicotécnico e também o toxicológico.",
    icon: Award,
    color: "from-orange-500 to-orange-600"
  },
  {
    id: "item-14",
    category: "Renovação",
    question: "O EXAME TOXICOLÓGICO É OBRIGATÓRIO FAZER EM TODOS OS PROCESSOS DA RENOVAÇÃO DA CNH?",
    answer: "Nos serviços de renovação de exames C, D e E, independentemente do exercício de atividade remunerada ao veículo, passa a ser exigida a realização de exame toxicológico de larga janela de detecção.",
    icon: Award,
    color: "from-orange-500 to-orange-600"
  }
];

const categories = [
  { name: "Todas", value: "all", color: "from-gray-500 to-gray-600" },
  { name: "Idade e Requisitos", value: "Idade e Requisitos", color: "from-blue-500 to-blue-600" },
  { name: "Prazos", value: "Prazos", color: "from-green-500 to-green-600" },
  { name: "Aulas Práticas", value: "Aulas Práticas", color: "from-purple-500 to-purple-600" },
  { name: "Exames Médicos", value: "Exames Médicos", color: "from-teal-500 to-teal-600" },
  { name: "Renovação", value: "Renovação", color: "from-orange-500 to-orange-600" },
  { name: "Outros", value: "outros", color: "from-indigo-500 to-indigo-600" }
];

export default function Duvidas() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || 
                           faq.category === selectedCategory ||
                           (selectedCategory === "outros" && !["Idade e Requisitos", "Prazos", "Aulas Práticas", "Exames Médicos", "Renovação"].includes(faq.category));
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-full -translate-y-48 translate-x-48 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-500/10 to-indigo-500/10 rounded-full translate-y-32 -translate-x-32 blur-3xl"></div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="container py-16 lg:py-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20 mb-6">
              <HelpCircle className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Central de Ajuda
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Perguntas <span className="text-transparent bg-gradient-to-r from-primary to-blue-600 bg-clip-text">Frequentes</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Encontre respostas rápidas para as dúvidas mais comuns sobre habilitação, 
              renovação e nossos serviços. Estamos aqui para ajudar você!
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="max-w-4xl mx-auto mb-12">
            {/* Search Bar */}
            <div className="relative mb-8">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="text"
                placeholder="Digite sua dúvida aqui..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg rounded-2xl border-2 border-gray-200 focus:border-primary/50 focus:ring-4 focus:ring-primary/10 bg-white/80 backdrop-blur-sm shadow-lg"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`
                    px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 border-2
                    ${selectedCategory === category.value
                      ? `bg-gradient-to-r ${category.color} text-white border-transparent shadow-lg scale-105`
                      : 'bg-white/80 text-gray-700 border-gray-200 hover:border-primary/30 hover:bg-white hover:scale-105'
                    }
                  `}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Results Counter */}
            <div className="text-center mt-6">
              <p className="text-gray-600">
                {filteredFAQs.length === faqData.length 
                  ? `Mostrando todas as ${faqData.length} perguntas`
                  : `Encontradas ${filteredFAQs.length} pergunta${filteredFAQs.length !== 1 ? 's' : ''}`
                }
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="container pb-20">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length > 0 ? (
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 overflow-hidden">
                <Accordion type="single\" collapsible className="w-full">
                  {filteredFAQs.map((faq, index) => {
                    const IconComponent = faq.icon;
                    return (
                      <AccordionItem 
                        key={faq.id} 
                        value={faq.id} 
                        className={`
                          border-b border-gray-100 last:border-b-0 group
                          hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50/50 
                          transition-all duration-300
                        `}
                      >
                        <AccordionTrigger className="px-8 py-6 text-left hover:no-underline group-hover:text-primary transition-colors duration-300">
                          <div className="flex items-start gap-4 w-full">
                            {/* Icon */}
                            <div className={`
                              w-12 h-12 bg-gradient-to-br ${faq.color} rounded-xl flex items-center justify-center 
                              flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300
                            `}>
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              {/* Category Badge */}
                              <div className={`
                                inline-block px-3 py-1 bg-gradient-to-r ${faq.color} text-white 
                                text-xs font-semibold rounded-full mb-3 opacity-80
                              `}>
                                {faq.category}
                              </div>
                              
                              {/* Question */}
                              <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-primary transition-colors duration-300">
                                {faq.question}
                              </h3>
                            </div>
                          </div>
                        </AccordionTrigger>
                        
                        <AccordionContent className="px-8 pb-8">
                          <div className="ml-16 pl-4 border-l-4 border-gray-100">
                            <p className="text-gray-700 leading-relaxed text-base">
                              {faq.answer}
                            </p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </div>
            ) : (
              /* No Results */
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-gray-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Nenhuma pergunta encontrada
                </h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Não encontramos perguntas que correspondam à sua busca. 
                  Tente usar termos diferentes ou entre em contato conosco.
                </p>
                <Button 
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                  }}
                  className="bg-primary hover:bg-primary/90 text-white rounded-xl px-6 py-3"
                >
                  Limpar filtros
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Help Section */}
        <div className="container pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary to-blue-600 rounded-3xl p-8 lg:p-12 text-white text-center">
              <Sparkles className="w-16 h-16 mx-auto mb-6 opacity-80" />
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Não encontrou sua resposta?
              </h3>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Nossa equipe está pronta para esclarecer todas as suas dúvidas. 
                Entre em contato conosco através do WhatsApp ou visite uma de nossas unidades.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://api.whatsapp.com/send/?phone=557536167104&text=Ol%C3%A1,%20Vim%20atrav%C3%A9s%20do%20site.%20Poderia%20me%20ajudar?&type=phone_number&app_absent=0"
                  target="_blank"
                  className="group"
                >
                  <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-xl px-8 py-4 font-bold group-hover:scale-105 transition-all duration-300">
                    <MessageCircle className="w-5 h-5 mr-3" />
                    Falar no WhatsApp
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
                
                <Link
                  href="tel:+557536167104"
                  className="group"
                >
                  <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-xl px-8 py-4 font-bold group-hover:scale-105 transition-all duration-300">
                    <Phone className="w-5 h-5 mr-3" />
                    Ligar Agora
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>

              {/* Contact Info */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm opacity-90">
                  <div>
                    <p className="font-semibold mb-1">Horário de Atendimento:</p>
                    <p>Seg-Sex: 08:00 - 19:00</p>
                    <p>Sáb: 08:00 - 12:00</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Telefone:</p>
                    <p>(75) 3616-7104</p>
                    <p>(75) 3022-9951</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}