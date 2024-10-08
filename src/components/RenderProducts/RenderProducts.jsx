import * as S from "./RenderProducts.styled";
import { Button } from "../Buttons";

export const RenderProducts = ({ productsData }) => {
  const { products, isLoading, isError } = productsData;

  products.map((product) => {
    console.log("product:", product);
    console.log("product:", product.image);
  });

  if (isLoading) {
    return <div>Loading products</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <S.RenderProducts>
      {products.map((product) => (
        <S.SingleProduct key={product.id}>
          <div className='single-product-img-wrap'>
            <img src={product.image.url} alt='' />
          </div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <Button buttonText='View product' />
        </S.SingleProduct>
      ))}
    </S.RenderProducts>
  );
};
