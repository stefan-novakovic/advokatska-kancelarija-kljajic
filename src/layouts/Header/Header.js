import React from "react";
import { StyledHeader } from "./Header.styled";
import Nav from "../Nav/Nav";
import logo from "../../assets/images/gk-logo.png";
import ThemeSwitcher from "../../components/ThemeSwitcher/ThemeSwitcher";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <Nav />
      <ThemeSwitcher />
    </StyledHeader>
  );
};

export default Header;
