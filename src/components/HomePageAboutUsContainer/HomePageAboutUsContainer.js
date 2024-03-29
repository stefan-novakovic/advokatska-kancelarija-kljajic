import { StyledHomePageAboutUsContainer } from "./HomePageAboutUsContainer.styled";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";
import { HomePageData } from "../../data/dataHomePage";
import useDataContext from "../../hooks/useDataContext";

const HomePageAboutUsContainer = () => {
  const { language } = useDataContext();

  return (
    <StyledHomePageAboutUsContainer>
      <h2>{HomePageData[`${language}`].aboutUsTitle}</h2>

      <ReactTyped
        strings={[HomePageData[`${language}`].aboutUsDesc]}
        typeSpeed={20}
        showCursor={true}
      />

      <Link to="/o-nama">{HomePageData[`${language}`].aboutUsButtonText}</Link>
    </StyledHomePageAboutUsContainer>
  );
};

export default HomePageAboutUsContainer;
