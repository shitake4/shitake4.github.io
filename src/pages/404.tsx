import {NextPage} from "next";
import {ContentWrapper} from "@src/components/ContentWrapper";
import {LinkBackHome} from "@src/components/LinkBackHome";
import {PageSEO} from "@src/components/PageSEO";
import styles from "./404.module.scss";

const Page: NextPage = () => {
  return (
      <>
        <PageSEO title="404 not found" noindex={true}/>

        <div className={styles.error}>
          <ContentWrapper>
            <div>
              <div className={styles.status}>404</div>
              <h1 className={styles.message}>Page not found...</h1>

              <nav className={styles.actions}>
                <LinkBackHome/>
              </nav>
            </div>
          </ContentWrapper>
        </div>
      </>
  );
};

export default Page;
