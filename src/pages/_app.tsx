import {AppProps} from "next/app";
import {SiteHeader} from "@src/components/SiteHeader";
import {SiteFooter} from "@src/components/SiteFooter";
import "@src/styles/globals.scss";
import GoogleTagManager from "@src/components/GoogleTagManager";
import {config} from "@site.config";
import {GoogleTagManagerId} from "@src/types";

export default function MyApp({Component, pageProps}: AppProps) {
  return (
      <>
        {config.googleTagManagerId && (
            <GoogleTagManager googleTagManagerId={config.googleTagManagerId as GoogleTagManagerId}/>

        )}
        {config.googleTagManagerId && (
            <noscript
                dangerouslySetInnerHTML={{
                  __html: `
                  <iframe src="https://www.googletagmanager.com/ns.html?id=${config.googleTagManagerId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>
                  `,
                }}/>
        )}
        <SiteHeader/>
        <Component {...pageProps} />
        <SiteFooter/>
      </>
  );
}
