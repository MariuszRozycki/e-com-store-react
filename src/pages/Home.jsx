import { ContainerOutletContent } from "../components";
import { RenderProducts } from "../components";
import { useState, useEffect } from "react";
import useGetData from "../hooks";
import { SearchBar } from "../components";

const Home = () => {
  const { products, isLoading, isError } = useGetData();
  const [filteredProducts, setFilteredProducts] = useState([]);

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

  return (
    <div className='outlet-content'>
      <ContainerOutletContent>
        <h1>Home</h1>
        <SearchBar products={products} onFilter={handleFilterProducts} />
        <RenderProducts productsData={{ products: filteredProducts, isLoading, isError }} />
      </ContainerOutletContent>
    </div>
  );
};

export default Home;
