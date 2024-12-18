import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { useLanguage } from "../language/LanguageContext";
import Image from "next/image";
import Link from "next/link";

export default function FeatureSection() {
  const { language } = useLanguage();

  const features = {
    pt: {
      title: "Benefícios da IA no Contexto Climático",
      resume:
        "Abaixo, destacamos os principais benefícios que ilustram como a IA pode promover um futuro mais sustentável e resiliente.",
      features: [
        {
          name: "Análise de dados complexos",
          description:
            "A IA facilita a análise de grandes volumes de dados climáticos, permitindo previsões mais precisas.",
          icon: FiArrowRight,
        },
        {
          name: "Otimização de processos",
          description:
            "Sistemas de IA otimizam redes elétricas, agricultura e transporte, reduzindo o consumo energético e as emissões.",
          icon: FiArrowRight,
        },
        {
          name: "Eficiência em monitoramento ambiental",
          description:
            "Ferramentas de IA monitoram florestas, emissões e ecossistemas, ajudando a identificar e mitigar impactos ambientais.",
          icon: FiArrowRight,
        },
        {
          name: "Segurança avançada",
          description:
            "A IA melhora a segurança de infraestruturas críticas, tornando-as mais resilientes às mudanças climáticas e eventos extremos.",
          icon: FiArrowRight,
        },
      ],
    },
    en: {
      title: "Benefits of AI in the Climate Context",
      resume:
        "Below, we highlight key benefits that showcase how AI can foster a more sustainable and resilient future.",
      features: [
        {
          name: "Complex data analysis",
          description:
            "AI facilitates the analysis of large volumes of climate data, enabling more accurate predictions.",
          icon: FiArrowRight,
        },
        {
          name: "Process optimization",
          description:
            "AI systems optimize power grids, agriculture, and transportation, reducing energy consumption and emissions.",
          icon: FiArrowRight,
        },
        {
          name: "Efficient environmental monitoring",
          description:
            "AI tools monitor forests, emissions, and ecosystems, helping to identify and mitigate environmental impacts.",
          icon: FiArrowRight,
        },
        {
          name: "Advanced security",
          description:
            "AI enhances the security of critical infrastructures, making them more resilient to climate change and extreme events.",
          icon: FiArrowRight,
        },
      ],
    },
  };

  return (
    <div className="bg-green-100 py-24 sm:py-32 border-b-4 border-neutral-600 shadow-lg shadow-neutral-700 drop-shadow-xl ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            {features[language].title}
          </p>
          <p className="mt-6 text-lg/8 text-neutral-800">
            {features[language].resume}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features[language].features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-neutral-800">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <p className="text-3xl font-bold mt-12 text-center text-neutral-950">
        {" "}
        VIDEOS{" "}
      </p>
      <div className="mt-12 bg-neutral-900 p-6 rounded-lg justify-center flex flex-col items-center gap-4 mx-auto w-full sm:w-5/6 md:flex-row lg:w-4/5 xl:w-2/3">
        <Link
          href="https://www.youtube.com/watch?v=RNhbqQefPSg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="mb-2 text-neutral-300 font-robotoCondensed text-center hover:no-underline">
            Can AI Help Solve the Climate Crisis? | Sims Witherspoon | TED
          </p>
          <Image
            src="/images/ted.jpg"
            alt="Can AI Help Solve the Climate Crisis? | Sims Witherspoon | TED"
            width={640}
            height={390}
            className="rounded-md hover:transform hover:scale-105 transition-transform"
          />
        </Link>
        <Link
          href="https://www.youtube.com/watch?v=OskYAE3P9oI"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="mb-2 text-neutral-300 font-robotoCondensed text-center hover:stroke-none">
            Climate Tech vs. Cleantech: What's the Difference?
          </p>
          <Image
            src="/images/climate-tech.jpg"
            alt="Climate Tech vs. Cleantech: What's the Difference?"
            width={640}
            height={390}
            className="rounded-md hover:transform hover:scale-105 transition-transform"
          />
        </Link>
      </div>
    </div>
  );
}
