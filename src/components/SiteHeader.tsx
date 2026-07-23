import Link from "next/link";
import Image from "next/image";
import {config} from "@site.config";
import {ContentWrapper} from "@src/components/ContentWrapper";
import React from "react";
import styles from "./SiteHeader.module.scss";

export const SiteHeader: React.FC = () => (
    <header className={styles.header}>
      <ContentWrapper>
        <div className={styles.inner}>
          <Link href="/" className={styles.logoLink}>
            <Image
                src="/logo.svg"
                alt={config.siteMeta.title}
                width={150}
                height={40}
                className={styles.logoImg}
                unoptimized
            />
          </Link>
          <div className={styles.links}>
            {config.headerLinks.map((link, i) => {
              const key = `header-link-${i}`;
              if (link.href.startsWith("/")) {
                return (
                    <Link key={key} href={link.href} className={styles.link}>
                      {link.title}
                    </Link>
                );
              }
              return (
                  <a key={key} href={link.href} className={styles.link}>
                    {link.title}
                  </a>
              );
            })}
          </div>
        </div>
      </ContentWrapper>
    </header>
);
