"use client";

import { AnimatedTooltip } from "@/lib/components/ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Paulo Gandra de Sousa",
    designation:
      "Professor no Departamento de Engenharia Informática do ISEP desde 1996, sendo atualmente Professor Coordenador. Doutorado em Informática pela Universidade do Minho, a sua área de especialização foi em sistemas distribuídos inteligentes para a manufatura. Desde 2012 é Consultor em Engenharia de Software numa empresa multinacional, msg Life Iberia.",
    image: "/paulo-gandra.jpeg"
  },
  {
    id: 2,
    name: "Tomás Lima",
    designation:
      "Tomás tem mais de uma década de experiência no setor de segurança cibernética, com especialização em inteligência e automação de ameaças cibernéticas. O seu percurso profissional inclui uma passagem significativa no Centro Nacional de Cibersegurança de Portugal, onde desempenhou um papel no desenvolvimento da ferramenta IntelMQ. Atualmente, Tomás dedica a sua experiência à oferta de serviços de consultoria em cibersegurança na Europa e à liderança da sua nova empresa, a BlackRoute.",
    image: "/tomas-lima.jpeg"
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
  }
];

export default function JuriContainer() {
  return (
    <div className="mb-10 flex w-full items-center justify-center">
      <AnimatedTooltip items={people} />
    </div>
  );
}
