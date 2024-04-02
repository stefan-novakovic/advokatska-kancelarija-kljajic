import { StyledSubmitButtonWrapper } from "./SubmitButtonWrapper.styled";
import { ContactUsPageData } from "../../data/dataContactUsPage";

const SubmitButtonWrapper = ({ language, dirtyFields }) => {
  return (
    <StyledSubmitButtonWrapper>
      <button
        type="submit"
        disabled={Object.keys(dirtyFields).length === 4 ? false : true}
      >
        {ContactUsPageData[`${language}`].sentButtonText}
      </button>
    </StyledSubmitButtonWrapper>
  );
};

export default SubmitButtonWrapper;
