export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Meme List",
  description: "Meme list app",
  navItems: [
    {
      label: "Головна",
      href: "/",
    },
    {
      label: "Таблиця",
      href: "/table",
    },
    {
      label: "Список",
      href: "/list",
    },
  ],
  links: {
    github: "https://github.com/phoenixfan86",
  },
};
