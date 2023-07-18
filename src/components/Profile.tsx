import {FaGithub, FaRss, FaTwitter} from "react-icons/fa";
import {Member} from "@src/types";
import React from "react";
import {config} from "@site.config";

type Props = {
  member: Member;
}

export const Profile: React.FC<Props> = (props) => {
  const {
    name,
    bio,
    avatarSrc,
    twitterUsername,
    githubUsername,
  } = props.member;

  return (
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
          <a
              href={`${config.siteRoot}/feed`}
              className="member-header__link"
          >
            <FaRss
                className="member-header__link-icon"
                aria-label={`Follow shitake4.tech`}
            />
          </a>
        </div>
      </header>
  );
};
