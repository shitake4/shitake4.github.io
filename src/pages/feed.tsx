import {Feed} from "feed";
import {config} from "@site.config";
import {members} from "@members";
import {getMemberPostsById} from "@src/utils/helper";
import React from "react";
import fs from "fs-extra";
import {GetStaticProps} from "next";

export const getStaticProps: GetStaticProps = async () => {
  generateFeedXml();
  return {props: {}}
}

async function generateFeedXml() {
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

  const postItems = getMemberPostsById(members[0].id);
  postItems?.forEach((post) => {
    feed.addItem(({
      title: post.title,
      description: post.contentSnippet,
      date: new Date(post.dateMiliSeconds),
      link: post.link,
    }));
  })

  fs.writeFileSync('public/feed.xml', feed.rss2())
  fs.writeFileSync('public/feed.json', feed.json1())
  fs.writeFileSync('public/atom.xml', feed.atom1())
  return;
}

const Page = () => null
export default Page;
