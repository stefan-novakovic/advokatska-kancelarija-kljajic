import { StyledHeader } from "./Header.styled";
import HeaderLogoImageWrapper from "../../components/HeaderLogoImageWrapper/HeaderLogoImageWrapper";
import Nav from "../Nav/Nav";
import HeaderHamburgerWrapper from "../../components/HeaderHamburgerWrapper/HeaderHamburgerWrapper";
import PhoneSidebarMenu from "../../components/PhoneSidebarMenu/PhoneSidebarMenu";
import HeaderLanguageButtonWrapper from "../../components/HeaderLanguageButtonWrapper/HeaderLanguageButtonWrapper";
import useDataContext from "../../hooks/useDataContext";

const Header = () => {
  const { openSidebar, setOpenSidebar } = useDataContext();

  return (
    <StyledHeader>
      <HeaderLogoImageWrapper />

      <Nav />

      <HeaderHamburgerWrapper />
      <PhoneSidebarMenu
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
      />

      <HeaderLanguageButtonWrapper />
    </StyledHeader>
  );
};

export default Header;
