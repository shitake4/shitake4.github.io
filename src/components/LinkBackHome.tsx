import Link from "next/link";
import React from "react";
import styles from "./LinkBackHome.module.scss";

export const LinkBackHome: React.FC = () => (
    <Link href="/" className={styles.linkBackHome}>
      Back Home
    </Link>
);
