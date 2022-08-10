import styled, { css } from "styled-components";
import { defaultAvatarUrl } from "../SideBar/Index";

export const EditProfileWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const EditProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  background: var(--white);
  padding: 20px;
  border-radius: 10px;

  h2 {
    color: var(--primary-color);
    font-family: var(--garamond);
    position: relative;

    :after {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 4px;
      width: 15%;
      background: var(--primary-color);
      border-radius: 2px;
    }
  }
  p {
    color: var(--deep-gray);
    font-family: var(--hind);
  }
  hr {
    border: none;
    border-bottom: 2px solid var(--deep-gray);
    margin-top: -10px;
    border-radius: 1px;
  }
  form {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    gap: 20px;
    justify-content: center;

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 10px;

      label {
        color: var(--primary-color);
        font-family: var(--garamond);
        font-size: 1.2rem;
      }
      input {
        width: 100%;
        font-size: 1rem;
        padding: 10px;
        border: none;
        border-radius: 5px;
        font-family: var(--hind);
        background: whitesmoke;
        outline-color: var(--primary-color);
        outline-width: 2px;
        outline-offset: 2px;
        transition: all 300ms ease;

        :hover {
          box-shadow: 0 5px 7px var(--light-gray);
        }

        :focus {
          background: var(--white);
        }
      }
      .error {
        display: flex;
        align-items: center;
        line-height: 0.8em;
        color: red;
        gap: 2px;
        font-size: 0.8em;
        margin-bottom: 25px;
      }
    }
    button {
      font-size: 1rem;
      border: none;
      border-radius: 5px;
      padding: 10px 20px;
      width: 100%;
      background: var(--primary-color);
      font-family: var(--hind);
      color: white;
      transition: all 200ms ease;
      cursor: pointer;

      :hover {
        box-shadow: -5px -5px var(--light-tint), 5px 5px var(--dark-tint);
        background: var(--primary-color);
        color: white;
      }
    }
  }
`;

export const ChangeAvatarWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ChangeAvatarContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  background: var(--white);
  padding: 20px;
  border-radius: 10px;

  h2 {
    color: var(--primary-color);
    font-family: var(--garamond);
    position: relative;

    :after {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 4px;
      width: 15%;
      background: var(--primary-color);
      border-radius: 2px;
    }
  }
  p {
    color: var(--dark-gray);
    font-family: var(--hind);
  }
  hr {
    border: none;
    border-bottom: 2px solid var(--dark-gray);
    margin-top: -10px;
    border-radius: 1px;
  }
  form {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    gap: 20px;
    justify-content: center;

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 10px;

      label {
        color: var(--primary-color);
        font-family: var(--garamond);
        font-size: 1.2rem;
      }
      input {
        width: 100%;
        font-size: 1rem;
        padding: 10px;
        border: none;
        border-radius: 5px;
        font-family: var(--hind);
        background: whitesmoke;
        outline-color: var(--primary-color);
        outline-width: 2px;
        outline-offset: 2px;
        transition: all 300ms ease;

        :hover {
          box-shadow: 0 5px 7px var(--light-gray);
        }

        :focus {
          background: var(--white);
        }
      }
      .error {
        display: flex;
        align-items: center;
        line-height: 0.8em;
        color: red;
        gap: 2px;
        font-size: 0.8em;
        margin-bottom: 25px;
      }
    }
    button {
      font-size: 1rem;
      border: none;
      border-radius: 5px;
      padding: 10px 20px;
      width: 100%;
      background: var(--primary-color);
      font-family: var(--hind);
      color: white;
      transition: all 200ms ease;
      cursor: pointer;

      :hover {
        box-shadow: -5px -5px var(--light-tint), 5px 5px var(--dark-tint);
        background: var(--primary-color);
        color: white;
      }
    }
  }
  .avatar-box {
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    .avatar-img-cont {
      width: 250px;
      height: 250px;
      box-shadow: 0 5px 12px var(--light-gray);
      border-radius: 50%;
      overflow: hidden;
      position: relative;
    }
    .cover-photo-cont {
      width: 320px;
      height: 180px;
      box-shadow: 0 5px 12px var(--light-gray);
      border-radius: 10px;
      overflow: hidden;
      position: relative;
    }

    .avatar-preview {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      color: var(--light-gray);
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
      font-family: var(--hind);

      span {
        font-weight: 500;
        font-size: 1.4rem;
      }
    }

    img {
      width: 100%;
      height: 100%;
      border: none;
      object-fit: cover;
    }
  }
  .avatar-file-name {
    text-align: left;
    color: var(--dark-gray);
    font-size: 0.8em;
    width: 100%;
  }
  #choose-avatar {
    display: none;
  }
  .avatar-btn {
    width: 100%;
    cursor: pointer;
    padding: 10px;
    border-radius: 10px;
    background: var(--primary-color);
    font-weight: 500;
    border: none;
    color: var(--white);
    display: flex;
    gap: 10px;
    font-size: 1rem;
    align-items: center;
    justify-content: center;
    font-family: var(--hind);
  }
  .upload-btn {
    width: 100%;
    cursor: pointer;
    padding: 10px;
    border-radius: 10px;
    background: var(--secondary-color);
    font-weight: 500;
    border: none;
    color: var(--white);
    display: flex;
    gap: 10px;
    font-size: 1rem;
    align-items: center;
    justify-content: center;
    font-family: var(--hind);
    transition: all 200ms ease;

    :hover {
      box-shadow: -5px -5px var(--light-tint), 5px 5px var(--dark-tint);
      background: var(--secondary-color);
      color: white;
    }
  }
  .error-message {
    width: 100%;
    padding: 5px;
    border: 2px solid red;
    border-radius: 5px;
    margin-bottom: 20px;
    background: rgba(255, 0, 0, 0.3);

    p {
      color: red;
      display: flex;
      align-items: center;
      gap: 3px;

      span {
        display: block;
      }
    }
  }

  .info {
    color: var(--dark-gray);
    display: flex;
    gap: 3px;
    align-items: center;
    font-size: 0.8rem;

    span {
      display: block;
    }
  }
`;
export const ChangePasswordWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ChangePasswordContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  background: var(--white);
  padding: 20px;
  border-radius: 10px;

  h2 {
    color: var(--primary-color);
    font-family: var(--garamond);
    position: relative;

    :after {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 4px;
      width: 15%;
      background: var(--primary-color);
      border-radius: 2px;
    }
  }
  p {
    color: var(--dark-gray);
    font-family: var(--hind);
  }
  hr {
    border: none;
    border-bottom: 2px solid var(--dark-gray);
    margin-top: -10px;
    border-radius: 1px;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin: 10px 0 0;

      label {
        color: var(--primary-color);
        font-family: var(--garamond);
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        gap: 5px;
      }
      input {
        width: 100%;
        font-size: 1rem;
        padding: 10px;
        border: none;
        border-radius: 5px;
        font-family: var(--hind);
        background: whitesmoke;
        outline-color: var(--primary-color);
        outline-width: 2px;
        outline-offset: 2px;
        transition: all 300ms ease;

        :hover {
          box-shadow: 0 5px 7px var(--light-gray);
        }

        :focus {
          background: var(--white);
        }
      }
      .error {
        width: 300px;
        display: flex;
        align-items: center;
        line-height: 0.8em;
        color: red;
        gap: 2px;
        font-size: 0.8em;

        span:nth-child(2) {
          flex: 1;
        }
      }
    }
    button {
      font-size: 1rem;
      border: none;
      border-radius: 5px;
      padding: 10px 20px;
      width: 100%;
      background: var(--primary-color);
      font-family: var(--hind);
      color: white;
      transition: all 200ms ease;
      cursor: pointer;

      :hover {
        box-shadow: -5px -5px var(--light-tint), 5px 5px var(--dark-tint);
        background: var(--primary-color);
        color: white;
      }
    }
  }

  .info {
    color: var(--dark-gray);
    display: flex;
    gap: 3px;
    margin-bottom: 0;
    align-items: center;
    font-size: 0.8rem;

    span {
      display: block;
    }
  }
  .error-message {
    width: 300px;
    padding: 5px;
    border: 2px solid red;
    border-radius: 5px;
    background: rgba(255, 0, 0, 0.3);

    p {
      color: red;
      display: flex;
      align-items: center;
      gap: 3px;

      span {
        display: block;
      }
    }
  }
`;
export const SuccessMessageWrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  border-radius: 100px;
`;
export const SuccessMessageContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  background: var(--white);
  border-radius: 10px;

  .success-message {
    padding: 10px;
    border: 2px solid var(--secondary-color);
    border-radius: 5px;
    background: rgba(0, 255, 0, 0.3);

    p {
      color: green;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;

      span {
        display: block;
        font-family: var(--hind);
      }
    }
  }
`;

export const CreateStudentWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CreateStudentContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  background: var(--white);
  padding: 20px;
  border-radius: 10px;

  h2 {
    color: var(--primary-color);
    font-family: var(--garamond);
    position: relative;

    :after {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 4px;
      width: 15%;
      background: var(--primary-color);
      border-radius: 2px;
    }
  }
  p {
    color: var(--deep-gray);
    font-family: var(--hind);
  }
  hr {
    border: none;
    border-bottom: 2px solid var(--deep-gray);
    margin-top: -10px;
    border-radius: 1px;
  }
  form {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    gap: 20px;
    justify-content: center;

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 10px;

      label {
        color: var(--primary-color);
        font-family: var(--garamond);
        font-size: 1.2rem;
      }
      input {
        width: 100%;
        font-size: 1rem;
        padding: 10px;
        border: none;
        border-radius: 5px;
        font-family: var(--hind);
        background: whitesmoke;
        outline-color: var(--primary-color);
        outline-width: 2px;
        outline-offset: 2px;
        transition: all 300ms ease;

        :hover {
          box-shadow: 0 5px 7px var(--light-gray);
        }

        :focus {
          background: var(--white);
        }
      }
      .error {
        display: flex;
        align-items: center;
        line-height: 0.8em;
        color: red;
        gap: 2px;
        font-size: 0.8em;
        margin-bottom: 25px;
      }
    }
    button {
      font-size: 1rem;
      border: none;
      border-radius: 5px;
      padding: 10px 20px;
      width: 100%;
      background: var(--primary-color);
      font-family: var(--hind);
      color: white;
      transition: all 200ms ease;
      cursor: pointer;

      :hover {
        box-shadow: -5px -5px var(--light-tint), 5px 5px var(--dark-tint);
        background: var(--primary-color);
        color: white;
      }
    }
  }
  .no-template-svg {
    height: 200px;
    margin: 20px 0;
  }
  .choice-buttons {
    display: flex;
    justify-content: space-between;

    button {
      border: none;
      padding: 10px;
      font-weight: 500;
      border-radius: 5px;
      font-family: var(--hind);
      font-size: 1rem;
      cursor: pointer;
      margin-top: 30px;

      :nth-child(1) {
        background-color: whitesmoke;
        transition: all 200ms ease;

        :hover {
          background: var(--white);
          box-shadow: 0 5px 7px var(--light-gray);
        }
      }
      :nth-child(2) {
        background-color: var(--primary-color);
        color: var(--white);
        transition: all 200ms ease;

        :hover {
          background: var(--secondary-color);
          box-shadow: -3px -3px var(--light-tint), 3px 3px var(--dark-tint);
        }
      }
    }
  }
`;

export const CreateTemplateWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CreateTemplateContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  background: var(--white);
  padding: 20px;
  border-radius: 10px;
  margin: 10px;
  width: 80vw;

  h2 {
    color: var(--primary-color);
    font-family: var(--garamond);
    position: relative;

    :after {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 4px;
      width: 15%;
      background: var(--primary-color);
      border-radius: 2px;
    }
  }
  p {
    color: var(--deep-gray);
    font-family: var(--hind);
  }
  hr {
    border: none;
    border-bottom: 2px solid var(--deep-gray);
    margin-top: -10px;
    border-radius: 1px;
  }
  .add-template-field-cont {
    display: grid;
    height: fit-content;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-template-rows: max-content;
    gap: 40px;

    .add-template-group {
      position: relative;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      grid-template-rows: max-content;
      padding-top: 40px;
      ${(props) =>
        props.errors !== null &&
        css`
          padding-top: 70px;
        `};
      gap: 20px;

      h3 {
        color: var(--primary-color);
        font-family: var(--garamond);
        position: absolute;
        top: 0;

        :after {
          content: "";
          display: block;
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 4px;
          width: 15%;
          background: var(--primary-color);
          border-radius: 2px;
        }
      }
    }
  }
  .field-values {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-template-rows: 42px;
    gap: 20px;

    input {
      width: 100%;
      height: fit-content;
      border-radius: 5px;
      border: none;
      background: whitesmoke;
      padding: 10px;
      font-size: 1rem;
      font-family: var(--hind);
      outline-color: var(--primary-color);
      outline-width: 2px;
      outline-offset: 2px;
      transition: all 300ms ease;

      :hover {
        box-shadow: 0 5px 7px var(--light-gray);
      }

      :focus {
        background: var(--white);
      }
    }
  }
  .template-creator {
    width: 100%;
    display: flex;
    gap: 20px;
  }
  form.templates {
    width: 100%;
    display: grid;
    height: fit-content;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    padding-bottom: 70px;
    padding-top: 40px;
    ${(props) =>
      props.isSuccess === true || props.isError === true
        ? css`
            padding-top: 70px;
          `
        : css`
            padding-top: 40px;
          `}
    gap: 20px;
    position: relative;

    h3 {
      color: var(--primary-color);
      font-family: var(--garamond);
      position: absolute;
      top: 0;

      :after {
        content: "";
        display: block;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 4px;
        width: 15%;
        background: var(--primary-color);
        border-radius: 2px;
      }
    }
    button {
      font-size: 1rem;
      border: none;
      border-radius: 5px;
      position: absolute;
      right: 0;
      bottom: 0;
      padding: 10px 20px;
      width: 100%;
      background: var(--primary-color);
      font-family: var(--hind);
      color: white;
      transition: all 200ms ease;
      cursor: pointer;

      :hover {
        box-shadow: -5px -5px var(--light-tint), 5px 5px var(--dark-tint);
        background: var(--primary-color);
        color: white;
      }
    }
    .loading {
      font-size: 1rem;
      border: none;
      border-radius: 5px;
      height: 42px;
      position: absolute;
      right: 0;
      bottom: 0;
      padding: 10px 20px;
      width: 100%;
      background: none;
      font-family: var(--hind);
      color: white;
      transition: all 200ms ease;
    }
  }
  .form-group {
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: fit-content;
    padding: 10px 5px;
    background: whitesmoke;
    gap: 5px;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    transition: all 300ms ease;

    label {
      color: var(--primary-color);
      font-family: var(--garamond);
      font-weight: 500;
      font-size: 1.1rem;
      letter-spacing: -1px;
      text-transform: capitalize;
    }
    div {
      width: fit-content;
      display: inline-flex;
      align-items: center;
      font-size: 1rem;
      border: none;
      border-radius: 5px;
      font-family: var(--hind);
      background: whitesmoke;
      outline-color: var(--primary-color);
      outline-width: 2px;
      outline-offset: 2px;
      transform: translateY(6%);
      letter-spacing: -1px;
      transition: all 300ms ease;

      span {
        font-size: 1.1rem;
        font-weight: 500;
      }
    }
    .delete-field {
      position: absolute;
      background: red;
      color: white;
      top: 0;
      padding: 10px;
      right: 0;
      transform: translateX(90%);
      border-radius: 5px;
      height: 100%;
      cursor: pointer;
    }
    :hover .delete-field {
      transform: translateX(0);
    }
  }

  .success {
    color: green;
    display: inline-block;
    display: flex;
    align-items: center;
    gap: 5px;
    font-family: var(--garamond);
    position: absolute;
    top: 30px;
    background: rgba(0, 255, 0, 0.3);
    padding: 5px;
    border-radius: 5px;
    border: 1px solid green;
    font-family: var(--hind);
    margin-bottom: 10px;
  }
  .errors {
    color: red;
    display: inline-block;
    display: flex;
    align-items: center;
    gap: 5px;
    font-family: var(--garamond);
    position: absolute;
    top: 30px;
    background: rgba(255, 0, 0, 0.3);
    padding: 5px;
    border-radius: 5px;
    border: 1px solid red;
    font-family: var(--hind);
    margin-bottom: 10px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 5px;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    width: 100%;
    height: fit-content;
    background: var(--primary-color);
    font-family: var(--hind);
    color: white;
    transition: all 200ms ease;
    cursor: pointer;

    :hover {
      box-shadow: -5px -5px var(--light-tint), 5px 5px var(--dark-tint);
      background: var(--primary-color);
      color: white;
    }
  }
  .nb {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 0 0 5px 0;
    font-weight: 500;
    font-family: var(--garamond);
    font-size: 0.9em;
    color: var(--primary-color);
  }
`;

export const StudentRegistrationWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;
`;
export const StudentRegistrationContent = styled.div`
  width: calc(100% - 20px);
  max-width: 1080px;
  min-height: 50vh;
  background: var(--white);
  border-radius: 10px;
  position: relative;
  font-family: var(--hind);

  .reg-header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 20%;
    }
    div {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      h2 {
        font-size: clamp(2rem, 3vw, 3rem);
        font-family: var(--garamond);
        color: var(--primary-color);
        text-transform: uppercase;
        text-align: center;
      }
      p {
        font-size: clamp(1rem, 2vw, 1.2rem);
        text-align: center;
      }
    }
  }

  hr {
    margin: clamp(5px, 1vh, 20px) clamp(20px, 5%, 50px);
    border: none;
    border-bottom: 4px solid var(--primary-color);
    border-radius: 4px;
    border-width: clamp(2px, 0.5vh, 4px);
  }
  .reg-title {
    position: relative;
    text-align: center;
    margin: clamp(20px, 5vh, 30px) 0;
    padding-bottom: clamp(20px, 5vh, 30px);
    text-transform: uppercase;
    color: var(--secondary-color);
    font-family: var(--system-font);
    font-weight: 500;
    text-shadow: 0 3px 3px var(--lightest-gray);
    letter-spacing: -1px;

    :after {
      content: "";
      display: block;
      position: absolute;
      left: 50%;
      bottom: 10px;
      width: 100%;
      height: 4px;
      width: 15%;
      background: var(--secondary-color);
      border-radius: 4px;
      transform: translateX(-50%);
    }
  }

  .reg-form {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    justify-content: space-between;
    grid-auto-flow: dense;
    direction: rtl;
    gap: 20px;
    margin: clamp(20px, 5vh, 40px) clamp(20px, 5%, 50px);
    position: relative;
    padding-bottom: 40px;

    form {
      direction: ltr;
    }

    label {
      font-size: clamp(1.2rem, 2vw, 1.4rem);
      font-weight: 500;
    }
    .field-container {
      margin-bottom: clamp(10px, 5vh, 30px);
    }
    .passport-cont {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      gap: 20px;

      .passport {
        width: 90%;
        min-height: 300px;
        border-radius: 10px;
        position: relative;
        z-index: 10;
        backdrop-filter: blur(10px);
        gap: clamp(10px, 2vh, 30px);
        ${(props) =>
          props.showCamera === true
            ? css`
                border: none;
                background: white;
              `
            : css`
                border: 2px solid var(--lightest-gray);
              `};
        background-origin: border-box;
        background-size: cover;
        background-repeat: no-repeat;
        overflow: hidden;
        border: 1px solid var(--lightest-gray);
      }
      img {
        background: var(--whitesmoke);
        position: absolute;
        width: 100%;
      }
      .button-group {
        width: 90%;
        margin: 0 auto;
        display: flex;
        min-height: 100px;
        flex-direction: column;
        gap: 20px;
        direction: ltr;
        position: relative;
        z-index: 10;
      }
    }
  }
  #video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
  }
  #canvas {
    width: 426px;
    height: 426px;
    ${(props) =>
      props.image === null
        ? css`
            background: url(${defaultAvatarUrl});
          `
        : css`
            background: var(--whitesmoke);
          `};
    background-origin: border-box;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
  }
  input {
    position: relative;
    z-index: 10;
    background: var(--whitesmoke);
  }
  #submit-btn {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  .info {
    display: flex;
    gap: 5px;
    align-items: flex-start;
    font-size: 0.8rem;
    padding: 0 0 10px 0;

    span {
      line-height: 0.8rem;
    }
  }

  img.watermark {
    filter: opacity(0.1);
    width: 50%;
    position: absolute;
    size: 1/2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.8);
  }

  .hidden {
    display: none;
  }

  @supports (aspect-ratio: 2/2) {
    .passport {
      aspect-ratio: 2/2;
    }
  }
`;
