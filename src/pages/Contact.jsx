import { ContainerOutletContent, ContactForm, ContactDetails } from "../components";
import * as S from "../components/Contact/Contact.styled";

const Contact = () => {
  return (
    <div className='outlet-content'>
      <ContainerOutletContent>
        <h1>Contact</h1>
        <S.Contact>
          <ContactDetails />
          <ContactForm />
        </S.Contact>
      </ContainerOutletContent>
    </div>
  );
};

export default Contact;
