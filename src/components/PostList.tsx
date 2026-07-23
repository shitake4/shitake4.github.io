import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {PostItem} from "@src/types";
import styles from "./PostList.module.scss";

dayjs.extend(relativeTime);

const THREE_DAYS_MS = 86400000 * 3;
const buildTimestamp = Date.now();
const INITIAL_DISPLAY_ITEMS_COUNT = 30;
const LOAD_MORE_ITEMS_COUNT = 32;

const PostLink: React.FC<{ item: PostItem }> = (props) => {
  const {title, isoDate, link, dateMiliSeconds, hostname, faviconSrc} = props.item;
  const isNew = dateMiliSeconds && dateMiliSeconds > buildTimestamp - THREE_DAYS_MS;

  return (
      <article className={styles.link}>
        <Link href={link} className={styles.author} data-gtm="article">
          <div>
            <time dateTime={isoDate} className={styles.date}>
              {dayjs(isoDate).fromNow()}
            </time>
          </div>
        </Link>
        <a href={link} className={styles.mainLink} data-gtm="article">
          <h2 className={styles.title}>{title}</h2>
          {hostname && (
              <div className={styles.site}>
                <Image
                    src={faviconSrc}
                    width={14}
                    height={14}
                    className={styles.favicon}
                    alt={hostname}
                    unoptimized
                />
                {hostname}
              </div>
          )}
        </a>
        {isNew && (
            <div className={styles.newLabel}>NEW</div>
        )}
      </article>
  );
};

export const PostList: React.FC<{ items: PostItem[] }> = (props) => {
  const [displayItemsCount, setDisplayItemsCount] = useState<number>(INITIAL_DISPLAY_ITEMS_COUNT);
  const totalItemsCount = props.items?.length || 0;
  const canLoadMore = totalItemsCount - displayItemsCount > 0;

  if (!totalItemsCount) {
    return <div className={styles.empty}>No posts yet</div>;
  }

  return (
      <>
        <div className={styles.list}>
          {props.items.slice(0, displayItemsCount).map((item) => (
              <PostLink key={item.link} item={item}/>
          ))}
        </div>
        {canLoadMore && (
            <div className={styles.loadWrapper}>
              <button
                  onClick={() => setDisplayItemsCount(displayItemsCount + LOAD_MORE_ITEMS_COUNT)}
                  className={styles.loadButton}
              >
                LOAD MORE
              </button>
            </div>
        )}
      </>
  );
};
