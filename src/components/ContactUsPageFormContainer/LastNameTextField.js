import TextField from "@mui/material/TextField";
import { ContactUsPageData } from "../../data/dataContactUsPage";

export const LastNameTextField = ({ register, errors, language }) => {
  return (
    <TextField
      error={errors.lastName ? true : false}
      label={ContactUsPageData[`${language}`].lastNameLabel}
      id="lastName"
      defaultValue=""
      variant="outlined"
      autoComplete="off"
      {...register("lastName")}
      InputProps={{
        style: { color: "whitesmoke", fontSize: "1.2rem" },
      }}
      InputLabelProps={{
        style: { fontSize: "1.2rem", color: "whitesmoke" },
      }}
      sx={{
        "& label.Mui-focused": {
          color: errors.lastName ? "red" : "whitesmoke",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          border: "2px solid whitesmoke",
        },

        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "whitesmoke",
          },
          "&:hover fieldset": {
            borderColor: errors.lastName ? "red" : "rgba(245,245,245,0.6)",
          },
          "&.Mui-focused fieldset": {
            borderColor: errors.lastName ? "red" : "rgba(245,245,245,0.45)",
          },
        },
      }}
    />
  );
};

export const LastNameTextFieldErrors = ({ errors }) => {
  return <p>{errors.lastName?.message}</p>;
};
