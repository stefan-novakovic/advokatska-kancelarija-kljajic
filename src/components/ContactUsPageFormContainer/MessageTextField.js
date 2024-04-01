import TextField from "@mui/material/TextField";
import { ContactUsPageData } from "../../data/dataContactUsPage";

export const MessageTextField = ({ register, errors, language }) => {
  return (
    <TextField
      error={errors.message ? true : false}
      multiline
      inputProps={{ style: { color: "white" } }}
      label={ContactUsPageData[`${language}`].messageLabel}
      id="message"
      defaultValue=""
      variant="outlined"
      autoComplete="off"
      rows={8}
      InputProps={{
        style: { color: "whitesmoke", fontSize: "1.2rem" },
      }}
      InputLabelProps={{
        style: { fontSize: "1.2rem", color: "whitesmoke" },
      }}
      sx={{
        "& label.Mui-focused": {
          color: errors.message ? "red" : "whitesmoke",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          border: "2px solid whitesmoke",
        },

        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "whitesmoke",
          },
          "&:hover fieldset": {
            borderColor: errors.message ? "red" : "rgba(245,245,245,0.6)",
          },
          "&.Mui-focused fieldset": {
            borderColor: errors.message ? "red" : "rgba(245,245,245,0.45)",
          },
        },
      }}
      {...register("message")}
    />
  );
};

export const MessageTextFieldErrors = ({ errors }) => {
  return <p>{errors.message?.message}</p>;
};
