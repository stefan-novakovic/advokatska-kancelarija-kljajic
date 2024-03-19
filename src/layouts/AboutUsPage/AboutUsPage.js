import { StyledAboutUsPage } from "./AboutUsPage.styled";
import { aboutUsTextArray } from "../../data/data";
import { aboutUsMottoTextArray } from "../../data/data";
import { aboutUsStaffArray } from "../../data/data";
import "@mohammedsrehan/react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "@mohammedsrehan/react-responsive-carousel";
import au1 from "../../assets/images/slika-1-o-nama.jpg";
import au2 from "../../assets/images/slika-2-o-nama.jpg";
import au3 from "../../assets/images/slika-3-o-nama.jpg";
import au4 from "../../assets/images/slika-4-o-nama.jpg";
import { HiOutlinePhone } from "react-icons/hi";
import { GoMail } from "react-icons/go";
import { HashLink } from "react-router-hash-link";

const AboutUsPage = () => {
  return (
    <StyledAboutUsPage>
      <h2>O nama</h2>
      <section>
        <div>
          {aboutUsTextArray.map((paragraph) => {
            return paragraph;
          })}
        </div>
        <Carousel
          infiniteLoop
          autoPlay
          swipeable
          showStatus={false}
          showThumbs={false}
          interval={10000}
          transitionTime={750}
        >
          <img src={au1} alt="" />
          <img src={au2} alt="" />
          <img src={au3} alt="" />
          <img src={au4} alt="" />
        </Carousel>
      </section>
      <section>
        {aboutUsMottoTextArray.map((paragraph) => {
          return paragraph;
        })}
      </section>
      <section>
        {aboutUsStaffArray.map((member) => {
          return (
            <HashLink key={member.id} to={`/o-nama/${member.id}/#`}>
              <img src={member.image} alt="" />
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
                  {member.bio.length > 206
                    ? member.bio.slice(0, 206) + "..."
                    : member.bio}
                </p>
              </div>
            </HashLink>
          );
        })}
      </section>
    </StyledAboutUsPage>
  );
};

export default AboutUsPage;
