import styled from "styled-components";

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
