import { ContainerOutletContent } from "../components";
import { RenderProducts } from "../components";
import { useGetData, useProducts } from "../hooks";
import { SearchBar } from "../components";

const Home = () => {
  const { data: products, isLoading, isError } = useGetData();
  const { filteredProducts, handleFilterProducts, handleProductClick } = useProducts(products);

  return (
    <div className='outlet-content'>
      <ContainerOutletContent>
        <h1>Home</h1>
        <SearchBar products={products} onFilter={handleFilterProducts} handleProductClick={handleProductClick} />
        <RenderProducts productsData={{ products: filteredProducts, isLoading, isError }} handleProductClick={handleProductClick} />
      </ContainerOutletContent>
    </div>
  );
};

export default Home;
