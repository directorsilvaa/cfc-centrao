import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

interface BenefitsProps {
  imgPos?: "left" | "right";
  data: {
    imgPos?: "left" | "right";
    title: string;
    desc: string;
    descsub: string;
    image: any;
    bullets: {
      title: string;
      desc: string;
      icon: React.ReactNode;
    }[];
  };
}

export const Benefits = (props: Readonly<BenefitsProps>) => {
  const { data } = props;
  return (
    <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap">
      <div
        className={`flex items-center justify-center w-full lg:w-1/2 ${
          props.imgPos === "right" ? "lg:order-1" : ""
        }`}
      >
        <div>
          <Image
            src={data.image}
            width={521}
            height={521}
            alt="Benefits"
            className={"object-cover rounded-lg shadow-lg"}
            placeholder="blur"
            blurDataURL={data.image.src}
          />
        </div>
      </div>

      <div
        className={`flex flex-wrap items-center w-full lg:w-1/2 ${
          data.imgPos === "right" ? "lg:justify-end" : ""
        }`}
      >
        <div>
          <div className="flex flex-col w-full mt-4">
            <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl">
              {data.title}
            </h3>

            <p className="max-w-2xl py-4 text-base leading-normal text-gray-500 lg:text-lg xl:text-lg ">
              {data.desc}
            </p>
            <p className="max-w-2xl py-4 text-base leading-normal text-gray-500 lg:text-lg xl:text-lg ">
              {data.descsub}
            </p>
          </div>

          <div className="mt-8 space-y-4">
            {data.bullets.map((bullet, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 text-yellow-500">
                  {bullet.icon}
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-medium text-gray-800">
                    {bullet.title}
                  </h4>
                  <p className="mt-1 text-base text-gray-500">
                    {bullet.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};
