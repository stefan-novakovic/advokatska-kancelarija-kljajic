import { StyledSubmitButtonWrapper } from "./SubmitButtonWrapper.styled";
import { ContactUsPageData } from "../../data/dataContactUsPage";

const SubmitButtonWrapper = ({ language, touchedFields }) => {
  return (
    <StyledSubmitButtonWrapper>
      <button
        type="submit"
        disabled={Object.keys(touchedFields).length === 4 ? false : true}
      >
        {ContactUsPageData[`${language}`].sentButtonText}
      </button>
    </StyledSubmitButtonWrapper>
  );
};

export default SubmitButtonWrapper;
