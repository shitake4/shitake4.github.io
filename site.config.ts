import {author} from "./author";

export const config = {
  siteMeta: {
    title: `${author.authorId} Post Hub`,
    author: author.authorId,
    description: `A comprehensive site to retrieve ${author.authorId} articles.`,
  },
  siteRoot:
      process.env.NODE_ENV === "production"
          ? "https://shitake4.tech"
          : "http://localhost:3000",
  googleTagManagerId: "GTM-MP9B45W",
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
