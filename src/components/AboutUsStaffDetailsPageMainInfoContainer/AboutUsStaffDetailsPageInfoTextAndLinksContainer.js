import { StyledAboutUsStaffDetailsPageInfoTextAndLinksContainer } from "./AboutUsStaffDetailsPageInfoTextAndLinksContainer.styled";

const AboutUsStaffDetailsPageInfoTextAndLinksContainer = ({ staffMember }) => {
  return (
    <StyledAboutUsStaffDetailsPageInfoTextAndLinksContainer>
      <h3 data-aos="fade-left">{staffMember.fullName}</h3>

      <h4 data-aos="fade-left">{staffMember.role.toUpperCase()}</h4>

      <a data-aos="fade-left" href={`mailto:${staffMember.email}`}>
        {staffMember.emailIcon} {staffMember.email}
      </a>

      <a data-aos="fade-left" href={`tel:${staffMember.phoneLink}`}>
        {staffMember.phoneIcon} {staffMember.phone}
      </a>
    </StyledAboutUsStaffDetailsPageInfoTextAndLinksContainer>
  );
};

export default AboutUsStaffDetailsPageInfoTextAndLinksContainer;
