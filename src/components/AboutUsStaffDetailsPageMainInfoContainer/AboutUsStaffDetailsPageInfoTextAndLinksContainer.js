import { StyledAboutUsStaffDetailsPageInfoTextAndLinksContainer } from "./AboutUsStaffDetailsPageInfoTextAndLinksContainer.styled";

const AboutUsStaffDetailsPageInfoTextAndLinksContainer = ({ staffMember }) => {
  return (
    <StyledAboutUsStaffDetailsPageInfoTextAndLinksContainer>
      <h3>{staffMember.fullName}</h3>

      <h4>{staffMember.role.toUpperCase()}</h4>

      <a href={`mailto:${staffMember.email}`}>
        {staffMember.emailIcon} {staffMember.email}
      </a>

      <a href={`tel:${staffMember.phoneLink}`}>
        {staffMember.phoneIcon} {staffMember.phone}
      </a>
    </StyledAboutUsStaffDetailsPageInfoTextAndLinksContainer>
  );
};

export default AboutUsStaffDetailsPageInfoTextAndLinksContainer;
