import { createContext, useReducer, useEffect } from "react";
import { cartReducer, initialState } from "../utils/cartReducer";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const savedCartState = JSON.parse(localStorage.getItem("cartState"));

  const [state, dispatch] = useReducer(cartReducer, savedCartState || initialState);

  useEffect(() => {
    localStorage.setItem("cartState", JSON.stringify(state));
  }, [state]);

  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};
