import { ContainerOutletContent } from "../components";
import { RenderProducts } from "../components";
import { SearchBar } from "../components/Features";

const Home = () => {
  return (
    <div className='outlet-content'>
      <ContainerOutletContent>
        <h1>Home</h1>
        <SearchBar />
        <RenderProducts />
      </ContainerOutletContent>
    </div>
  );
};

export default Home;
