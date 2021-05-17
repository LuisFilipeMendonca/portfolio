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

export const Section = styled.section`
  min-height: 100vh;
`;
