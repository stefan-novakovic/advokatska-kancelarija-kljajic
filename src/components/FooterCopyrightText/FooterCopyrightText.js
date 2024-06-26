import { StyledFooterCopyrightText } from "./FooterCopyrightText.styled";
import { HeaderAndFooterData } from "../../data/dataHeader&Footer";
import useDataContext from "../../hooks/useDataContext";

const FooterCopyrightText = () => {
  const { language } = useDataContext();
  const dateObj = new Date();

  return (
    <StyledFooterCopyrightText>
      <span>Copyright &copy; {dateObj.getFullYear()}&nbsp;</span>
      <span>{HeaderAndFooterData[`${language}`].footerFirmText}</span>
    </StyledFooterCopyrightText>
  );
};

export default FooterCopyrightText;
