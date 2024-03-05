import { StyledHomePage } from "./HomePage.styled";
import HeroContainer from "../../components/HeroContainer/HeroContainer";
import { HomePageAboutContainer } from "../../components/HomePageAboutContainer/HomePageAboutContainer.styled";
import { aboutUsTextShortVersion } from "../../data/lawsDataArray";
import { HomePageAreasOfWorkContainer } from "../../components/HomePageAreasOfWorkContainer/HomePageAreasOfWorkContainer.styled";
import krivicnoImg from "../../assets/images/krivicno-pravo.png";
import gradjanskoImg from "../../assets/images/gradjansko-pravo.png";
import radnoImg from "../../assets/images/radno-pravo.png";
import upravnoImg from "../../assets/images/upravno-pravo.png";
import privrednoImg from "../../assets/images/privredno-pravo.png";
import arborspaletImg from "../../assets/images/arborspalet-logo.png";
import skalarImg from "../../assets/images/skalar-logo.png";
import poljoprivredniImg from "../../assets/images/poljoprivredni-logo.png";
import agrocampusImg from "../../assets/images/agrocampus-logo.png";
import zovetImg from "../../assets/images/zovet-logo.png";
import { HomePageClientsContainer } from "../../components/HomePageClientsContainer/HomePageClientsContainer.styled";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { ReactTyped } from "react-typed";
import LazyLoad from "react-lazy-load";

const HomePage = () => {
  const AOFImgArray = [
    krivicnoImg,
    gradjanskoImg,
    radnoImg,
    upravnoImg,
    privrednoImg,
  ];

  const clientsImgArray = [
    arborspaletImg,
    skalarImg,
    poljoprivredniImg,
    agrocampusImg,
    zovetImg,
  ];

  return (
    <StyledHomePage>
      <HeroContainer />
      <HomePageAboutContainer>
        <h2>O nama</h2>
        <LazyLoad offset={150}>
          <ReactTyped
            strings={[aboutUsTextShortVersion]}
            typeSpeed={16}
            showCursor={true}
          />
        </LazyLoad>

        <Link to="/o-nama">Saznaj više</Link>
      </HomePageAboutContainer>

      <HomePageAreasOfWorkContainer>
        <h3>Oblasti rada</h3>
        <div>
          {AOFImgArray.map((img, index) => {
            return (
              <div key={index}>
                <div>
                  <LazyLoadImage src={img} alt="" threshold={600} />
                </div>
                <p>Krivično pravo</p>
              </div>
            );
          })}
        </div>
      </HomePageAreasOfWorkContainer>

      <HomePageClientsContainer>
        {/* <h4>Klijenti</h4> */}
        <div>
          {clientsImgArray.map((img, index) => {
            return <LazyLoadImage key={index} src={img} alt="" effect="blur" />;
          })}
        </div>
      </HomePageClientsContainer>
    </StyledHomePage>
  );
};

export default HomePage;
