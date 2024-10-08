import { useState, useEffect } from "react";

export const useFilterProducts = (products) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (products.length > 0) {
      setFilteredProducts(products);
    }
  }, [products]);

  const handleFilterProducts = (query) => {
    if (query.length > 0) {
      const results = products.filter((product) => product.title.toLowerCase().includes(query.toLowerCase()));
      setFilteredProducts(results);
    } else {
      setFilteredProducts(products);
    }
  };

  return { filteredProducts, handleFilterProducts };
};
