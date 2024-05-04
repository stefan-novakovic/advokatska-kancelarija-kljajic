import TextField from "@mui/material/TextField";
import { ContactUsPageData } from "../../data/dataContactUsPage";

export const EmailTextField = ({ register, errors }) => {
  return (
    <TextField
      error={errors.email ? true : false}
      label={ContactUsPageData.SRB.emailLabel}
      id="email"
      defaultValue=""
      variant="outlined"
      autoComplete="off"
      {...register("email")}
      InputProps={{
        style: { color: "whitesmoke", fontSize: "1.2rem" },
      }}
      InputLabelProps={{
        style: { fontSize: "1.2rem", color: "whitesmoke" },
        shrink: true,
      }}
      sx={{
        "& label.Mui-focused": {
          color: errors.email ? "red" : "whitesmoke",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          border: "2px solid whitesmoke",
        },

        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "whitesmoke",
          },
          "&:hover fieldset": {
            borderColor: errors.email ? "red" : "rgba(245,245,245,0.6)",
          },
          "&.Mui-focused fieldset": {
            borderColor: errors.email ? "red" : "rgba(245,245,245,0.45)",
          },
        },
      }}
    />
  );
};

export const EmailTextFieldErrors = ({ errors }) => {
  return <p>{errors.email?.message}</p>;
};
