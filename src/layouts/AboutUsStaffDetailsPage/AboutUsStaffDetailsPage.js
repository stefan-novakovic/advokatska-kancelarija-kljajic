import { StyledAboutUsStaffDetailsPage } from "./AboutUsStaffDetailsPage.styled";
import { useParams } from "react-router-dom";
import { aboutUsStaffArray } from "../../data/data";
import { HiOutlinePhone } from "react-icons/hi";
import { GoMail } from "react-icons/go";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const AboutUsStaffDetailsPage = () => {
  const { id } = useParams();
  const staffMember = aboutUsStaffArray.find((member) => id === member.id);
  return (
    <StyledAboutUsStaffDetailsPage>
      <h2>Osoblje</h2>

      <section>
        <div>
          <LazyLoadImage src={staffMember.image} alt="" effect="opacity" />
        </div>

        <div>
          <h3>{staffMember.fullName}</h3>
          <h4>{staffMember.role.toUpperCase()}</h4>
          <a href={`mailto:${staffMember.email}`}>
            <GoMail /> {staffMember.email}
          </a>
          <a href={`tel:${staffMember.phoneLink}`}>
            <HiOutlinePhone /> <span>{staffMember.phone}</span>
          </a>
        </div>
      </section>
      <section>
        <h3>Biografija</h3>
        <p>{staffMember.bio}</p>
      </section>
    </StyledAboutUsStaffDetailsPage>
  );
};

export default AboutUsStaffDetailsPage;
