import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const DefaultButton = css`
  padding: 0.5rem 1.5rem;
  position: relative;
  font-size: 1.2rem;
  display: inline-flex;
  align-items: center;

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transition: transform 0.2s ease-in-out;
  }

  &:hover::before,
  &:focus::before,
  &:active::before {
    transform: translate(2px, 2px);
  }

  &:hover::after,
  &:focus::after,
  &:active::after {
    transform: translate(-2px, -2px);
  }

  &.primary {
    color: #fd8b68;
  }

  &.primary:before,
  &.primary:after {
    border: 1px solid #fd8b68;
  }

  &.secondary {
    color: #f5f5f5;
  }

  &.secondary:before,
  &.secondary:after {
    border: 1px solid #f5f5f5;
  }
`;

export const Button = styled.button`
  ${DefaultButton};
`;

export const LinkButton = styled(Link)`
  ${DefaultButton};
`;
