import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {PostItem} from "@src/types";
import {getFaviconSrcFromOrigin} from "@src/utils/helper";

dayjs.extend(relativeTime);

const THREE_DAYS_MS = 86400000 * 3;
const buildTimestamp = Date.now();

const PostLink: React.FC<{ item: PostItem }> = (props) => {
  const {title, isoDate, link, dateMiliSeconds} = props.item;
  const {hostname, origin} = new URL(link);
  const isNew = dateMiliSeconds && dateMiliSeconds > buildTimestamp - THREE_DAYS_MS;

  return (
      <article className="post-link">
        <Link legacyBehavior href={link}>
          <a className="post-link__author">
            <div className="post-link__author-name">
              <time dateTime={isoDate} className="post-link__date">
                {dayjs(isoDate).fromNow()}
              </time>
            </div>
          </a>
        </Link>
        <a href={link} className="post-link__main-link">
          <h2 className="post-link__title">{title}</h2>
          {hostname && (
              <div className="post-link__site">
                <Image
                    src={getFaviconSrcFromOrigin(origin)}
                    width={14}
                    height={14}
                    className="post-link__site-favicon"
                    alt={hostname}
                    unoptimized
                />
                {hostname}
              </div>
          )}
        </a>
        {isNew && (
            <div className="post-link__new-label">NEW</div>
        )}
      </article>
  );
};

export const PostList: React.FC<{ items: PostItem[] }> = (props) => {
  const [displayItemsCount, setDisplayItemsCount] = useState<number>(32);
  const totalItemsCount = props.items?.length || 0;
  const canLoadMore = totalItemsCount - displayItemsCount > 0;

  if (!totalItemsCount) {
    return <div className="post-list-empty">No posts yet</div>;
  }

  return (
      <>
        <div className="post-list">
          {props.items.slice(0, displayItemsCount).map((item, i) => (
              <PostLink key={`post-item-${i}`} item={item}/>
          ))}
        </div>
        {canLoadMore && (
            <div className="post-list-load">
              <button
                  onClick={() => setDisplayItemsCount(displayItemsCount + 32)}
                  className="post-list-load__button"
              >
                LOAD MORE
              </button>
            </div>
        )}
      </>
  );
};
