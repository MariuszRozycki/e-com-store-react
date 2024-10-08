import { useGetData } from "../../hooks";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as S from "./RenderSingleProductPage.styled";
import { Button } from "../Buttons";

export const RenderSingleProductPage = () => {
  const { products } = useGetData();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  console.log("Single product:", product);

  useEffect(() => {
    const foundProduct = products.find((product) => product.id === id);
    setProduct(foundProduct);
  }, [id, products]);

  return (
    <S.RenderSingleProductPage>
      {/* <div className='single-product-img-wrap'>
        <img src={product.image.url} alt='' />
      </div>
      <h2>{product.title}</h2>
      <p>{product.description}</p> */}
      <Button buttonText='Add to cart' />
    </S.RenderSingleProductPage>
  );
};
