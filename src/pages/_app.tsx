import {AppProps} from "next/app";
import {SiteHeader} from "@src/components/SiteHeader";
import {SiteFooter} from "@src/components/SiteFooter";

import "@src/styles/globals.scss";
import {getGoogleTagManagerId} from "@src/utils/helper";

export default function MyApp({Component, pageProps}: AppProps) {
  return (
      <>
        <noscript
            dangerouslySetInnerHTML={{
              __html: `
                <iframe src="https://www.googletagmanager.com/ns.html?id=${getGoogleTagManagerId()}" height="0" width="0" style="display:none;visibility:hidden"></iframe>
                `,
            }}/>
        <SiteHeader/>
        <Component {...pageProps} />
        <SiteFooter/>
      </>
  );
}
