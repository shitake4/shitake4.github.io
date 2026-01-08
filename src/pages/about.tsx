import {NextPage} from "next";
import {ContentWrapper} from "@src/components/ContentWrapper";
import {LinkBackHome} from "@src/components/LinkBackHome";
import {PageSEO} from "@src/components/PageSEO";
import {Profile} from "@src/components/Profile";
import {Author} from "@src/types";
import {GetStaticProps} from "@node_modules/next";
import {config} from "@site.config";
import {author} from "@author";
import {FaRss} from "react-icons/fa";

type Props = {
  author: Author;
};

const RSS_FEEDS = [
  {url: "https://shitake4.tech/feed.xml", label: "RSS (XML)"},
  {url: "https://shitake4.tech/feed.json", label: "JSON Feed"},
  {url: "https://shitake4.tech/atom.xml", label: "Atom Feed"},
];

const Page: NextPage<Props> = (props) => {
  const contactUrl = config.headerLinks.find(link => link.title === "Contact")?.href;

  return (
      <>
        <PageSEO title="About" path="/about"/>
        <ContentWrapper>
          <section className="about">
            <h1 className="about__title">About</h1>
            <Profile author={props.author}/>

            <section className="about__section">
              <h2 className="about__section-title">発信内容</h2>
              <p className="about__section-text">
                Webアプリケーション開発を中心に、Rails・プロダクト開発・チームづくりについて発信しています。
              </p>
              <p className="about__section-text">
                実務で得た知見や、設計・実装の判断理由、試行錯誤の過程を言語化することを大切にしています。
              </p>
              <p className="about__section-text">
                媒体ごとに読者や文脈が異なるため、内容に応じて以下のサービスを使い分けています。
              </p>
              <p className="about__section-text">
                Zenn / Qiita / 個人ブログ / note / Speaker Deck
              </p>
            </section>

            <section className="about__section">
              <h2 className="about__section-title">記事一覧・RSS</h2>
              <p className="about__section-text">
                これまでに書いた記事は、このサイト上で一覧としてまとめています。
              </p>
              <p className="about__section-text">
                定期的にチェックしたい方は、以下のRSSフィードもご利用ください。
              </p>
              <div className="about__rss-links">
                {RSS_FEEDS.map((feed, i) => (
                    <a
                        key={i}
                        href={feed.url}
                        className="about__rss-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      <FaRss className="about__rss-icon"/>
                      {feed.label}
                    </a>
                ))}
              </div>
            </section>

            <section className="about__section about__section--cta">
              <h2 className="about__section-title">お問い合わせ</h2>
              <p className="about__section-text">
                技術顧問、開発支援、レビューなどのご相談があれば、まずはContactページからお気軽にご連絡ください。
              </p>
              {contactUrl && (
                  <div className="about__cta">
                    <a
                        href={contactUrl}
                        className="about__contact-button"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      お問い合わせはこちら
                    </a>
                  </div>
              )}
            </section>

            <div className="about__actions">
              <LinkBackHome/>
            </div>
          </section>
        </ContentWrapper>
      </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({params}) => {
  return {
    props: {
      author,
    },
  };
};

export default Page;
