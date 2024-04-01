import { StyledFooterIconsContainer } from "./FooterIconsContainer.styled";
import FooterLink from "./FooterLink";
import { HeaderAndFooterData } from "../../data/dataHeader&Footer";
import useDataContext from "../../hooks/useDataContext";

const FooterIconsContainer = () => {
  const { language } = useDataContext();

  return (
    <StyledFooterIconsContainer>
      {HeaderAndFooterData[`${language}`].footerIconArray.map((iconObj) => {
        return <FooterLink key={iconObj.key} iconObj={iconObj} />;
      })}
    </StyledFooterIconsContainer>
  );
};

export default FooterIconsContainer;
