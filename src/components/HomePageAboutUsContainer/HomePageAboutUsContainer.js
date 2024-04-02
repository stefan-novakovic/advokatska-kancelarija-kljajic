import { StyledHomePageAboutUsContainer } from "./HomePageAboutUsContainer.styled";
import { Link } from "react-router-dom";
import { HomePageData } from "../../data/dataHomePage";
import useDataContext from "../../hooks/useDataContext";

const HomePageAboutUsContainer = () => {
  const { language } = useDataContext();

  return (
    <StyledHomePageAboutUsContainer>
      <h2 data-aos="fade-left">{HomePageData[`${language}`].aboutUsTitle}</h2>

      <p id="o-nama-tekst" data-aos="zoom-in">
        {[HomePageData[`${language}`].aboutUsDesc]}
      </p>

      <Link data-aos="zoom-in" data-aos-anchor="#o-nama-tekst" to="/o-nama">
        {HomePageData[`${language}`].aboutUsButtonText}
      </Link>
    </StyledHomePageAboutUsContainer>
  );
};

export default HomePageAboutUsContainer;
