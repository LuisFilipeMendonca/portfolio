import styled, { css } from "styled-components";
import { Section } from "../../style";

export const HomeSection = styled(Section)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 0 2rem;

  @media screen and (min-width: 768px) {
    padding: 0 4rem;
  }

  @media screen and (min-width: 992px) {
    padding: 0 6rem;
  }

  @media screen and (min-width: 1200px) {
    padding: 0 8rem;
  }
`;

export const HomeContent = styled.div`
  width: 100%;
  max-width: 40rem;
  color: white;

  @media screen and (min-width: 992px) {
    background: rgba(94, 94, 94, 0.3);
    padding: 2rem;
    border-radius: 3px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 55rem;
  }
`;

const hideElements = css`
  opacity: 0;
`;

export const HomeTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 3rem;
`;

export const HomeSecondaryTitle = styled.p`
  /* ${hideElements} */
  font-size: 3rem;
  margin-bottom: 3rem;
`;

export const HomeQuote = styled.p`
  /* ${hideElements}; */

  q {
    color: #ff7517;
    font-size: 1.5rem;
  }
`;
