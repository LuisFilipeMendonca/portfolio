import styled from "styled-components";
import { Section } from "../../style";

export const AboutSection = styled(Section)`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  padding: ${({ theme }) => theme.dimensions.navbar} 2rem;

  @media screen and (min-width: 768px) {
    padding: ${({ theme }) => theme.dimensions.navbar} 4rem;
  }

  @media screen and (min-width: 992px) {
    padding: ${({ theme }) => theme.dimensions.navbar} 6rem;
  }

  @media screen and (min-width: 1200px) {
    padding: ${({ theme }) => theme.dimensions.navbar} 8rem;
  }
`;

export const AboutContent = styled.div`
  margin-top: 2rem;
  width: 100%;
  max-width: 45rem;
  opacity: 0;

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 768px) {
    background: rgba(61, 61, 61, 0.5);
    border: 1px solid #fd8b68;
    padding: 2rem;
    border-radius: 3px;
  }
`;

export const AboutText = styled.p`
  text-indent: 2rem;
  line-height: 1.6rem;
  color: #f5f5f5;
`;
