import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import * as S from "./ShoppingCartIcon.styled";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const ShoppingCartIcon = () => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <S.ShoppingCartIcon>
      <FontAwesomeIcon icon={faCartShopping} />
      <S.ShoppingCartIconOverlay></S.ShoppingCartIconOverlay>
    </S.ShoppingCartIcon>
  );
};

export default ShoppingCartIcon;
