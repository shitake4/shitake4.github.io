import {FaGithub, FaRss} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import {Author} from "@src/types";
import React, {useMemo} from "react";
import Image from "next/image";
import {config} from "@site.config";
import {createWebServicesMap} from "@src/utils/helper";
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
    webServices,
  } = props.author;

  const webServicesMap = useMemo(() => createWebServicesMap(webServices), [webServices]);

  const x = webServicesMap.get('x');
  const github = webServicesMap.get('github');
  const wantedly = webServicesMap.get('wantedly');
  const linkedin = webServicesMap.get('linkedin');
  const instagram = webServicesMap.get('instagram');
  const facebook = webServicesMap.get('facebook');
  const youtube = webServicesMap.get('youtube');
  const pixiv = webServicesMap.get('pixiv');

  return (
      <header className="member-header">
        <div className="member-header__avatar">
          <Image
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
          {x && (
              <a href={`${x.url}`} className="member-header__link">
                <FaXTwitter
                    className="member-header__link-icon"
                    aria-label={`Follow @${x.userName} on ${x.name}`}
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
