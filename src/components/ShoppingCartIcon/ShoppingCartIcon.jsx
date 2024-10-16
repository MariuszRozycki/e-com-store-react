import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import * as S from "./ShoppingCartIcon.styled";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

const ShoppingCartIcon = () => {
  const { state } = useContext(CartContext);

  return (
    <Link to='/checkout' aria-label='View checkout page'>
      <S.ShoppingCartIcon>
        <FontAwesomeIcon icon={faCartShopping} />
        <S.ShoppingCartIconOverlay>{state.totalItems}</S.ShoppingCartIconOverlay>
      </S.ShoppingCartIcon>
    </Link>
  );
};

export default ShoppingCartIcon;
