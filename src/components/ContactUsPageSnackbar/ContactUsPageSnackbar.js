import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { ContactUsPageData } from "../../data/dataContactUsPage";

const ContactUsPageSnackbar = ({
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
          width: "304px",
          fontSize: "1.085rem",
          alignItems: "center",
        }}
      >
        {ContactUsPageData[`${language}`].sentMessageText}
      </Alert>
    </Snackbar>
  );
};

export default ContactUsPageSnackbar;
