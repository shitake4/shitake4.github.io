export const config = {
  siteMeta: {
    title: "shitake4 Blog Hub",
    teamName: "shitake4",
    description: "A comprehensive site to retrieve shitake4 articles.",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://team-blog-hub.vercel.app"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "Contact",
      href: "https://forms.gle/nrXyTGFiD1ApmUAu7",
    },
  ],
};
