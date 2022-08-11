import styled from "styled-components";

export const ImagePickerWrapper = styled.div`
  label {
    display: block;
    font-size: clamp(1.2rem, 2vw, 1.4rem);
    font-weight: 500;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-family: var(--hind);
    cursor: pointer;
    background: whitesmoke;
    margin-top: 15px;
    margin-bottom: 5px;
    transition: all 200ms ease-in-out;

    :hover {
      box-shadow: 0 5px 8px rgba(0, 0, 0, 0.3);
    }
  }
`;
export const ImagePickerContent = styled.div`
  label {
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-family: var(--hind);
    color: var(--dark-gray);
    cursor: pointer;
    background: whitesmoke;
    margin-top: 15px;
    margin-bottom: 5px;
    transition: all 200ms ease-in-out;

    :hover {
      box-shadow: 0 5px 8px rgba(0, 0, 0, 0.3);
    }

    span {
      font-size: clamp(1rem, 1vw, 1.2rem);
      font-weight: 500;
    }
  }
  img {
    width: 100%;
    border-radius: 5px;
    background: var(--whitesmoke);
    border-top: 20px solid var(--primary-color);
  }
  .preview-text {
    color: var(--dark-gray);
    font-family: var(--garamond);
    color: var(--primary-color);
    font-weight: 500;
    margin: 10px 0 5px;
    display: flex;
    align-items: center;
    gap: 3px;
  }
  .file-picker {
    display: none;
  }
`;
