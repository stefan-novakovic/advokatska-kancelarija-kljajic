import { StyledAboutUsPageCardsTextContainer } from "./AboutUsPageCardsTextContainer.styled";

const AboutUsPageCardsTextContainer = ({ memberObj }) => {
  return (
    <StyledAboutUsPageCardsTextContainer>
      <h3>{memberObj.fullName}</h3>

      <h4>{memberObj.role.toUpperCase()}</h4>

      <div>
        {memberObj.emailIcon} {memberObj.email}
      </div>

      <div>
        {memberObj.phoneIcon} {memberObj.phone}
      </div>

      <p>
        {memberObj.bio.length > 137
          ? memberObj.bio.slice(0, 137) + "..."
          : memberObj.bio}
      </p>
    </StyledAboutUsPageCardsTextContainer>
  );
};

export default AboutUsPageCardsTextContainer;
