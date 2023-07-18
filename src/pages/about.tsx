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
              このサイトはこれまで私が投稿した記事を一覧にまとめて表示しています。
            </p>
            <p>
              更新が気になる方は<a href={`${config.siteRoot}/feed`}>RSSを登録</a>して頂ければnote、Zenn、Qiita、はてなブログなどに投稿した通知を受け取ることができます。
            </p>
            <ul>
              <li>Qiita: <a href={'https://qiita.com/shitake4'}>https://qiita.com/shitake4</a></li>
              <li>Tech blog: <a href={'https://blog.shitake4.tech'}>https://blog.shitake4.tech</a></li>
              <li>Speakerdeck: <a href={'https://speakerdeck.com/shitake4'}>https://speakerdeck.com/shitake4</a></li>
              <li>note: <a href={'https://note.com/shitake4_'}>https://note.com/shitake4_</a></li>
              {/*<li>Zenn: <a href={'https://zenn.dev/shitake4'}>https://zenn.dev/shitake4</a></li>*/}
            </ul>
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
