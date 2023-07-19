import {Feed} from "feed";
import {config} from "../../site.config";
import fs from "fs-extra";
import {PostItem} from "../types";

async function generateFeed() {
  const date = new Date();
  const author = {
    name: 'shitake4',
    email: 'dev.t.suzuki@gmail.com',
    link: 'https://shitake4.tech',
  };
  const feed = new Feed({
    title: config.siteMeta.title,
    description: config.siteMeta.description,
    id: config.siteRoot,
    link: config.siteRoot,
    language: 'ja',
    image: `${config.siteRoot}/logo.png`,
    copyright: `All rights reserved ${date.getFullYear()}, ${author.name}`,
    updated: date,
    feedLinks: {
      rss2: `${config.siteRoot}/rss/feed.xml`,
      json: `${config.siteRoot}/rss/feed.json`,
      atom: `${config.siteRoot}/rss/atom.xml`,
    },
    author: author,
  });

  // const jsonString =
  const posts = fs.readJsonSync('.contents/posts.json') as PostItem[]
  posts?.forEach((post) => {
    feed.addItem(({
      title: post.title,
      description: post.contentSnippet,
      date: new Date(post.dateMiliSeconds),
      link: post.link,
    }));
  })
  return feed;
}

(async function () {
  const feed = await generateFeed()
  fs.ensureDirSync('.public')
  fs.writeFileSync('public/feed.xml', feed.rss2());
  fs.writeJsonSync('public/feed.json', feed.json1());
  fs.writeFileSync('public/atom.xml', feed.atom1());
})();
