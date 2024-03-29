import { StyledHeroTextContainer } from "./HeroTextContainer.styled";
import { HomePageData } from "../../data/dataHomePage";
import useDataContext from "../../hooks/useDataContext";

const HeroTextContainer = () => {
  const { language } = useDataContext();

  return (
    <StyledHeroTextContainer>
      <h1>{HomePageData[`${language}`].heroTitle1}</h1>
      <h2>{HomePageData.SRB.heroTitle2}</h2>
    </StyledHeroTextContainer>
  );
};

export default HeroTextContainer;
