export const initialState = {
  cart: [],
  total: 0,
  totalItems: 0,
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "addProduct": {
      const existingProductIndex = state.cart.findIndex((product) => product.id === action.payload.id);
      let updatedCart;

      if (existingProductIndex === -1) {
        updatedCart = [
          ...state.cart,
          {
            ...action.payload,
            quantity: 1,
            totalPriceSingleProduct: (1 * action.payload.discountedPrice).toFixed(2),
          },
        ];
      } else {
        updatedCart = state.cart.map((product, index) =>
          index === existingProductIndex
            ? {
                ...product,
                quantity: product.quantity + 1,
                totalPriceSingleProduct: ((product.quantity + 1) * product.discountedPrice).toFixed(2),
              }
            : product
        );
      }

      const updatedTotalPrice = updatedCart.reduce((total, product) => {
        return total + parseFloat(product.totalPriceSingleProduct);
      }, 0);

      const updatedTotalItems = updatedCart.reduce((total, product) => total + product.quantity, 0);

      return {
        ...state,
        cart: updatedCart,
        total: updatedTotalPrice.toFixed(2),
        totalItems: updatedTotalItems,
      };
    }

    case "removeProduct": {
      const updatedCart = state.cart
        .map((product) =>
          product.id === action.payload.id && product.quantity > 1
            ? {
                ...product,
                quantity: product.quantity - 1,
                totalPriceSingleProduct: ((product.quantity - 1) * product.discountedPrice).toFixed(2),
              }
            : product
        )
        .filter((product) => product.quantity > 0);

      const updatedTotalPrice = updatedCart.reduce((total, product) => {
        return total + parseFloat(product.totalPriceSingleProduct);
      }, 0);

      const updatedTotalItems = updatedCart.reduce((total, product) => total + product.quantity, 0);

      return {
        ...state,
        cart: updatedCart,
        total: updatedTotalPrice.toFixed(2),
        totalItems: updatedTotalItems,
      };
    }

    case "deleteProduct": {
      const updatedCart = state.cart.filter((product) => product.id !== action.payload.id);

      const updatedTotalPrice = updatedCart.reduce((total, product) => {
        return total + parseFloat(product.totalPriceSingleProduct);
      }, 0);

      const updatedTotalItems = updatedCart.reduce((total, product) => total + product.quantity, 0);

      return {
        ...state,
        cart: updatedCart,
        total: updatedTotalPrice.toFixed(2),
        totalItems: updatedTotalItems,
      };
    }

    case "clearCart":
      return {
        cart: [],
        total: 0,
        totalItems: 0,
      };

    default:
      return state;
  }
};
