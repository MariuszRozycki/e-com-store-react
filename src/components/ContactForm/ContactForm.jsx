import { Oval } from "react-loader-spinner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "../Buttons/Button.jsx";
import * as S from "./ContactForm.styled.jsx";
import { useContactForm } from "../../hooks";

const ContactForm = () => {
  const formID = "15";
  const url = `https://tour-guide.pl/wp-json/contact-form-7/v1/contact-forms/${formID}/feedback`;

  const { formData, errors, isLoading, handleChange, handleSubmit } = useContactForm(url, formID);

  return (
    <S.ContactForm action={url} onSubmit={handleSubmit}>
      <h2>Write to us</h2>

      <label htmlFor='user-name'>
        Full name:
        <input id='user-name' type='text' name='userName' value={formData.userName} onChange={handleChange} />
        {errors.userName && (
          <p className='form-error' id='name-error'>
            {errors.userName}
          </p>
        )}
      </label>

      <label htmlFor='your-email'>
        Your e-mail:
        <input id='your-email' type='email' name='email' value={formData.email} onChange={handleChange} />
        {errors.email && (
          <p className='form-error' id='email-error'>
            {errors.email}
          </p>
        )}
      </label>

      <label htmlFor='your-phone'>
        Your phone number:
        <input id='your-phone' type='tel' name='phone' value={formData.phone} onChange={handleChange} />
        {errors.phone && (
          <p className='form-error' id='phone-error'>
            {errors.phone}
          </p>
        )}
      </label>

      <label htmlFor='your-subject'>
        Subject:
        <input id='your-subject' type='text' name='subject' value={formData.subject} onChange={handleChange} />
        {errors.subject && (
          <p className='form-error' id='subject-error'>
            {errors.subject}
          </p>
        )}
      </label>

      <label htmlFor='your-message'>
        Your message:
        <textarea id='your-message' name='message' value={formData.message} onChange={handleChange} />
        {errors.message && (
          <p className='form-error' id='user-message--error'>
            {errors.message}
          </p>
        )}
      </label>

      <div id='message' className='message' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        {isLoading ? <Oval color='#00BFFF' height={40} width={40} /> : <Button buttonText='Submit' className='btn' type='submit' />}
      </div>

      <ToastContainer position='top-center' />
    </S.ContactForm>
  );
};

export default ContactForm;