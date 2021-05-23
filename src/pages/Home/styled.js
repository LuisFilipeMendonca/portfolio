import styled from "styled-components";
import { Section } from "../../style";

export const HomeSection = styled(Section)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: ${({ theme }) => `calc(${theme.dimensions.navbar} + 1rem)`} 1rem;

  @media screen and (min-width: 768px) {
    padding: ${({ theme }) => `calc(${theme.dimensions.navbar} + 1rem)`} 4rem;
  }

  @media screen and (min-width: 992px) {
    padding: ${({ theme }) => `calc(${theme.dimensions.navbar} + 1rem)`} 6rem;
  }

  @media screen and (min-width: 1200px) {
    padding: ${({ theme }) => `calc(${theme.dimensions.navbar} + 1rem)`} 8rem;
  }
`;

export const HomeContent = styled.div`
  width: 100%;
  max-width: 45rem;
  color: white;
  opacity: 0;

  @media screen and (min-width: 768px) {
    background: rgba(61, 61, 61, 0.4);
    border: 1px solid #fd8b68;
    padding: 2rem;
    border-radius: 3px;
  }
`;

export const HomeTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

export const HomeSecondaryTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

export const HomeQuote = styled.p`
  margin-bottom: 4rem;

  q {
    color: #fd8b68;
    font-size: 1.5rem;
  }
`;
