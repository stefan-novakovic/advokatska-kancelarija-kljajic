import { StyledHomePageAOWContainer } from "./HomePageAOWContainer.styled";
import HomePageAOWContentContainer from "./HomePageAOWContentContainer";
import { HomePageData } from "../../data/dataHomePage";
import useDataContext from "../../hooks/useDataContext";

const HomePageAOWContainer = () => {
  const { language } = useDataContext();

  return (
    <StyledHomePageAOWContainer>
      <h3>{HomePageData[`${language}`].areasOfWorkTitle}</h3>
      <HomePageAOWContentContainer />
    </StyledHomePageAOWContainer>
  );
};

export default HomePageAOWContainer;
