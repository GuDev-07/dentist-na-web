import { ArrowUpRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import fundoHero from "../../assets/fundo-hero.png";
import { Button } from "../../components/Button/presentation";
import { SITE_DATA } from "../../constants";
import { buildWhatsAppUrl } from "../../shared/utils/whatsapp";

export const Hero: React.FC = () => {
  const { hero, contacts } = SITE_DATA;
  const [offset, setOffset] = useState(0);
  const whatsappHref = buildWhatsAppUrl(
    contacts.whatsapp,
    contacts.whatsappMessage,
  );

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const onScroll = () => {
      setOffset(Math.min(window.scrollY * 0.18, 40));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-svh overflow-hidden bg-cream animate-fade-in visible"
    >
      <img
        src={fundoHero}
        alt="Dra. Náthali Garcia no consultório"
        className="pointer-events-none absolute inset-0 h-[115%] w-full object-cover object-[78%_18%] md:object-[72%_center]"
        style={{ transform: `translateY(${offset}px)` }}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-r from-cream from-0% via-cream/82 via-36% to-transparent to-68% max-md:from-cream/55 max-md:via-transparent max-md:to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-cream/20 via-transparent to-ink/25 max-md:from-cream/40 max-md:via-cream/35 max-md:to-cream/80"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex min-h-svh w-full max-w-7xl items-end px-6 pt-32 pb-10 md:items-center md:px-12 md:pb-20 lg:px-14">
        <div className="max-w-xl animate-fade-up visible">
          <p className="text-xs font-semibold tracking-[0.22em] text-gold uppercase">
            <span className="mr-3 inline-block h-px w-7 bg-gold align-middle" />
            {hero.kicker}
          </p>
          <h1 className="font-serif mt-6 text-[clamp(32px,7vw,64px)] leading-[0.96] font-medium tracking-[-0.03em] text-ink">
            <span className="block">{hero.title}</span>
            <em className="mt-2 block font-serif italic text-gold">
              {hero.titleEmphasis}
            </em>
          </h1>
          <div className="mt-10">
            <a
              href={whatsappHref}
              target={contacts.whatsapp ? "_blank" : undefined}
              rel="noreferrer"
            >
              <Button variant="dark">
                {hero.primaryCta}
                <ArrowUpRight size={16} />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
