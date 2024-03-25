import { StyledHeader } from "./Header.styled";
import Nav from "../Nav/Nav";
import logo from "../../assets/images/gk-logo.png";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import PhoneSidebarMenu from "../../components/PhoneSidebarMenu/PhoneSidebarMenu";
import useDataContext from "../../hooks/useDataContext";

const Header = () => {
  const { language, setLanguage } = useDataContext();
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

      <div>
        <button
          type="button"
          onClick={() => {
            setLanguage(language === "SRB" ? "ENG" : "SRB");
            localStorage.setItem("lang", JSON.stringify(language));
          }}
        >
          {language}
        </button>
      </div>
    </StyledHeader>
  );
};

export default Header;
