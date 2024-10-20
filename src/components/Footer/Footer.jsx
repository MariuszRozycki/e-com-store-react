import { ContainerFooter } from "../../components";
import * as S from "./Footer.styled";

const Footer = () => {
  return (
    <S.Footer>
      <ContainerFooter>
        <p>Web development</p>
        <p>&copy; Mariusz Rozycki</p>
        <div className='email-wrapper'>
          <p className='email-header'>e-mail:</p>
          <a href='mailto:marius.front@gmail.com'>marius.front@gmail.com</a>
        </div>
      </ContainerFooter>
    </S.Footer>
  );
};

export default Footer;
