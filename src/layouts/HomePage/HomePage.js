import { StyledHomePage } from "./HomePage.styled";
import HeroContainer from "../../components/HeroContainer/HeroContainer";
import { HomePageAboutContainer } from "../../components/HomePageAboutContainer/HomePageAboutContainer.styled";
import { HomePageAreasOfWorkContainer } from "../../components/HomePageAreasOfWorkContainer/HomePageAreasOfWorkContainer.styled";
import { HomePageClientsContainer } from "../../components/HomePageClientsContainer/HomePageClientsContainer.styled";
import { aboutUsTextShortVersion } from "../../data/data";
import { AOWArray } from "../../data/data";
import { clientsImgArray } from "../../data/data";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { ReactTyped } from "react-typed";
import { HashLink } from "react-router-hash-link";

const HomePage = () => {
  const scrollWithOffset = (el) => {
    const yCoordinate =
      el.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);
    const yOffset = 138;
    window.scrollTo({ top: yCoordinate - yOffset, behavior: "smooth" });
  };

  return (
    <StyledHomePage>
      <HeroContainer />
      <HomePageAboutContainer>
        <h2>O nama</h2>
        <ReactTyped
          strings={[aboutUsTextShortVersion]}
          typeSpeed={16}
          showCursor={true}
        />

        <HashLink to="/o-nama/#">Saznaj više</HashLink>
      </HomePageAboutContainer>

      <HomePageAreasOfWorkContainer>
        <h3>Oblasti rada</h3>
        <div>
          {AOWArray.map((item) => {
            return (
              <div key={item.id}>
                <div>
                  <HashLink
                    to={`/oblasti-rada#${item.id}`}
                    scroll={(el) => scrollWithOffset(el)}
                  >
                    <LazyLoadImage
                      src={item.img}
                      alt=""
                      effect="blur"
                      threshold={800}
                    />
                  </HashLink>
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
