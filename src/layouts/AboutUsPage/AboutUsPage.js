import { StyledAboutUsPage } from "./AboutUsPage.styled";
import AboutUsPageCarouselAndTextContainer from "../../components/AboutUsPageCarouselAndTextContainer/AboutUsPageCarouselAndTextContainer";
import AboutUsPageMottoContainer from "../../components/AboutUsPageMottoContainer/AboutUsPageMottoContainer";
import AboutUsPageStaffCardsContainer from "../../components/AboutUsPageStaffCardsContainer/AboutUsPageStaffCardsContainer";
import { AboutUsPageData } from "../../data/dataAboutUsPage";
import useDataContext from "../../hooks/useDataContext";

const AboutUsPage = () => {
  const { language } = useDataContext();
  return (
    <StyledAboutUsPage>
      <h2>{AboutUsPageData[`${language}`].pageTitle}</h2>
      <AboutUsPageCarouselAndTextContainer language={language} />
      <AboutUsPageMottoContainer language={language} />
      <AboutUsPageStaffCardsContainer language={language} />
    </StyledAboutUsPage>
  );
};

export default AboutUsPage;
