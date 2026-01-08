import Link from "next/link";
import Image from "next/image";
import {config} from "@site.config";
import {ContentWrapper} from "@src/components/ContentWrapper";
import React from "react";

export const SiteHeader: React.FC = () => (
    <header className="site-header">
      <ContentWrapper>
        <div className="site-header__inner">
          <Link href="/" className="site-header__logo-link">
            <Image
                src="/logo.svg"
                alt={config.siteMeta.title}
                width={150}
                height={40}
                className="site-header__logo-img"
                unoptimized
            />
          </Link>
          <div className="site-header__links">
            {config.headerLinks.map((link, i) => {
              const key = `header-link-${i}`;
              if (link.href.startsWith("/")) {
                return (
                    <Link key={key} href={link.href} className="site-header__link">
                      {link.title}
                    </Link>
                );
              }
              return (
                  <a key={key} href={link.href} className="site-header__link">
                    {link.title}
                  </a>
              );
            })}
          </div>
        </div>
      </ContentWrapper>
    </header>
);
