import { StyledAboutUsStaffDetailsPageBioContainer } from "./AboutUsStaffDetailsPageBioContainer.styled";
import { AboutUsPageData } from "../../data/dataAboutUsPage";

const AboutUsStaffDetailsPageBioContainer = ({ staffMemberBio, language }) => {
  return (
    <StyledAboutUsStaffDetailsPageBioContainer>
      <h3>{AboutUsPageData[`${language}`].staffDetailsPageBioTitle}</h3>
      <p>{staffMemberBio}</p>
    </StyledAboutUsStaffDetailsPageBioContainer>
  );
};

export default AboutUsStaffDetailsPageBioContainer;
