import { StyledHomePage } from "./HomePage.styled";
import HeroContainer from "../../components/HeroContainer/HeroContainer";
import { HomePageAboutContainer } from "../../components/HomePageAboutContainer/HomePageAboutContainer.styled";
import { HomePageAreasOfWorkContainer } from "../../components/HomePageAreasOfWorkContainer/HomePageAreasOfWorkContainer.styled";
import { HomePageClientsContainer } from "../../components/HomePageClientsContainer/HomePageClientsContainer.styled";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";
import { HomePageData } from "../../data/dataHomePage";
import useDataContext from "../../hooks/useDataContext";
import HomePageAOFImageCointainer from "../../components/HomePageAOFImageContainer/HomePageAOFImageCointainer";

const HomePage = () => {
  const { language } = useDataContext();

  return (
    <StyledHomePage>
      <HeroContainer />
      <HomePageAboutContainer>
        <h2>{HomePageData[`${language}`].aboutUsTitle}</h2>
        <ReactTyped
          strings={[HomePageData[`${language}`].aboutUsDesc]}
          typeSpeed={20}
          showCursor={true}
        />

        <Link to="/o-nama">
          {HomePageData[`${language}`].aboutUsButtonText}
        </Link>
      </HomePageAboutContainer>
      <HomePageAreasOfWorkContainer>
        <h3>{HomePageData[`${language}`].areasOfWorkTitle}</h3>
        <div>
          {HomePageData[`${language}`].areasOfWorkArray.map((item) => {
            return (
              <div key={item.id}>
                <HomePageAOFImageCointainer
                  id={item.id}
                  img={item.img}
                  placeholderImg={item.placeholderImg}
                />
                <p>{item.caption}</p>
              </div>
            );
          })}
        </div>
      </HomePageAreasOfWorkContainer>
      <HomePageClientsContainer>
        <div>
          {HomePageData.SRB.clientsImgArray.map((img, index) => {
            return (
              <LazyLoadImage
                key={index}
                src={img}
                alt=""
                effect="blur"
                threshold={700}
              />
            );
          })}
        </div>
      </HomePageClientsContainer>
    </StyledHomePage>
  );
};

export default HomePage;
