import { Features } from "@/components/features";

export default function Services() {
  return (
    <main>
      <div className="container h-[80px] lg:h-[50px]">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold w-full max-w-[700px] lg:mt-8 mt-16 mx-auto">
            Conheça os nossos Serviços
          </h1>
        </div>
      </div>
      <Features hiddenTitle />
    </main>
  );
}
