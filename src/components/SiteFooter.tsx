import {ContentWrapper} from "@src/components/ContentWrapper";
import {config} from "@site.config";
import React from "react";

export const SiteFooter: React.FC = () => (
    <footer className="site-footer">
      <ContentWrapper>
        <p>© {config.siteMeta.author}</p>
      </ContentWrapper>
    </footer>
);
