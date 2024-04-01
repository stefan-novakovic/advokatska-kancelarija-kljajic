import { StyledAboutUsPageMottoContainer } from "./AboutUsPageMottoContainer.styled";
import { AboutUsPageData } from "../../data/dataAboutUsPage";

const AboutUsPageMottoContainer = ({ language }) => {
  return (
    <StyledAboutUsPageMottoContainer>
      <h3>{AboutUsPageData[`${language}`].mottoTitle}</h3>
      <p>{AboutUsPageData[`${language}`].mottoDesc}</p>
    </StyledAboutUsPageMottoContainer>
  );
};

export default AboutUsPageMottoContainer;
