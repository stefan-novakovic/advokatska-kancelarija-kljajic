import TextField from "@mui/material/TextField";
import { ContactUsPageData } from "../../data/dataContactUsPage";

export const FirstNameTextField = ({ register, errors, language }) => {
  return (
    <TextField
      error={errors.firstName ? true : false}
      label={ContactUsPageData[`${language}`].firstNameLabel}
      id="firstName"
      defaultValue=""
      variant="outlined"
      autoComplete="off"
      {...register("firstName")}
      InputProps={{
        style: { color: "whitesmoke", fontSize: "1.2rem" },
      }}
      InputLabelProps={{
        style: { fontSize: "1.2rem", color: "whitesmoke" },
        shrink: true,
      }}
      sx={{
        "& label.Mui-focused": {
          color: errors.firstName ? "red" : "whitesmoke",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          border: "2px solid whitesmoke",
        },

        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "whitesmoke",
          },
          "&:hover fieldset": {
            borderColor: errors.firstName ? "red" : "rgba(245,245,245,0.6)",
          },
          "&.Mui-focused fieldset": {
            borderColor: errors.firstName ? "red" : "rgba(245,245,245,0.45)",
          },
        },
      }}
    />
  );
};

export const FirstNameTextFieldErrors = ({ errors }) => {
  return <p>{errors.firstName?.message}</p>;
};
