import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        letter-spacing: 1px;
    }

    html {
      font-size: 75%;
    }

    body {
      font-size: 1.3rem;
    }

    h1 {
      font-size: 1.9rem;
    }

    h2 {
      font-size: 1.7rem;
    }

    button {
      background: none;
      border: none;
      cursor: pointer;
    }

    li {
      list-style: none;
    }

a {
  text-decoration: none;
}

    @keyframes fade-top {
      0% {transform: translateY(-20px); opacity: 0}
      100% {transform: translateY(0); opacity: 1}
    }

    @keyframes fade-right {
      0% {transform: translateX(20px); opacity: 0}
      100% {transform: translateX(0); opacity: 1}
    }

    @keyframes fade-bottom {
      0% {transform: translateY(20px); opacity: 0}
      100% {transform: translateY(0); opacity: 1}
    }
`;

export const Background = styled.div`
  background-image: ${({ bg }) => `url(${bg})`},
    linear-gradient(rgba(31, 31, 31, 1), rgba(31, 31, 31, 1));
  background-repeat: no-repeat;
  background-size: 100vh, 100%;
  background-position: left;
  background-attachment: fixed;
  position: absolute;
  height: 100vh;
  width: 100%;
  z-index: -1;

  &:before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(
      rgba(31, 31, 31, 0.9),
      rgba(31, 31, 31, 0.6),
      rgba(31, 31, 31, 0.9)
    );
  }

  @media screen and (min-width: 768px) {
    background-position: right;

    &:before {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      background: linear-gradient(
        to right,
        rgba(31, 31, 31, 0.9),
        rgba(31, 31, 31, 0.3) 80%,
        rgba(31, 31, 31, 0.9)
      );
    }
  }
`;

export const Section = styled.section`
  min-height: 100vh;
`;
