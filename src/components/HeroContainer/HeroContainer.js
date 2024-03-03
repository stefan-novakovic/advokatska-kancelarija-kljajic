import { StyledHeroContainer } from "./HeroContainer.styled";
import HeroTextWrapperContainer from "./HeroTextWrapperContainer.styled";

const HeroContainer = () => {
  return (
    <StyledHeroContainer>
      <HeroTextWrapperContainer>
        <h1>ADVOKATSKA KANCELARIJA</h1>
        <h2>KLJAJIĆ</h2>
      </HeroTextWrapperContainer>
    </StyledHeroContainer>
  );
};

export default HeroContainer;
