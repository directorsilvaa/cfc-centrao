import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/foto-sobre.png";
import benefitTwoImg from "../../public/img/foto-sobre2.png";

const benefitOne = {
  title: "Sobre Nós",
  desc: "O centrão refere-se a um bloco de partidos políticos no Brasil que geralmente se posiciona no centro do espectro político e que exerce uma influência significativa no Congresso Nacional. Seu objetivo é, muitas vezes, buscar consenso e promover políticas que atendam a uma ampla gama de interesses Quando falamos sobre o processo de obtenção da Carteira Nacional de Habilitação (CNH) e a importância de ensinar corretamente os futuros condutores, a responsabilidade é enorme. ",
  descsub:
    "Os instrutores de autoescola têm o dever de fornecer um ensino de qualidade, garantindo que os novos motoristas compreendam plenamente as regras de trânsito, a importância da direção defensiva e os riscos associados à condução.Ensinar corretamente esses futuros condutores é essencial para a segurança nas estradas e para a formação de motoristas conscientes e responsáveis. A responsabilidade dos instrutores não se limita a ensinar técnicas de direção, mas também envolve a transmissão de valores como respeito, paciência e prudência no trânsito. Dessa forma, contribuímos para a redução de acidentes e para a criação de um trânsito mais seguro e harmonioso para todos. ",
  image: benefitOneImg,
  bullets: [
    {
      title: "Understand your customers",
      desc: "Then explain the first point breifly in one or two lines.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Improve acquisition",
      desc: "Here you can add the next benefit point.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Drive customer retention",
      desc: "This will be your last bullet point in this section.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Nosso Objetivo",
  desc: "No Centrão, nosso objetivo é iniciar os futuros condutores no processo de obtenção da Carteira Nacional de Habilitação (CNH) com qualidade e responsabilidade. Somos um grupo de autoescolas unidas, comprometidas em oferecer aulas teóricas de primeira habilitação, curso de renovação e aulas de reciclagem com excelência.",
  descsub:
    "Nosso compromisso é garantir que os alunos recebam ensinamentos corretos sobre como se comportar no trânsito, agir de maneira adequada e seguir todas as leis de trânsito. Acreditamos que a educação é a base para formar motoristas conscientes e responsáveis, preparados para enfrentar os desafios das vias com segurança.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
