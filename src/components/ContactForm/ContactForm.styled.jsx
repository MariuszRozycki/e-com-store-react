import styled from "styled-components";

export const ContactForm = styled.form.attrs({ id: "form-15", className: "form", method: "post" })`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  max-width: 600px;
  row-gap: 15px;
  box-shadow: ${({ theme }) => theme.boxShadows.light};
  padding: ${({ theme }) => theme.padding.container};
  box-sizing: border-box;
  border-radius: var(--border-radius-min);
  background: ${({ theme }) => theme.backgroundColor.form};

  h2 {
    color: var(--color-yellow);
  }

  label {
    display: flex;
    flex-direction: column;
    width: 100%;
    row-gap: 2px;
    font-size: 16px;
    color: var(--color-yellow);

    input,
    textarea {
      box-sizing: border-box;
      width: 100%;
      padding: ${({ theme }) => theme.padding.input};
      border-radius: var(--border-radius-min);
      border: 1px solid;
      color: var(--color-black);
      font-size: 16px;
    }
  }

  .message {
    margin-top: 10px;

    button {
      margin: auto;
    }
  }

  .form-error {
    font-size: 16px;
    color: var(--color-white);
    font-weight: 200;
    margin-top: 5px;
    padding: ${({ theme }) => theme.padding.input};
    background-color: rgba(255, 0, 0, 0.1);
    border-radius: var(--border-radius-min);
  }

  .success {
    color: green;
  }

  .error {
    color: red;
  }
`;
