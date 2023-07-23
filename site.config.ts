export const config = {
  siteMeta: {
    title: "shitake4 Blog Hub",
    teamName: "shitake4",
    description: "A comprehensive site to retrieve shitake4 articles.",
  },
  siteRoot:
      process.env.NODE_ENV === "production"
          ? "https://shitake4.tech"
          : "http://localhost:3000",
  meta: {
    googleTagManagerId: "G-P11C5YZ7TW"
  },
  headerLinks: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "https://forms.gle/nrXyTGFiD1ApmUAu7",
    },
  ],
};
