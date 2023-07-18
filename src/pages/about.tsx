import { NextPage } from "next";
import { ContentWrapper } from "@src/components/ContentWrapper";
import { LinkBackHome } from "@src/components/LinkBackHome";
import { PageSEO } from "@src/components/PageSEO";
import {Profile} from "@src/components/Profile";
import {Member} from "@src/types";
import {GetStaticProps} from "@node_modules/next";
import {members} from "@members";
import {getMemberById, getMemberPostsById} from "@src/utils/helper";

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
