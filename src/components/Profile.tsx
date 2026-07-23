import {FaGithub, FaLinkedin, FaRss} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import {Author} from "@src/types";
import React, {useMemo} from "react";
import Image from "next/image";
import {config} from "@site.config";
import {createWebServicesMap} from "@src/utils/helper";
import {SiFacebook, SiInstagram, SiPixiv, SiWantedly, SiYoutube} from "react-icons/si";
import styles from "./Profile.module.scss";

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
      <header className={styles.header}>
        <div>
          <Image
              src={avatarSrc}
              alt={name}
              width={100}
              height={100}
              className={styles.avatarImg}
          />
        </div>
        <h1 className={styles.name}>{name}</h1>
        <span className={styles.role}>{role}</span>
        <p className={styles.bio}>{bio}</p>
        <div className={styles.links}>
          {x && (
              <a href={`${x.url}`} className={styles.link}>
                <FaXTwitter
                    className={styles.linkIcon}
                    aria-label={`Follow @${x.userName} on ${x.name}`}
                />
              </a>
          )}
          {github && (
              <a href={`${github.url}`}
                 className={styles.link}>
                <FaGithub
                    className={styles.linkIcon}
                    aria-label={`@${github.userName} on ${github.name}`}
                />
              </a>
          )}
          {wantedly && (
              <a
                  href={`${wantedly.url}`}
                  className={styles.link}
              >
                <SiWantedly
                    className={styles.linkIcon}
                    aria-label={`@${wantedly.userName} on ${wantedly.name}`}
                />
              </a>
          )}
          {linkedin && (
              <a
                  href={`${linkedin.url}`}
                  className={styles.link}
              >
                <FaLinkedin
                    className={styles.linkIcon}
                    aria-label={`@${linkedin.userName} on ${linkedin.name}`}
                />
              </a>
          )}
          {instagram && (
              <a
                  href={`${instagram.url}`}
                  className={styles.link}
              >
                <SiInstagram
                    className={styles.linkIcon}
                    aria-label={`@${instagram.userName} on ${instagram.name}`}
                />
              </a>
          )}
          {facebook && (
              <a
                  href={`${facebook.url}`}
                  className={styles.link}
              >
                <SiFacebook
                    className={styles.linkIcon}
                    aria-label={`@${facebook.userName} on ${facebook.name}`}
                />
              </a>
          )}
          {youtube && (
              <a
                  href={`${youtube.url}`}
                  className={styles.link}
              >
                <SiYoutube
                    className={styles.linkIcon}
                    aria-label={`@${youtube.userName} on ${youtube.name}`}
                />
              </a>
          )}
          {pixiv && (
              <a
                  href={`${pixiv.url}`}
                  className={styles.link}
              >
                <SiPixiv
                    className={styles.linkIcon}
                    aria-label={`@${pixiv.userName} on ${pixiv.name}`}
                />
              </a>
          )}
          <a
              href={`${config.siteRoot}/feed.xml`}
              className={styles.link}
          >
            <FaRss
                className={styles.linkIcon}
                aria-label={`Follow shitake4.tech`}
            />
          </a>
        </div>
      </header>
  );
};
