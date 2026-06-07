import { Globe } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";
import { getDictionary } from "../../lib/i18n";

interface Project {
  name: string;
  description: string;
  imageUrl: string;
  // githubUrl: string;
  url: string;
  technologies: ReactNode;
}

function getProjects(): Project[] {
  const dictionary = getDictionary();
  const items = dictionary.projects.items;

  return [
    {
      name: items.s4Institutional.name,
      description: items.s4Institutional.description,
      url: "https://s4treinamentos.com.br",
      imageUrl: "/projeto1.webp",
      // githubUrl: "https://github.com/LukeberryPi/css2wind",
      technologies: (
        <div className="flex items-center gap-x-3">
          <span className="rounded-full bg-[#007ACC] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-zinc-300 dark:ring-1 dark:ring-zinc-500">
            TypeScript
          </span>
          <span className="rounded-full bg-[#38BDF9] px-2.5 py-0.5 text-sm text-zinc-900 dark:bg-inherit dark:text-zinc-300 dark:ring-1 dark:ring-zinc-500">
            TailwindCSS
          </span>
          <span className="rounded-full bg-gradient-to-r from-[#926AFE] to-[#49C7FF] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-none dark:ring-1 dark:ring-zinc-500">
            Vite
          </span>
        </div>
      ),
    },
    {
      name: items.s4Training.name,
      description: items.s4Training.description,
      url: "https://s4treinamentos.com.br/gestao-treinamentos",
      imageUrl: "/projeto2.webp",
      // githubUrl: "https://github.com/LukeberryPi/css2wind",
      technologies: (
        <div className="flex items-center gap-x-3">
          <span className="rounded-full bg-[#5fbfff] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-zinc-300 dark:ring-1 dark:ring-zinc-500">
            React.js
          </span>
          <span className="rounded-full bg-[#1f8428] px-2.5 py-0.5 text-sm text-zinc-300 dark:bg-inherit dark:text-zinc-300 dark:ring-1 dark:ring-zinc-500">
            Node.js
          </span>
          <span className="rounded-full bg-gradient-to-r from-[#926AFE] to-[#49C7FF] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-none dark:ring-1 dark:ring-zinc-500">
            Vite
          </span>
        </div>
      ),
    },
    {
      name: items.facilities.name,
      description: items.facilities.description,
      url: "https://amicord.com",
      imageUrl: "/projeto3.webp",
      // githubUrl: "https://github.com/LukeberryPi/phived",
      technologies: (
        <div className="flex items-center gap-x-3">
          <span className="rounded-full bg-gradient-to-r from-[#926AFE] to-[#49C7FF] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-none dark:ring-1 dark:ring-zinc-500">
            Vite
          </span>
          <span className="rounded-full bg-[#007ACC] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-zinc-300 dark:ring-1 dark:ring-zinc-500">
            TypeScript
          </span>
          <span className="rounded-full bg-[#1f8428] px-2.5 py-0.5 text-sm text-zinc-300 dark:bg-inherit dark:text-zinc-300 dark:ring-1 dark:ring-zinc-500">
            Go
          </span>
        </div>
      ),
    },
    {
      name: items.routini.name,
      description: items.routini.description,
      url: "https://routini.com.br",
      imageUrl: "/projects/routini.png",
      // githubUrl: "https://github.com/LukeberryPi/phived",
      technologies: (
        <div className="flex items-center gap-x-3">
          <span className="rounded-full bg-[#00D8FE] px-2.5 py-0.5 text-sm text-zinc-900 dark:bg-inherit dark:text-inherit dark:ring-1 dark:ring-zinc-500">
            React
          </span>
          <span className="rounded-full bg-[#007ACC] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-zinc-300 dark:ring-1 dark:ring-zinc-500">
            TypeScript
          </span>
          <span className="rounded-full bg-[#38BDF9] px-2.5 py-0.5 text-sm text-zinc-900 dark:bg-inherit dark:text-inherit dark:ring-1 dark:ring-zinc-500">
            TailwindCSS
          </span>
          <span className="rounded-full bg-gradient-to-r from-[#926AFE] to-[#49C7FF] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-none dark:ring-1 dark:ring-zinc-500">
            Vite
          </span>
        </div>
      ),
    },
  ];
}

function ProjectCard({
  name,
  description,
  imageUrl,
  // githubUrl,
  url,
  technologies,
  visitWebsite,
}: Project & { visitWebsite: string }) {
  return (
    <div className="flex-col divide-y divide-zinc-400 overflow-hidden rounded ring-1 ring-zinc-400 dark:divide-zinc-500 dark:ring-zinc-500">
      <div className="flex items-center justify-between gap-4 p-4 max-sm:flex-col">
        <h2 className="text-xl">{name}</h2>
        {technologies}
      </div>
      <div>
        <p className="p-4">{description}</p>
      </div>
      <Image src={imageUrl} width={620} height={324} alt={name} />
      <div className="flex w-full justify-between divide-x divide-zinc-400 dark:divide-zinc-500">
        <a
          href={url}
          target="_blank"
          className="flex grow items-center justify-center gap-2 py-4 transition-all sm:hover:bg-zinc-100 sm:dark:hover:bg-zinc-800"
        >
          <Globe className="size-4" /> {visitWebsite}
        </a>
        {/* <a
          href={githubUrl}
          target="_blank"
          className="flex grow items-center justify-center gap-2 py-4 transition-all sm:hover:bg-zinc-100 sm:dark:hover:bg-zinc-800"
        >
          <GitBranch className="size-4" /> View code
        </a> */}
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const dictionary = getDictionary();
  const projects = getProjects();

  return (
    <>
      <h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">
        {dictionary.projects.title}
      </h1>
      <div className="space-y-20">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            visitWebsite={dictionary.projects.visitWebsite}
            {...project}
          />
        ))}
      </div>
    </>
  );
}
