import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { ContactUsPageData } from "../../data/dataContactUsPage";

const ContactUsPageSuccessSnackbar = ({
  sendMessageOpen,
  setSendMessageOpen,
  language,
}) => {
  return (
    <Snackbar
      open={sendMessageOpen}
      autoHideDuration={3500}
      onClose={() => setSendMessageOpen(false)}
    >
      <Alert
        severity="success"
        variant="filled"
        sx={{
          width: "100%",
          fontSize: "1.085rem",
          justifyContent: "center",
          alignItems: "center",
          whiteSpace: "pre-wrap",
        }}
      >
        {ContactUsPageData[`${language}`].sentMessageText}
      </Alert>
    </Snackbar>
  );
};

export default ContactUsPageSuccessSnackbar;
