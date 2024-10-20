import { ContainerOutletContent, RenderSingleProductPage, ButtonPrevArrow } from "../components";

const SingleProductPage = () => {
  return (
    <div className='outlet-content'>
      <ContainerOutletContent>
        <h1>Single product page</h1>
        <ButtonPrevArrow />
        <RenderSingleProductPage />
      </ContainerOutletContent>
    </div>
  );
};

export default SingleProductPage;
