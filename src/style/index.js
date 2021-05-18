import styled, { createGlobalStyle } from "styled-components";

import bg from "../assets/img/bg.png";

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
      background: rgba(31,31,31, 1);
      background-image: linear-gradient(rgba(31, 31, 31, 0.9), rgba(31, 31, 31, 0.6), rgba(31, 31, 31, 0.9)), url(${bg});
      background-repeat: no-repeat;
      background-size: 100vh;
      background-position: left;
      background-attachment: fixed;
      z-index: -1;
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



    @media screen and (min-width: 768px) {
      html {
        font-size: 87.5%;
      }

      body {
        background-position: 120%;
      }
    }

    @media screen and (min-width: 992px) {
      body {
        background-image: linear-gradient(to right, rgba(31, 31, 31, 0.9), rgba(31, 31, 31, 0.5) 40%, rgba(31, 31, 31, 0.9)), url(${bg});
      }
    }

    @media screen and (min-width: 1200px) {
      body {
        background-position: 110%;
      }
    }

    @keyframes fade-top {
      0% {transform: translateY(-40px); opacity: 0}
      100% {transform: translateY(0); opacity: 1}
    }

    @keyframes fade-right {
      0% {transform: translateX(40px); opacity: 0}
      100% {transform: translateX(0); opacity: 1}
    }

    @keyframes fade-bottom {
      0% {transform: translateY(40px); opacity: 0}
      100% {transform: translateY(0); opacity: 1}
    }
`;

export const Section = styled.section`
  min-height: 100vh;
`;
