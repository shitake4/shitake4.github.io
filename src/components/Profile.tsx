import {FaGithub, FaRss, FaTwitter} from "react-icons/fa";
import {Author} from "@src/types";
import React from "react";
import {config} from "@site.config";
import {getWebService} from "@src/utils/helper";
import {SiFacebook, SiInstagram, SiLinkedin, SiPixiv, SiWantedly, SiYoutube} from "react-icons/si";

type Props = {
  author: Author;
}

export const Profile: React.FC<Props> = (props) => {
  const {
    name,
    role,
    bio,
    avatarSrc,
  } = props.author;

  const twitter = getWebService('twitter')
  const github = getWebService('github')
  const wantedly = getWebService('wantedly')
  const linkedin = getWebService('linkedin')
  const instagram = getWebService('instagram')
  const facebook = getWebService('facebook')
  const youtube = getWebService('youtube')
  const pixiv = getWebService('pixiv')

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
        <span className="member-header__role">{role}</span>
        <p className="member-header__bio">{bio}</p>
        <div className="member-header__links">
          {twitter && (
              <a href={`${twitter.url}`} className="member-header__link">
                <FaTwitter
                    className="member-header__link-icon"
                    aria-label={`Follow @${twitter.userName} on ${twitter.name}`}
                />
              </a>
          )}
          {github && (
              <a href={`${github.url}`}
                 className="member-header__link">
                <FaGithub
                    className="member-header__link-icon"
                    aria-label={`@${github.userName} on ${github.name}`}
                />
              </a>
          )}
          {wantedly && (
              <a
                  href={`${wantedly.url}`}
                  className="member-header__link"
              >
                <SiWantedly
                    className="member-header__link-icon"
                    aria-label={`@${wantedly.userName} on ${wantedly.name}`}
                />
              </a>
          )}
          {linkedin && (
              <a
                  href={`${linkedin.url}`}
                  className="member-header__link"
              >
                <SiLinkedin
                    className="member-header__link-icon"
                    aria-label={`@${linkedin.userName} on ${linkedin.name}`}
                />
              </a>
          )}
          {instagram && (
              <a
                  href={`${instagram.url}`}
                  className="member-header__link"
              >
                <SiInstagram
                    className="member-header__link-icon"
                    aria-label={`@${instagram.userName} on ${instagram.name}`}
                />
              </a>
          )}
          {facebook && (
              <a
                  href={`${facebook.url}`}
                  className="member-header__link"
              >
                <SiFacebook
                    className="member-header__link-icon"
                    aria-label={`@${facebook.userName} on ${facebook.name}`}
                />
              </a>
          )}
          {youtube && (
              <a
                  href={`${youtube.url}`}
                  className="member-header__link"
              >
                <SiYoutube
                    className="member-header__link-icon"
                    aria-label={`@${youtube.userName} on ${youtube.name}`}
                />
              </a>
          )}
          {pixiv && (
              <a
                  href={`${pixiv.url}`}
                  className="member-header__link"
              >
                <SiPixiv
                    className="member-header__link-icon"
                    aria-label={`@${pixiv.userName} on ${pixiv.name}`}
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
