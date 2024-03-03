import React from "react";
import { StyledHeader } from "./Header.styled";
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <StyledHeader>
      <Nav />
    </StyledHeader>
  );
};

export default Header;
