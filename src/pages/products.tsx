import {GetStaticProps, NextPage} from "next";
import Image from "next/image";
import {Product} from "@src/types";
import {ContentWrapper} from "@src/components/ContentWrapper";
import {PageSEO} from "@src/components/PageSEO";
import {products} from "@products";
import {LinkBackHome} from "@src/components/LinkBackHome";
import {FaGithub, FaExternalLinkAlt, FaBook} from "react-icons/fa";
import styles from "./products.module.scss";

type Props = {
  products: Product[];
};

const Page: NextPage<Props> = (props) => {
  return (
      <>
        <PageSEO title="Products" path="/products"/>
        <ContentWrapper>
          <section className={styles.products}>
            <h1 className={styles.title}>Products</h1>

            <div className={styles.list}>
              {props.products.map((product, i) => (
                  <div key={i} className={styles.card}>
                    <div className={styles.thumbnail}>
                      <Image
                          src={product.thumbnail || "/images/product-default.svg"}
                          alt={product.name}
                          width={300}
                          height={200}
                          className={styles.thumbnailImg}
                      />
                    </div>
                    <h2 className={styles.name}>{product.name}</h2>
                    <p className={styles.description}>{product.description}</p>
                    <div className={styles.links}>
                      {product.githubUrl && (
                          <a
                              href={product.githubUrl}
                              className={styles.link}
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                            <FaGithub className={styles.linkIcon}/>
                            GitHub
                          </a>
                      )}
                      {product.landingPageUrl && (
                          <a
                              href={product.landingPageUrl}
                              className={styles.link}
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                            <FaExternalLinkAlt className={styles.linkIcon}/>
                            Website
                          </a>
                      )}
                      {product.articleUrl && (
                          <a
                              href={product.articleUrl}
                              className={styles.link}
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                            <FaBook className={styles.linkIcon}/>
                            開発背景・解説
                          </a>
                      )}
                    </div>
                  </div>
              ))}
            </div>

            <div className={styles.actions}>
              <LinkBackHome/>
            </div>
          </section>
        </ContentWrapper>
      </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({params}) => {
  return {
    props: {
      products,
    },
  };
};

export default Page;
