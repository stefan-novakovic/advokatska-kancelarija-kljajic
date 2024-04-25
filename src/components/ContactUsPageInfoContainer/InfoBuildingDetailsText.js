import { StyledInfoBuildingDetailsText } from "./InfoBuildingDetailsText.styled";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { ContactUsPageData } from "../../data/dataContactUsPage";

const InfoBuildingDetailsText = ({ language }) => {
  return (
    <StyledInfoBuildingDetailsText data-aos="fade-left">
      <HiOutlineBuildingOffice2 />
      <span>
        {ContactUsPageData[`${language}`].buildingDetailsFloor}
        ,&nbsp;
        {ContactUsPageData[`${language}`].buildingDetailsApartment}
      </span>
    </StyledInfoBuildingDetailsText>
  );
};

export default InfoBuildingDetailsText;
