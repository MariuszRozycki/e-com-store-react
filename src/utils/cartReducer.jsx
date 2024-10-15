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
        // Nowy produkt dodany do koszyka z polem totalPriceSingleProduct
        updatedCart = [
          ...state.cart,
          {
            ...action.payload,
            quantity: 1,
            totalPriceSingleProduct: action.payload.discountedPrice, // Cena za 1 produkt
          },
        ];
      } else {
        // Zwiększamy ilość istniejącego produktu i aktualizujemy jego totalPriceSingleProduct
        updatedCart = state.cart.map((product, index) =>
          index === existingProductIndex
            ? {
                ...product,
                quantity: product.quantity + 1,
                totalPriceSingleProduct: (product.quantity + 1) * product.discountedPrice, // Cena za wszystkie sztuki tego produktu
              }
            : product
        );
      }

      // Obliczamy całkowitą cenę koszyka (sumujemy totalPriceSingleProduct każdego produktu)
      const updatedTotalPrice = updatedCart.reduce((total, product) => {
        return total + product.totalPriceSingleProduct;
      }, 0);

      // Obliczamy całkowitą liczbę produktów w koszyku
      const updatedTotalItems = updatedCart.reduce((total, product) => total + product.quantity, 0);

      return {
        ...state,
        cart: updatedCart,
        total: updatedTotalPrice.toFixed(2), // Całkowita cena za wszystkie produkty
        totalItems: updatedTotalItems, // Całkowita liczba produktów
      };
    }

    case "removeProduct": {
      const updatedCart = state.cart
        .map((product) =>
          product.id === action.payload.id && product.quantity > 1
            ? {
                ...product,
                quantity: product.quantity - 1,
                totalPriceSingleProduct: (product.quantity - 1) * product.discountedPrice,
              }
            : product
        )
        .filter((product) => product.quantity > 0);

      // Aktualizacja całkowitej ceny po usunięciu produktu
      const updatedTotalPrice = updatedCart.reduce((total, product) => {
        return total + product.totalPriceSingleProduct;
      }, 0);

      // Aktualizacja całkowitej liczby produktów po usunięciu produktu
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
