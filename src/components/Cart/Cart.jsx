import * as S from "./Cart.styled";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Button } from "../Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);

  const cartProducts = state.cart;
  console.log(state);

  console.log("cartProducts, ", cartProducts);

  return (
    <S.Cart>
      {cartProducts.map((product) => (
        <div key={product.id} className='cart-product'>
          <div className='img-wrapper'>
            <img src={product.image.url} alt={product.title} />
          </div>
          <h2>{product.title}</h2>
          <div className='product-quantity'>
            <Button className='decrease' buttonText='-' />
            <p>{product.quantity}</p>
            <Button className='increase' buttonText='+' />
          </div>
          <p className='product-price'>{product.discountedPrice * product.quantity}</p>

          <FontAwesomeIcon icon={faTrash} />
        </div>
      ))}
    </S.Cart>
  );
};

export default Cart;
