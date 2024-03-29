import { StyledHomePageAOWCard } from "./HomePageAOWCard.styled";
import HomePageAOFImageWrapper from "./HomePageAOWImageWrapper";

const HomePageAOWCard = ({ id, img, placeholderImg, caption }) => {
  return (
    <StyledHomePageAOWCard>
      <HomePageAOFImageWrapper
        id={id}
        img={img}
        placeholderImg={placeholderImg}
      />

      <p>{caption}</p>
    </StyledHomePageAOWCard>
  );
};

export default HomePageAOWCard;
