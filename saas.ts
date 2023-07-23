import {author} from "@author";

export const SaaS = {
  twitter: {},
  github: {},
  zenn: {rss: `https://zenn.dev/${author.zenn?.userName}/feed`},
  note: {rss: `https://note.com/${author.note?.userName}/rss`},
  speakerdeck: {rss: `https://speakerdeck.com/${author.speakerdeck?.userName}.atom`},
  qiita: {rss: `https://qiita.com/${author.qiita?.userName}/feed`},
  medium: {rss: `https://medium.com/feed/${author.medium?.userName}`},
}
