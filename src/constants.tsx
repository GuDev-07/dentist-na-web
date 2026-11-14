import { NavLink, SiteData } from "./types";

export const NAV_LINKS: NavLink[] = [
  { label: "Início", href: "#home" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Sorrisos", href: "#sorrisos" },
  { label: "Contato", href: "#contato" },
];

export const SITE_DATA: SiteData = {
  brand: {
    name: "Dra. Náthali Garcia",
    role: "CIRURGIÃ-DENTISTA · CRO-SP",
  },
  hero: {
    kicker: "Votorantim e Sorocaba, SP",
    title: "Um sorriso que acolhe",
    titleEmphasis: "a família inteira.",
    primaryCta: "Agendar consulta",
  },
  contacts: {
    // Número ainda não definido no brief — preencher quando a Nathali enviar.
    whatsapp: "",
    whatsappMessage:
      "Olá, Dra. Náthali. Gostaria de agendar uma consulta.",
    instagram: "https://instagram.com/dra.nathaligarcia",
  },
};
