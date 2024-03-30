import { StyledHeaderLogoImageWrapper } from "./HeaderLogoImageWrapper.styled";
import { HashLink } from "react-router-hash-link";
import logo from "../../assets/images/gk-logo.png";

const HeaderLogoImageWrapper = () => {
  return (
    <StyledHeaderLogoImageWrapper>
      <HashLink smooth to="/#">
        <img src={logo} alt="" />
      </HashLink>
    </StyledHeaderLogoImageWrapper>
  );
};

export default HeaderLogoImageWrapper;
