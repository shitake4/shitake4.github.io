import {FaGithub, FaRss, FaTwitter} from "react-icons/fa";
import {Author} from "@src/types";
import React from "react";
import {config} from "@site.config";
import {getWebService} from "@src/utils/helper";

type Props = {
  author: Author;
}

export const Profile: React.FC<Props> = (props) => {
  const {
    name,
    bio,
    avatarSrc,
    webServices
  } = props.author;

  const twitter = getWebService('twitter')
  const github = getWebService('github')

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
          {twitter && (
              <a
                  href={`https://twitter.com/${twitter.userName}`}
                  className="member-header__link"
              >
                <FaTwitter
                    className="member-header__link-icon"
                    aria-label={`Follow @${twitter.userName} on Twitter`}
                />
              </a>
          )}
          {github && (
              <a
                  href={`https://github.com/${github.userName}`}
                  className="member-header__link"
              >
                <FaGithub
                    className="member-header__link-icon"
                    aria-label={`@${github.userName} on GitHub`}
                />
              </a>
          )}
          <a
              href={`${config.siteRoot}/feed.xml`}
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
