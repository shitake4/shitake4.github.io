import Document, { Html, Head, Main, NextScript } from "next/document";
import { config } from "@site.config";
import Link from "next/link";
import GoogleTagManager, {GoogleTagManagerId} from "@src/components/GoogleTagManager";
import {getGoogleTagManagerId} from "@src/utils/helper";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <Link
            rel="icon shortcut"
            type="image/png"
            href={`${config.siteRoot}/logo.png`}
          />
          <Link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
