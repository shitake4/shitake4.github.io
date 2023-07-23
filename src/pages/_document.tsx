import Document, {Head, Html, Main, NextScript} from "next/document";
import {config} from "@site.config";
import Link from "next/link";

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
          <Main/>
          <NextScript/>
          </body>
        </Html>
    );
  }
}

export default MyDocument;
