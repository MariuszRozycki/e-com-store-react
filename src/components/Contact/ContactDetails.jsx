import * as S from "./ContactDetails.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactDetails = () => {
  return (
    <S.ContactDetails>
      <div className='img-wrapper'>
        <img src='/pictures/contact/ecom-cust-service.jpg' alt='Contact us' />
      </div>
      <ul className='contact-details'>
        <li>
          <a href='tel:+4793928270'>
            <div className='contact-details-icon-wrapper'>
              <FontAwesomeIcon icon={faMobileAlt} />
            </div>
            +47 939-28-270
          </a>
        </li>
        <li>
          <a href='mailto:post@e-com.com'>
            <div className='contact-details-icon-wrapper email-icon'>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            post@e-com.com
          </a>
        </li>
        <li>
          <a href='mailto:marius.front@gmail.com'>
            <div className='contact-details-icon-wrapper email-icon'>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            marius.front@gmail.com
          </a>
        </li>
      </ul>
    </S.ContactDetails>
  );
};

export default ContactDetails;
