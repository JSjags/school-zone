import styled, { css } from "styled-components";
import { getTheme } from "../../utils";
import { defaultAvatarUrl } from "../SideBar/Index";

export const EditProfileWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const EditProfileContent = styled.div`
  width: clamp(200px, 90%, 800px);
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  background: var(--background);
  padding: 20px;
  border-radius: 10px;

  h2 {
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
    color: var(--text);
    font-family: var(--hind);
  }
  hr {
    border: none;
    border-bottom: 2px solid var(--text);
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
        color: var(--text);
        background: var(--translucent-white);
        backdrop-filter: invert(0.3);
        caret-color: var(--primary-color);
        outline-color: var(--primary-color);
        outline-width: 2px;
        outline-offset: 2px;
        transition: all 300ms ease;

        :hover {
          box-shadow: 0 5px 7px var(--dark-gray);
        }

        :focus {
          background: var(--background);
        }
      }
      .error {
        display: flex;
        align-items: center;
        line-height: 0.8em;
        color: var(--red);
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
  width: clamp(200px, 90%, 800px);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;
export const ChangeAvatarContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  background: var(--background);
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
    color: var(--text);
    font-family: var(--hind);
  }
  hr {
    border: none;
    border-bottom: 2px solid var(--dark-mid-gray);
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
        background: var(--translucent-white);
        backdrop-filter: invert(0.3);
        outline-color: var(--primary-color);
        outline-width: 2px;
        outline-offset: 2px;
        transition: all 300ms ease;

        :hover {
          box-shadow: 0 5px 7px var(--dark-gray);
        }

        :focus {
          background: var(--background);
        }
      }
      .error {
        display: flex;
        align-items: center;
        line-height: 0.8em;
        color: var(--red);
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
      color: var(--white);
      transition: all 200ms ease;
      cursor: pointer;

      :hover {
        box-shadow: -5px -5px var(--light-tint), 5px 5px var(--dark-tint);
        background: var(--primary-color);
        color: var(--white);
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
      box-shadow: 0 5px 12px var(--dark-gray);
      border-radius: 50%;
      overflow: hidden;
      position: relative;
    }
    .cover-photo-cont {
      width: clamp(180px, 90%, 320px);
      height: clamp(100px, 30vmin, 180px);
      box-shadow: 0 5px 12px var(--dark-gray);
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
    color: var(--text);
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
    border: 2px solid var(--red);
    border-radius: 5px;
    margin-bottom: 20px;
    background: var(--light-red);

    p {
      color: var(--red);
      display: flex;
      align-items: center;
      gap: 3px;

      span {
        display: block;
      }
    }
  }

  .info {
    color: var(--text);
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
  width: clamp(200px, 90%, 800px);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;
export const ChangePasswordContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  background: var(--background);
  padding: 20px;
  border-radius: 10px;
  width: 100%;

  h2 {
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
    color: var(--text);
    font-family: var(--hind);
  }
  hr {
    border: none;
    border-bottom: 2px solid var(--dark-mid-gray);
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
        background: var(--translucent-white);
        backdrop-filter: invert(0.3);
        color: var(--text);
        outline-color: var(--primary-color);
        outline-width: 2px;
        outline-offset: 2px;
        transition: all 300ms ease;

        :hover {
          box-shadow: 0 5px 7px var(--dark-gray);
        }

        :focus {
          background: var(--background);
        }
      }
      .error {
        width: 300px;
        display: flex;
        align-items: center;
        line-height: 0.8em;
        color: var(--red);
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
      color: var(--white);
      transition: all 200ms ease;
      cursor: pointer;

      :hover {
        box-shadow: -5px -5px var(--light-tint), 5px 5px var(--dark-tint);
        background: var(--primary-color);
        color: var(--white);
      }
    }
  }

  .info {
    color: var(--text);
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
    border: 2px solid var(--red);
    border-radius: 5px;
    background: var(--light-red);

    p {
      color: var(--red);
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
  background: var(--background);
  border-radius: 10px;

  .success-message {
    padding: 10px;
    border: 2px solid var(--green);
    border-radius: 5px;
    background: var(--light-green);

    p {
      color: var(--green);
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

export const CreateProfileWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CreateProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  background: var(--background);
  padding: 20px;
  border-radius: 10px;

  h2 {
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
    color: var(--text);
    font-family: var(--hind);
  }
  hr {
    border: none;
    border-bottom: 2px solid var(--dark-mid-gray);
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
        background: var(--translucent-white);
        backdrop-filter: invert(0.3);
        outline-color: var(--primary-color);
        outline-width: 2px;
        outline-offset: 2px;
        transition: all 300ms ease;

        :hover {
          box-shadow: 0 5px 7px var(--dark-gray);
        }

        :focus {
          background: var(--background);
        }
      }
      .error {
        display: flex;
        align-items: center;
        line-height: 0.8em;
        color: var(--red);
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
      color: var(--white);
      transition: all 200ms ease;
      cursor: pointer;

      :hover {
        box-shadow: -5px -5px var(--light-tint), 5px 5px var(--dark-tint);
        background: var(--primary-color);
        color: var(--white);
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
        background-color: var(--translucent-white);
        color: var(--text);
        border: 1px solid var(--dark-mid-gray);
        backdrop-filter: invert(0.3);
        transition: all 200ms ease;

        :hover {
          background: var(--background);
          box-shadow: 0 5px 7px var(--dark-gray);
          transform: scale(1.05);
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
  background: var(--background);
  padding: 20px;
  border-radius: 10px;
  margin: 10px;
  width: clamp(200px, 90vw, 800px);

  h2 {
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
    color: var(--text);
    font-family: var(--hind);
  }
  hr {
    border: none;
    border-bottom: 2px solid var(--dark-mid-gray);
    margin-top: -10px;
    border-radius: 1px;
  }
  .add-template-field-cont {
    display: grid;
    height: fit-content;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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
      background: var(--translucent-white);
      backdrop-filter: invert(0.3);
      padding: 10px;
      font-size: 1rem;
      color: var(--text);
      font-family: var(--hind);
      outline-color: var(--primary-color);
      outline-width: 2px;
      outline-offset: 2px;
      transition: all 300ms ease;

      :hover {
        box-shadow: 0 5px 7px var(--dark-gray);
      }

      :focus {
        background: var(--background);
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
    justify-content: flex-start;
    width: 100%;
    height: fit-content;
    padding: 10px 50px 10px 5px;
    background: var(--translucent-white);
    backdrop-filter: invert(0.3);
    gap: 2px;
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
      white-space: nowrap;
      max-width: 60%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .colon {
      color: var(--primary-color);
      font-family: var(--hind);
    }
    div {
      width: fit-content;
      display: inline-flex;
      align-items: center;
      font-size: 1rem;
      border: none;
      flex: 1;
      overflow: hidden;
      border-radius: 5px;
      font-family: var(--hind);
      background: var(--transparent);
      color: var(--text);
      outline-color: var(--primary-color);
      outline-width: 2px;
      outline-offset: 2px;
      transform: translateY(6%);
      letter-spacing: -1px;
      transition: all 300ms ease;

      span {
        font-size: 1.1rem;
        font-weight: 500;
        display: inline-block;
        white-space: nowrap;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: inline-block;
        padding-left: 3px;
      }
    }
    .delete-field {
      position: absolute;
      background: var(--background);
      color: var(--white);
      top: 0;
      padding: 10px;
      right: 0;
      border-radius: 5px;
      height: 100%;
      cursor: pointer;
      transform: translateX(0);
      border: 1px solid var(--dark-mid-gray);
    }
    :hover .delete-field {
      background: var(--red);
      transform: translateX(0);
      border: 1px solid var(--transparent);
    }
  }

  .success {
    color: var(--text);
    display: inline-block;
    display: flex;
    align-items: center;
    gap: 5px;
    font-family: var(--garamond);
    position: absolute;
    top: 30px;
    background: var(--green);
    padding: 5px;
    border-radius: 5px;
    border: 1px solid var(--green);
    font-family: var(--hind);
    margin-bottom: 10px;
  }
  .errors {
    color: var(--text);
    display: inline-block;
    display: flex;
    align-items: center;
    gap: 5px;
    font-family: var(--garamond);
    position: absolute;
    top: 30px;
    background: var(--red);
    padding: 5px;
    border-radius: 5px;
    border: 1px solid var(--red);
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
    color: var(--white);
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

  .immutable {
    position: relative;

    ::after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--light-gray);
      backdrop-filter: grayscale(1);
      cursor: not-allowed;
    }
  }
`;

export const StudentRegistrationWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;
  scroll-behavior: smooth;
`;
export const StudentRegistrationContent = styled.div`
  width: calc(100% - 20px);
  max-width: 1080px;
  min-height: 50vh;
  background: var(--background);
  border-radius: 10px;
  position: relative;
  font-family: var(--hind);

  .reg-header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 100;

    img {
      width: 20%;
      margin-top: clamp(30px, 10%, 40px);
      border-radius: 10%;
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
        color: var(--text);
      }
    }
  }

  hr {
    margin: clamp(5px, 1vh, 20px) clamp(20px, 5%, 50px);
    border: none;
    border-bottom: 4px solid var(--primary-color);
    border-radius: 4px;
    border-width: clamp(2px, 0.5vh, 4px);
    position: relative;
    z-index: 100;
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
    position: relative;
    z-index: 100;

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

  #registration-error-message {
    color: var(--red);
    gap: 5px;
    font-family: var(--garamond);
    background: var(--light-red);
    padding: 5px;
    border-radius: 5px;
    border: 1px solid var(--red);
    font-family: var(--hind);
    margin: 0 5% 10px;

    p {
      display: flex;
      align-items: center;
      padding: 5px;
      gap: 5px;
    }
  }

  .reg-form {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    justify-content: space-between;
    grid-auto-flow: dense;
    direction: rtl;
    gap: 20px;
    margin: clamp(20px, 5vh, 40px) clamp(20px, 5%, 50px);
    position: relative;
    padding-bottom: 40px;
    z-index: 100;

    form {
      direction: ltr;
    }

    label {
      font-size: clamp(1rem, 2vw, 1.4rem);
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

      #passport-title {
        background: var(--primary-color);
        width: 90%;
        color: var(--white);
        text-align: center;
        margin-bottom: 0;
        border-radius: 5px 5px 0 0;
        padding: 5px 0;
      }

      .passport {
        width: 90%;
        min-height: 200px;
        border-radius: 0 0 10px 10px;
        position: relative;
        z-index: 10;
        backdrop-filter: blur(10px);
        gap: clamp(10px, 2vh, 30px);
        ${(props) =>
          props.showCamera === true
            ? css`
                border: none;
                background: var(--background);
              `
            : css`
                border: 1px solid var(--dark-mid-gray);
              `};
        background-origin: border-box;
        background-size: cover;
        background-repeat: no-repeat;
        overflow: hidden;
        border: 1px solid var(--dark-mid-gray);
      }
      img {
        background: var(--whitesmoke);
        position: absolute;
        width: 100%;
      }
      .button-group {
        width: 90%;
        margin: 1rem auto 0;
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
    width: clamp(180px, 100%, 500%);
    height: clamp(180px, 100%, 500%);
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
  }
  #canvas {
    width: clamp(180px, 100%, 500%);
    height: clamp(180px, 100%, 500%);
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
    background: var(--translucent-white);
    backdrop-filter: invert(0.3);
    color: var(--text);
    border: none;
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
    color: var(--text);

    span {
      line-height: 0.8rem;
    }
  }

  img.watermark {
    filter: opacity(0.02);
    border-radius: 10%;
    z-index: 10;
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

export const RecordFinanceWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;
  scroll-behavior: smooth;
`;
export const RecordFinanceContent = styled.div`
  width: calc(100% - 20px);
  max-width: 1080px;
  min-height: 50vh;
  background: var(--background);
  border-radius: 10px;
  position: relative;
  font-family: var(--hind);

  .reg-header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 100;

    img {
      width: 20%;
      margin-top: clamp(30px, 10%, 40px);
    }
    div {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      h2 {
        font-size: clamp(2rem, 3vw, 3rem);
        text-transform: uppercase;
        text-align: center;
      }
      p {
        font-size: clamp(1rem, 2vw, 1.2rem);
        text-align: center;
        color: var(--text);
      }
    }
  }

  hr {
    margin: clamp(5px, 1vh, 20px) clamp(20px, 5%, 50px);
    border: none;
    border-bottom: 4px solid var(--primary-color);
    border-radius: 4px;
    border-width: clamp(2px, 0.5vh, 4px);
    position: relative;
    z-index: 100;
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
    position: relative;
    z-index: 100;

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

  #registration-error-message {
    color: var(--red);
    gap: 5px;
    font-family: var(--garamond);
    background: var(--light-red);
    padding: 5px;
    border-radius: 5px;
    border: 1px solid var(--red);
    font-family: var(--hind);
    margin: 0 5% 10px;

    p {
      display: flex;
      align-items: center;
      padding: 5px;
      gap: 5px;
    }
  }

  .reg-form {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    justify-content: space-between;
    grid-auto-flow: dense;
    direction: rtl;
    gap: 20px;
    margin: clamp(20px, 5vh, 40px) clamp(20px, 5%, 50px);
    position: relative;
    padding-bottom: 50px;
    z-index: 100;

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

      #passport-title {
        background: var(--primary-color);
        width: 90%;
        color: var(--white);
        text-align: center;
        margin-bottom: 0;
        border-radius: 5px 5px 0 0;
        padding: 5px 0;
      }
      img {
        background: var(--whitesmoke);
        position: absolute;
        width: 100%;
      }
      .button-group {
        width: 90%;
        margin: 1rem auto 0;
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
  input {
    position: relative;
    z-index: 10;
    color: var(--text);
    background: var(--translucent-white);
    backdrop-filter: invert(0.3);
  }
  #submit-btn {
    width: 100%;
  }
  .info {
    display: flex;
    gap: 5px;
    align-items: center;
    font-size: 0.8rem;
    padding: 0 0 10px 0;
    color: var(--text);

    span {
      line-height: 0.8rem;
    }
  }
  .submit-btn-notice {
    margin: clamp(20px, 5vh, 40px) clamp(20px, 5%, 50px);
  }

  img.watermark {
    filter: opacity(0.02);
    z-index: 10;
    width: 50%;
    position: absolute;
    size: 1/2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.8);
  }
  .action-btns-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: clamp(30px, 20%, 100px);
    position: absolute;
    bottom: 0;
    width: 100%;
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

export const SavingWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: transparent;
`;
export const SavingContent = styled.div`
  width: 100%;
  height: 100%;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;

  div {
    transform: scale(1.5);
  }
  p {
    color: var(--white);
    font-weight: 600;
    font-size: clamp(1.4rem, 1vw, 2rem);
    font-family: var(--hind);
  }
`;

export const StudentProfileWrapper = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
`;
export const StudentProfileContent = styled.div`
  width: clamp(200px, 100%, 600px);
  border-radius: 10px;
  background: var(--background);
  padding: 10px 10px 80px;
  position: relative;
  margin: 0 10px;

  h2 {
    font-size: clamp(1.5rem, 2vw, 2.5rem);
    text-align: center;
    position: relative;

    ::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: -5px;
      transform: translateX(-50%);
      width: 30%;
      height: 4px;
      border-radius: 1px 1px 2px 2px;
      background: var(--primary-color);
    }
  }

  img.student-img {
    display: block;
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 3px 6px var(--dark-gray);
    margin: 20px auto;
  }
  .student-details-cont {
    margin-top: 20px;
  }
  .student-detail {
    margin-top: 10px;
    display: flex;
    align-items: flex-start;
    gap: 10px;

    label {
      font-size: clamp(1rem, calc(1rem + 0.5vw), 1.2rem);
      font-weight: 600;
    }
    span {
      display: block;
      font-family: var(--hind);
      font-size: clamp(1rem, calc(1rem + 0.5vw), 1.2rem);
      font-weight: 400;
      text-transform: capitalize;
      color: var(--text);
    }
  }
  button.close-student-profile {
    border: none;
    background: var(--primary-color);
    font-family: var(--hind);
    border-radius: 10px;
    color: var(--white);
    font-weight: 500;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    position: absolute;
    bottom: 10px;
    right: 10px;
    transition: all 200ms ease;

    :hover {
      box-shadow: -3px -3px 0 var(--light-tint), 3px 3px 0 var(--dark-tint);
    }
  }
`;

export const StaffProfileWrapper = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
`;
export const StaffProfileContent = styled.div`
  width: clamp(200px, 100%, 600px);
  border-radius: 10px;
  background: var(--background);
  padding: 10px 10px 80px;
  position: relative;
  margin: 0 10px;

  h2 {
    font-size: clamp(1.5rem, 2vw, 2.5rem);
    text-align: center;
    position: relative;

    ::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: -5px;
      transform: translateX(-50%);
      width: 30%;
      height: 4px;
      border-radius: 1px 1px 2px 2px;
      background: var(--primary-color);
    }
  }

  img.staff-img {
    display: block;
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 3px 6px var(--dark-gray);
    margin: 20px auto;
  }
  .staff-details-cont {
    margin-top: 20px;
  }
  .staff-detail {
    margin-top: 10px;
    display: flex;
    align-items: flex-start;
    gap: 10px;

    label {
      font-size: clamp(1rem, calc(1rem + 0.5vw), 1.2rem);
      font-weight: 600;
    }
    span {
      display: block;
      font-family: var(--hind);
      font-size: clamp(1rem, calc(1rem + 0.5vw), 1.2rem);
      font-weight: 400;
      text-transform: capitalize;
      color: var(--text);
    }
  }
  button.close-staff-profile {
    border: none;
    background: var(--primary-color);
    font-family: var(--hind);
    border-radius: 10px;
    color: var(--white);
    font-weight: 500;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    position: absolute;
    bottom: 10px;
    right: 10px;
    transition: all 200ms ease;

    :hover {
      box-shadow: -3px -3px 0 var(--light-tint), 3px 3px 0 var(--dark-tint);
    }
  }
`;

export const DeleteModalWrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 60px);
  top: 60px;
  overflow: scroll;
`;
export const DeleteModalContent = styled.div`
  width: clamp(200px, 90%, 500px);
  max-height: 400px;
  background: var(--background);
  border-radius: 10px;
  position: sticky;
  top: 100px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  p {
    font-family: var(--hind);
    color: var(--text);
  }
  ol {
    color: var(--text);
    font-family: var(--hind);
    padding-left: 30px;
  }
  .btn-group {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 20px;
  }
  #registration-error-message {
    color: var(--red);
    gap: 5px;
    font-family: var(--garamond);
    background: var(-light-red);
    padding: 5px;
    border-radius: 5px;
    border: 1px solid var(--red);
    font-family: var(--hind);

    p {
      display: flex;
      align-items: center;
      padding: 5px;
      gap: 5px;
      color: var(--text);
    }
  }
`;

export const ArticleWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;
  scroll-behavior: smooth;
`;
export const ArticleContent = styled.div`
  width: clamp(200px, 100%, 800px);
  border-radius: 10px;
  background: var(--background);
  padding: 10px 10px 80px;
  position: relative;

  .article {
    color: var(--text);
    font-family: var(--hind);
    padding: 10px;

    ul {
      margin: 10px;
      padding-left: 20px;
    }

    img {
      display: block;
    }

    table {
      border-collapse: collapse;
      width: 100%;
      border-radius: 5px;
      margin: 10px 0;
      border: 1px solid var(--red);

      td {
        border-radius: 5px;
        padding: 5px;
        border: 1px solid var(--text);
      }
    }
  }
`;

export const CreateSlugWrapper = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
`;
export const CreateSlugContent = styled.div`
  width: clamp(200px, calc(100% - 10px), 500px);
  height: fit-content;
  background: var(--background);
  border-radius: 10px;
  box-shadow: 0 3px 10px var(--dark-gray);
  padding: 10px;
  margin-bottom: 20px;

  .create-slug {
    width: 70%;
    margin: 20px auto;
    display: block;
  }

  p {
    color: var(--text);
    font-family: var(--hind);
    margin-top: 10px;
    font-weight: 400;
  }
  .delete-phrase {
    font-weight: 600;
    color: var(--red);
  }
  .input-field {
    width: 100%;
    display: flex;
    gap: 5px;
  }
  .confirmation-icon {
    width: 50px;
  }

  .delete-slug {
    margin-top: 20px;
  }

  .info {
    padding: 10px 20px;
    margin-bottom: 20px;

    li {
      color: var(--text);
      font-family: var(--hind);
      font-size: clamp(0.6em, 1vw, 0.8rem);
      transition: all 200ms ease;

      ::marker {
        ${(props) =>
          getTheme(props.currentTheme) === "Dark"
            ? css`
                content: "⬛ ";
              `
            : css`
                content: "⬜ ";
              `}
        color: var(--primary-color);
        font-size: 1rem;
        line-height: 40px;
      }
    }
    li.valid {
      color: var(--green);
      font-family: var(--hind);
      font-size: clamp(0.6em, 1vw, 0.8rem);

      ::marker {
        content: "✅ ";
        color: var(--primary-color);
        font-size: 1rem;
        line-height: 40px;
      }
    }
  }
  .error-message {
    display: flex;
    align-items: flex-start;
    gap: 5px;
    background: var(--red);
    padding: 5px;
    border-radius: 5px;
  }
`;

export const MessagesWrapper = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  .success-message {
    width: clamp(240px, calc(100% - 10px), 500px);
    padding: 5px;
    color: var(--white);
    font-family: var(--hind);
    background: var(--lime);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
  }
  .error-message {
    width: clamp(240px, calc(100% - 10px), 500px);
    padding: 5px;
    color: var(--white);
    font-family: var(--hind);
    background: var(--red);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
  }
`;
export const MessagesContent = styled.div`
  width: clamp(200px, calc(100% - 10px), 500px);
  background: var(--background);
  border-radius: 10px;
  box-shadow: 0 3px 10px var(--dark-gray);
  padding: 10px;
  margin-bottom: 20px;

  .tabs {
    width: max-content;
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 30px;
    background: var(--translucent-white);
    backdrop-filter: invert(0.3);
    padding: 10px;
    border-radius: 5px 5px 0 0;
    position: relative;
    z-index: 100;

    ::after {
      content: "";
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background: var(--transparent);
      position: absolute;
      bottom: 0;
      right: -10px;
      box-shadow: ${(props) =>
        props.theme.trim() === "Light"
          ? "-5px 5px 0 #e8e8e8"
          : "-5px 5px 0 #1d1d1d"};
      z-index: 10;
    }
  }
  .current-tab {
    width: 25px;
    height: 4px;
    border-radius: 1px 1px 3px 3px;
    background-color: var(--secondary-color);
    position: absolute;
    bottom: 0;
    left: 10px;
    transform: translateX(-50%);
    transition: all 200ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  .messages-cont {
    background: var(--translucent-white);
    border-radius: 0 5px 5px 5px;
    backdrop-filter: invert(0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    min-height: 360px;
    max-height: 360px;
    width: clamp(240px, 100%, 500px);
  }
  .send-messages-cont {
    background: var(--translucent-white);
    backdrop-filter: invert(0.3);
    height: 400px;
    border-radius: 0 5px 5px 5px;
    padding: 20px 10px 50px;
    gap: 2rem;
    position: relative;
    width: clamp(240px, 100%, 500px);

    hr {
      margin: 10px 0;
      border: none;
      border-bottom: 2px solid var(--background);
    }

    h5 {
      transform: translateY(10px);
    }
  }
  .recipient {
    position: relative;
  }
  .recipient-error {
    display: flex;
    align-items: flex-start;
    gap: 3px;
    justify-content: flex-start;
    color: var(--red);
    font-size: 0.8rem;
  }
  .info {
    display: flex;
    gap: 5px;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 10px 0 3px;

    span {
      font-size: 0.8rem;
    }
  }
  .recipient-loader {
    transform: scale(0.7);
    position: absolute;
    height: 100%;
    width: 40px;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .send-message-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    align-self: end;
    position: absolute;
    width: calc(100% - 20px);
    bottom: 10px;
    left: 10px;
  }

  .tab-link {
    transition: all 200ms cubic-bezier(0.68, -0.55, 0.265, 1.55);

    :hover {
      cursor: pointer;
    }
  }
  .active {
    color: var(--secondary-color);
    transition: all 200ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  .no-messages {
    display: block;
    width: 200px;
  }
  .no-messages-text {
    color: var(--text);
    font-family: var(--hind);
    width: 70%;
    margin: 20px auto;
    text-align: center;
  }
  .matched-schools {
    position: absolute;
    bottom: -140%;
    width: 100%;
    border-radius: 5px;
    box-shadow: 0 5px 12px var(--dark-gray);
    background: var(--background);
    z-index: 10;
    overflow: hidden;
    padding: 0;
  }
  .mailbox {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 10px;
    margin-top: 10px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    overflow: hidden;
    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
      border-radius: 10px;
      background-color: var(--transparent);
    }
    ::-webkit-scrollbar-track {
      background-color: var(--transparent);
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      height: 5px;
      background: var(--secondary-color);
    }

    .matched-school-item {
      width: 100%;
      /* padding: 5px 5px 5px 50px; */
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 3px;
      transition: all 100ms ease-in-out;
      cursor: pointer;
      position: relative;

      :hover {
        background: var(--primary-color);
      }
    }

    .sender-details {
      width: 100%;

      h5 {
        margin-top: 5px;
        margin-bottom: 5px;
      }
      p {
        margin-top: 0;
      }
    }
  }

  .no-more {
    text-align: center;
    width: 100%;
  }

  .matched-school-item {
    width: 100%;
    padding: 0 5px 5px 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 3px;
    cursor: pointer;
    position: relative;
    border-radius: 5px;
    border: 1px solid var(--background);
    transition: all 100ms ease-in-out;

    :hover .time {
      background: var(--primary-color);
    }
    :hover {
      background: var(--primary-color);
    }
  }
  .school-logo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: absolute;
    top: 5px;
    left: 5px;
    background: var(--translucent-white);
    backdrop-filter: invert(0.3);
  }
  .matched-school-name {
    font-family: var(--hind);
    color: var(--text);
    font-size: 0.8rem;
  }
  .matched-school-address {
    font-family: var(--hind);
    color: var(--dark-mid-gray);
    font-size: 0.7rem;
    display: flex;
    align-items: center;
    gap: 3px;
    white-space: nowrap;

    span {
      display: block;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
  .message-title {
    font-family: var(--hind);
    color: var(--dark-mid-gray);
    font-size: 0.7rem;
    display: flex;
    align-items: center;
    gap: 3px;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: clip;

    span {
      display: block;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
  .time {
    display: block;
    font-family: var(--hind);
    color: var(--text);
    font-size: 0.8rem;
    position: absolute;
    right: 0;
    top: 0;
    padding: 3px 5px;
    height: fit-content;
    background: var(--background);
    border-radius: 0 5px 5px 5px;
    transition: all 100ms ease-in-out;
  }

  .create-slug {
    width: 70%;
    margin: 20px auto;
    display: block;
  }

  p {
    color: var(--text);
    font-family: var(--hind);
    margin-top: 10px;
    font-weight: 400;
  }
  .delete-phrase {
    font-weight: 600;
    color: var(--red);
  }
  .input-field {
    width: 100%;
    display: flex;
    gap: 5px;
  }
  .confirmation-icon {
    width: 50px;
  }

  .delete-slug {
    margin-top: 20px;
  }
  .error-message {
    display: flex;
    align-items: flex-start;
    gap: 5px;
    background: var(--red);
    padding: 5px;
    border-radius: 5px;
  }
`;
