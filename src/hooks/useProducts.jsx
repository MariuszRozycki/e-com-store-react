import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useProducts = (products) => {
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

  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    console.log("handleProductClick");
    console.log("productId:", productId);

    navigate(`/product/${productId}`);
  };

  return { filteredProducts, handleFilterProducts, handleProductClick };
};
