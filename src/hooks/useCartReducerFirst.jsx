import { useReducer } from "react";

const initialCartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const updatedItems = [...state.items, action.payload];
      const updatedTotalItems = state.totalItems + 1;
      const updatedTotalPrice = state.totalPrice + action.payload.price;

      return {
        ...state,
        items: updatedItems,
        totalItems: updatedTotalItems,
        totalPrice: updatedTotalPrice,
      };
    }

    case "REMOVE_FROM_CART": {
      const filteredItems = state.items.filter((item) => item.id !== action.payload.id);
      const updatedTotalItems = state.totalItems - 1;
      const updatedTotalPrice = state.totalPrice - action.payload.price;

      return {
        ...state,
        items: filteredItems,
        totalItems: updatedTotalItems,
        totalPrice: updatedTotalPrice,
      };
    }

    default:
      return state;
  }
};

export const useAddToCart = () => {
  const [cartState, dispatch] = useReducer(cartReducer, initialCartState);

  const addToCart = (product) => {
    console.log("product inside addToCart function", product);

    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  const removeFromCart = (product) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });
  };

  return {
    cartState,
    addToCart,
    removeFromCart,
  };
};
