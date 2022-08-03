import styled from "styled-components";

export const Wrapper = styled.div`
  width: 90px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Content = styled.div`
  width: 30px;
  height: 30px;
  border-width: 3px;
  border-radius: 50%;
  border-top: 3px solid var(--primary-color);
  border-right: 3px solid transparent;
  border-bottom: 3px solid var(--secondary-color);
  border-left: 3px solid transparent;
`;
