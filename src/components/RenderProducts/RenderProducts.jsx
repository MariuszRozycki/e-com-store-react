import * as S from "./RenderProducts.styled";
import { Button } from "../Buttons";

export const RenderProducts = ({ productsData, handleProductClick }) => {
  const { products, isLoading, isError } = productsData;

  if (isLoading) {
    return <div>Loading products</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <S.RenderProducts>
      {products.map((product) => (
        <S.SingleProduct key={product.id} onClick={() => handleProductClick(product.id)}>
          <div className='single-product-img-wrap'>
            <img src={product.image.url} alt='' />
          </div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <Button buttonText='View product' onClick={() => handleProductClick(product.id)} />
        </S.SingleProduct>
      ))}
    </S.RenderProducts>
  );
};
