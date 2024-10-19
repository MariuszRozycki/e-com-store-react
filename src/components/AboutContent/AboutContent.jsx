import * as S from "./AboutContent.styled";
import { Link } from "react-router-dom";
import { Button } from "../Buttons";

const AboutContent = () => {
  return (
    <S.AboutContent>
      <div className='element-wrapper'>
        <div className='img-wrapper first-img'>
          <img src='/public/pictures/about/seo-ecom.jpg' alt='Seo eCom' />
        </div>
        <p className='about-text'>
          Welcome to eCom, your trusted online shopping destination! At eCom, we believe in providing a seamless and enjoyable
          shopping experience for everyone. Our platform offers a wide range of high-quality products from trusted suppliers around
          the world, making it easy for you to find exactly what you&apos;re looking for.
        </p>
      </div>
      <div className='element-wrapper'>
        <div className='img-wrapper second-img'>
          <img src='/pictures/about/ecom-futuristic.jpg' alt='Futuristic eCom' />
        </div>
        <div className='our-mission'>
          <h2>Our Mission</h2>
          <p>
            Our goal is to revolutionize the way people shop online by providing a user-friendly, secure, and fast eCommerce
            platform. We continuously innovate to ensure you get the best deals and top-notch customer service.
          </p>
        </div>
      </div>
      <div className='element-wrapper'>
        <div className='img-wrapper third-img'>
          <img src='/pictures/about/ecom-delivery.jpg' alt='Laptop eCom' />
        </div>
        <div className='choose-us'>
          <h2>Why Choose Us?</h2>
          <ul>
            <li>
              <p>Diverse Product Range: From electronics to fashion, we have it all!</p>
            </li>
          </ul>
          <ul>
            <li>
              <p>Customer Satisfaction: Your happiness is our top priority.</p>
            </li>
          </ul>
          <ul>
            <li>
              <p>Fast Shipping: We ensure your products reach you in no time.</p>
            </li>
          </ul>
          <ul>
            <li>
              <p>24/7 Support: Our friendly support team is always here to assist you with any queries.</p>
            </li>
          </ul>
        </div>
      </div>
      <p className='last-paragraph'>Thank you for choosing eCom – we look forward to serving you!</p>
      <Link to='/'>
        <Button buttonText='Go shopping!' />
      </Link>
    </S.AboutContent>
  );
};

export default AboutContent;
