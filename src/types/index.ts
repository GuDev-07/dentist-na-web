export interface NavLink {
  label: string;
  href: string;
}

export interface SiteData {
  brand: {
    name: string;
    role: string;
  };
  hero: {
    kicker: string;
    title: string;
    titleEmphasis: string;
    primaryCta: string;
  };
  contacts: {
    whatsapp: string;
    whatsappMessage: string;
    instagram: string;
  };
}
