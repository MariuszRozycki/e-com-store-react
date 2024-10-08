import { ContainerOutletContent } from "../components";
import { RenderProducts } from "../components";
import { useGetData } from "../hooks";
import { useFilterProducts } from "../hooks";
import { SearchBar } from "../components";

const Home = () => {
  const { products, isLoading, isError } = useGetData();
  const { filteredProducts, handleFilterProducts } = useFilterProducts(products);

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
