import {
  SiGithub,
  SiLinkedin,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import { ArrowUpRight, Copy, Download, Send } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

const XLogo = () => {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" className="ml-1">
      <g>
        <path
          className="fill-zinc-950 dark:fill-zinc-300"
          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        ></path>
      </g>
    </svg>
  );
};

const RaycastLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={26}
      fill="none"
      viewBox="0 0 48 48"
    >
      <path
        className="fill-[#FF6362] dark:fill-zinc-300"
        fillRule="evenodd"
        d="M12 30.99V36L-.01 23.99l2.516-2.499zM17.01 36H12l12.011 12.01 2.506-2.505zm28.487-9.497L48 24 24 0l-2.503 2.503L30.98 12h-5.732l-6.62-6.614-2.506 2.503 4.122 4.122h-2.869v18.625H36V27.77l4.122 4.122 2.503-2.506L36 22.747v-5.732zM13.253 10.747l-2.503 2.506 2.686 2.686 2.503-2.506zm21.314 21.314-2.495 2.503 2.686 2.686 2.506-2.503zM7.878 16.121l-2.503 2.504L12 25.253v-5.012zM27.756 36h-5.009l6.628 6.625 2.503-2.503z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

interface Link {
  name: string;
  description?: string;
  url: string;
  icon?: ReactNode;
}

const externalLinks: Link[] = [
  {
    name: "LinkedIn",
    description: "follow my career",
    url: "https://linkedin.com/in/padilha--matheus",
    icon: <SiLinkedin className="fill-[#0077B5] dark:fill-zinc-300" />,
  },
  {
    name: "GitHub",
    description: "steal my code",
    url: "https://github.com/Padilha1",
    icon: <SiGithub />,
  },
  {
    name: "YouTube",
    description: "where I talk about Occupational Safety",
    url: "https://youtube.com/@s4inspec",
    icon: <SiYoutube className="fill-[#FF0032] dark:fill-zinc-300" />,
  },
  {
    name: "X (formerly Twitter)",
    description: "read my mind",
    url: "https://x.com/Pa__dilha",
    icon: <XLogo />,
  },
  // {
  //   name: "Get 10% OFF Raycast Pro",
  //   description: "upgrade your workflow",
  //   url: "https://www.raycast.com/pro?via=lukeberrypi",
  //   icon: <RaycastLogo />,
  // },
];

const ExternalLink = (link: Link) => {
  return (
    <a
      key={link.description}
      href={link.url}
      target="_blank"
      className="group flex items-center justify-between p-4 transition-all sm:hover:bg-zinc-100 sm:dark:hover:bg-zinc-800"
    >
      <span className="flex items-center gap-4">
        {link.icon} {link.name}
        <span className="-translate-x-4 text-zinc-500 opacity-0 transition-all max-sm:hidden sm:group-hover:translate-x-0 sm:group-hover:opacity-100 dark:text-zinc-400">
          {link.description}
        </span>
      </span>
      <ArrowUpRight className="size-5 shrink-0 text-zinc-800 transition-all sm:group-hover:rotate-45 dark:text-zinc-300" />
    </a>
  );
};

export default function HomePage() {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-sm">
        Brazilian Software Engineer passionate about clean UI, smart
        architecture, coffee, and solving real problems. I love design systems,
        build new solutions and the challenge of turning complexity into
        simplicity.
      </p>
      <div className="divide-y divide-zinc-400 overflow-hidden rounded ring-1 ring-zinc-400 dark:divide-zinc-500 dark:ring-zinc-500">
        {externalLinks.map((link: Link) => (
          <ExternalLink key={link.url} {...link} />
        ))}
      </div>
      <div className="flex justify-center gap-y-6 max-sm:flex-col-reverse sm:justify-between">
        <div className="flex flex-col justify-center gap-y-5 max-sm:items-center">
          <div className="sm:group relative -m-8 flex items-center gap-3 p-8 transition-all">
            padilha.matheus@hotmail.com
            <div className="inline-flex items-center gap-3 transition-all sm:absolute sm:right-4 sm:opacity-0 sm:group-hover:right-1 sm:group-hover:opacity-100">
              {/* TODO add copy email
                <button className="text-zinc-800 sm:group-hover:inline-flex dark:text-zinc-300">
                <Copy className="size-4" />
              </button> */}
              <a
                href="mailto:padilha.matheus@hotmail.com"
                className="text-zinc-800 dark:text-zinc-300"
              >
                <Send className="size-4" />
              </a>
            </div>
          </div>
          {/* <span className="-mt-2 flex w-fit items-center gap-1.5 rounded-full bg-green-100 px-2 py-0.5 text-sm text-green-600 ring-1 ring-green-500 dark:bg-transparent dark:text-emerald-500 dark:ring-emerald-500">
            <div className="size-2 animate-pulse rounded-full bg-green-500 dark:bg-emerald-500" />
            Online
          </span> */}
        </div>
        <div className="flex flex-col gap-2">
          <a
            href="/resume_matheus.pdf"
            download="Matheus-Padilha-CV.pdf"
            className="flex flex-row items-center justify-center gap-3 rounded bg-sky-300 p-4 text-sky-800 ring-1 ring-sky-500 transition-all sm:hover:bg-sky-400 dark:bg-inherit dark:text-sky-500 dark:ring-sky-500 sm:sm:dark:hover:bg-zinc-800"
          >
            <span className="text-nowrap">Download my CV</span>
            <Download className="size-5 max-sm:hidden" />
          </a>
        </div>
      </div>
    </div>
  );
}
