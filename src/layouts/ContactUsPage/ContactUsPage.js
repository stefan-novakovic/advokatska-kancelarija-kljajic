import { StyledContactUsPage } from "./ContactUsPage.styled";
import ContactUsPageContentContainer from "../../components/ContactUsPageContentContainer/ContactUsPageContentContainer";
import ContactUsPageSuccessSnackbar from "../../components/ContactUsPageSuccessSnackbar/ContactUsPageSuccessSnackbar";
import ContactUsPageErrorSnackbar from "../../components/ContactUsPageErrorSnackbar/ContactUsPageErrorSnackbar";
import { useState } from "react";
import { ContactUsPageData } from "../../data/dataContactUsPage";
import useDataContext from "../../hooks/useDataContext";

const ContactUsPage = () => {
  const { language } = useDataContext();
  const [sendMessageOpen, setSendMessageOpen] = useState(false);
  const [errorMessageOpen, setErrorMessageOpen] = useState(false);

  return (
    <StyledContactUsPage>
      <h2 data-aos="fade-left">{ContactUsPageData[`${language}`].pageTitle}</h2>

      <ContactUsPageContentContainer
        setSendMessageOpen={setSendMessageOpen}
        setErrorMessageOpen={setErrorMessageOpen}
        language={language}
      />

      <ContactUsPageSuccessSnackbar
        sendMessageOpen={sendMessageOpen}
        setSendMessageOpen={setSendMessageOpen}
        language={language}
      />

      <ContactUsPageErrorSnackbar
        errorMessageOpen={errorMessageOpen}
        setErrorMessageOpen={setErrorMessageOpen}
        language={language}
      />
    </StyledContactUsPage>
  );
};

export default ContactUsPage;
