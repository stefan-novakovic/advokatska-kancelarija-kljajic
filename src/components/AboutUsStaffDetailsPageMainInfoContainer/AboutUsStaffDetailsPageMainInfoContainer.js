import { StyledAboutUsStaffDetailsPageMainInfoContainer } from "./AboutUsStaffDetailsPageMainInfoContainer.styled";
import AboutUsStaffDetailsPageImageWrapper from "./AboutUsStaffDetailsPageImageWrapper";
import AboutUsStaffDetailsPageInfoTextAndLinksContainer from "./AboutUsStaffDetailsPageInfoTextAndLinksContainer";

const AboutUsStaffDetailsPageMainInfoContainer = ({ staffMember }) => {
  return (
    <StyledAboutUsStaffDetailsPageMainInfoContainer>
      <AboutUsStaffDetailsPageImageWrapper
        memberImg={staffMember.image}
        placeholderImg={staffMember.imagePlaceholder}
      />

      <AboutUsStaffDetailsPageInfoTextAndLinksContainer
        staffMember={staffMember}
      />
    </StyledAboutUsStaffDetailsPageMainInfoContainer>
  );
};

export default AboutUsStaffDetailsPageMainInfoContainer;
