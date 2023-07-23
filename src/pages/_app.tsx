import {AppProps} from "next/app";
import {SiteHeader} from "@src/components/SiteHeader";
import {SiteFooter} from "@src/components/SiteFooter";
import "@src/styles/globals.scss";
import GoogleTagManager, {GoogleTagManagerId} from "@src/components/GoogleTagManager";
import {config} from "@site.config";

export default function MyApp({Component, pageProps}: AppProps) {
  return (
      <>
        {config.meta.googleTagManagerId && (
            <GoogleTagManager googleTagManagerId={config.meta.googleTagManagerId as GoogleTagManagerId}/>

        )}
        {config.meta.googleTagManagerId && (
            <noscript
                dangerouslySetInnerHTML={{
                  __html: `
                  <iframe src="https://www.googletagmanager.com/ns.html?id=${config.meta.googleTagManagerId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>
                  `,
                }}/>
        )}
        <SiteHeader/>
        <Component {...pageProps} />
        <SiteFooter/>
      </>
  );
}
