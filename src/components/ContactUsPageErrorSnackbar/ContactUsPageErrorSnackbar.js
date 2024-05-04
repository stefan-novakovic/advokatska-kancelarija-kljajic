import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { ContactUsPageData } from "../../data/dataContactUsPage";

const ContactUsPageErrorSnackbar = ({
  errorMessageOpen,
  setErrorMessageOpen,
  language,
}) => {
  return (
    <Snackbar
      open={errorMessageOpen}
      autoHideDuration={4000}
      onClose={() => setErrorMessageOpen(false)}
    >
      <Alert
        severity="error"
        variant="filled"
        sx={{
          width: "100%",
          fontSize: "1.085rem",
          justifyContent: "center",
          alignItems: "center",
          whiteSpace: "pre-wrap",
        }}
      >
        {ContactUsPageData[`${language}`].errorMessageText}
      </Alert>
    </Snackbar>
  );
};

export default ContactUsPageErrorSnackbar;
