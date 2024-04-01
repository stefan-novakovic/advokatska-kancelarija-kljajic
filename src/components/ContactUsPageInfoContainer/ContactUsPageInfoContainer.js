import { StyledContactUsPageInfoContainer } from "./ContactUsPageInfoContainer.styled";
import InfoLink from "./InfoLink";
import InfoWorkingHoursText from "./InfoWorkingHoursText";
import { ContactUsPageData } from "../../data/dataContactUsPage";

const ContactUsPageInfoContainer = ({ language }) => {
  return (
    <StyledContactUsPageInfoContainer>
      {ContactUsPageData[`${language}`].linksArray.map((linkObj) => {
        return <InfoLink key={linkObj.key} linkObj={linkObj} />;
      })}
      <InfoWorkingHoursText language={language} />
    </StyledContactUsPageInfoContainer>
  );
};

export default ContactUsPageInfoContainer;
