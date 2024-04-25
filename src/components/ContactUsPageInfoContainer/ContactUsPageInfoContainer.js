import { StyledContactUsPageInfoContainer } from "./ContactUsPageInfoContainer.styled";
import InfoLink from "./InfoLink";
import InfoWorkingHoursText from "./InfoWorkingHoursText";
import InfoBuildingDetailsText from "./InfoBuildingDetailsText";
import { ContactUsPageData } from "../../data/dataContactUsPage";

const ContactUsPageInfoContainer = ({ language }) => {
  return (
    <StyledContactUsPageInfoContainer>
      {ContactUsPageData[`${language}`].linksArray.map((linkObj) => {
        return <InfoLink key={linkObj.key} linkObj={linkObj} />;
      })}
      <InfoBuildingDetailsText language={language} />
      <InfoWorkingHoursText language={language} />
    </StyledContactUsPageInfoContainer>
  );
};

export default ContactUsPageInfoContainer;
