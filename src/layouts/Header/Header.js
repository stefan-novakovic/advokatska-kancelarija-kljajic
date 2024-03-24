import { StyledHeader } from "./Header.styled";
import Nav from "../Nav/Nav";
import logo from "../../assets/images/gk-logo.png";
import ThemeSwitcher from "../../components/ThemeSwitcher/ThemeSwitcher";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import PhoneSidebarMenu from "../../components/PhoneSidebarMenu/PhoneSidebarMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledHeader>
      <HashLink smooth to="/#">
        <img src={logo} alt="" />
      </HashLink>

      <div onClick={() => setIsOpen(!isOpen)}>
        <Hamburger toggled={false} distance="sm" color="#F2F6F9" />
      </div>

      <Nav />

      <PhoneSidebarMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <ThemeSwitcher />
    </StyledHeader>
  );
};

export default Header;
