import { StyledContactUsPageContentContainer } from "./ContactUsPageContentContainer.styled";
import ContactUsPageInfoContainer from "../ContactUsPageInfoContainer/ContactUsPageInfoContainer";
import ContactUsPageFormContainer from "../ContactUsPageFormContainer/ContactUsPageFormContainer";

const ContactUsPageContentContainer = ({ language, setSendMessageOpen }) => {
  return (
    <StyledContactUsPageContentContainer>
      <ContactUsPageFormContainer
        language={language}
        setSendMessageOpen={setSendMessageOpen}
      />
      <ContactUsPageInfoContainer language={language} />
    </StyledContactUsPageContentContainer>
  );
};

export default ContactUsPageContentContainer;
