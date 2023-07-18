import { NextPage, GetStaticProps } from "next";
import { FaTwitter, FaGithub } from "react-icons/fa";

import { members } from "@members";
import { PostItem, Member } from "@src/types";
import { PostList } from "@src/components/PostList";
import { ContentWrapper } from "@src/components/ContentWrapper";
import { PageSEO } from "@src/components/PageSEO";
import {
  getMemberById,
  getMemberPostsById,
} from "@src/utils/helper";
import {config} from "@site.config";

type Props = {
  postItems: PostItem[];
  member: Member;
};

const Page: NextPage<Props> = (props) => {
  const {
    id,
    name,
    bio,
    avatarSrc,
    twitterUsername,
    githubUsername,
    websiteUrl,
  } = props.member;

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
          <header className="member-header">
            <div className="member-header__avatar">
              <img
                src={avatarSrc}
                alt={name}
                width={100}
                height={100}
                className="member-header__avatar-img"
              />
            </div>
            <h1 className="member-header__name">{name}</h1>
            <p className="member-header__bio">{bio}</p>
            <div className="member-header__links">
              {twitterUsername && (
                <a
                  href={`https://twitter.com/${twitterUsername}`}
                  className="member-header__link"
                >
                  <FaTwitter
                    className="member-header__link-icon"
                    aria-label={`Follow @${twitterUsername} on Twitter`}
                  />
                </a>
              )}
              {githubUsername && (
                <a
                  href={`https://github.com/${githubUsername}`}
                  className="member-header__link"
                >
                  <FaGithub
                    className="member-header__link-icon"
                    aria-label={`@${githubUsername} on GitHub`}
                  />
                </a>
              )}
            </div>
          </header>

          <div className="member-posts-container">
            <PostList items={props.postItems} />
          </div>
        </ContentWrapper>
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
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
