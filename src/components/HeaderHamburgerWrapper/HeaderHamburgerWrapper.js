import { StyledHeaderHamburgerWrapper } from "./HeaderHamburgerWrapper.styled";
import { Squash as Hamburger } from "hamburger-react";
import useDataContext from "../../hooks/useDataContext";

const HeaderHamburgerWrapper = () => {
  const { openSidebar, setOpenSidebar } = useDataContext();

  return (
    <StyledHeaderHamburgerWrapper onClick={() => setOpenSidebar(!openSidebar)}>
      <Hamburger toggled={false} distance="sm" color="#F2F6F9" />
    </StyledHeaderHamburgerWrapper>
  );
};

export default HeaderHamburgerWrapper;
