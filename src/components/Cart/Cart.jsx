import * as S from "./Cart.styled";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import { Button } from "../Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEuroSign, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useGetData, useProducts } from "../../hooks";

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);
  const { data: products } = useGetData();
  const { handleProductClick } = useProducts(products);
  console.log(state);

  const cartProducts = state.cart;

  console.log("cartProducts, ", cartProducts);

  return (
    <S.Cart>
      <p className='total-number-of-products'>
        Number of products in cart: <span>{state.totalItems}</span>
      </p>
      {cartProducts.length === 0 ? (
        <>
          <p>Your cart is empty!</p>
          <Link to='/' aria-label='View home page'>
            <Button buttonText='Go shopping!' />
          </Link>
        </>
      ) : (
        cartProducts.map((product) => (
          <div key={product.id} className='cart-product'>
            <div className='img-wrapper' onClick={() => handleProductClick(product.id)}>
              <img src={product.image.url} alt={product.title} />
            </div>
            <h2 onClick={() => handleProductClick(product.id)}>{product.title}</h2>
            <div className='product-quantity'>
              <Button
                className='decrease'
                buttonText={<FontAwesomeIcon icon={faMinus} />}
                onClick={() => {
                  dispatch({ type: "removeProduct", payload: product });
                }}
              />
              <p>{product.quantity}</p>
              <Button
                className='increase'
                buttonText={<FontAwesomeIcon icon={faPlus} />}
                onClick={() => {
                  dispatch({ type: "addProduct", payload: product });
                }}
              />
            </div>
            <p className='product-price'>
              {product.totalPriceSingleProduct} <FontAwesomeIcon icon={faEuroSign} />
            </p>

            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => {
                dispatch({ type: "deleteProduct", payload: product });
              }}
            />
          </div>
        ))
      )}
      <p className='total-price'>
        Total price:{" "}
        <span>
          {state.total} <FontAwesomeIcon icon={faEuroSign} />
        </span>
      </p>
      <Link to='/checkout-success'>
        <Button className='checkout-btn' buttonText='Go to checkout' />
      </Link>
    </S.Cart>
  );
};

export default Cart;
