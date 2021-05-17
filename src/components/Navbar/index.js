import React, { useState } from "react";

import {
  NavbarContainer,
  NavbarBrand,
  NavbarButton,
  NavbarButtonItem,
  NavbarMenu,
  NavbarItem,
  NavbarLink,
} from "./styled";

const navbarData = [
  { id: 1, to: "#", description: "Home" },
  { id: 2, to: "#about", description: "About" },
  { id: 3, to: "#prohects", description: "Projects" },
  { id: 4, to: "#contact", description: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentNav, setCurrentNav] = useState(navbarData[0].description);

  const navbarToggler = () => setIsOpen((prev) => !prev);

  return (
    <NavbarContainer>
      <NavbarBrand>Filipe Portfolio</NavbarBrand>
      <NavbarButton onClick={navbarToggler}>
        <NavbarButtonItem isOpen={isOpen} />
        <NavbarButtonItem isOpen={isOpen} />
        <NavbarButtonItem isOpen={isOpen} />
      </NavbarButton>
      <NavbarMenu isOpen={isOpen}>
        {navbarData.map(({ id, to, description }) => (
          <NavbarItem key={id} isActive={currentNav === description}>
            <NavbarLink
              to={to}
              className={currentNav === description ? "active" : null}
            >
              {description}
            </NavbarLink>
          </NavbarItem>
        ))}
      </NavbarMenu>
    </NavbarContainer>
  );
};

export default Navbar;
