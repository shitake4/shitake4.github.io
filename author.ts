import {Author} from "@src/types";

export const author: Author = {
  authorId: "shitake4",
  name: "しいたけ@shitake4",
  email: 'dev.t.suzuki@gmail.com',
  websiteUrl: "https://shitake4.tech",
  role: "software engineer",
  bio: "ソフトウェアエンジニア / Scrum Inc.認定スクラムマスター, 認定プロダクトオーナーとしてソフトウェア開発しています。現場で得た知見、Railsのコードリーディングなどをブログで書いていたりします",
  avatarSrc: "/avatars/shitake4.png",
  webServices: [
    {name: 'x', userName: "shitake4", url: 'https://x.com/shitake4'},
    {name: 'github', userName: "shitake4", url: 'https://github.com/shitake4'},
    {
      name: 'zenn',
      userName: "shitake4",
      url: 'https://zenn.dev/shitake4',
      rss: {url: 'https://zenn.dev/shitake4/feed'}
    },
    {
      name: 'note',
      userName: "shitake4_",
      url: 'https://note.com/shitake4_',
      rss: {url: 'https://note.com/shitake4_/rss'}
    },
    {
      name: 'speakerdeck',
      userName: "shitake4",
      url: 'https://speakerdeck.com/shitake4',
      rss: {url: 'https://speakerdeck.com/shitake4.atom'}
    },
    {
      name: 'qiita',
      userName: "shitake4",
      url: 'https://qiita.com/shitake4',
      rss: {url: 'https://qiita.com/shitake4/feed'}
    },
    {name: 'medium', userName: "shitake4", url: 'https://medium.com/@shitake4'},
    {
      name: 'hatenablog',
      userName: "shitake4",
      url: 'https://blog.shitake4.tech',
      rss: {url: 'https://blog.shitake4.tech/feed?size=100'}
    },
  ],
};
