import styled from "styled-components";
import { Section } from "../../style";

export const ProjectsSection = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${({ theme }) => theme.dimensions.navbar} 1rem;
  overflow-x: hidden;

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

export const ProjectsContent = styled.div`
  margin: 2rem auto 0;

  @media screen and (min-width: 768px) {
    margin: 2rem 0 0;
  }
`;
