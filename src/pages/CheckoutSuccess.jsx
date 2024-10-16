import { useContext, useEffect } from "react";
import { ContainerOutletContent, Success } from "../components";
import { CartContext } from "../contexts/CartContext";

const CheckoutSuccess = () => {
  const { dispatch } = useContext(CartContext);

  useEffect(() => {
    dispatch({ type: "clearCart" });
  }, [dispatch]);

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
