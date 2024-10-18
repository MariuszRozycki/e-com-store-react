import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "../Buttons/Button.jsx";
import { Oval } from "react-loader-spinner";
import * as S from "./ContactForm.styled.jsx";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    userName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const formID = "15";
  const url = `https://tour-guide.pl/wp-json/contact-form-7/v1/contact-forms/${formID}/feedback`;

  const checkLength = (value, len) => {
    return value.trim().length > len;
  };

  const checkEmail = (email) => {
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
  };

  const validateForm = () => {
    let formIsValid = true;
    const validationErrors = {
      userName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    };

    if (!checkLength(formData.userName, 2)) {
      validationErrors.userName = "Minimum number of characters is 3.";
      formIsValid = false;
    }

    if (!checkLength(formData.subject, 2)) {
      validationErrors.subject = "Minimum number of characters is 3.";
      formIsValid = false;
    }

    if (!checkEmail(formData.email)) {
      validationErrors.email = "Must be a valid email address";
      formIsValid = false;
    }

    if (!checkLength(formData.phone, 5)) {
      validationErrors.phone = "Write correct phone number. Minimum 6 characters.";
      formIsValid = false;
    }

    if (!checkLength(formData.message, 2)) {
      validationErrors.message = "Minimum number of characters is 3.";
      formIsValid = false;
    }

    setErrors(validationErrors);
    return formIsValid;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    const { action, method } = e.currentTarget;

    const formDataObject = new FormData();
    formDataObject.append("user-name", formData.userName);
    formDataObject.append("your-email", formData.email);
    formDataObject.append("your-phone", formData.phone);
    formDataObject.append("your-subject", formData.subject);
    formDataObject.append("your-message", formData.message);
    formDataObject.append("_wpcf7_unit_tag", `form-${formID}`);

    try {
      const response = await fetch(action, {
        method,
        body: formDataObject,
      });

      const result = await response.json();

      if (result.status === "mail_sent") {
        toast.success("Your message has been sent!");
        setFormData({ userName: "", email: "", phone: "", subject: "", message: "" });
        setErrors({ userName: "", email: "", phone: "", subject: "", message: "" });
      } else {
        toast.error("Occurred problem with sending message. Call to us +47 123 45 678");
      }
    } catch (error) {
      console.error("Error during message sending:", error);
      toast.error("Occurred problem with sending message.");
    } finally {
      setIsLoading(false);
    }
  };

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
