import {GetStaticProps, NextPage} from "next";
import {Product} from "@src/types";
import {ContentWrapper} from "@src/components/ContentWrapper";
import {PageSEO} from "@src/components/PageSEO";
import {products} from "@products";
import {LinkBackHome} from "@src/components/LinkBackHome";
import {FaGithub, FaExternalLinkAlt} from "react-icons/fa";

type Props = {
  products: Product[];
};

const Page: NextPage<Props> = (props) => {
  return (
      <>
        <PageSEO title="Products" path="/products"/>
        <ContentWrapper>
          <section className="products">
            <h1 className="products__title">Products</h1>

            <div className="products__list">
              {props.products.map((product, i) => (
                  <div key={i} className="product-card">
                    <div className="product-card__thumbnail">
                      <img
                          src={product.thumbnail || "/images/product-default.svg"}
                          alt={product.name}
                          className="product-card__thumbnail-img"
                      />
                    </div>
                    <h2 className="product-card__name">{product.name}</h2>
                    <p className="product-card__description">{product.description}</p>
                    <div className="product-card__links">
                      {product.githubUrl && (
                          <a
                              href={product.githubUrl}
                              className="product-card__link"
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                            <FaGithub className="product-card__link-icon"/>
                            GitHub
                          </a>
                      )}
                      {product.landingPageUrl && (
                          <a
                              href={product.landingPageUrl}
                              className="product-card__link"
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                            <FaExternalLinkAlt className="product-card__link-icon"/>
                            Website
                          </a>
                      )}
                    </div>
                  </div>
              ))}
            </div>

            <div className="products__actions">
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
