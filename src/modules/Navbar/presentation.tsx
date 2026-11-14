import { ArrowRight, Menu, X } from "lucide-react";
import React from "react";
import { Button } from "../../components/Button/presentation";
import { NAV_LINKS, SITE_DATA } from "../../constants";
import { useNavbar } from "../../hooks";
import { buildWhatsAppUrl } from "../../shared/utils/whatsapp";

export const Navbar: React.FC = () => {
  const { isOpen, toggle, close } = useNavbar();
  const whatsappHref = buildWhatsAppUrl(
    SITE_DATA.contacts.whatsapp,
    SITE_DATA.contacts.whatsappMessage,
  );

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    close();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="absolute top-5 right-4 left-4 z-50 md:top-7 md:right-9 md:left-9">
      <div className="flex items-center justify-between rounded-full bg-paper/80 px-5 py-3 shadow-sm backdrop-blur-xl md:px-7">
        <a
          href="#home"
          onClick={(e) => handleScrollTo(e, "#home")}
          className="flex items-center gap-3"
        >
          <span className="grid size-8 place-items-center rounded-full bg-ink text-sm text-gold">
            ♛
          </span>
          <span className="leading-tight">
            <strong className="block text-sm text-ink md:text-[15px]">
              {SITE_DATA.brand.name}
            </strong>
            <span className="block text-[10px] font-semibold tracking-[0.12em] text-gold">
              {SITE_DATA.brand.role}
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 text-sm text-[#4a4540] lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={whatsappHref}
          target={SITE_DATA.contacts.whatsapp ? "_blank" : undefined}
          rel="noreferrer"
          className="hidden lg:block"
        >
          <Button variant="dark">
            Agendar consulta
            <ArrowRight size={16} />
          </Button>
        </a>

        <button
          className="cursor-pointer text-ink lg:hidden"
          onClick={toggle}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="mt-3 rounded-3xl bg-paper/95 p-5 shadow-lg backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-base font-medium text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappHref}
              target={SITE_DATA.contacts.whatsapp ? "_blank" : undefined}
              rel="noreferrer"
            >
              <Button variant="dark" className="w-full">
                Agendar consulta
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
