import { StyledHeroContainer } from "./HeroContainer.styled";
import HeroTextWrapperContainer from "./HeroTextWrapperContainer.styled";
import heroImg from "../../assets/images/home-hero.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { HomePageData } from "../../data/dataHomePage";
import useDataContext from "../../hooks/useDataContext";

const HeroContainer = () => {
  const { language } = useDataContext();
  return (
    <StyledHeroContainer>
      <LazyLoadImage src={heroImg} alt="" effect="blur" threshold={1000} />
      <HeroTextWrapperContainer>
        <h1>{HomePageData[`${language}`].heroTitle1}</h1>
        <h2>{HomePageData.SRB.heroTitle2}</h2>
      </HeroTextWrapperContainer>
    </StyledHeroContainer>
  );
};

export default HeroContainer;
