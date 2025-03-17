import {Feed} from "feed";
import {config} from "../../site.config";
import fs from "fs-extra";
import {PostItem} from "../types";
import {author} from "../../author";

async function generateFeed() {
  const date = new Date();
  const {authorId,email, websiteUrl} = author
  const feed = new Feed({
    title: config.siteMeta.title,
    description: config.siteMeta.description,
    id: config.siteRoot,
    link: config.siteRoot,
    language: 'ja',
    image: `${config.siteRoot}/logo.png`,
    copyright: `All rights reserved ${date.getFullYear()}, ${config.siteMeta.author}`,
    updated: date,
    feedLinks: {
      rss2: `${config.siteRoot}/feed.xml`,
      json: `${config.siteRoot}/feed.json`,
      atom: `${config.siteRoot}/atom.xml`,
    },
    author: {name: authorId, email: email, link: websiteUrl},
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
