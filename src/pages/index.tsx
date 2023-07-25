import {GetStaticProps, NextPage} from "next";
import {Author, Member, PostItem} from "@src/types";
import {PostList} from "@src/components/PostList";
import {ContentWrapper} from "@src/components/ContentWrapper";
import {PageSEO} from "@src/components/PageSEO";
import posts from "@.contents/posts.json";
import {config} from "@site.config";
import {Profile} from "@src/components/Profile";
import {author} from "@author";

type Props = {
  postItems: PostItem[];
  author: Author;
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
            <Profile author={props.author}/>

            <div className="member-posts-container">
              <PostList items={props.postItems}/>
            </div>
          </ContentWrapper>
        </section>
      </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({params}) => {
  return {
    props: {
      postItems: posts,
      author: author,
    },
  };
};


export default Page;
