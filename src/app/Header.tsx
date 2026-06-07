"use client";

import { ChevronLeft, Languages, Moon, Sun, Triangle } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Locale = "pt-BR" | "en";

const DEFAULT_LOCALE: Locale = "pt-BR";

const labels = {
  "pt-BR": {
    role: "Engenheiro de Software",
    projects: "/projetos",
    about: "/sobre",
    toggleLanguage: "Switch to English",
    nextLocale: "en",
  },
  en: {
    role: "Software Engineer",
    projects: "/projects",
    about: "/about",
    toggleLanguage: "Mudar para português",
    nextLocale: "pt-BR",
  },
} as const;

function isThemeSetToDark() {
  if (window == undefined) return;

  return (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
}

function getCookie(name: string) {
  return document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(`${name}=`))
    ?.split("=")[1];
}

function getStoredLocale(): Locale {
  const locale = getCookie("locale");

  return locale === "en" || locale === "pt-BR" ? locale : DEFAULT_LOCALE;
}

export default function Header() {
  const path = usePathname();
  const router = useRouter();
  const isHome = path === "/";
  const [isDarkMode, setIsDarkMode] = useState(isThemeSetToDark());
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    setLocale(getStoredLocale());

    if (isThemeSetToDark()) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  };

  const toggleLanguage = () => {
    const nextLocale = labels[locale].nextLocale;

    document.cookie = `locale=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`;
    document.documentElement.lang = nextLocale.toLowerCase();
    setLocale(nextLocale);
    router.refresh();
  };

  return (
    <header className="mx-auto max-w-prose py-8 max-sm:pt-4">
      <nav className="flex items-center justify-between max-sm:flex-col max-sm:gap-6">
        {isHome ? (
          <div>
            <div className="flex flex-col max-sm:items-center">
              Matheus Padilha
              <span className="text-zinc-500 dark:text-zinc-400">
                {labels[locale].role}
              </span>
            </div>
          </div>
        ) : (
          <Link
            className="group relative -m-12 -my-2 -mr-4 flex items-center rounded py-2 pl-12 pr-4 ring-1 ring-sky-500 ring-opacity-0 transition-all max-sm:text-center sm:hover:ring-opacity-100 dark:ring-sky-600 dark:ring-opacity-0"
            href="/"
          >
            <div className="absolute left-1 flex size-4 h-full w-12 items-center px-2">
              <ChevronLeft />
            </div>
            <div className="flex flex-col max-sm:items-center">
              Matheus Padilha
              <span className="text-zinc-500 dark:text-zinc-400">
                {labels[locale].role}
              </span>
            </div>
          </Link>
        )}
        <div className="flex items-center gap-4">
          <button
            onClick={() => toggleTheme()}
            className="group relative flex items-center"
          >
            {isDarkMode ? (
              <Moon className="size-5 fill-gray-700 transition-all sm:hover:-rotate-12 sm:hover:scale-110" />
            ) : (
              <Sun className="size-5 fill-yellow-300 transition-all sm:hover:rotate-45 sm:hover:scale-110" />
            )}
          </button>
          <button
            aria-label={labels[locale].toggleLanguage}
            title={labels[locale].toggleLanguage}
            onClick={() => toggleLanguage()}
            className="group relative flex items-center rounded px-1 py-px ring-1 ring-sky-500 ring-opacity-0 transition-all sm:hover:ring-opacity-100 dark:ring-sky-600 dark:ring-opacity-0"
          >
            <Languages className="size-5 transition-all sm:group-hover:scale-110" />
          </button>
          <Link
            className="group relative rounded px-2 py-px ring-1 ring-sky-500 ring-opacity-0 transition-all sm:hover:ring-opacity-100 dark:ring-sky-600 dark:ring-opacity-0"
            href="/projects"
            data-is-current-path={path === "/projects"}
          >
            {labels[locale].projects}
            <Triangle className="absolute left-1/2 mt-1 hidden size-2 fill-sky-500 text-zinc-800 group-data-[is-current-path=true]:block dark:fill-sky-600 dark:text-transparent" />
          </Link>
          {/* <Link
            className="group relative rounded px-2 py-px ring-1 ring-sky-500 ring-opacity-0 transition-all sm:hover:ring-opacity-100 dark:ring-sky-600 dark:ring-opacity-0"
            href="/articles"
            data-is-current-path={path.startsWith("/articles")}
          >
            /articles
            <Triangle className="absolute left-1/2 mt-1 hidden size-2 fill-sky-500 text-zinc-800 group-data-[is-current-path=true]:block dark:fill-sky-600 dark:text-transparent" />
          </Link> */}
          <Link
            className="group relative rounded px-2 py-px ring-1 ring-sky-500 ring-opacity-0 transition-all sm:hover:ring-opacity-100 dark:ring-sky-600 dark:ring-opacity-0"
            href="/about"
            data-is-current-path={path === "/about"}
          >
            {labels[locale].about}
            <Triangle className="absolute left-1/2 mt-1 hidden size-2 fill-sky-500 text-zinc-800 group-data-[is-current-path=true]:block dark:fill-sky-600 dark:text-transparent" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
