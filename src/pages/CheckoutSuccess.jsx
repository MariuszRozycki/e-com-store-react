import { ContainerOutletContent, Success } from "../components";

const CheckoutSuccess = () => {
  return (
    <div className='outlet-content'>
      <ContainerOutletContent>
        <h1>Checkout success page</h1>
        <Success />
      </ContainerOutletContent>
    </div>
  );
};

export default CheckoutSuccess;
