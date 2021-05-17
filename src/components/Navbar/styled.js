import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

export const NavbarContainer = styled.nav`
  height: ${({ theme }) => theme.dimensions.navbar};
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.8rem;
  z-index: 10;
`;

export const NavbarBrand = styled.h1`
  color: #84f2d6;
  z-index: 2;
`;

export const NavbarButton = styled.button`
  width: 3rem;
  height: 3rem;
  /* border: 1px solid #84f2d6; */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
`;

export const NavbarButtonItem = styled.span`
  height: 2px;
  width: 70%;
  background-color: #000;
  position: absolute;
  transition: transform 0.3s ease-in-out;
  display: block;
  background-color: #84f2d6;

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
  background: rgba(0, 0, 0, 0.9);
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NavbarLink = styled(HashLink)`
  display: block;
  color: #84f2d6;
  transition: color 0.2s ease-in-out;
  padding: 1rem 0;

  &.active {
    color: #000;
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

  &:before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    width: ${({ isActive }) => (isActive ? "100%" : "0")};
    height: 100%;
    background-color: ${({ isActive }) => (isActive ? "#84f2d6" : "#000")};
    transition: width 0.2s ease-in-out;
    z-index: -1;
  }

  &:hover ${NavbarLink}, &:focus ${NavbarLink}, &:active ${NavbarLink} {
    color: #000;
  }

  &:hover::before,
  &:focus::before,
  &:active::before {
    width: 100%;
    background-color: #84f2d6;
  }
`;
