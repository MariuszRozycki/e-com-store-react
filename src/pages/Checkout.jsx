import { ContainerOutletContent } from "../components";
import Cart from "../components/Cart/Cart";

const Checkout = () => {
  return (
    <div className='outlet-content'>
      <ContainerOutletContent>
        <h1>Checkout page</h1>
        <Cart />
      </ContainerOutletContent>
    </div>
  );
};

export default Checkout;
