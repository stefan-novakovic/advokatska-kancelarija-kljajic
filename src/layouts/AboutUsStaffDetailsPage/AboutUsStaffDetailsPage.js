import { StyledAboutUsStaffDetailsPage } from "./AboutUsStaffDetailsPage.styled";
import { useParams } from "react-router-dom";
import { HiOutlinePhone } from "react-icons/hi";
import { GoMail } from "react-icons/go";
import { AboutUsPageData } from "../../data/dataAboutUsPage";
import useDataContext from "../../hooks/useDataContext";
import AboutUsStaffDetailsPageCardImageContainer from "../../components/AboutUsStaffDetailsPageCardImageContainer/AboutUsStaffDetailsPageCardImageContainer";

const AboutUsStaffDetailsPage = () => {
  const { id } = useParams();
  const { language } = useDataContext();
  const staffMember = AboutUsPageData[`${language}`].staffArray.find(
    (member) => id === member.id
  );
  return (
    <StyledAboutUsStaffDetailsPage>
      <h2>{AboutUsPageData[`${language}`].staffDetailsPageTitle}</h2>

      <section>
        <AboutUsStaffDetailsPageCardImageContainer
          memberImg={staffMember.image}
          placeholderImg={staffMember.imagePlaceholder}
        />

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
        <h3>{AboutUsPageData[`${language}`].staffDetailsPageBioTitle}</h3>
        <p>{staffMember.bio}</p>
      </section>
    </StyledAboutUsStaffDetailsPage>
  );
};

export default AboutUsStaffDetailsPage;
