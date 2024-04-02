import { StyledAboutUsStaffDetailsPageBioContainer } from "./AboutUsStaffDetailsPageBioContainer.styled";
import { AboutUsPageData } from "../../data/dataAboutUsPage";

const AboutUsStaffDetailsPageBioContainer = ({ staffMemberBio, language }) => {
  return (
    <StyledAboutUsStaffDetailsPageBioContainer>
      <h3 data-aos="fade-left">
        {AboutUsPageData[`${language}`].staffDetailsPageBioTitle}
      </h3>
      <p data-aos="fade-left">{staffMemberBio}</p>
    </StyledAboutUsStaffDetailsPageBioContainer>
  );
};

export default AboutUsStaffDetailsPageBioContainer;
