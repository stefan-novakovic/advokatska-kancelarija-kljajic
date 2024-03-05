import { StyledHomePage } from "./HomePage.styled";
import HeroContainer from "../../components/HeroContainer/HeroContainer";
import { HomePageAboutContainer } from "../../components/HomePageAboutContainer/HomePageAboutContainer.styled";
import { aboutUsTextShortVersion } from "../../data/data";
import { HomePageAreasOfWorkContainer } from "../../components/HomePageAreasOfWorkContainer/HomePageAreasOfWorkContainer.styled";
import { AOFArray } from "../../data/data";
import { HomePageClientsContainer } from "../../components/HomePageClientsContainer/HomePageClientsContainer.styled";
import { clientsImgArray } from "../../data/data";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { ReactTyped } from "react-typed";
import LazyLoad from "react-lazy-load";

const HomePage = () => {
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
          {AOFArray.map((item, index) => {
            return (
              <div key={index}>
                <div>
                  <LazyLoadImage src={item.img} alt="" threshold={600} />
                </div>
                <p>{item.caption}</p>
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
