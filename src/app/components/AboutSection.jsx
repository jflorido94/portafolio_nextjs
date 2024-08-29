"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Lenguajes",
    id: "lenguajes",
    content: (
      <ul className="list-disc pl-2">
        <li>PHP</li>
        <li>JavaScript</li>
        <li>C#</li>
        <li>Java</li>
        <li>Yaml</li>
        {/* <li>React</li> */}
      </ul>
    ),
  },
  {
    title: "Frameworks",
    id: "frameworks",
    content: (
      <ul className="list-disc pl-2">
        <li>Laravel</li>
        <li>Codeigniter</li>
        <li>Angular</li>
        <li>Eclipse</li>
        {/* <li>Yaml</li> */}
        {/* <li>React</li> */}
      </ul>
    ),
  },
  {
    title: "Educacion",
    id: "educacion",
    content: (
      <ul className="list-disc pl-2">
        <li>Grado Superior Desarrollo de Aplicaciones Webs</li>
        <li>IES San Sebastian, Huelva</li>
      </ul>
    ),
  },
  {
    title: "Cursos",
    id: "cursos",
    content: (
      <ul className="list-disc pl-2">
        <li>Bootstrap & FontAwesome</li>
        <li>Docker & DockerFiles</li>
        <li>Laravel API & Angular</li>
      </ul>
    ),
  },
  {
    title: "Habilidades",
    id: "habilidades",
    content: (
      <ul className="list-disc pl-2">
        <li>Analisista</li>
        <li>Resolutivo</li>
        {/* <li>Resolucion de problemas</li> */}
        <li>Trabajador en equipo</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("lenguajes");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre mi</h2>
          <p className="text-base lg:text-lg">
          Mi nombre es Javier Florido. <br />
                        <strong>Técnico superior en desarrollo de aplicaciones webs</strong> con amplios
                        conocimientos en back-end, desarrollados a través de proyectos propios y la formacion continua. <br />
                        Busco continuar desarrollando mi carrera, incorporándome a un equipo tecnológico, contribuyendo con mis
                        habilidades en <strong>C#, PHP y Javascript</strong>, entre otras, para lograr aplicaciones webs
                        que satisfagan todo tipo de necesidades y preferencias.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("lenguajes")}
              active={tab === "lenguajes"}
            >
              {" "}
              Lenguajes{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("frameworks")}
              active={tab === "frameworks"}
            >
              {" "}
              Framworks{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("educacion")}
              active={tab === "educacion"}
            >
              {" "}
              Educación{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("cursos")}
              active={tab === "cursos"}
            >
              {" "}
              Cursos{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("habilidades")}
              active={tab === "habilidades"}
            >
              {" "}
              Habilidades{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
