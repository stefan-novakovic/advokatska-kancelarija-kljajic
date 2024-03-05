import { StyledHeroContainer } from "./HeroContainer.styled";
import HeroTextWrapperContainer from "./HeroTextWrapperContainer.styled";
import heroImg from "../../assets/images/home-hero.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const HeroContainer = () => {
  return (
    <StyledHeroContainer>
      <LazyLoadImage src={heroImg} alt="" effect="blur" />
      <HeroTextWrapperContainer>
        <h1>ADVOKATSKA KANCELARIJA</h1>
        <h2>KLJAJIĆ</h2>
      </HeroTextWrapperContainer>
    </StyledHeroContainer>
  );
};

export default HeroContainer;
