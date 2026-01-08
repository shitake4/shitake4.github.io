import Document, {Head, Html, Main, NextScript} from "next/document";
import {config} from "@site.config";
import Link from "next/link";
import {inter} from "@src/lib/fonts";

class MyDocument extends Document {
  render() {
    return (
        <Html className={inter.className} lang="ja">
          <Head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="theme-color" content="#000000"/>
            <Link
                rel="icon shortcut"
                type="image/png"
                href={`${config.siteRoot}/logo.png`}
            />
          </Head>
          <body>
          <Main/>
          <NextScript/>
          </body>
        </Html>
    );
  }
}

export default MyDocument;
