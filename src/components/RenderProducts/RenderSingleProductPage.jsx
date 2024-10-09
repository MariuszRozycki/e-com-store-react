// import { useGetData } from "../../hooks";
// import { useParams } from "react-router-dom";
// import * as S from "./RenderSingleProductPage.styled";
// import { Button } from "../Buttons";

// export const RenderSingleProductPage = () => {
//   const { id } = useParams();
//   console.log(id);

//   const { data: product, isLoading, isError } = useGetData(id);
//   console.log(product);

//   if (isLoading || !product) {
//     return <div>Loading...</div>;
//   }

//   if (isError || !product) {
//     return <div>Error loading product</div>;
//   }

//   return (
//     <S.RenderSingleProductPage>
//       <div className='single-product-img-wrap'>{<img src={product.image.url} alt={product.title} />}</div>
//       <h2>{product.title}</h2>
//       <p>{product.description}</p>
//       <Button buttonText='Add to cart' />
//     </S.RenderSingleProductPage>
//   );
// };

import { useGetData } from "../../hooks";
import { useParams } from "react-router-dom";
import * as S from "./RenderSingleProductPage.styled";
import { Button } from "../Buttons";

export const RenderSingleProductPage = () => {
  const { id } = useParams();
  console.log(id);

  const { data: product, isLoading, isError } = useGetData(id);
  console.log(product);

  if (isLoading || !product) {
    return <div>Loading...</div>;
  }

  if (isError || !product) {
    return <div>Error loading product</div>;
  }

  return (
    <S.RenderSingleProductPage>
      <div className='single-product-img-wrap'>
        <img src={product.image.url} alt={product.title} />
      </div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <div className='product-price'>
        {product.discountedPrice} {product.currency || "USD"}
      </div>
      {product.discountedPrice < product.price && (
        <div className='product-discount'>Discount: {((1 - product.discountedPrice / product.price) * 100).toFixed(2)}%</div>
      )}
      <div className='product-reviews'>
        <h3>Reviews:</h3>
        {product.reviews.length > 0 ? (
          <ul>
            {product.reviews.map((review, index) => (
              <li key={index}>
                {review.username}: {review.description}
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
      <Button buttonText='Add to cart' />
    </S.RenderSingleProductPage>
  );
};
