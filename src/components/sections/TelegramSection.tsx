"use client";
import { useI18n } from "@/i18n/LanguageContext";

export default function TelegramSection() {
  const { t, marketplace } = useI18n();
  const openLines = t.telegram.open.split("\n");

  return (
    <section
      id="telegram"
      className="relative overflow-hidden bg-bg"
      style={{ minHeight: "100vh" }}
    >
      <div className="site-container flex min-h-screen flex-col py-16 md:py-20 lg:py-24">
        <div className="grid flex-1 grid-cols-1 gap-10 lg:grid-cols-[minmax(180px,240px)_1fr] lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-between gap-10 lg:min-h-full lg:py-2">
            <p className="flex max-w-[220px] items-center gap-2.5 font-body text-sm leading-relaxed text-text-light md:text-[15px]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="shrink-0 text-accent"
                aria-hidden
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.04.01-.18-.07-.26-.08-.07-.2-.05-.28-.03-.12.03-2.04 1.3-5.76 3.82-.54.37-1.04.56-1.48.55-.49-.01-1.42-.27-2.12-.5-.85-.28-1.54-.44-1.48-.93.03-.26.42-.52 1.17-.8 4.57-1.99 7.63-3.31 9.17-3.94 4.36-1.8 5.27-2.11 5.86-2.12.13 0 .42.03.61.18.16.13.21.3.23.47-.02.1-.02.24-.03.27z"
                  fill="currentColor"
                />
              </svg>
              {t.telegram.powered}
            </p>

            <a
              href={marketplace}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative hidden h-[160px] w-[160px] shrink-0 items-center justify-center rounded-full bg-accent transition-transform duration-300 hover:scale-105 hover:bg-accent-light lg:flex xl:h-[180px] xl:w-[180px]"
            >
              <span className="flex flex-col items-center gap-2 text-center font-display text-[15px] font-bold leading-tight text-bg xl:text-base">
                {openLines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
                <span className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-bg/10 transition-transform duration-300 group-hover:translate-x-1">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M3.5 9h11M9 3.5l5.5 5.5-5.5 5.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </span>
            </a>
          </div>

          <div className="flex flex-col">
            <div className="relative mb-10 max-w-3xl lg:mb-14">
              <div className="relative inline-block max-w-full">
                <h2 className="section-title">
                  {t.telegram.title}
                  <br />
                  <span className="text-accent">{t.telegram.titleAccent}</span>
                </h2>
                <span
                  className="absolute left-full top-0 ml-3 font-display text-4xl leading-none text-accent md:ml-5 md:text-5xl"
                  aria-hidden
                >
                  ✦
                </span>
              </div>
              <p className="section-subtitle">
                {t.telegram.desc}
              </p>
            </div>

            <div className="mt-auto grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
              {t.telegram.features.map((f) => (
                <div
                  key={f.title}
                  className="flex flex-col rounded-[24px] bg-surface-2 p-5 transition-transform duration-300 hover:-translate-y-1 md:rounded-[28px] md:p-7"
                >
                  <span className="mb-5 block text-[40px] leading-none md:mb-6 md:text-[48px]">
                    {f.icon}
                  </span>
                  <h3 className="mb-3 font-display text-[18px] font-bold leading-snug text-text md:text-[20px]">
                    {f.title}
                  </h3>
                  <p className="font-body text-[15px] leading-relaxed text-text-light md:text-[16px] md:leading-[1.55]">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>

            <a
              href={marketplace}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 flex h-[140px] w-[140px] shrink-0 items-center justify-center rounded-full bg-accent transition-transform duration-300 hover:scale-105 hover:bg-accent-light lg:hidden"
            >
              <span className="flex flex-col items-center gap-1.5 text-center font-display text-[14px] font-bold leading-tight text-bg">
                {openLines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
                <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-bg/10 transition-transform duration-300 group-hover:translate-x-1">
                  <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M3.5 9h11M9 3.5l5.5 5.5-5.5 5.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
