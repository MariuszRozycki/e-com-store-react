import { Link } from "react-router-dom";
import { Button } from "../../components";
import * as S from "./NotFound.styled";

const NotFound = () => {
  return (
    <S.NotFound>
      <S.NotFoundText>404 - Page Not Found</S.NotFoundText>
      <p>Sorry, the page you are looking for does not exist or has been moved.</p>
      <Link to='/'>
        <Button buttonText='Back to Home' />
      </Link>
    </S.NotFound>
  );
};

export default NotFound;
