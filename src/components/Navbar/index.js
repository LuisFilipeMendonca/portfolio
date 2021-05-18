import React, { useState } from "react";

import {
  NavbarContainer,
  NavbarButton,
  NavbarButtonItem,
  NavbarMenu,
  NavbarItem,
  NavbarLink,
} from "./styled";

const navbarData = [
  { id: 1, to: "/", description: "Home" },
  { id: 2, to: "/about", description: "About" },
  { id: 3, to: "/projects", description: "Projects" },
  { id: 4, to: "/contact", description: "Contact" },
];

const Navbar = ({ currentNav }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navbarToggler = () => setIsOpen((prev) => !prev);

  return (
    <NavbarContainer>
      <NavbarButton onClick={navbarToggler}>
        <NavbarButtonItem isOpen={isOpen} />
        <NavbarButtonItem isOpen={isOpen} />
        <NavbarButtonItem isOpen={isOpen} />
      </NavbarButton>
      <NavbarMenu isOpen={isOpen}>
        {navbarData.map(({ id, to, description }) => (
          <NavbarItem key={id} isActive={currentNav === to}>
            <NavbarLink to={to} exact>
              {description}
            </NavbarLink>
          </NavbarItem>
        ))}
      </NavbarMenu>
    </NavbarContainer>
  );
};

export default Navbar;
