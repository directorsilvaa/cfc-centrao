import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
import { CtaMaps } from "@/components/CtaMaps";
import ServicesContent from "@/components/ServicesArea";
export default function Home() {
  return (
    <Container>
      <Hero />
      {/* <SectionTitle
        preTitle="Nextly Benefits"
        title=" Why should you use this landing page"
      >
        Nextly is a free landing page & marketing website template for startups
        and indie projects. Its built with Next.js & TailwindCSS. And its
        completely open-source.
      </SectionTitle> */}

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <Cta />

      <ServicesContent />

      <SectionTitle
        // preTitle="Watch a video"
        title="Veja o vídeo abaixo"
      >
        {/* This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this. */}
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />

      <SectionTitle
        // preTitle="Testimonials"
        title="Precisar em entrar em contato?"
      >
        Mande um e-mail, responderemos em até 24 horas.
      </SectionTitle>

      <CtaMaps/>
      {/*
      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle> 

      {/* <Faq /> */}
    </Container>
  );
}
