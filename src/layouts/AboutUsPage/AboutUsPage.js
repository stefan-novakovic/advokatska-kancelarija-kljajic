import { StyledAboutUsPage } from "./AboutUsPage.styled";
import "@mohammedsrehan/react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "@mohammedsrehan/react-responsive-carousel";
import au1 from "../../assets/images/slika-1-o-nama.jpg";
import au2 from "../../assets/images/slika-2-o-nama.jpg";
import au3 from "../../assets/images/slika-3-o-nama.jpg";
import au4 from "../../assets/images/slika-4-o-nama.jpg";
import { HiOutlinePhone } from "react-icons/hi";
import { GoMail } from "react-icons/go";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { AboutUsPageData } from "../../data/dataAboutUsPage";
import useDataContext from "../../hooks/useDataContext";
import AboutUsPageCardImageContainer from "../../components/AboutUsPageCardImageContainer/AboutUsPageCardImageContainer";

const AboutUsPage = () => {
  const { language } = useDataContext();
  return (
    <StyledAboutUsPage>
      <h2>{AboutUsPageData[`${language}`].pageTitle}</h2>
      <section>
        <div>
          {AboutUsPageData[`${language}`].textArray1.map((paragraph) => {
            return paragraph;
          })}
        </div>
        <Carousel
          infiniteLoop
          autoPlay
          swipeable
          showStatus={false}
          showThumbs={false}
          interval={12000}
          transitionTime={500}
        >
          <LazyLoadImage src={au1} alt="" threshold={4750} effect="opacity" />
          <img src={au2} alt="" />
          <img src={au3} alt="" />
          <img src={au4} alt="" />
        </Carousel>
      </section>
      <section>
        {AboutUsPageData[`${language}`].textArray2.map((paragraph) => {
          return paragraph;
        })}
      </section>
      <section>
        {AboutUsPageData[`${language}`].staffArray.map((member) => {
          return (
            <Link key={member.id} to={`/o-nama/${member.id}`}>
              <AboutUsPageCardImageContainer
                memberImg={member.image}
                placeholderImg={member.imagePlaceholder}
              />
              <div>
                <h3>{member.fullName}</h3>
                <h4>{member.role.toUpperCase()}</h4>
                <div>
                  <GoMail /> {member.email}
                </div>
                <div>
                  <HiOutlinePhone /> {member.phone}
                </div>

                <p>
                  {member.bio.length > 137
                    ? member.bio.slice(0, 137) + "..."
                    : member.bio}
                </p>
              </div>
            </Link>
          );
        })}
      </section>
    </StyledAboutUsPage>
  );
};

export default AboutUsPage;
