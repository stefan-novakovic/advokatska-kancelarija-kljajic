import { StyledInfoWorkingHoursText } from "./InfoWorkingHoursText.styled";
import { LuClock8 } from "react-icons/lu";
import { ContactUsPageData } from "../../data/dataContactUsPage";

const InfoWorkingHoursText = ({ language }) => {
  return (
    <StyledInfoWorkingHoursText data-aos="fade-left">
      <LuClock8 />
      <span>
        {ContactUsPageData[`${language}`].workingHoursLabel}
        &nbsp;
        {ContactUsPageData.SRB.workingHoursTimeText}
      </span>
    </StyledInfoWorkingHoursText>
  );
};

export default InfoWorkingHoursText;
