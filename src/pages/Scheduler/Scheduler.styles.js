import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  flex: 1;
  min-height: 100vh;
  background: var(--background);
  ${(props) =>
    props.isSuccess === false &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `};
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 10px;
  width: 100%;

  main {
    flex: 1;
    border-radius: 10px;
    background: var(--background);
    width: 0;
    border: 1px solid var(--dark-mid-gray);
  }

  .no-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: 100vh;

    img {
      width: 25%;
    }
    p {
      font-family: var(--hind);
      font-weight: 500;
      color: var(--text);
    }
  }

  #scheduler {
    .dx-scheduler-time-panel-cell div {
      font-family: var(--hind);
    }
    .dx-scheduler-work-space-all-day-collapsed .dx-scheduler-all-day-title {
      font-family: var(--hind);
    }
    .dx-button-text {
      font-family: var(--hind);
    }
    .dx-scheduler-appointment-popup .dx-popup-content {
      padding-top: 0;
      background: blue;
      padding-bottom: 0;
    }
    span.dx-field-item-help-text,
    span.dx-field-item-label-text {
      color: var(--primary-color);
    }
    .dx-scheduler-work-space {
      border-radius: 0 0 10px 10px;
    }
    .dx-scheduler-container {
      border-radius: 0 0 10px 10px;
    }
  }
`;

export const LoadingContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--background);
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin: 10px 10px 10px 0;
  color: var(--text);
  gap: 2rem;
  font-family: var(--hind);
  font-size: 1.2rem;
`;
export const ErrorContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--background);
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin: 10px 10px 10px 0;
  color: red;
  gap: 2rem;
  font-family: var(--hind);
  font-size: 1.2rem;

  .button-group {
    display: flex;
    align-items: center;
    gap: 40px;

    button {
      border: none;
      padding: 0.5rem 1rem;
      background: var(--translucent-white);
      backdrop-filter: invert(0.3);
      font-size: 1rem;
      border-radius: 1.5rem;
      font-family: var(--hind);
      cursor: pointer;
      transition: all 300ms ease-in-out;
      color: var(--text);

      :hover {
        box-shadow: -2px -2px var(--light-tint), 2px 2px var(--dark-tint);
        background: var(--primary-color);
        color: var(--white);
      }
    }
  }
`;
