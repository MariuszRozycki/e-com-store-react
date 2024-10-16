import * as S from "./Success.styled";

const Success = () => {
  return (
    <S.Success>
      <h2>Thank you for your purchase!</h2>
      <p>Your order has been successfully placed. You will receive an email confirmation with the details of your order shortly.</p>
      <ul>
        <li>
          <p>Order Number: #123456789</p>
        </li>
        <li>
          <p>Estimated Delivery: 20/12/2024</p>
        </li>
        <li>
          <p>You can track your order status in your account.</p>
        </li>
        <li>
          <p>If you have any questions or need further assistance, please don&apos;t hesitate to contact our customer service.</p>
        </li>
      </ul>
    </S.Success>
  );
};

export default Success;
