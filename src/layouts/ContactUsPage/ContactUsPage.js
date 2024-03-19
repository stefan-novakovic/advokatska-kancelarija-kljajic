import { StyledContactUsPage } from "./ContactUsPage.styled";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "@mui/material/TextField";

const ContactUsPage = () => {
  const schema = yup.object().shape({
    firstName: yup
      .string()
      .required("Obavezno polje")
      .min(2, "Minimalna dužina je 2 karaktera"),
    lastName: yup
      .string()
      .required("Obavezno polje")
      .min(2, "Minimalna dužina je 2 karaktera"),
    email: yup
      .string()
      .required("Obavezno polje")
      .email("Neispravan email")
      .matches(/^\w+([-+.']*\w+)@\w+([-.]\w+).\w+([-.]\w+)*$/, {
        message: "Neispravan email",
      }),
    message: yup
      .string()
      .required("Obavezno polje")
      .min(2, "Minimalna dužina je 2 karaktera")
      .max(400, "Maksimalna dužina je 400 karaktera"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    data.firstName =
      data.firstName.slice(0, 1).toUpperCase() + data.firstName.slice(1);
    data.lastName =
      data.lastName.slice(0, 1).toUpperCase() + data.lastName.slice(1);
    data.message =
      data.message.slice(0, 1).toUpperCase() + data.message.slice(1);

    console.log(data);
  };

  return (
    <StyledContactUsPage>
      <h2>Kontakt</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
            <TextField
              error={errors.firstName ? true : false}
              label="Ime"
              id="firstName"
              defaultValue=""
              variant="outlined"
              autoComplete="off"
              {...register("firstName")}
              InputProps={{
                style: { color: "whitesmoke", fontSize: "1.2rem" },
              }}
              sx={{
                label: {
                  fontSize: "1.2rem",
                  color: "whitesmoke",
                },
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
                    borderColor: errors.firstName ? "red" : "whitesmoke",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: errors.firstName ? "red" : "whitesmoke",
                  },
                },
              }}
            />
            <p>{errors.firstName?.message}</p>
          </div>

          <div>
            <TextField
              error={errors.lastName ? true : false}
              label="Prezime"
              id="lastName"
              defaultValue=""
              variant="outlined"
              autoComplete="off"
              {...register("lastName")}
              InputProps={{
                style: { color: "whitesmoke", fontSize: "1.2rem" },
              }}
              sx={{
                label: {
                  fontSize: "1.2rem",
                  color: "whitesmoke",
                },
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
                    borderColor: errors.lastName ? "red" : "whitesmoke",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: errors.lastName ? "red" : "whitesmoke",
                  },
                },
              }}
            />
            <p>{errors.lastName?.message}</p>
          </div>
        </div>

        <TextField
          error={errors.email ? true : false}
          label="Email"
          id="email"
          defaultValue=""
          variant="outlined"
          autoComplete="off"
          {...register("email")}
          InputProps={{
            style: { color: "whitesmoke", fontSize: "1.2rem" },
          }}
          sx={{
            label: {
              fontSize: "1.2rem",
              color: "whitesmoke",
            },
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
                borderColor: errors.email ? "red" : "whitesmoke",
              },
              "&.Mui-focused fieldset": {
                borderColor: errors.email ? "red" : "whitesmoke",
              },
            },
          }}
        />

        <p>{errors.email?.message}</p>

        <TextField
          error={errors.message ? true : false}
          multiline
          inputProps={{ style: { color: "white" } }}
          label="Vaše pitanje"
          id="message"
          defaultValue=""
          variant="outlined"
          autoComplete="off"
          minRows={10}
          maxRows={40}
          InputProps={{
            style: { color: "whitesmoke", fontSize: "1.2rem" },
          }}
          sx={{
            label: {
              fontSize: "1.2rem",
              color: "whitesmoke",
            },
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
                borderColor: errors.message ? "red" : "whitesmoke",
              },
              "&.Mui-focused fieldset": {
                borderColor: errors.message ? "red" : "whitesmoke",
              },
            },
          }}
          {...register("message")}
        />

        <p>{errors.message?.message}</p>
        <button type="submit">Pošalji</button>
      </form>
    </StyledContactUsPage>
  );
};

export default ContactUsPage;
