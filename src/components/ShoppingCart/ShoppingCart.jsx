import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import * as S from "./ShoppingCart.styled";

let itemCount = 4;

const ShoppingCart = () => {
  return (
    <S.ShoppingCart>
      <FontAwesomeIcon icon={faCartShopping} />
      <S.ShoppingCartOverlay>{itemCount}</S.ShoppingCartOverlay>
    </S.ShoppingCart>
  );
};

export default ShoppingCart;
