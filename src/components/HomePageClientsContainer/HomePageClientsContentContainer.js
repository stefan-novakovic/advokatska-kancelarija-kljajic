import { StyledHomePageClientsContentContainer } from "./HomePageClientsContentContainer.styled";
import HomePageClientsImageWrapper from "./HomePageClientsImageWrapper";
import { HomePageData } from "../../data/dataHomePage";

const HomePageClientsContentContainer = () => {
  return (
    <StyledHomePageClientsContentContainer>
      {HomePageData.SRB.clientsImgArray.map((imgObj, index) => {
        return (
          <HomePageClientsImageWrapper
            key={imgObj.id}
            img={imgObj.img}
            placeholderImg={imgObj.placeholderImg}
            imgAspectRatio={imgObj.imgAspectRatio}
            imgMaxWidth={imgObj.maxWidth}
          />
        );
      })}
    </StyledHomePageClientsContentContainer>
  );
};

export default HomePageClientsContentContainer;
