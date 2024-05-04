import { StyledContactUsPageContentContainer } from "./ContactUsPageContentContainer.styled";
import ContactUsPageInfoContainer from "../ContactUsPageInfoContainer/ContactUsPageInfoContainer";
import ContactUsPageFormContainer from "../ContactUsPageFormContainer/ContactUsPageFormContainer";

const ContactUsPageContentContainer = ({
  setSendMessageOpen,
  setErrorMessageOpen,
  language,
}) => {
  return (
    <StyledContactUsPageContentContainer>
      <ContactUsPageFormContainer
        setSendMessageOpen={setSendMessageOpen}
        setErrorMessageOpen={setErrorMessageOpen}
        language={language}
      />
      <ContactUsPageInfoContainer language={language} />
    </StyledContactUsPageContentContainer>
  );
};

export default ContactUsPageContentContainer;
