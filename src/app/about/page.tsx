import { getDictionary } from "../../lib/i18n";

export default function AboutPage() {
  const dictionary = getDictionary();
  const about = dictionary.about;

  return (
    <>
      <h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">
        {about.title}
      </h1>
      <article>
        {about.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p>
          {about.contactLabel}{" "}
          <a href="mailto:padilha.matheus@hotmail.com">
            padilha.matheus@hotmail.com
          </a>
        </p>
      </article>
    </>
  );
}
