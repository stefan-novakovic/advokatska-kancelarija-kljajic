import { StyledHomePage } from "./HomePage.styled";
import BackdropFilterDiv from "../../components/BackdropFilter/BackdropFilter.styled";
import HeroContainer from "../../components/HeroContainer/HeroContainer";

const HomePage = () => {
  return (
    <StyledHomePage>
      <BackdropFilterDiv>
        <HeroContainer />
      </BackdropFilterDiv>
    </StyledHomePage>
  );
};

export default HomePage;
