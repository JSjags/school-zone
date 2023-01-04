import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 10px clamp(20px, 3vw, 60px);
`;
export const Content = styled.div`
  font-family: var(--hind);
  width: 60%;

  h1,
  h2,
  h3 {
    font-family: var(--garamond);
    color: var(--primary-color);
    margin-top: 5vh;
    text-shadow: -1px -1px var(--light-tint), 1px 1px var(--dark-tint);
  }
  p {
    margin-top: 5vh;
    color: var(--text);
  }

  @media screen and (max-width: 768px) {
    width: clamp(200px, 100%, 600px);
    margin: 0 auto 5vh;
  }
`;
