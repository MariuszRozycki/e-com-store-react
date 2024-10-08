import { ContainerOutletContent, RenderSingleProductPage } from "../components";

const SingleProductPage = () => {
  return (
    <div className='outlet-content'>
      <ContainerOutletContent>
        <h1>Single product page</h1>
        <RenderSingleProductPage />
      </ContainerOutletContent>
    </div>
  );
};

export default SingleProductPage;
