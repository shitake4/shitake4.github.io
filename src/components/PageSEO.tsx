import Head from "next/head";

import {config} from "@site.config";
import React from "react";

// types
type Props = {
  title: string;
  path?: string;
  description?: string;
  ogImageUrl?: string;
  noindex?: boolean;
  removeSiteNameFromTitle?: boolean;
  ogType?: "website" | "article" | "profile";
};

export const PageSEO: React.FC<Props> = (props) => {
  const {
    path,
    title,
    description,
    ogImageUrl,
    noindex,
    removeSiteNameFromTitle,
    ogType = "website",
  } = props;

  const pageUrl = `${config.siteRoot}${path || ""}`;
  const imageUrl = ogImageUrl || `${config.siteRoot}/og.png`;
  const pageDescription = description || config.siteMeta.description;

  return (
      <Head>
        <title>
          {removeSiteNameFromTitle
              ? title
              : `${title} | ${config.siteMeta.title}`}
        </title>
        <meta name="description" content={pageDescription}/>

        {/* Open Graph */}
        <meta property="og:type" content={ogType}/>
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={pageDescription}/>
        <meta property="og:url" content={pageUrl}/>
        <meta property="og:site_name" content={config.siteMeta.title}/>
        <meta property="og:image" content={imageUrl}/>
        <meta property="og:locale" content={config.siteMeta.locale}/>

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content={config.siteMeta.twitterSite}/>
        <meta name="twitter:creator" content={config.siteMeta.twitterCreator}/>
        <meta name="twitter:title" content={title}/>
        <meta name="twitter:description" content={pageDescription}/>
        <meta name="twitter:image" content={imageUrl}/>

        {path && <link rel="canonical" href={pageUrl}/>}
        {noindex && <meta name="robots" content="noindex"/>}
      </Head>
  );
};
