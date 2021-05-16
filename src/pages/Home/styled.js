import styled, { css } from "styled-components";
import { Section } from "../../style";

export const HomeSection = styled(Section)`
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    ${({ bg }) => `url(${bg})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeContent = styled.div`
  width: 100%;
  max-width: 55rem;
  color: white;
  display: flex;
  background: linear-gradient(to right, rgba(0, 0, 0, 1) 40%, transparent 90%);
`;

export const HomeInfo = styled.div`
  flex: 1;
  padding: 2rem;
  border-radius: 8px;

  h1 {
    font-size: 2.5rem;
  }

  q {
    font-size: 1.1rem;
  }

  & > :not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

const hideElements = css`
  opacity: 0;
`;

export const HomeProfilePhoto = styled.img`
  height: 16rem;
  width: 16rem;
  display: block;
  object-fit: cover;
  border-radius: 50%;
  ${hideElements};
`;

export const HomeInfoTitle = styled.h1`
  ${hideElements}
`;

export const HomeInfoSecondaryTitle = styled.h2`
  ${hideElements}
`;

export const HomeInfoQuote = styled.p`
  ${hideElements}
`;
