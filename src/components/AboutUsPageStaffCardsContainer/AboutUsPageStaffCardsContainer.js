import { StyledAboutUsPageStaffCardsContainer } from "./AboutUsPageStaffCardsContainer.styled";
import AboutUsPageCardImageWrapper from "./AboutUsPageCardImageWrapper";
import AboutUsPageCardsTextContainer from "./AboutUsPageCardsTextContainer";
import { Link } from "react-router-dom";
import { AboutUsPageData } from "../../data/dataAboutUsPage";

const AboutUsPageStaffCardsContainer = ({ language }) => {
  return (
    <StyledAboutUsPageStaffCardsContainer>
      {AboutUsPageData[`${language}`].staffArray.map((memberObj) => {
        return (
          <Link
            data-aos="fade-up"
            data-aos-duration="1500"
            key={memberObj.id}
            to={`/o-nama/${memberObj.id}`}
          >
            <AboutUsPageCardImageWrapper
              memberImg={memberObj.image}
              placeholderImg={memberObj.imagePlaceholder}
            />

            <AboutUsPageCardsTextContainer memberObj={memberObj} />
          </Link>
        );
      })}
    </StyledAboutUsPageStaffCardsContainer>
  );
};

export default AboutUsPageStaffCardsContainer;
