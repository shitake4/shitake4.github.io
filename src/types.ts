export type Member = {
  id: string;
  name: string;
  avatarSrc: string;
  role?: string;
  bio?: string;
  sources?: string[];
  includeUrlRegex?: string;
  excludeUrlRegex?: string;
  githubUsername?: string;
  twitterUsername?: string;
  websiteUrl?: string;
};

export type Author = {
  name: string;
  avatarSrc: string;
  role?: string;
  bio?: string;
  sources?: string[];
  includeUrlRegex?: string;
  excludeUrlRegex?: string;
  websiteUrl?: string;
  github?: SaaS;
  twitter?: SaaS;
  zenn?: SaaS;
  note?: SaaS;
  speakerdeck?: SaaS;
  qiita?: SaaS;
  medium?: SaaS;
  wantedly?: SaaS;
  youtrust?: SaaS;
  linkedIn?: SaaS;
};

type SaaS = {
  userName: string;
}

export type PostItem = {
  authorId: string;
  authorName: string;
  title: string;
  link: string;
  contentSnippet?: string;
  isoDate?: string;
  dateMiliSeconds: number;
};
