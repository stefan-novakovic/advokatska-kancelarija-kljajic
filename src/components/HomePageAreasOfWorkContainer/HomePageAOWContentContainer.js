import { StyledHomePageAOWContentContainer } from "./HomePageAOWContentContainer.styled";
import HomePageAOWCard from "./HomePageAOWCard";
import { HomePageData } from "../../data/dataHomePage";
import useDataContext from "../../hooks/useDataContext";

const HomePageAOWContentContainer = () => {
  const { language } = useDataContext();

  return (
    <StyledHomePageAOWContentContainer>
      {HomePageData[`${language}`].areasOfWorkArray.map((item) => {
        return (
          <HomePageAOWCard
            key={item.id}
            id={item.id}
            img={item.img}
            placeholderImg={item.placeholderImg}
            caption={item.caption}
          />
        );
      })}
    </StyledHomePageAOWContentContainer>
  );
};

export default HomePageAOWContentContainer;
