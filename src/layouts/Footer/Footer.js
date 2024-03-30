import { StyledFooter } from "./Footer.styled";
import FooterIconsContainer from "../../components/FooterIconsContainer/FooterIconsContainer";
import FooterCopyrightText from "../../components/FooterCopyrightText/FooterCopyrightText";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterIconsContainer />
      <FooterCopyrightText />
    </StyledFooter>
  );
};

export default Footer;
