import { StyledContactUsPageContentContainer } from "./ContactUsPageContentContainer.styled";
import ContactUsPageInfoContainer from "../ContactUsPageInfoContainer/ContactUsPageInfoContainer";
import ContactUsPageFormContainer from "../ContactUsPageFormContainer/ContactUsPageFormContainer";

const ContactUsPageContentContainer = ({
  sendMessageOpen,
  setSendMessageOpen,
  errorMessageOpen,
  setErrorMessageOpen,
  language,
}) => {
  return (
    <StyledContactUsPageContentContainer>
      <ContactUsPageFormContainer
        sendMessageOpen={sendMessageOpen}
        setSendMessageOpen={setSendMessageOpen}
        errorMessageOpen={errorMessageOpen}
        setErrorMessageOpen={setErrorMessageOpen}
        language={language}
      />
      <ContactUsPageInfoContainer language={language} />
    </StyledContactUsPageContentContainer>
  );
};

export default ContactUsPageContentContainer;
