import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavbarContainer = styled.nav`
  height: ${({ theme }) => theme.dimensions.navbar};
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  z-index: 10;
  background: rgba(31, 31, 31, 0.8);

  @media screen and (min-width: 768px) {
    padding: 1rem 4rem;
  }

  @media screen and (min-width: 992px) {
    padding: 1rem 6rem;
  }

  @media screen and (min-width: 1200px) {
    padding: 1rem 8rem;
  }
`;

export const NavbarBrand = styled.h1`
  color: #ff7517;
  z-index: 2;
`;

export const NavbarButton = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  border-radius: 20%;
  background: rgba(61, 61, 61, 0.5);

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const NavbarButtonItem = styled.span`
  height: 2px;
  width: 60%;
  position: absolute;
  transition: transform 0.3s ease-in-out;
  display: block;
  background-color: #f5f5f5;

  &:nth-child(1) {
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(0) rotate(315deg)" : "translateY(-8px)"};
  }

  &:nth-child(2) {
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(0) rotate(45deg)" : "translateY(8px)"};
  }

  &:nth-child(3) {
    transition: ${({ isOpen }) =>
      isOpen ? "none" : "opacity 0.5s ease-in-out"};
    opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
  }
`;

export const NavbarMenu = styled.ul`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(56, 56, 55, 0.9);
  transform: ${({ isOpen }) => (isOpen ? "none" : "translateX(-100%)")};
  transition: transform 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (orientation: landscape) {
    padding-top: 5rem;
  }

  @media screen and (min-width: 768px) {
    position: static;
    transform: translateX(0);
    padding-top: 0;
    flex-direction: row;
    background: none;
  }
`;

export const NavbarLink = styled(NavLink)`
  display: block;
  color: #f5f5f5;
  transition: color 0.2s ease-in-out;
  padding: 1rem 0;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 100%;
    background-color: #fd8b68;
    z-index: -1;
    transition: width 0.3s ease-in-out;
  }

  &.active:before,
  &:focus:before,
  &:hover:before {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    padding: 0.8rem 3rem;
    font-size: 1.2rem;
  }
`;

export const NavbarItem = styled.li`
  text-transform: uppercase;
  position: relative;
  width: 70%;
  text-align: center;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 768px) {
    width: unset;

    &:not(:last-child) {
      margin-bottom: 0;
      margin-right: 1rem;
    }
  }

  @media screen and (min-width: 992px) {
    width: unset;

    &:not(:last-child) {
      margin-bottom: 0;
      margin-right: 4rem;
    }
  }
`;
