import { StyledHomePage } from "./HomePage.styled";
import HeroContainer from "../../components/HomePageHeroContainer/HeroContainer";
import HomePageAboutUsContainer from "../../components/HomePageAboutUsContainer/HomePageAboutUsContainer";
import HomePageAOWContainer from "../../components/HomePageAreasOfWorkContainer/HomePageAOWContainer";
import HomePageClientsContainer from "../../components/HomePageClientsContainer/HomePageClientsContainer";

const HomePage = () => {
  return (
    <StyledHomePage>
      <HeroContainer />
      <HomePageAboutUsContainer />
      <HomePageAOWContainer />
      <HomePageClientsContainer />
    </StyledHomePage>
  );
};

export default HomePage;
