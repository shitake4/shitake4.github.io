import {ContentWrapper} from "@src/components/ContentWrapper";
import {config} from "@site.config";
import React from "react";
import styles from "./SiteFooter.module.scss";

export const SiteFooter: React.FC = () => (
    <footer className={styles.footer}>
      <ContentWrapper>
        <p>© {config.siteMeta.author}</p>
      </ContentWrapper>
    </footer>
);
