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
  authorId: string;
  name: string;
  email: string;
  avatarSrc: string;
  role?: string;
  bio?: string;
  sources?: string[];
  includeUrlRegex?: string;
  excludeUrlRegex?: string;
  websiteUrl?: string;
  webServices: WebService[]
};

export type WebService = {
  name: WebServiceName
  url: string
  userName: string
  rss?: Rss
}

export type WebServiceName =
    | 'twitter'
    | 'github'
    | 'zenn'
    | 'note'
    | 'speakerdeck'
    | 'qiita'
    | 'medium'
    | 'hatenablog'
    | 'wantedly'
    | 'linkedin'
    | 'instagram'
    | 'facebook'
    | 'youtube'
    | 'pixiv'

export type Rss = {
  url: string
  includeUrlRegex?: string
  excludeUrlRegex?: string
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
