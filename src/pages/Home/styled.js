import styled, { css } from "styled-components";
import { Section } from "../../style";

export const HomeSection = styled(Section)`
  background-image: linear-gradient(
      rgba(56, 56, 55, 0.8),
      rgba(56, 56, 55, 0.8)
    ),
    ${({ bg }) => `url(${bg})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: ${({ theme }) => theme.dimensions.navbar};
`;

export const HomeContent = styled.div`
  width: 100%;
  max-width: 55rem;
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const HomeInfo = styled.div`
  flex: 1;
  padding: 2rem;
  border-radius: 8px;

  & > :not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

const hideElements = css`
  opacity: 0;
`;

export const HomeProfilePhotoContainer = styled.div`
  height: 14rem;
  width: 14rem;
  position: relative;
  border-radius: 50%;
  order: -1;
  ${hideElements};

  &:before {
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 103%;
    width: 103%;
    border-radius: 50%;
    border: 2px solid #84f2d6;
  }
`;

export const HomeProfilePhoto = styled.img`
  height: 100%;
  width: 100%;
  display: block;
  object-fit: cover;
  border-radius: 50%;
`;

export const HomeInfoTitle = styled.h1`
  ${hideElements};
  text-align: center;
`;

export const HomeInfoSecondaryTitle = styled.p`
  ${hideElements}
  text-align: center;
`;

export const HomeInfoQuote = styled.p`
  ${hideElements};
  text-align: center;

  q {
    color: #84f2d6;
    font-size: 1.4rem;
  }
`;
