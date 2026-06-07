import { cookies } from "next/headers";

export const DEFAULT_LOCALE = "pt-BR";
export const LOCALES = ["pt-BR", "en"] as const;

export type Locale = (typeof LOCALES)[number];

export function isLocale(value: string | undefined): value is Locale {
  return LOCALES.some((locale) => locale === value);
}

export function getLocale(): Locale {
  const locale = cookies().get("locale")?.value;

  return isLocale(locale) ? locale : DEFAULT_LOCALE;
}

export const dictionaries = {
  "pt-BR": {
    metadata: {
      description: "Site pessoal de Matheus Padilha",
    },
    header: {
      role: "Engenheiro de Software",
      projects: "/projetos",
      about: "/sobre",
      toggleLanguage: "Switch to English",
    },
    home: {
      intro:
        "Engenheiro de Software brasileiro apaixonado por interfaces limpas, arquitetura bem pensada, café e soluções para problemas reais. Gosto de construir novos produtos e do desafio de transformar complexidade em simplicidade.",
      links: {
        linkedin: "acompanhe minha carreira",
        github: "veja meus projetos",
        youtube: "onde falo sobre Segurança do Trabalho",
        s4: "sistema de gestão de treinamentos",
        x: "acompanhe minhas ideias",
      },
      cv: "Baixar meu CV",
    },
    projects: {
      title: "Projetos",
      visitWebsite: "Visitar site",
      items: {
        s4Institutional: {
          name: "Site Institucional S4",
          description:
            "Site institucional para apresentar a empresa aos clientes, com painel administrativo para gerenciar equipamentos, treinamentos de colaboradores e, em breve, cursos online.",
        },
        s4Training: {
          name: "Gestão de Treinamentos NR Online",
          description:
            "Sistema de gestão de treinamentos para empresas/indústrias acompanharem capacitações, equipes, equipamentos e vencimentos em uma plataforma centralizada e com QR Codes.",
        },
        facilities: {
          name: "Sistema de Gestão para Facilities",
          description:
            "Sistema de gestão para empresas de facilities, com rotinas para organizar operações, equipes, atendimentos e acompanhamento de demandas em tempo real.",
        },
        routini: {
          name: "Routini",
          description:
            "Sistema moderno de agendamento criado para simplificar reservas de serviços. A Routini permite que clientes escolham serviços, profissionais e horários disponíveis em um fluxo passo a passo, além de contar com um painel administrativo para gerenciar agendamentos, serviços e equipe em tempo real.",
        },
      },
    },
    about: {
      title: "Sobre mim",
      body: [
        "Sou Engenheiro de Software Fullstack do Brasil, apaixonado por criar produtos digitais que resolvem problemas reais e geram impacto para empresas e usuários.",
        "Minha jornada começou na Engenharia de Software pela UEPG, onde desenvolvi uma base sólida em desenvolvimento, arquitetura de sistemas e resolução de problemas. Desde então, venho atuando em projetos que vão muito além do CRUD tradicional, trabalhando desde aplicações web e mobile até integrações, automações e plataformas voltadas para operações críticas.",
        "Atualmente lidero o desenvolvimento técnico da plataforma S4 Treinamentos, criando soluções para o setor de Segurança do Trabalho com React, React Native, Node.js e TypeScript. Entre os projetos que participei estão sistemas de gestão de treinamentos, aplicativos de inspeção digital, dashboards operacionais e ferramentas que ajudam empresas a reduzir processos manuais e aumentar a eficiência.",
        "Também atuo em projetos SaaS, participando da construção de produtos desde a concepção até a entrega. Gosto especialmente de trabalhar na interseção entre tecnologia, experiência do usuário e negócio, transformando requisitos complexos em soluções intuitivas e escaláveis.",
        "Meu stack principal inclui React, Next.js, TypeScript, Node.js, Fastify, PostgreSQL e MySQL, mas acredito que tecnologia é apenas uma ferramenta. O que realmente me motiva é entender problemas, colaborar com pessoas e construir produtos que façam diferença no dia a dia.",
        "Além da graduação em Engenharia de Software, atualmente curso uma pós-graduação em Engenharia de Segurança do Trabalho e uma especialização em Fullstack com Inteligência Artificial, buscando unir conhecimento técnico, visão de produto e inovação.",
        "Sou fluente em inglês (C1 TOEIC), estudo alemão e tenho interesse em oportunidades internacionais, especialmente em ambientes que valorizam qualidade de software, boas práticas de engenharia e aprendizado contínuo.",
        "Se você está construindo algo relevante e procura alguém que combine visão de produto, foco em experiência do usuário e sólida capacidade de execução técnica, vamos conversar.",
      ],
      contactLabel: "Contato:",
    },
    articles: {
      title: "Artigos",
      dateLocale: "pt-BR",
      articleDateLocale: "pt-BR",
    },
    footer: {
      code: "Código",
      quote: "Sorria, você está vivo :)",
    },
  },
  en: {
    metadata: {
      description: "Matheus Padilha's personal website",
    },
    header: {
      role: "Software Engineer",
      projects: "/projects",
      about: "/about",
      toggleLanguage: "Mudar para português",
    },
    home: {
      intro:
        "Brazilian Software Engineer passionate about clean UI, smart architecture, coffee, and solving real problems. I love design systems, building new solutions, and the challenge of turning complexity into simplicity.",
      links: {
        linkedin: "follow my career",
        github: "see my projects",
        youtube: "where I talk about Occupational Safety",
        s4: "training management system",
        x: "read my mind",
      },
      cv: "Download my CV",
    },
    projects: {
      title: "Projects",
      visitWebsite: "Visit website",
      items: {
        s4Institutional: {
          name: "S4 Institutional Website",
          description:
            "Institutional website for clients to learn about the company, featuring an admin dashboard for managing equipment, employee trainings, and soon, online courses.",
        },
        s4Training: {
          name: "NR Training Management System",
          description:
            "Training management system for companies/industries to track courses, teams, equipment, and expiration dates in one centralized platform with QR Codes.",
        },
        facilities: {
          name: "Facilities Management System",
          description:
            "Management system for facilities companies, with workflows to organize operations, teams, service requests, and real-time demand tracking.",
        },
        routini: {
          name: "Routini",
          description:
            "A modern scheduling system designed to simplify service bookings. Routini allows clients to choose services, professionals, and available time slots through a step-by-step interface. It also features an admin dashboard for managing appointments, services, and staff in real time.",
        },
      },
    },
    about: {
      title: "About me",
      body: [
        "I am a Fullstack Software Engineer from Brazil, passionate about creating digital products that solve real problems and generate impact for companies and users.",
        "My journey started with Software Engineering at UEPG, where I built a solid foundation in development, systems architecture, and problem solving. Since then, I have worked on projects that go far beyond traditional CRUD, ranging from web and mobile applications to integrations, automations, and platforms for critical operations.",
        "I currently lead the technical development of the S4 Treinamentos platform, creating solutions for the Occupational Safety sector with React, React Native, Node.js, and TypeScript. Projects I have worked on include training management systems, digital inspection apps, operational dashboards, and tools that help companies reduce manual processes and increase efficiency.",
        "I also work on SaaS projects, helping build products from concept to delivery. I especially enjoy working at the intersection of technology, user experience, and business, turning complex requirements into intuitive and scalable solutions.",
        "My main stack includes React, Next.js, TypeScript, Node.js, Fastify, PostgreSQL, and MySQL, but I believe technology is only a tool. What really motivates me is understanding problems, collaborating with people, and building products that make a difference in everyday work.",
        "In addition to my degree in Software Engineering, I am currently pursuing a postgraduate degree in Occupational Safety Engineering and a specialization in Fullstack Development with Artificial Intelligence, aiming to connect technical knowledge, product thinking, and innovation.",
        "I am fluent in English (C1 TOEIC), study German, and am interested in international opportunities, especially in environments that value software quality, good engineering practices, and continuous learning.",
        "If you are building something meaningful and looking for someone who combines product vision, focus on user experience, and strong technical execution, let's talk.",
      ],
      contactLabel: "Contact:",
    },
    articles: {
      title: "Articles",
      dateLocale: "en",
      articleDateLocale: "en",
    },
    footer: {
      code: "Code",
      quote: "Smile, you're alive :)",
    },
  },
} as const;

export function getDictionary(locale = getLocale()) {
  return dictionaries[locale];
}
