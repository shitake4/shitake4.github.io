import {GetServerSidePropsContext} from "next";
import {Feed} from "feed";
import {config} from "@site.config";
import {members} from "@members";
import {getMemberPostsById} from "@src/utils/helper";

export const getServerSideProps = async ({res}: GetServerSidePropsContext) => {
  const xml = await generateFeedXml();

  res.statusCode = 200;
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate'); // 24時間キャッシュする
  res.setHeader('Content-Type', 'text/xml');
  res.end(xml);

  return {
    props: {},
  };
};

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
  return feed.rss2();
}

const Page = () => null;
export default Page;
