import { StyledContactUsPage } from "./ContactUsPage.styled";
import ContactUsPageContentContainer from "../../components/ContactUsPageContentContainer/ContactUsPageContentContainer";
import ContactUsPageSuccessSnackbar from "../../components/ContactUsPageSuccessSnackbar/ContactUsPageSuccessSnackbar";
import { useState } from "react";
import { ContactUsPageData } from "../../data/dataContactUsPage";
import useDataContext from "../../hooks/useDataContext";

const ContactUsPage = () => {
  const { language } = useDataContext();
  const [sendMessageOpen, setSendMessageOpen] = useState(false);

  return (
    <StyledContactUsPage>
      <h2 data-aos="fade-left">{ContactUsPageData[`${language}`].pageTitle}</h2>

      <ContactUsPageContentContainer
        setSendMessageOpen={setSendMessageOpen}
        language={language}
      />

      <ContactUsPageSuccessSnackbar
        sendMessageOpen={sendMessageOpen}
        setSendMessageOpen={setSendMessageOpen}
        language={language}
      />
    </StyledContactUsPage>
  );
};

export default ContactUsPage;
