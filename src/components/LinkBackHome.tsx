import Link from "next/link";
import React from "react";

export const LinkBackHome: React.FC = () => (
    <Link legacyBehavior href="/" passHref>
      <a className="link-back-home">Back Home</a>
    </Link>
);
