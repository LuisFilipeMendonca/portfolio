import styled from "styled-components";
import { Section } from "../../style";

export const AboutSection = styled(Section)`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => `calc(${theme.dimensions.navbar} + 1rem)`} 1rem;
`;

export const SectionTitle = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

export const AboutContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const AboutText = styled.p`
  text-indent: 2rem;
  text-align: justify;
  line-height: 1.6rem;
`;
