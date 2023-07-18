import {NextPage, GetStaticProps} from "next";
import {members} from "@members";
import {PostItem, Member} from "@src/types";
import {PostList} from "@src/components/PostList";
import {ContentWrapper} from "@src/components/ContentWrapper";
import {PageSEO} from "@src/components/PageSEO";
import {
  getMemberById,
  getMemberPostsById,
} from "@src/utils/helper";
import {config} from "@site.config";
import {Profile} from "@src/components/Profile";

type Props = {
  postItems: PostItem[];
  member: Member;
};

const Page: NextPage<Props> = (props) => {
  return (
      <>
        <PageSEO
            title={config.siteMeta.title}
            description={config.siteMeta.description}
            path="/"
            removeSiteNameFromTitle={true}
        />
        <section className="member">
          <ContentWrapper>
            <Profile member={props.member}/>

            <div className="member-posts-container">
              <PostList items={props.postItems}/>
            </div>
          </ContentWrapper>
        </section>
      </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({params}) => {
  const id = members[0].id;
  const member = getMemberById(id);
  const postItems = getMemberPostsById(id);

  if (!member) throw "User not found";

  return {
    props: {
      member,
      postItems,
    },
  };
};


export default Page;
