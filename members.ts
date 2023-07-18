import { Member } from "@src/types";

export const members: Member[] = [
  {
    id: "shitake4",
    name: "しいたけ",
    role: "software engineer",
    bio: "Railsのコードリーディングや現場で得たスクラムの知見をブログで書いていたりします。Railsエンジニア / Scrum Inc.認定スクラムマスター・認定プロダクトオーナーとしてスクラム開発しています",
    avatarSrc: "/avatars/shitake4.png",
    sources: [
      // "https://zenn.dev/shitake4/feed",
      // "https://shitake4.medium.com/feed",
      // "https://note.com/tkggood/rss",
      "https://speakerdeck.com/shitake4.atom",
      "https://blog.shitake4.tech/feed",
      "https://qiita.com/shitake4/feed",
    ],
    // includeUrlRegex: "medium.com|zenn.dev|qiita.com|blog.shitake4.tech",
    twitterUsername: "shitake4",
    githubUsername: "shitake4",
    websiteUrl: "https://shitake4.tech",
  },
];
