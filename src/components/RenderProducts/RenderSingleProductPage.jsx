import { useGetData } from "../../hooks";
import { useParams } from "react-router-dom";
import * as S from "./RenderSingleProductPage.styled";
import { StarRating } from "../index";
import { Button } from "../Buttons";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export const RenderSingleProductPage = () => {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useGetData(id);
  const { state, dispatch } = useContext(CartContext);

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
      <h2 className='product-title'>{product.title}</h2>
      <h3 className='product-description-header'>Description:</h3>
      <p className='product-description'>{product.description}</p>

      {(product.discountedPrice < product.price && (
        <div className='product-discount'>
          <p className='product-old-price-number'>
            {"Old price: "}
            <span>
              {product.price} {"EUR"}
            </span>
          </p>
          <p className='product-discounted-price'>
            {"Your price: "}
            <span>
              {product.discountedPrice} {"EUR"}
            </span>
          </p>
          <p className='discount-percentage'>Discount: {((1 - product.discountedPrice / product.price) * 100).toFixed(2)}%</p>
          <p className='discount-in-currency'>that means: {(product.price - product.discountedPrice).toFixed(2)} EUR discount!</p>
        </div>
      )) || (
        <div className='product-regular-price'>
          <p>
            Price:{" "}
            <span>
              {product.price} {"EUR"}
            </span>
          </p>
        </div>
      )}
      <div className='product-reviews'>
        <h3>Reviews:</h3>
        {product.reviews.length > 0 ? (
          <ul>
            {product.reviews.map((review) => (
              <li key={review.id}>
                {review.username}: {review.description}
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
      <div className='product-rating'>
        <StarRating rating={product.rating} />
      </div>
      <Button
        buttonText='Add to cart'
        onClick={() => {
          dispatch({ type: "addProduct", payload: product });
        }}
      />
    </S.RenderSingleProductPage>
  );
};
