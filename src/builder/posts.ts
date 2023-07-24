import fs from "fs-extra";
import Parser from "rss-parser";
import {Author, PostItem, Rss, WebService} from "../types";
import {author} from "../../author";

type FeedItem = {
  title: string;
  link: string;
  contentSnippet?: string;
  isoDate?: string;
  dateMiliSeconds: number;
};

function isValidUrl(str: string): boolean {
  try {
    const {protocol} = new URL(str);
    return protocol === "http:" || protocol === "https:";
  } catch {
    return false;
  }
}

function filterRssWebServices(webServices: WebService[]): Rss[] {
  return webServices
      .reduce((result: Rss[], service: WebService) => {
        if (service.rss) return [...result, service.rss]
        return result;
      }, [])
}

const parser = new Parser();
let allPostItems: PostItem[] = [];

async function fetchFeedItems(source: Rss) {
  const feed = await parser.parseURL(source.url);
  if (!feed?.items?.length) return [];

  // return item which has title and link
  return feed
      .items
      .map(({title, contentSnippet, link, isoDate}) => {
        return {
          title,
          contentSnippet: contentSnippet?.replace(/\n/g, ""),
          link,
          isoDate,
          dateMiliSeconds: isoDate ? new Date(isoDate).getTime() : 0,
        } as FeedItem;
      })
      .filter(({title, link}) => title && link && isValidUrl(link))
      .filter((item) => {
        if (source.includeUrlRegex) return item.link.match(new RegExp(source.includeUrlRegex))
        return true;
      })
      .filter((item) => {
        if (source.excludeUrlRegex) return !item.link.match(new RegExp(source.excludeUrlRegex))
        return true;
      })
}

async function getFeedItemsFrom(sources: Rss[]) {
  let feedItems: FeedItem[] = [];
  for (const source of sources) {
    const items = await fetchFeedItems(source);
    if (items) feedItems = [...feedItems, ...items];
  }
  return feedItems;
}

async function getMemberFeedItems(author: Author): Promise<PostItem[]> {
  const {authorId, webServices, name} = author;
  const rss = filterRssWebServices(webServices)
  const feedItems = await getFeedItemsFrom(rss);
  if (!feedItems) return [];

  return feedItems.map((item) => {
    return {
      ...item,
      authorName: name,
      authorId: authorId,
    };
  });
}

(async function () {
  const items = await getMemberFeedItems(author);
  if (items) allPostItems = [...allPostItems, ...items];
  allPostItems.sort((a, b) => b.dateMiliSeconds - a.dateMiliSeconds);
  fs.ensureDirSync(".contents");
  fs.writeJsonSync(".contents/posts.json", allPostItems);
})();
