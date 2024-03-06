import React from "react";
import { StyledHeader } from "./Header.styled";
import Nav from "../Nav/Nav";
import logo from "../../assets/images/gk-logo.png";
import ThemeSwitcher from "../../components/ThemeSwitcher/ThemeSwitcher";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <StyledHeader>
      <HashLink smooth to="/#">
        <img src={logo} alt="" />
      </HashLink>
      <Nav />
      <ThemeSwitcher />
    </StyledHeader>
  );
};

export default Header;
