import {NextPage} from "next";
import {ContentWrapper} from "@src/components/ContentWrapper";
import {LinkBackHome} from "@src/components/LinkBackHome";
import {PageSEO} from "@src/components/PageSEO";
import {Profile} from "@src/components/Profile";
import {Author} from "@src/types";
import {GetStaticProps} from "@node_modules/next";
import {config} from "@site.config";
import {author} from "@author";

type Props = {
  author: Author;
};

const Page: NextPage<Props> = (props) => {
  return (
      <>
        <PageSEO title="About" path="/about"/>
        <ContentWrapper>
          <section className="about">
            <h1 className="about__title">About</h1>
            <Profile author={props.author}/>

            <div className="about__body">
              <p>
                私 がZenn、Qiita、Medium、note、はてなブログなどに投稿した記事を一覧にまとめて表示します。
              </p>
              <p>取得しているサイト一覧</p>
              <ul>
                {author.webServices.filter(webService => webService.rss).map((webService, i) => (
                    <li key={i}>
                      {webService.name}: <a href={webService.url}>{webService.url}</a>
                    </li>
                ))}
              </ul>
              <p>RSSフィードを提供しています。</p>
              <ul>
                {['feed.xml', 'feed.json', '/atom.xml'].map((rssSuffix, i) => (
                    <li key={i}>
                      <a href={`${config.siteRoot}/${rssSuffix}`}>{config.siteRoot}/{rssSuffix}</a>
                    </li>
                ))}
              </ul>
            </div>

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
