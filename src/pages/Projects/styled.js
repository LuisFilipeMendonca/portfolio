import styled from "styled-components";
import { Section } from "../../style";

export const ProjectsSection = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${({ theme }) => `calc(${theme.dimensions.navbar} + 1rem)`} 1rem;
  overflow-x: hidden;

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

export const ProjectsContent = styled.div`
  margin: 2rem auto 0;

  @media screen and (min-width: 768px) {
    margin: 2rem 0 0;
  }
`;

export const Video = styled.video`
  width: 100%;

  @media screen and (min-width: 576px) {
    width: 40rem;
  }

  @media screen and (min-width: 768px) {
    width: 50rem;
  }

  @media screen and (min-width: 992px) {
    width: 60rem;
  }
`;
