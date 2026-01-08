import Document, {Head, Html, Main, NextScript} from "next/document";
import {config} from "@site.config";
import Link from "next/link";
import {inter} from "@src/lib/fonts";

class MyDocument extends Document {
  render() {
    return (
        <Html className={inter.className}>
          <Head>
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
