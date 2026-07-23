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
              <a href={`${x.url}`} className={styles.link} aria-label={`Follow @${x.userName} on ${x.name}`}>
                <FaXTwitter className={styles.linkIcon}/>
              </a>
          )}
          {github && (
              <a href={`${github.url}`}
                 className={styles.link}
                 aria-label={`@${github.userName} on ${github.name}`}>
                <FaGithub className={styles.linkIcon}/>
              </a>
          )}
          {wantedly && (
              <a
                  href={`${wantedly.url}`}
                  className={styles.link}
                  aria-label={`@${wantedly.userName} on ${wantedly.name}`}
              >
                <SiWantedly className={styles.linkIcon}/>
              </a>
          )}
          {linkedin && (
              <a
                  href={`${linkedin.url}`}
                  className={styles.link}
                  aria-label={`@${linkedin.userName} on ${linkedin.name}`}
              >
                <FaLinkedin className={styles.linkIcon}/>
              </a>
          )}
          {instagram && (
              <a
                  href={`${instagram.url}`}
                  className={styles.link}
                  aria-label={`@${instagram.userName} on ${instagram.name}`}
              >
                <SiInstagram className={styles.linkIcon}/>
              </a>
          )}
          {facebook && (
              <a
                  href={`${facebook.url}`}
                  className={styles.link}
                  aria-label={`@${facebook.userName} on ${facebook.name}`}
              >
                <SiFacebook className={styles.linkIcon}/>
              </a>
          )}
          {youtube && (
              <a
                  href={`${youtube.url}`}
                  className={styles.link}
                  aria-label={`@${youtube.userName} on ${youtube.name}`}
              >
                <SiYoutube className={styles.linkIcon}/>
              </a>
          )}
          {pixiv && (
              <a
                  href={`${pixiv.url}`}
                  className={styles.link}
                  aria-label={`@${pixiv.userName} on ${pixiv.name}`}
              >
                <SiPixiv className={styles.linkIcon}/>
              </a>
          )}
          <a
              href={`${config.siteRoot}/feed.xml`}
              className={styles.link}
              aria-label="Follow shitake4.tech"
          >
            <FaRss className={styles.linkIcon}/>
          </a>
        </div>
      </header>
  );
};
