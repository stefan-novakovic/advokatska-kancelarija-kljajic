import { StyledHomePage } from "./HomePage.styled";
import HeroContainer from "../../components/HeroContainer/HeroContainer";
import { HomePageAboutContainer } from "../../components/HomePageAboutContainer/HomePageAboutContainer.styled";
import { HomePageAreasOfWorkContainer } from "../../components/HomePageAreasOfWorkContainer/HomePageAreasOfWorkContainer.styled";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { ReactTyped } from "react-typed";
import LazyLoad from "react-lazy-load";
import img1 from "../../assets/images/krivicno-pravo.png";
import img2 from "../../assets/images/gradjansko-pravo.png";
import img3 from "../../assets/images/radno-pravo.png";
import img4 from "../../assets/images/upravno-pravo.png";
import img5 from "../../assets/images/privredno-pravo.png";

const HomePage = () => {
  const aboutUsShortText =
    "Advokatska kancelarija Kljajić osnovana je 2012. godine. Sa punom pažnjom pristupa svim problemima klijenata, uz posebnu zaštitu njihovih interesa, strogo čuvanje advokatske tajne i poštovanje odnosa advokat-klijent. Cilj advokatske kancelarije je pružanje kvalitetnih advokatskih usluga svim potencijalnim klijentima uz najveću meru poštovanja njihovih ličnosti i uz objektivno sagledavanje svih njihovih pravnih problema, sa nastojanjem da svoje probleme reše na najefikasniji i najbolji mogući način.";

  return (
    <StyledHomePage>
      <HeroContainer />
      <HomePageAboutContainer>
        <h2>O nama</h2>
        <LazyLoad offset={150}>
          <ReactTyped
            strings={[aboutUsShortText]}
            typeSpeed={16}
            showCursor={true}
          />
        </LazyLoad>

        <Link to="/o-nama">Saznaj više</Link>
      </HomePageAboutContainer>

      <HomePageAreasOfWorkContainer>
        <h3>Oblasti rada</h3>
        <div>
          <div>
            <div>
              <LazyLoadImage src={img1} alt="" threshold={600} />
            </div>
            <p>Krivično pravo</p>
          </div>
          <div>
            <div>
              <LazyLoadImage src={img2} alt="" threshold={600} />
            </div>
            <p>Građansko pravo</p>
          </div>
          <div>
            <div>
              <LazyLoadImage src={img3} alt="" threshold={600} />
            </div>
            <p>Radno pravo</p>
          </div>
          <div>
            <div>
              <LazyLoadImage src={img4} alt="" threshold={600} />
            </div>
            <p>Upravo pravo</p>
          </div>
          <div>
            <div>
              <LazyLoadImage src={img5} alt="" threshold={600} />
            </div>
            <p>Privredno pravo</p>
          </div>
        </div>
      </HomePageAreasOfWorkContainer>
    </StyledHomePage>
  );
};

export default HomePage;
