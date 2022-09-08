import styled, { css } from "styled-components";

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
    background: var(--background);
    margin-top: 15px;
    margin-bottom: 5px;
    transition: all 200ms ease-in-out;
    box-shadow: 0 5px 8px var(--dark-gray);

    :hover {
      box-shadow: 0 5px 8px var(--dark-gray);
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
    cursor: pointer;
    background: var(--background);
    color: var(--text);
    margin-top: 15px;
    margin-bottom: 5px;
    transition: all 200ms ease-in-out;
    width: clamp(240px, 100%, 500px);

    :hover {
      box-shadow: 0 5px 8px var(--dark-gray);
    }

    span {
      font-size: clamp(1rem, 1vw, 1.2rem);
      font-weight: 500;
    }
  }
  img {
    width: clamp(240px, 100%, 500px);
    display: block;
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
