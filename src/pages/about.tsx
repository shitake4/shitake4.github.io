import { NextPage } from "next";
import { ContentWrapper } from "@src/components/ContentWrapper";
import { LinkBackHome } from "@src/components/LinkBackHome";
import { PageSEO } from "@src/components/PageSEO";
import {Profile} from "@src/components/Profile";
import {Member} from "@src/types";
import {GetStaticProps} from "@node_modules/next";
import {members} from "@members";
import {getMemberById, getMemberPostsById} from "@src/utils/helper";
import {config} from "@site.config";

type Props = {
  member: Member;
};

const Page: NextPage<Props> = (props) => {
  return (
    <>
      <PageSEO title="About" path="/about" />
      <ContentWrapper>
        <section className="about">
          <h1 className="about__title">About</h1>
          <Profile member={props.member}/>

          <div className="about__body">
            <p>
              私 がZenn、Qiita、Medium、note、はてなブログなどに投稿した記事を一覧にまとめて表示します。
            </p>
            <p>
              取得しているサイト一覧
              <ul>
                <li>Qiita: <a href={'https://qiita.com/shitake4'}>https://qiita.com/shitake4</a></li>
                <li>Tech blog: <a href={'https://blog.shitake4.tech'}>https://blog.shitake4.tech</a></li>
                <li>Speakerdeck: <a href={'https://speakerdeck.com/shitake4'}>https://speakerdeck.com/shitake4</a></li>
                <li>note: <a href={'https://note.com/shitake4_'}>https://note.com/shitake4_</a></li>
                {/*<li>Zenn: <a href={'https://zenn.dev/shitake4'}>https://zenn.dev/shitake4</a></li>*/}
              </ul>
            </p>
            <p>
              RSSフィードを提供しています。
              <ul>
                <li><a href={`${config.siteRoot}/feed.xml`}>{config.siteRoot}/feed.xml</a></li>
                <li><a href={`${config.siteRoot}/feed.json`}>{config.siteRoot}/feed.xml</a></li>
                <li><a href={`${config.siteRoot}/atom.xml`}>{config.siteRoot}/feed.xml</a></li>
              </ul>
            </p>
          </div>

          <div className="about__actions">
            <LinkBackHome />
          </div>
        </section>
      </ContentWrapper>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({params}) => {
  const id = members[0].id;
  const member = getMemberById(id);

  if (!member) throw "User not found";

  return {
    props: {
      member,
    },
  };
};

export default Page;